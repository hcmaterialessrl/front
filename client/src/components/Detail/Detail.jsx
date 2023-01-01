import React from "react";
// import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProductDetail, sendMail } from "../../redux/actions";
import FooterComponent from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import publicidad from "../../assets/publicidad-4.jpg";
import { useState } from "react";
import { Modal } from "flowbite-react/lib/esm/components";

export default function ProductDetail() {
  // const [cant, setCant] = useState(1);

  // const handleRest = () => {
  //   setCant(cant - 1);
  // };

  // const handleSum = () => {
  //   setCant(cant + 1);
  // };

  const [input, setInput] = useState({
    email: ""
  })

  console.log(input)

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };


  const [show, setShow] = useState(false);

  const onClick = () => {
    setShow(true);
  };

  const onClose = () => {
    setShow(false);
  };

  const id = useParams();

  const dispatch = useDispatch();

  const product = useSelector((state) => state.product);

  console.log(product);

  const data = product.map((dat) => dat.size);

  const av = data[0]?.split(",");
  const a = [];
  for (let i = 0; i < av?.length; i++) {
    a.push({ data: av[i] });
  }

  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [dispatch, id]);

  function handleSubmit() {
    dispatch(
      sendMail({
        email: input.email,
        product: product[0].name,
        productId: product[0].id,
      })
    );
  }

  return (
    <>
      <NavBar />
      <div>
        <Modal
          show={show}
          popup={true}
          onClose={onClose}
          class="bg-gray-800 bg-opacity-100"
        >
          <div className="p-3 rounded-md">
            <Modal.Header>
              <p className="text-black">Consultar por {product[0]?.name}</p>
            </Modal.Header>
          </div>
          <Modal.Body class="p-6">
            <div className="space-y-6">
              <div>
                <p>Dejá tu mail para que podamos responderte!</p>
              </div>
              <div className="flex justify-around items-center">
                <input onChange={(e) => handleChange(e)} type="text" name="email" value={input.email} placeholder="Escribí tu mail"></input>
                <button
                  onClick={handleSubmit}
                  class="py-2 px-4 bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-indigo-200 text-white w-32 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Consultar
                </button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
      <section className="mx-4 lg:mx-24 my-6">
        <div className="flex flex-col lg:flex-row bg-white">
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img src={product[0]?.image} alt="" className="w-72 h-72" />
          </div>
          <div className="lg:m-5 w-full lg:w-1/2">
            <div className="w-full border-b border-gray-400 py-5">
              <h1 className="text-semibold text-4xl">{product[0]?.name}</h1>
            </div>
            <div className="w-full border-b border-gray-400 py-5">
              <h3 className="text-semibold text-ls text-gray-600">
                {product[0]?.description
                  ? product[0]?.description
                  : "No hay información detallada"}
              </h3>
            </div>
            {product[0]?.price ? (
              <div className="w-full border-b border-gray-400 py-5">
                <h4 className="text-semibold text-3xl text-black">
                  $ {product[0]?.price}
                </h4>
              </div>
            ) : (
              false
            )}
            <div className="w-full border-b border-gray-400 py-5 flex items-center justify-center">
              <div>
                <button
                  type="button"
                  onClick={onClick}
                  class="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Consultar precio
                </button>
              </div>
              {/* <div className="flex w-1/2 justify-center items-center">
                <button
                  onClick={handleRest}
                  disabled={cant === 1}
                  className="border border-black w-6 h-10  text-4xl flex justify-center items-center"
                >
                  -
                </button>
                <p className="border border-black w-16 h-10 text-2xl flex justify-center items-center">
                  {cant}
                </p>
                <button
                  onClick={handleSum}
                  className="border border-black w-6 h-10  text-4xl flex justify-center items-center"
                >
                  +
                </button>
              </div>
              <div className="w-1/2">
                <button
                  type="button"
                  class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Agregar al carrito
                </button>
              </div> */}
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-full lg:w-1/2">
            <div className="p-4">
              <h1 className="text-2xl">Caracteristicas tecnicas</h1>
            </div>
            <div>
              {a?.map((d) => (
                <div className="flex border border-black">
                  <div className="w-1/3 px-4">
                    <p>{d.data?.split("-")[0]?.replace("_"," ")}</p>
                  </div>
                  <div className="w-2/3 border-l border-black px-4">
                    <p>{d.data?.split("-")[1]?.replace("_"," ")}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <img src={publicidad} alt="publicidad" className="w-72 m-4" />
          </div>
        </div>
      </section>
      <FooterComponent />
    </>
  );
}
