"use client";
import useCartStore from "@/store/cartStore";
import Image from "next/image";
import { useState } from "react";

const Cart: React.FC = () => {
  const { cart, clearCart } = useCartStore();
  const changeQuantity = useCartStore((state) => state.changeQuantity);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const handleQuantityChange = (productId: number, action: "up" | "down") => {
    changeQuantity(productId, action);
  };
  const handleInputChangeQty = (
    e: React.ChangeEvent<HTMLInputElement>,
    productId: number
  ) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity >= 1) {
      updateQuantity(productId, newQuantity);
    }
  };

  const [agreeTerms, setAgreeTerms] = useState(false);
  const [subscribeEmail, setSubscribeEmail] = useState(false);
  const [subscribePhone, setSubscribePhone] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    postalCode: "",
    city: "",
    phone: "",
    email: "",
    orderNotes: "",
    paymentMethod: "card",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const shippingCost = 13.99;
  const totalToPay = totalPrice + shippingCost;

  function getProductLabel(count: number): string {
    const lastDigit = count % 10;
    const secondLastDigit = Math.floor((count % 100) / 10);

    if (secondLastDigit === 1) {
      return "produktów";
    } else if (lastDigit === 1) {
      return "produkt";
    } else if (lastDigit >= 2 && lastDigit <= 4) {
      return "produkty";
    } else {
      return "produktów";
    }
  }

  const handleCheckout = async () => {
    if (!agreeTerms) {
      alert("Musisz zaakceptować regulamin, aby kontynuować.");
      return;
    }

    const cartData = {
      cart,
      customer: formData,
      subscribeEmail,
      subscribePhone,
      totalPrice,
      shippingCost: 13.99,
    };

    try {
      const response = await fetch(
        "https://twoja-strona.pl/wp-json/custom/v1/save-cart",
        {
          method: "POST",
          body: JSON.stringify(cartData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        clearCart();
        const { payment_url } = await response.json();
        window.location.href = payment_url;
      } else {
        alert("Wystąpił błąd przy zapisie koszyka.");
      }
    } catch (error) {
      console.error(error);
      alert("Wystąpił błąd przy zapisie koszyka.");
    }
  };

  return (
    <div className="max-w-1400 m-auto p-4">
      {cart.length === 0 ? (
        <h1 className="textH px-4">Twój koszyk jest pusty</h1>
      ) : (
        <h1 className="textH px-4">
          Twój koszyk ({cart.length} {getProductLabel(cart.length)})
        </h1>
      )}
      <div className="md:flex">
        <div className="px-4 md:basis-2/3">
          <div>
            {cart.map((product) => (
              <div
                key={product.id}
                className="border border-gray-300 rounded-lg p-4 my-4"
              >
                <div className="flex items-center border-b border-gray-300">
                  <Image
                    className="max-h-[80px] max-w-[90px] mr-2"
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                  />
                  <div>
                    <h2 className="truncate w-full">{product.name}</h2>
                    <p className="text-primary font-medium text-2xl py-2">
                      {product.price} zł
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="ml-auto"
                  >
                    Usuń
                  </button>
                </div>
                <div className="quantity-wrapper mt-4">
                  <button
                    className="btn-qty"
                    onClick={() => handleQuantityChange(product.id, "down")}
                    data-action="down"
                  ></button>
                  <input
                    className="quantity-input"
                    type="number"
                    name="quantity"
                    min="1"
                    value={product.quantity}
                    onChange={(e) => handleInputChangeQty(e, product.id)}
                  />
                  <button
                    className="btn-qty btn-qty-up"
                    onClick={() => handleQuantityChange(product.id, "up")}
                    data-action="up"
                  ></button>
                </div>
              </div>
            ))}
          </div>
          <h2 className="textH">Metoda wysyłki:</h2>
          <div>Inpost</div>
          <h2 className="textH">Dane Adresowe:</h2>
          <form className="flex flex-col">
            <input
              className="inputForm"
              name="firstName"
              type="text"
              placeholder="Imię"
              required
              onChange={handleInputChange}
            />
            <input
              className="inputForm"
              type="text"
              placeholder="Nazwisko"
              required
              name="lastName"
              onChange={handleInputChange}
            />
            <input
              className="inputForm"
              type="text"
              placeholder="Ulica, number domu/number mieszkania"
              required
              name="street"
              onChange={handleInputChange}
            />
            <input
              className="inputForm"
              type="text"
              placeholder="Kod pocztowy"
              required
              name="postalCode"
              onChange={handleInputChange}
            />
            <input
              className="inputForm"
              type="text"
              placeholder="Miasto"
              required
              name="city"
              onChange={handleInputChange}
            />
            <input
              className="inputForm"
              type="text"
              placeholder="Number telefonu"
              required
              name="phone"
              onChange={handleInputChange}
            />
            <input
              className="inputForm"
              type="text"
              placeholder="Adres e-mail"
              required
              name="email"
              onChange={handleInputChange}
            />
            <input
              className="inputForm"
              type="text"
              placeholder="Uwagi do zamówienia"
              required
              name="orderNotes"
              onChange={handleInputChange}
            />
          </form>
          <h2 className="textH">Płatność</h2>
          <div>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                defaultChecked
                onChange={handleInputChange}
              />{" "}
              Karta kredytowa
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                onChange={handleInputChange}
              />{" "}
              PayPal
            </label>
          </div>
        </div>
        <div className="border border-gray-300 rounded-lg my-4 md:basis-1/3 md:self-start md:sticky md:top-8">
          <h2 className="textH md:border-gray-300 md:border-b md:flex p-4">
            Podsumowanie zamówienia
          </h2>
          <div className="p-4">
            <p className="flex justify-between py-1">
              <span className="text-gray-500">Suma zamówienia:</span>
              <span>{totalPrice.toFixed(2)} zł</span>
            </p>
            <p className="flex justify-between py-1">
              <span className="text-gray-500">Koszt wysyłki standardowej:</span>
              <span>{shippingCost.toFixed(2)} zł</span>
            </p>
            <p className="flex justify-between py-1">
              <span className="text-gray-500">Metoda dostawy:</span>
              <span> Inpost Kurier</span>
            </p>
            <p className="flex justify-between py-1">
              <span className="text-gray-500"> Płatność przez: </span>
              <span> Płatność wybrana</span>
            </p>
            <p className="flex justify-between py-1">
              <span className="text-gray-500">Do zapłaty:</span>
              <span className="text-primary font-medium text-2xl">
                {totalToPay.toFixed(2)} zł
              </span>
            </p>
          </div>

          <div className="flex flex-col text-xs p-4">
            <div className="pb-2">
              <input
                type="checkbox"
                id="agreeTerms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
              />
              <label htmlFor="agreeTerms">
                Zapoznałam się i akceptuję Regulamin oraz Politykę prywatności.
              </label>
            </div>
            <div className="pb-2">
              <input
                type="checkbox"
                id="subscribeEmail"
                checked={subscribeEmail}
                onChange={(e) => setSubscribeEmail(e.target.checked)}
              />
              <label htmlFor="subscribeEmail">
                Chcę otrzymywać od PrezentoweEmocje informacje handlowe
                dotyczące PrezentoweEmocje i jej partnerów, na podany przeze
                mnie adres e-mail.
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                checked={subscribePhone}
                onChange={(e) => setSubscribePhone(e.target.checked)}
                id="subscribePhone"
              />
              <label htmlFor="subscribePhone">
                Chcę otrzymywać od PrezentoweEmocje informacje handlowe
                dotyczące PrezentoweEmocje i jej partnerów, na podany przeze
                mnie numer telefonu.
              </label>
            </div>
          </div>
          <button onClick={handleCheckout} className="sectionBtn w-full">
            Kupuję i płacę
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
