import React from "react";
import NavBar from "../NavBar/NavBar";
import LoginForm from "./LoginForm";
import publicidad1 from "../../assets/publicidad-1.jpg"

export default function LoginPage() {
  return (
    <>
      <NavBar />
      <section className="px-16 py-5 flex">
        <div className="w-1/2">
          <LoginForm />
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center">
          <div>
            <img src={publicidad1} alt="" className="w-96"/>
          </div>
        </div>
      </section>
    </>
  );
}
