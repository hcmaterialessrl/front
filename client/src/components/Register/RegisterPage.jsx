import React from "react";
import NavBar from "../NavBar/NavBar";
import RegisterForm from "./RegisterForm";

export default function RegisterPage () {
  return (
    <>
      <NavBar />
      <section className="px-16">
        <RegisterForm />
      </section>
    </>
  );
}