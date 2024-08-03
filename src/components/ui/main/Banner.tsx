export const Banner = () => {
  return (
    <>
      <div className="h-[calc(100vh-74px)] lg:h-[calc(100vh-78px)] w-full bg-white bg-static-banner bg-no-repeat bg-bottom bg-cover brightness-[65%]"></div>

      <div className="absolute w-full h-[calc(100vh-74px)] lg:h-[calc(100vh-78px)] top-0 grid place-items-center">
        <div className="flex items-center justify-around lg:w-[80%] m-auto lg:h-full lg:gap-10 xl:gap-16">
          <div className="xl:w-full">
            <h1 className="m-0 text-white font-bold text-center text-[32px] min-[1150px]:text-5xl min-[1530px]:text-[72px] mb-4">
              LA LLAVE PARA TU FUTURO
            </h1>

            <div className="flex items-center gap-5">
              <span className="hidden lg:block h-[2px] w-full bg-[#fff]"></span>
              <div className="flex gap-2 w-[90%] m-auto">
                <span className="w-full m-auto rounded-full text-center px-3 py-2 bg-[#1e3a58] text-white lg:hidden cursor-pointer">
                  ¿Qué estás búscando?
                </span>
                <span className="w-full m-auto rounded-full text-center px-3 py-2 bg-[#1e3a58] text-white hidden lg:block lg:w-[250px] cursor-pointer">
                  ¿Qué estás búscando?
                </span>
                <button
                  type="button"
                  aria-label="filter button"
                  className="rounded-full p-3 bg-[#1e3a58] text-white lg:hidden"
                >
                  <i className="fa-solid fa-sliders"></i>
                </button>
              </div>
              <span className="hidden lg:block h-[2px] w-full bg-[#fff]"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
