// emails/OrderConfirmation.tsx
import * as React from "react";

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
  orderDetails: string;
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
    <pre>{orderDetails}</pre>
    <p>
      <strong>Dane do opłacenia zamówienia:</strong>
    </p>
    <pre>{paymentInfo}</pre>
    <p>Twoje dane:</p>
    <p>
      {customer.firstName} {customer.lastName}
    </p>
    <p>
      {customer.email}, {customer.phone}
    </p>
    <p>
      {customer.street}, {customer.postalCode} {customer.city}
    </p>
  </div>
);
