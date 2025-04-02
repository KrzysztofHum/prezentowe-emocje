// emails/OrderConfirmation.tsx
import * as React from "react";

interface OrderDetail {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  slug: string;
  desc: string;
}
interface OrderConfirmationProps {
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    street: string;
    postalCode: string;
    city: string;
  };
  orderDetails: OrderDetail[];
  paymentInfo: string;
}

export const OrderConfirmation: React.FC<OrderConfirmationProps> = ({
  customer,
  orderDetails,
  paymentInfo,
}) => (
  <div>
    <h1>Dziękujemy za zamówienie, {customer.firstName}!</h1>
    <p>Oto szczegóły Twojego zamówienia:</p>
    <pre></pre>
    <pre>
      {" "}
      <table>
        <thead>
          <tr>
            <th>Nazwa:</th>
            <th>Cena:</th>
            <th>Ilość:</th>
            <th>Suma:</th>
            <th>Opis:</th>
          </tr>
        </thead>
        <tbody>
          {orderDetails.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price} zł</td>
              <td>{item.quantity}</td>
              <td>{(item.price * item.quantity).toFixed(2)} zł</td>
              <td>{item.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </pre>
    <p>
      <strong>Dane do opłacenia zamówienia:</strong>
    </p>
    <pre>{paymentInfo}</pre>
    <p>
      <p>
        <strong>Prosimy o zlecenie przelewu w ciągu 24h</strong>
      </p>
      <strong>Twoje dane:</strong>
    </p>
    <p>
      {customer.firstName} {customer.lastName}
    </p>
    <p>
      {customer.email}, {customer.phone}
    </p>
    <p>
      {customer.street}, {customer.postalCode} {customer.city}
    </p>
    <p>
      <strong>W razie pytań prosimy o kontakt.</strong>
    </p>
    <p>Wszystkiego dobrego,</p>
    <p>Ekipa Sklepu Prezentowy Świat !</p>
  </div>
);
