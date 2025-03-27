"use client";
import useCartStore from "@/store/cartStore";
import Image from "next/image";
import Link from "next/link";
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

  interface FormData {
    firstName: string;
    lastName: string;
    street: string;
    postalCode: string;
    city: string;
    phone: string;
    email: string;
    orderNotes: string;
  }

  interface FormErrors {
    [key: string]: string;
  }

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    street: "",
    postalCode: "",
    city: "",
    phone: "",
    email: "",
    orderNotes: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Imię jest wymagane";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Nazwisko jest wymagane";
    }
    if (!formData.street.trim()) {
      newErrors.street = "Ulica jest wymagana";
    }
    if (!formData.postalCode.trim()) {
      newErrors.postalCode = "Kod pocztowy jest wymagany";
    }
    if (!formData.city.trim()) {
      newErrors.city = "Miasto jest wymagane";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Telefon jest wymagany";
    } else {
      const phoneRegex = /^(?:\+48\s?)?(?:\d[\s-]?){9}$/;
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = "Niepoprawny numer telefonu";
      }
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email jest wymagany";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Niepoprawny format emaila";
      }
    }

    return newErrors;
  };

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

  // Shipping options
  interface ShippingOption {
    id: string;
    name: string;
    price: number;
  }

  const shippingOptions: ShippingOption[] = [
    { id: "inpost_paczkomaty", name: "InPost Paczkomaty 24/7", price: 9.99 },
    { id: "dpd_pickup", name: "DPD Pickup - Automaty i punkty", price: 8.99 },
    { id: "kurier_inpost", name: "Kurier InPost", price: 12.99 },
    { id: "kurier_dpd", name: "Kurier DPD", price: 12.99 },
  ];

  const [selectedOption, setSelectedOption] = useState<ShippingOption>(
    shippingOptions[0]
  );
  const [paczkomatInput, setPaczkInput] = useState<string>("");
  const [isMapVisible, setIsMapVisible] = useState<boolean>(false);

  const [selectedPayment, setSelectedPayment] = useState<string>(
    "BLIK oraz Szybkie przelewy online"
  );

  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const shippingCost = selectedOption ? selectedOption.price : 0;
  const totalToPay = totalPrice + shippingCost;

  const handleCheckout = async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    } else {
      setErrors({});
    }

    if (!agreeTerms) {
      alert("Musisz zaakceptować regulamin, aby kontynuować.");
      return;
    }

    const cartData = {
      cart,
      customer: formData,
      shippingOption: selectedOption.name,
      paymentMethod: selectedPayment,
      subscribeEmail,
      subscribePhone,
      shippingCost,
      totalPrice,
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
        <h1 className="text-xl font-bold px-4">Twój koszyk jest pusty</h1>
      ) : (
        <h1 className="text-xl font-bold px-4">
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
                  <Link href={`/products/${product.slug}`} className="block">
                    <Image
                      className="max-h-[80px] max-w-[90px] mr-2 cursor-pointer"
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={400}
                    />
                  </Link>
                  <div>
                    <h2 className="w-full">
                      <Link href={`/products/${product.slug}`}>
                        {product.name}
                      </Link>
                    </h2>
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
          <div className="p-4 border rounded shadow-md my-4">
            <h2 className="text-xl font-bold mb-4">Metoda Wysyłki</h2>
            <div className="space-y-2">
              {shippingOptions.map((option) => (
                <label
                  key={option.id}
                  className="flex items-center cursor-pointer"
                >
                  <input
                    type="radio"
                    name="shipping"
                    value={option.id}
                    checked={selectedOption.id === option.id}
                    onChange={() => setSelectedOption(option)}
                    className="form-radio h-5 w-5 "
                  />
                  <span className="ml-2">
                    {option.name}: {option.price.toFixed(2)} zł
                  </span>
                </label>
              ))}
            </div>
            {selectedOption.id === "inpost_paczkomaty" && (
              <div className="mt-4 p-4 border-t pt-4">
                <label className="block text-lg font-semibold">
                  Paczkomat:
                </label>
                <input
                  type="text"
                  placeholder="Wybierz Paczkomat..."
                  value={paczkomatInput}
                  onChange={(e) => setPaczkInput(e.target.value)}
                  className="mt-2 w-full border rounded p-2"
                />
                <button
                  className="sectionBtn"
                  onClick={() => setIsMapVisible(true)}
                >
                  Wybierz na mapie
                </button>
                {isMapVisible && (
                  <div className="mt-4 p-4 border rounded bg-gray-100">
                    <p className="font-semibold">Mapa paczkomatów (mocked):</p>
                    <p className="text-sm text-gray-700">
                      [Tutaj pojawią się wyniki wyszukiwania paczkomatów dla:{" "}
                      <span className="font-bold">{paczkomatInput}</span>]
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
          <h2 className="text-xl font-bold mb-4">Dane Adresowe:</h2>
          <form className="flex flex-col">
            <input
              className="inputForm"
              name="firstName"
              type="text"
              placeholder="Imię"
              required
              onChange={handleInputChange}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
            )}
            <input
              className="inputForm"
              type="text"
              placeholder="Nazwisko"
              required
              name="lastName"
              onChange={handleInputChange}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
            )}
            <input
              className="inputForm"
              type="text"
              placeholder="Ulica, number domu/number mieszkania"
              required
              name="street"
              onChange={handleInputChange}
            />
            {errors.street && (
              <p className="text-red-500 text-xs mt-1">{errors.street}</p>
            )}
            <input
              className="inputForm"
              type="text"
              placeholder="Kod pocztowy"
              required
              name="postalCode"
              onChange={handleInputChange}
            />
            {errors.postalCode && (
              <p className="text-red-500 text-xs mt-1">{errors.postalCode}</p>
            )}
            <input
              className="inputForm"
              type="text"
              placeholder="Miasto"
              required
              name="city"
              onChange={handleInputChange}
            />
            {errors.city && (
              <p className="text-red-500 text-xs mt-1">{errors.city}</p>
            )}
            <input
              className="inputForm"
              type="text"
              placeholder="Number telefonu"
              required
              name="phone"
              onChange={handleInputChange}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
            <input
              className="inputForm"
              type="text"
              placeholder="Adres e-mail"
              required
              name="email"
              onChange={handleInputChange}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
            <input
              className="inputForm"
              type="text"
              placeholder="Uwagi do zamówienia"
              required
              name="orderNotes"
              onChange={handleInputChange}
            />
          </form>
          <h2 className="text-xl font-bold my-4">Płatność:</h2>
          <div>
            <ul>
              <li className="mb-2">
                <input
                  type="radio"
                  id="blik"
                  value="BLIK oraz Szybkie przelewy online"
                  checked={
                    selectedPayment === "BLIK oraz Szybkie przelewy online"
                  }
                  onChange={() =>
                    setSelectedPayment("BLIK oraz Szybkie przelewy online")
                  }
                  name="payment_method"
                  className="hidden"
                />
                <label
                  htmlFor="blik"
                  className={`flex items-center justify-between p-4 border rounded cursor-pointer transition-colors duration-200 ${
                    selectedPayment === "BLIK oraz Szybkie przelewy online"
                      ? "border-primary bg-red-50"
                      : ""
                  }`}
                >
                  <span className="text-base">
                    BLIK oraz Szybkie przelewy online
                  </span>
                  <Image
                    src={`/images/bacs_img.jpg`}
                    alt="Przelew tradycyjny"
                    width={50}
                    height={50}
                  />
                </label>
              </li>
              <li className="mb-2">
                <input
                  type="radio"
                  id="transfer"
                  value="Przelew Tradycyjny"
                  checked={selectedPayment === "Przelew Tradycyjny"}
                  onChange={() => setSelectedPayment("Przelew Tradycyjny")}
                  name="payment_method"
                  className="hidden"
                />
                <label
                  htmlFor="transfer"
                  className={`flex items-center justify-between p-4 border rounded cursor-pointer transition-colors duration-200 ${
                    selectedPayment === "Przelew Tradycyjny"
                      ? "border-primary bg-red-50"
                      : ""
                  }`}
                >
                  <span className="text-base">Przelew Tradycyjny</span>
                  <Image
                    src={`/images/bacs_img.jpg`}
                    alt="Przelew tradycyjny"
                    width={50}
                    height={50}
                  />
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className="border border-gray-300 rounded-lg my-4 md:basis-1/3 md:self-start md:sticky md:top-8 min-w-[320px]">
          <h2 className="text-xl font-bold md:border-gray-300 md:border-b md:flex p-4">
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
              <span className="text-right">{selectedOption.name}</span>
            </p>
            <p className="flex justify-between py-1">
              <span className="text-gray-500"> Płatność przez:</span>
              <span className="text-right">{selectedPayment}</span>
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
                <span className="text-primary ml-1">*</span>Zapoznałam się i
                akceptuję{" "}
                <Link className="text-primary" href="/regulamin">
                  Regulamin
                </Link>{" "}
                oraz{" "}
                <Link className="text-primary" href="/polityka-prywatnosci">
                  Politykę prywatności
                </Link>
                .
              </label>
            </div>
            <div className="pb-2">
              <input
                type="checkbox"
                id="subscribeEmail"
                checked={subscribeEmail}
                onChange={(e) => setSubscribeEmail(e.target.checked)}
              />
              <label htmlFor="subscribeEmail" className="ml-1">
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
              <label htmlFor="subscribePhone" className="ml-1">
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
