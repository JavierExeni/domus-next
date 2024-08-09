import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const Footer = () => {
  
  return (
    <footer className="bg-[#111f2e]">
      <div className="w-[80%] m-auto py-16">
        <div className="grid grid-cols-[auto] gap-4 lg:grid-cols-[auto_auto_auto_auto] text-white">
          <div className="max-w-[350px]">
            <h4 className="text-lg font-medium mb-6">FIRMA PROPIEDADES</h4>

            <p className="text-sm leading-7 text-[#8a99b3]">
              Venta, Alquiler, Anticrético de Casas, Departamentos, Terrenos,
              Locales comerciales, Oficinas
            </p>
          </div>

          <div className="lg:pl-2">
            <h4 className="text-lg font-medium mb-6">Enlaces</h4>
            <ul className="text-sm text-[#8a99b3] flex flex-col gap-2">
              <li>
                <Link href={'/'} className="hover:text-white hover:pl-2 hover:cursor-pointer transition-all duration-200 ease-in-out">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href={'/agentes'} className="hover:text-white hover:pl-2 hover:cursor-pointer transition-all duration-200 ease-in-out">
                  Agentes
                </Link>
              </li>
              <li>
                <Link href={'/propiedades'} className="hover:text-white hover:pl-2 hover:cursor-pointer transition-all duration-200 ease-in-out">
                  Propiedades
                </Link>
              </li>
              <li>
                <Link href={'/proyectos'} className="hover:text-white hover:pl-2 hover:cursor-pointer transition-all duration-200 ease-in-out">
                  Proyectos
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="text-lg font-medium mb-6">Contáctanos</h4>
            <ul className="text-sm text-[#8a99b3] flex flex-col gap-2">
              <li>
                <a className="hover:text-white hover:pl-2 cursor-pointer transition-all duration-200 ease-in-out">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-6">Siguenos en</h4>
            <div className="flex flex-wrap items-center gap-4 text-[#8a99b3]">
              {/* @if (systemService.system()?.facebook) {
            <a
              className="hover:text-white transition-all duration-200 ease-in-out"
              [href]="systemService.system()?.facebook"
              ><i className="fab fa-facebook-f"></i
            ></a>
          }

          @if (systemService.system()?.instagram) {
            <a
              className="hover:text-white transition-all duration-200 ease-in-out"
              [href]="systemService.system()?.instagram"
              target="_blank"
              ><i className="fab fa-instagram"></i
            ></a>
          }

          @if (systemService.system()?.linkedin) {
            <a
              className="hover:text-white transition-all duration-200 ease-in-out"
              [href]="systemService.system()?.linkedin"
              target="_blank"
              ><i className="fab fa-linkedin-in"></i
            ></a>
          }

          @if (systemService.system()?.pinterest) {
            <a
              className="hover:text-white transition-all duration-200 ease-in-out"
              [href]="systemService.system()?.pinterest"
              target="_blank"
              ><i className="fab fa-pinterest"></i
            ></a>
          }

          @if (systemService.system()?.twitter) {
            <a
              className="hover:text-white transition-all duration-200 ease-in-out"
              [href]="systemService.system()?.twitter"
              target="_blank"
              ><i className="fa-brands fa-x-twitter"></i
            ></a>
          }

          @if (systemService.system()?.tiktok) {
            <a
              className="hover:text-white transition-all duration-200 ease-in-out"
              [href]="systemService.system()?.tiktok"
              target="_blank"
              ><i className="fa-brands fa-tiktok"></i
            ></a>
          } */}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center border-t border-[#ecc27d] w-[80%] mx-auto mt-8 py-8 text-white">
        <Image
          src="/images/Logo-Firma-Blanco.webp"
          className="w-44 lg:w-80 lg:h-[150px]"
          loading="lazy"
          width="320"
          height="150"
          alt="logo-firma"
        />
        <p className="font-light">
          <span className="text-[#ecc27d] font-medium">© FIRMA Propiedades. </span>
          2024 todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
