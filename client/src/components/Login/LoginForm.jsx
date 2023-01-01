import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/actions";

export default function LoginForm() {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit() {
    dispatch(userLogin(input));
    window.location.replace('');
  }

  return (
    <div className="flex flex-col items-center gap-5 p-5 border border-black rounded-lg">
      <div>
        <h1 className="font-semibold text-3xl">Hola, incia sesión!</h1>
      </div>
      <div className="flex flex-col">
        <label className="text-xl">Email</label>
        <input
          type="text"
          name="email"
          value={input.email}
          onChange={(e) => handleChange(e)}
        ></input>
      </div>
      <div className="flex flex-col">
        <label className="text-xl">Contraseña</label>
        <input
          type="text"
          name="password"
          value={input.password}
          onChange={(e) => handleChange(e)}
        ></input>
      </div>
      <button
        onClick={handleSubmit}
        type="button"
        class="py-2 px-4  bg-red-500 hover:bg-red-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-1/3 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
      >
        Entrar
      </button>
    </div>
  );
}
