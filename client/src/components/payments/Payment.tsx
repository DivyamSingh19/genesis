// app/payment/page.tsx
"use client";

import { useState } from 'react';
import RazorpayPayment from './RazorpayPayment';

export default function PaymentPage() {
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);
  const [paymentId, setPaymentId] = useState<string | null>(null);

  // This order ID should come from your backend after creating an order
  const orderDetails = {
    orderId: "order_JYQjXiCDEaB4HT", // Replace with actual order ID from your backend
    amount: 50000, // 500 INR in paise
    currency: "INR"
  };

  const handlePaymentSuccess = (response: any) => {
    console.log("Payment successful", response);
    setPaymentStatus("success");
    setPaymentId(response.razorpay_payment_id);
    
    // Here you would typically verify the payment with your backend
    // sendPaymentVerificationToBackend(response);
  };

  const handlePaymentFailure = (error: any) => {
    console.error("Payment failed", error);
    setPaymentStatus("failed");
    // Handle payment failure - show proper message to user
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-6">Complete Your Payment</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
          <p className="text-gray-700">Order ID: {orderDetails.orderId}</p>
          <p className="text-gray-700">Amount: ₹{orderDetails.amount / 100}</p>
        </div>

        {paymentStatus === "success" ? (
          <div className="bg-green-100 p-4 rounded-md text-green-800 mb-4">
            <p className="font-semibold">Payment Successful!</p>
            <p>Payment ID: {paymentId}</p>
          </div>
        ) : paymentStatus === "failed" ? (
          <div className="bg-red-100 p-4 rounded-md text-red-800 mb-4">
            <p>Payment Failed. Please try again.</p>
          </div>
        ) : (
          <RazorpayPayment
            keyId="rzp_test_1DP5mmOlF5G5ag" // Replace with your Razorpay Key ID
            amount={orderDetails.amount}
            currency={orderDetails.currency}
            orderId={orderDetails.orderId}
            name="Your Company Name"
            description="Purchase of Product XYZ"
            image="https://your-logo-url.com/logo.png" // Replace with your logo URL
            prefill={{
              name: "Customer Name",
              email: "customer@example.com",
              contact: "9999999999"
            }}
            theme={{ color: "#F37254" }}
            onSuccess={handlePaymentSuccess}
            onFailure={handlePaymentFailure}
          />
        )}
      </div>
    </div>
  );
}