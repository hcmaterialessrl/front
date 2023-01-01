import React from "react";
import NavBar from "../NavBar/NavBar";
import { useSelector } from "react-redux";

export default function Cart() {
  
  const cartt = useSelector((state) => state.cart);

  return (
    <>
      <NavBar />
      <section className="mx-24 my-6 bg-white">
        {/* {cartt?.map((d) => (
                <h1>{d[0].name}</h1>
            ))} */}
        <div className="bg-white h-32 flex justify-center items-center border-b border-black mb-5">
          <h1 className="font-semibold text-3xl">Mi carro de compras</h1>
        </div>
        <div className="flex">
          <div className="w-1/4 flex flex-col gap-5">
            <div>
              <h1 className="font-semibold text-xl pl-8">Producto</h1>
            </div>
            {cartt?.map((d) => (
              <div className="flex gap-2 h-32 border-b border-black">
                <img src={d[0].image} alt="ad" className="w-32" />
                <p>{d[0].name}</p>
              </div>
            ))}
          </div>
          <div className="w-1/4 pl-8">
            <div>
              <h1 className="font-semibold text-xl">Cantidad</h1>
            </div>
            <button>Eliminar</button>
          </div>
          <div className="w-1/4 flex flex-col gap-5 pl-8">
            <div>
              <h1 className="font-semibold text-xl">Precio Unitario</h1>
            </div>
            {cartt?.map((d) => (
              <div className="h-32 border-b border-black">
                <p>$ {d[0].price}</p>
              </div>
            ))}
          </div>
          <div className="w-1/4 flex flex-col gap-5 pl-8">
            <div>
              <h1 className="font-semibold text-xl">Precio Total</h1>
            </div>
            {cartt?.map((d) => (
              <div className="h-32 border-b border-black">
                <p>$ {d[0].price}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex h-52">
          <div className="w-1/2">
            <h1>asd</h1>
          </div>
          <div className="w-1/2 flex gap-3 justify-center items-center">
            <p className="font-semibold text-xl">Precio total a pagar: </p>
            <p className="font-semibold text-xl">
              ${" "}
              {cartt
                ?.map((d) => d[0].price)
                .reduce(function (a, b) {
                  return a + b;
                })}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
