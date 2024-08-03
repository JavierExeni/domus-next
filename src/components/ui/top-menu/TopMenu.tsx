import Image from "next/image";
import Link from "next/link";

export const TopMenu = () => {
  return (
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
            <Link href="/proyectos">Proyectos</Link>
            <a className="cursor-pointer">Contacto</a>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a className="cursor-pointer">Ingresar</a>
          <a className="bg-[#1e3a58] text-white rounded-full px-3 py-2 cursor-pointer text-center">
            Vender Propiedad
          </a>
        </div>

        <button className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 lg:hidden">
          Menu
        </button>
      </div>
    </nav>
  );
};
