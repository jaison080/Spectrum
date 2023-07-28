import React, { useEffect } from "react";

const PaymentButton = () => {
  useEffect(() => {
    const rzpPaymentForm = document.getElementById("rzp_payment_form");

    if (!rzpPaymentForm.hasChildNodes()) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id = "pl_MJ8EtOdp3tpyQT";
      rzpPaymentForm.appendChild(script);
    }
  });

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <form id="rzp_payment_form"></form>
      <h2>This line comes below the payment button</h2>
    </div>
  );
};

export default PaymentButton;
