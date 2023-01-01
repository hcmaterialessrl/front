import React from "react";
import search from "../../assets/search.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getProductsByName } from "../../redux/actions";
import { useNavigate } from "react-router";

export default function SearchBar() {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getProductsByName(name));
    navigate("/home/products");
  };

  return (
    <div className="w-[380px] flex h-10 border border-gray-400 p-1">
      <input
        type="Text"
        value={name}
        onChange={(e) => handleInput(e)}
        className="w-full border-none"
        placeholder="Busque algo..."
      ></input>
      <button
        onClick={(e) => handleClick(e)}
        className="w-12 flex justify-center items-center"
      >
        <img src={search} alt="search" className="w-4 h-4"></img>
      </button>
    </div>
  );
}
