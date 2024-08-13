"use client";
import Image from "next/image";
import Link from "next/link";

import { Login, TopContactForm, TopContactSellForm } from "@/components";

import { Dialog } from "primereact/dialog";
import { Sidebar } from "primereact/sidebar";

import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import useUserInfo from "@/hooks/useUserInfo";
import { logout } from "@/slices/user-slice";
import { useDispatch } from "react-redux";

export const TopMenu = () => {
  const dispatch = useDispatch();
  const { isLogged } = useUserInfo();
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [loginStateVisible, setLoginVisible] = useState(false);
  const [contactFormVisible, setContactFormVisible] = useState(false);
  const [sellPropertyVisible, setSellPropertyVisible] = useState(false);


  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    dispatch(logout());
  };

  return (
    <>
      <nav className="px-4 py-3 sm:px-8 border-b-2 border-[#1e3a58] bg-[#ffffffe6]">
        <div className="w-full xl:w-[80%] m-auto flex items-center justify-between text-[#1e3a58]">
          <div className="flex items-center">
            {/* Logo Link */}
            <Link href="/">
              <Image
                className="w-[120px] lg:w-[200px] lg:border-r lg:border-[#1e3a58] lg:mr-10 lg:pr-10 cursor-pointer outline-none"
                src="/images/logo.webp"
                alt="logo"
                width="200"
                height="80"
              />
            </Link>

            {/* Nav Options */}
            <div className="hidden lg:flex items-center gap-4">
              <Link href="/">Inicio</Link>
              <Link href="/agentes">Agentes</Link>
              <Link href="/propiedades">Propiedades</Link>
              {/* <Link href="/proyectos">Proyectos</Link> */}
              <a
                className="cursor-pointer"
                onClick={() => {
                  setContactFormVisible(true);
                }}
              >
                Contacto
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            {isLogged ? (
              <a
                onClick={() => {
                  handleLogout();
                }}
                className="cursor-pointer"
              >
                Cerrar Sesión
              </a>
            ) : (
              <a
                onClick={() => {
                  setLoginVisible(true);
                }}
                className="cursor-pointer"
              >
                Ingresar
              </a>
            )}
            <a
              onClick={() => {
                setSellPropertyVisible(true);
              }}
              className="bg-[#1e3a58] text-white rounded-full px-3 py-2 cursor-pointer text-center"
            >
              Vender Propiedad
            </a>
          </div>

          <button
            onClick={() => {
              setSidebarVisible(true);
            }}
            className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 lg:hidden"
          >
            <FaBars className="text-lg" />
          </button>
        </div>
      </nav>

      <Dialog
        header="Iniciar Sesión"
        visible={loginStateVisible}
        style={{ width: "500px" }}
        onHide={() => {
          if (!loginStateVisible) return;
          setLoginVisible(false);
        }}
      >
        <Login />
      </Dialog>

      <Dialog
        header="Envianos un Mensaje"
        visible={contactFormVisible}
        style={{ width: "500px" }}
        onHide={() => {
          if (!contactFormVisible) return;
          setContactFormVisible(false);
        }}
      >
        <TopContactForm />
      </Dialog>

      <Dialog
        header="¿Quieres Vender?"
        visible={sellPropertyVisible}
        style={{ maxWidth: "700px" }}
        onHide={() => {
          if (!sellPropertyVisible) return;
          setSellPropertyVisible(false);
        }}
      >
        <TopContactSellForm />
      </Dialog>

      <Sidebar visible={sidebarVisible} onHide={() => setSidebarVisible(false)}>
        <h2 className="p-4 text-center text-xl font-semibold mb-3">MENÚ</h2>
        <div className="flex flex-col text-center gap-5">
          {/* Nav Options */}
          <Link href="/">Inicio</Link>
          <Link href="/agentes">Agentes</Link>
          <Link href="/propiedades">Propiedades</Link>
          {/* <Link href="/proyectos">Proyectos</Link> */}
          <a
            className="cursor-pointer"
            onClick={() => {
              setContactFormVisible(true);
            }}
          >
            Contacto
          </a>

          {/* Action Buttons */}
          {isLogged ? (
            <a
              onClick={() => {
                handleLogout();
              }}
              className="cursor-pointer"
            >
              Cerrar Sesión
            </a>
          ) : (
            <a
              onClick={() => {
                setLoginVisible(true);
              }}
              className="cursor-pointer"
            >
              Ingresar
            </a>
          )}
          <a
            onClick={() => {
              setSellPropertyVisible(true);
            }}
            className="bg-[#1e3a58] text-white rounded-full px-3 py-2 cursor-pointer text-center"
          >
            Vender Propiedad
          </a>
        </div>
      </Sidebar>
    </>
  );
};
