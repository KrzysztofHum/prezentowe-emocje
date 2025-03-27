import React from "react";

const StepProcess = () => {
  return (
    <section
      className="sm:flex 
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
    max-w-[1400px]
    relative
    bottom-[-65px]"
    >
      <div className=" relative flex justify-center items-center lg:pl-6 py-2 lg:py-6 border-r border-solid border-[rgba(219,218,220,0.45)]">
        <p className="mt-2 lg:mb-3 text-[20px] lg:text-[25px] lg:leading-7 text-center font-cormorant">
          Jak wygląda proces zamówienia?
        </p>
      </div>
      <div className="relative flex justify-center items-center">
        <span
          className="hidden sm:flex h-[40px] w-[40px]
    border border-solid border-[#dbdadc]
    bg-white
    absolute top-[-20px]
 justify-center items-center
    rounded-full
    left-0 right-0 mx-auto"
        >
          1
        </span>
        <p className="mt-2 text-[16px] lg:text-[20px] lg:leading-7 text-center font-cormorant">
          <span className="sm:hidden">1.</span>Dodaj produkt do koszyka,
          uzupełniając dane.
        </p>
      </div>
      <div className="relative flex justify-center items-center">
        <span
          className="hidden sm:flex h-[40px] w-[40px]
    border border-solid border-[#dbdadc]
    bg-white
    absolute top-[-20px]
     justify-center items-center
    rounded-full
    left-0 right-0 mx-auto"
        >
          2
        </span>
        <p className="mt-2 text-[16px] lg:text-[20px] lg:leading-7 text-center font-cormorant">
          <span className="sm:hidden">2.</span>Wybierz adres dostawy oraz metode
          płatności.
        </p>
      </div>
      <div className="relative flex justify-center items-center">
        <span
          className="hidden sm:flex h-[40px] w-[40px]
    border border-solid border-[#dbdadc]
    bg-white
    absolute top-[-20px]
    justify-center items-center
    rounded-full
    left-0 right-0 mx-auto"
        >
          3
        </span>
        <p className="mt-2 text-[16px] lg:text-[20px] lg:leading-7 text-center font-cormorant">
          <span className="sm:hidden">3.</span>Dokończ i opłać zamówienie.
        </p>
      </div>
      <div className="relative flex justify-center items-center lg:pr-6 mb-2">
        <span
          className="hidden sm:flex h-[40px] w-[40px]
    border border-solid border-[#dbdadc]
    bg-white
    absolute top-[-20px]
 justify-center items-center
    rounded-full
    left-0 right-0 mx-auto"
        >
          4
        </span>
        <p className="mt-2 text-[16px] lg:text-[20px] lg:leading-7 text-center font-cormorant">
          <span className="sm:hidden">4.</span>Realizujemy zamówienie i wysyłamy
          je do Ciebie.
        </p>
      </div>
    </section>
  );
};

export default StepProcess;
