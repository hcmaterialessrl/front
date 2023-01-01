import React from "react";
import NavBar from "../NavBar/NavBar";
import { Carousel } from "flowbite-react";
import local from "../../assets/home-local.jpg";
import mangrullo from "../../assets/home-mangrullo.jpg";
import exterior from "../../assets/home-exteriorr.png";
import pintura from "../../assets/home-pintura.jpg";
import cocina from "../../assets/home-cocina.jpg";
import publicidad1 from "../../assets/home-publicidad-1.jpg";
import local1 from "../../assets/home-local-1.jpg";
import local2 from "../../assets/home-local-2.jpg";
import ubicacion from "../../assets/marcador-de-posicion.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewestProducts } from "../../redux/actions";
import Card from "../Cards/Card";
import { Modal } from "flowbite-react/lib/esm/components";
import { useState } from "react";
import FooterComponent from "../Footer/Footer";


export default function Home() {
  const dispatch = useDispatch();

  const newestProducts = useSelector((state) => state.newestProducts);

  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch(getNewestProducts());
  }, [dispatch]);

  const onClick = () => {
    setShow(true);
  };

  const onClose = () => {
    setShow(false);
  };

  return (
    <>
      <NavBar />
      <div className="h-56 lg:h-[500px] w-full flex justify-center">
        <Carousel slideInterval={3500}>
          <img src={local} alt="local" className="h-full w-screen" />
          <img src={mangrullo} alt="mangrullo" className="h-full w-screen" />
        </Carousel>
      </div>
      <section className="px-16">
        <div className="my-8">
          <p className="text-3xl text-gray-700">
            Algunas de nuestras categorias
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-around gap-8 lg:gap-0">
          <div className="flex flex-col items-center justify-center">
            <Link to={"/home/6"}>
              <img src={exterior} alt="exterior" className="w-72 h-72 rounded-xl" />
            </Link>
            <p className="text-4xl hover:text-5xl absolute font-semibold opacity-80">
              Exterior
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Link to={"/home/3"}>
              <img src={pintura} alt="exterior" className="w-72 h-72 rounded-xl" />
            </Link>
            <p className="text-4xl hover:text-5xl absolute font-semibold opacity-80">
              Pinturas
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Link to={"/home/3"}>
              <img src={cocina} alt="exterior" className="w-72 h-72 rounded-xl" />
            </Link>
            <p className="text-4xl hover:text-5xl absolute font-semibold opacity-80">
              Cocina
            </p>
          </div>
        </div>
      </section>
      <section className="px-16">
        <div className="my-8">
          <p className="text-3xl text-gray-700">Mirá los nuevos productos!</p>
        </div>
        <div className="flex items-center justify-around flex-wrap lg:flex-nowrap">
          {newestProducts.slice(0, 4).map((products) => (
            <Card
              name={products.name}
              image={products.image}
              price={products.price}
              description={products.description}
              id={products.id}
            />
          ))}
        </div>
      </section>
      <section className="px-16 flex flex-col lg:flex-row my-8 gap-5 lg:gap-0">
        <div className="w-full lg:w-2/3">
          <div className="mb-10 lg:mb-0">
            <p className="text-3xl text-gray-700">Encontrá nuestros locales!</p>
          </div>
          <div>
            <Modal
              show={show}
              popup={true}
              onClose={onClose}
              class="bg-gray-800 bg-opacity-100"
            >
              <div className="p-3 rounded-md">
                <Modal.Header>
                  <p className="text-black">Mapa</p>
                </Modal.Header>
              </div>
              <Modal.Body class="p-6">
                <div className="space-y-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!4v1666565034399!6m8!1m7!1s001AqAqDRkRQNGWj5ky6zA!2m2!1d-34.58594771890969!2d-60.96715415676086!3f172.53!4f0.4200000000000017!5f2.6279027145397786"
                    width="full"
                    height="350"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </Modal.Body>
            </Modal>
          </div>
          <div className="w-full h-full flex flex-col lg:flex-row gap-10 lg:gap-0">
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <div className="flex flex-col justify-center items-center gap-3">
                <img src={local1} alt="" className="w-72 h-48" />
                <div className="flex justify-center items-center gap-1">
                  <img src={ubicacion} alt="" className="w-6" />
                  <p className="text-xl font-semibold">
                    Intendente de la sota y Bolivia
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                  <p className="text-xl">Horarios</p>
                  <div>
                    <p>Lunes a viernes de 08:00 a 16:00</p>
                  </div>
                  <div>
                    <p>Sabados de 08:00 a 13:00</p>
                  </div>
                </div>
                <div className="mt-3">
                  <button
                    onClick={onClick}
                    type="button"
                    class="py-2 px-4 bg-red-500 hover:bg-red-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Ver mapa
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <div className="flex flex-col justify-center items-center gap-3">
                <img src={local2} alt="" className="w-72 h-48" />
                <div className="flex justify-center items-center gap-1">
                  <img src={ubicacion} alt="" className="w-6" />
                  <p className="text-xl font-semibold">
                    Alicia Moreau de Justo 200
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                  <p className="text-xl">Horarios</p>
                  <div>
                    <p>Lunes a viernes de 08:00 a 16:00</p>
                  </div>
                  <div>
                    <p>Sabados de 08:00 a 13:00</p>
                  </div>
                </div>
                <div className="mt-3">
                  <button
                    onClick={onClick}
                    type="button"
                    class="py-2 px-4 bg-red-500 hover:bg-red-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Ver mapa
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 flex justify-center items-center">
          <img src={publicidad1} alt="" className="w-72" />
        </div>
      </section>
      <section>
        <div className="bg-[url('https://res.cloudinary.com/dqdmm93bn/image/upload/v1667949296/hcmaterialessrc/118957703_730685797478879_3011870306271138206_n.jpg_juursn.jpg')] lg:bg-cover bg-[center_bottom_35rem] lg:bg-[center_bottom_35rem]  h-96 flex flex-col px-3 lg:px-32 justify-center items-center opacity-80">
          <p className="text-[20px]">¿Quienes somos?</p>
          <p className="text-[14px] lg:text-[16px] text-center">HC materiales SRL es Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </section>
      <FooterComponent />
    </>
    // ../../assets/home-local-1.jpg
  );
}
