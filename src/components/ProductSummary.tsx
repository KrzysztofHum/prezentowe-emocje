"use client";

import useCart from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  dimensions: {
    length: string;
    width: string;
    height: string;
  };
  price: string;
  image: string;
}

const ProductSummary = (product: Product) => {
  const router = useRouter();
  const [isInCart, setIsInCart] = useState(false);
  const { id, name, dimensions, price, image } = product;
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState<number>(1);
  const newProduct = { id, name, price, image, quantity };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  const handleAddToCart = () => {
    if (isInCart) {
      router.push("/cart");
    } else {
      addToCart(newProduct);
      setIsInCart(true);
    }
  };
  return (
    <div className="p-4 pt-8 sm:w-1/2 lg:w-1/3 w-full lg:pt-1 lg:pr-0">
      <div className="border-t border-gray-300 pt-4">
        <h1 className="font-medium text-xl text-black inline">{name}</h1>
        {dimensions.length.length > 0 && (
          <p className="sectionSubtitle inline">
            {" "}
            {dimensions.length}cm x {dimensions.width}cm x {dimensions.height}{" "}
            cm
          </p>
        )}
      </div>
      <div className="text-primary font-medium text-2xl py-2">{price} zł</div>

      <div className="quantity-wrapper pb-4">
        <button
          className="btn-qty"
          data-action="down"
          onClick={handleDecrease}
        ></button>
        <input
          className="quantity-input"
          type="number"
          name="quantity"
          value={quantity}
          min="1"
          onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
        />
        <button
          className="btn-qty btn-qty-up"
          data-action="up"
          onClick={handleIncrease}
        ></button>
      </div>
      <div className="text-gray-500 text-sm border-t border-gray-300 pt-4">
        <div>Papier: Satynowy 300g</div>
      </div>
      <div>
        <div className="sectionBtn cursor-pointer hover:text-primary flex items-center justify-center">
          <button
            className="flex items-center justify-center space-x-2 font-semibold"
            onClick={handleAddToCart}
          >
            <span>{isInCart ? "PRZEJDZ DO KOSZYKA" : "DODAJ DO KOSZYKA"}</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </button>
        </div>

        <div>
          <p className="text-gray-500 text-sm pt-6">
            <svg
              className="text-primary inline mr-2"
              width="22"
              height="22"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M13.3333 2.5H0.833252V13.3333H13.3333V2.5Z"
                stroke="#F26D89"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M13.3333 6.6665H16.6666L19.1666 9.1665V13.3332H13.3333V6.6665Z"
                stroke="#F26D89"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M4.58333 17.5002C5.73393 17.5002 6.66667 16.5674 6.66667 15.4168C6.66667 14.2662 5.73393 13.3335 4.58333 13.3335C3.43274 13.3335 2.5 14.2662 2.5 15.4168C2.5 16.5674 3.43274 17.5002 4.58333 17.5002Z"
                stroke="#F26D89"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M15.4166 17.5002C16.5672 17.5002 17.4999 16.5674 17.4999 15.4168C17.4999 14.2662 16.5672 13.3335 15.4166 13.3335C14.266 13.3335 13.3333 14.2662 13.3333 15.4168C13.3333 16.5674 14.266 17.5002 15.4166 17.5002Z"
                stroke="#F26D89"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span>
              Zamów przed <strong>15</strong> a zrealizujemy Twoje zamówienie o
              1 dzień szybciej!
            </span>
          </p>
        </div>
        <div>
          <p className="text-gray-500 text-sm py-3">
            <svg
              className="text-primary inline mr-2"
              width="22"
              height="22"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M13.3333 2.5H0.833252V13.3333H13.3333V2.5Z"
                stroke="#F26D89"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M13.3333 6.6665H16.6666L19.1666 9.1665V13.3332H13.3333V6.6665Z"
                stroke="#F26D89"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M4.58333 17.5002C5.73393 17.5002 6.66667 16.5674 6.66667 15.4168C6.66667 14.2662 5.73393 13.3335 4.58333 13.3335C3.43274 13.3335 2.5 14.2662 2.5 15.4168C2.5 16.5674 3.43274 17.5002 4.58333 17.5002Z"
                stroke="#F26D89"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M15.4166 17.5002C16.5672 17.5002 17.4999 16.5674 17.4999 15.4168C17.4999 14.2662 16.5672 13.3335 15.4166 13.3335C14.266 13.3335 13.3333 14.2662 13.3333 15.4168C13.3333 16.5674 14.266 17.5002 15.4166 17.5002Z"
                stroke="#F26D89"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span>
              Realizacja standardowa <strong>do 2 dni roboczych</strong>
            </span>
          </p>
        </div>
        <div>
          <svg
            className="text-primary inline mr-2"
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
          >
            <path
              d="M7.54183 17.75C8.34724 17.75 9.00016 17.0971 9.00016 16.2917C9.00016 15.4863 8.34724 14.8334 7.54183 14.8334C6.73641 14.8334 6.0835 15.4863 6.0835 16.2917C6.0835 17.0971 6.73641 17.75 7.54183 17.75Z"
              fill="#f26d89"
            ></path>
            <path
              d="M14.6251 17.75C15.4305 17.75 16.0834 17.0971 16.0834 16.2917C16.0834 15.4863 15.4305 14.8334 14.6251 14.8334C13.8197 14.8334 13.1667 15.4863 13.1667 16.2917C13.1667 17.0971 13.8197 17.75 14.6251 17.75Z"
              fill="#f26d89"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.390047 1.0378C0.64534 0.654857 1.16273 0.551379 1.54567 0.806673L5.29567 3.30667C5.47331 3.4251 5.59872 3.60718 5.64603 3.81536L7.58195 12.3334H14.6266L15.1168 10.6667H9.41675C8.95652 10.6667 8.58342 10.2936 8.58342 9.83338C8.58342 9.37314 8.95652 9.00005 9.41675 9.00005H15.6069L16.2197 6.91671H9.41675C8.95652 6.91671 8.58342 6.54362 8.58342 6.08338C8.58342 5.62314 8.95652 5.25005 9.41675 5.25005H17.3334C17.5961 5.25005 17.8433 5.37385 18.0007 5.58413C18.158 5.79441 18.207 6.06656 18.1329 6.31852L16.0496 13.4019C15.9453 13.7565 15.6198 14 15.2501 14H6.91675C6.52767 14 6.19037 13.7308 6.10414 13.3514L4.0945 4.50898L0.621172 2.19342C0.238231 1.93813 0.134753 1.42074 0.390047 1.0378Z"
              fill="#f26d89"
            ></path>
          </svg>
          <span>Szybko i bezpiecznie z</span>
        </div>
      </div>
    </div>
  );
};

export default ProductSummary;
