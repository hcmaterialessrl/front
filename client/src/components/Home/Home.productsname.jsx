import React, { useState } from "react";
import Card from "../Cards/Card";
import NavBar from "../NavBar/NavBar";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  getProductsFiltered,
  getSubCategoriesProducts,
} from "../../redux/actions";
import { Link, useParams } from "react-router-dom";
import publicidad1 from "../../assets/publicidad-1.jpg";
import FooterComponent from "../Footer/Footer";
import Paginate from "./Paginate";

export default function HomeProductsName() {
  const [select, setSelect] = useState({
    brand: "",
  });

  const id = useParams();

  const dispatch = useDispatch();

  function handleBrand(ev) {
    dispatch(getProductsFiltered(ev.target.value));
    setSelect(ev.target.value);
  }

  const products = useSelector((state) => state.products);

  const [CurrentPag, setCurrentPage] = useState(1);
  const [CardsPerPage, setCardsPerPage] = useState(6);
  const TotalPages = Math.ceil(products.length / CardsPerPage);

  const nextPag = () => {
    setCurrentPage(CurrentPag + 1);
  };

  const prevPag = () => {
    if (CurrentPag !== 1) setCurrentPage(CurrentPag - 1);
  };

  const firstPag = () => {
    setCurrentPage(1);
  };

  const lastPage = () => {
    setCurrentPage(TotalPages);
  };

  const IndexLastCard = CurrentPag * CardsPerPage;

  const IndexFirstCard = IndexLastCard - CardsPerPage;

  const CurrentCards = products.slice(IndexFirstCard, IndexLastCard);

  const brands = products.map((d) => d.brand);

  const result = brands.reduce((acc, item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);
  const resultt = result;
  const ad = [];
  for (let i = 0; i < resultt.length; i++) {
    ad.push({ brand: resultt[i] });
  }

  const categories = useSelector((state) => state.subcategories);

  const category = categories.filter((d) => d.id === Number(id.id));

  return (
    <>
      <NavBar />
      <section className="px-16 mb-16">
        <div className="h-32 lg:h-16 flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4 lg:gap-0">
          <div className="flex gap-3 items-end">
            <p className="text-blue-500">Categoria ></p>
            <h1 className="text-lg lg:text-2xl">
              {category[0]?.name?.toUpperCase()}
            </h1>
          </div>
          <h2 className="text-lg lg:text-xl">
            Mostrando {products?.length} productos
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-3 bg-white">
          <div className="w-72 flex flex-col items-center gap-10">
            <div>
              <h1 className="mb-3 text-xl font-semibold">Ordenar por</h1>
            </div>
            <div>
              <div className="flex flex-col gap-3">
                <div>
                  <p>Marcas</p>
                </div>
                <div className="flex flex-col gap-2">
                  {ad.map((brands) => (
                    <div className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        value={brands.brand}
                        name={brands.brand}
                        onClick={(ev) => handleBrand(ev)}
                      ></input>
                      <label>{brands.brand}</label>
                    </div>
                  ))}
                </div>
              </div>
              {/* <select>
                <option>Precio</option>
                <option>Menor a mayor</option>
                <option>Mayor a menor</option>
              </select> */}
            </div>
            <div>
              <img src={publicidad1} alt="publicidad1" className="w-52" />
            </div>
          </div>
          <div className="">
            <div className="w-full flex flex-wrap justify-center gap-7 p-1">
              {CurrentCards.map((products) => (
                <Card
                  name={products.name}
                  image={products.image}
                  price={products.price}
                  description={products.description}
                  id={products.id}
                />
              ))}
            </div>
            <div className="flex justify-center mt-5 mb-5">
              <Paginate
                CardsPerPage={CardsPerPage}
                products={products.length}
                CurrentPag={CurrentPag}
                setCurrentPage={setCurrentPage}
                firstPag={firstPag}
                prevPag={prevPag}
                nextPag={nextPag}
                lastPag={lastPage}
              ></Paginate>
            </div>
          </div>
        </div>
      </section>
      <FooterComponent />
    </>
  );
}
