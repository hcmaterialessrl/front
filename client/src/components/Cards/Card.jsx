import React from "react";
import { Link } from "react-router-dom";
import agregar from "../../assets/agregar-carrito.png";
import { addCartProduct } from "../../redux/actions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function Card({ name, image, price, description, id }) {
  
  const idUsuario = localStorage.getItem("id");

  const dispatch = useDispatch();

  function handleAddCart() {
    dispatch(addCartProduct({idUsuario: idUsuario,
      idProducto: id,
      cantidad: 1,}));
  }

  return (
    <div className="w-[253px] h-[380px] shadow-lg border">
      <div className="w-[250px] h-[250px] flex justify-center items-center">
        <Link to={"/product/detail/" + id}>
          <img src={image} alt="img" className="h-[250px]" />
        </Link>
      </div>
      <div className="flex h-[130px] flex-col justify-around p-3">
        <h1 className="font-semibold text-xl">{name}</h1>
        <div className="flex justify-between items-center">
          <p className="text-red-700 font-semibold text-xl">{price !== 0 ? `$ ${price}` : false }</p>
          <button onClick={handleAddCart}>
            <img src={agregar} alt="asd" className="w-10 mr-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
