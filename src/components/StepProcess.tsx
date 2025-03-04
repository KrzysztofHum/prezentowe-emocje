import React from "react";

const StepProcess = () => {
  return (
    <section
      className="flex 
    m-8 
    mx-auto
    border
    border-solid
    border-[rgba(219,218,220,0.45)]
    shadow-[0_5px_10px_0_rgba(0,0,0,0.09)]
    bg-white
    rounded-[30px]
    pl-[25px]
    pr-[25px]
    min-w-[1200px]
    max-w-[1400px]
    relative bottom-[-65px]"
    >
      <div className=" relative flex justify-center items-center pl-6 py-6 border-r border-solid border-[rgba(219,218,220,0.45)]">
        <p className="mt-2 mb-3 text-[25px] leading-7 text-center font-cormorant">
          Jak wygląda proces zamówienia ?
        </p>
      </div>
      <div className="relative flex justify-center items-center">
        <span
          className="    h-[40px] w-[40px]
    border border-solid border-[#dbdadc]
    bg-white
    absolute top-[-20px]
    flex justify-center items-center
    rounded-full
    left-0 right-0 mx-auto"
        >
          1
        </span>
        <p className="mt-2 text-[20px] leading-7 text-center font-cormorant">
          Zamów odpowiednia liczbe produktów na tej stronie.
        </p>
      </div>
      <div className="relative flex justify-center items-center">
        <span
          className="h-[40px] w-[40px]
    border border-solid border-[#dbdadc]
    bg-white
    absolute top-[-20px]
    flex justify-center items-center
    rounded-full
    left-0 right-0 mx-auto"
        >
          1
        </span>
        <p className="mt-2 text-[20px] leading-7 text-center">
          Wybierz adres dostawy oraz metode płatności.
        </p>
      </div>
      <div className="relative flex justify-center items-center">
        <span
          className="h-[40px] w-[40px]
    border border-solid border-[#dbdadc]
    bg-white
    absolute top-[-20px]
    flex justify-center items-center
    rounded-full
    left-0 right-0 mx-auto"
        >
          1
        </span>
        <p className="mt-2 text-[20px] leading-7 text-center">
          Dokończ i opłać zamówienie.
        </p>
      </div>
      <div className="relative flex justify-center items-center pr-6">
        <span
          className="h-[40px] w-[40px]
    border border-solid border-[#dbdadc]
    bg-white
    absolute top-[-20px]
    flex justify-center items-center
    rounded-full
    left-0 right-0 mx-auto"
        >
          1
        </span>
        <p className="mt-2 text-[20px] leading-7 text-center">
          Realizujemy zamówienie i wysyłamy je do Ciebie.
        </p>
      </div>
    </section>
  );
};

export default StepProcess;
