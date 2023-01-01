import React from "react";
import NavBarTop from "./NavBarTop";
import hc from "../../assets/hc2.png";
import SearchBar from "../SearchBar/SearchBar";
import usuario from "../../assets/usuario.png";
import cart from "../../assets/carrito.png";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  getCartProducts,
  getCategories,
  getUser,
  getSubCategories,
} from "../../redux/actions";
import { Link } from "react-router-dom";
import { Dropdown, Avatar, Navbar } from "flowbite-react";

export default function NavBar() {
  const id = localStorage.getItem("id");

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const categories = useSelector((state) => state.categories);

  const subcategories = useSelector((state) => state.subcategories);

  const cartt = useSelector((state) => state.cart);

  function removeToken(ev) {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
  }

  useEffect(() => {
    dispatch(getCategories());
    // dispatch(getUser(id));
    // dispatch(getCartProducts(id));
    dispatch(getSubCategories());
  }, [dispatch, id]);

  return (
    <>
      <NavBarTop />
      <Navbar fluid={true} rounded={false} class="w-full">
        <div className="bg-white h-72 lg:h-40 w-full">
          <div className="h-56 lg:h-28 flex flex-col w-full lg:flex-row items-center justify-around border-b">
            <a href="/">
              <img src={hc} alt="logo" className="w-28" />
            </a>
            <SearchBar />
            {/* <div className="flex justify-center items-center gap-2">
            <Link to={"/cart"}>
              <img src={cart} alt="carrito" className="w-9 h-9" />
            </Link>
            <p>{cartt?.length} productos</p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <p>Mi usuario</p>
            {id ? (
              <Dropdown
                arrowIcon={false}
                inline={true}
                label={
                  <Avatar alt="User settings" img={usuario} rounded={true} />
                }
              >
                <Dropdown.Header>
                  <span>Hola {user[0]?.name}</span>
                </Dropdown.Header>
                <Dropdown.Item>Mis datos</Dropdown.Item>
                <Dropdown.Item>Mis pedidos</Dropdown.Item>
                <Link to="/" onClick={removeToken}>
                  <Dropdown.Item>Cerrar sesión</Dropdown.Item>
                </Link>
              </Dropdown>
            ) : (
              <Dropdown
                arrowIcon={false}
                inline={true}
                label={
                  <Avatar alt="User settings" img={usuario} rounded={true} />
                }
              >
                <Dropdown.Header>
                  <span>Bienvenido!</span>
                </Dropdown.Header>
                <Link to={"/login"}>
                  <Dropdown.Item>Iniciar sesión</Dropdown.Item>
                </Link>
                <Link to={"/register"}>
                  <Dropdown.Item>Registrarse</Dropdown.Item>
                </Link>
              </Dropdown>
            )}
          </div> */}
          </div>
          <div className="flex h-auto lg:h-12 items-center justify-center w-full bg-red-500 lg:bg-white lg:sticky z-50">
            <Navbar.Toggle />
            <Navbar.Collapse class="bg-red-700 lg:bg-white z-50">
              {categories?.map((cat) => (
                <Link to={"/home/" + cat.id}>
                  <Navbar.Link href="/navbars ">
                    <div className="h-12">
                      <button className="peer h-full text-[12px] text-white lg:text-black z-50">
                        {cat.name.toUpperCase()}
                      </button>
                      <div className="hidden z-50 peer-hover:flex hover:flex w-[400px] bg-white flex-col bg-white drop-shadow-lg absolute">
                        {subcategories
                          .filter((d) => d.category_id === cat.id)
                          .map((d) => (
                            <Link to={"/home/subcategory/" + d.id}>
                              <p className="px-5 py-3 hover:bg-red-600 text-blue-800">
                                {d.name}
                              </p>
                            </Link>
                          ))}
                      </div>
                    </div>
                  </Navbar.Link>
                </Link>
              ))}
            </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
    </>
  );
}
