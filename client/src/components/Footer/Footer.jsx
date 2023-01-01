import React from "react";
import { Footer } from "flowbite-react";

export default function FooterComponent() {
  return (
    <Footer container={true}>
      <Footer.Copyright by="HC materiales para la construccion" year={2023} />
      <Footer.LinkGroup ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
      <Footer.Link href="#">Sobre nosotros</Footer.Link>
      <Footer.Link href="#">Contactanos</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}