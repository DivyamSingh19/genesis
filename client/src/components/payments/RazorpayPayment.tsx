// components/RazorpayPayment.tsx
"use client";

import React, { useState } from 'react';
import Script from 'next/script';

// Razorpay response type
interface RazorpaySuccessResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

// Component props
interface RazorpayPaymentProps {
  amount: number;              // Amount in smallest currency unit (paise for INR)
  currency: string;            // Currency code (e.g., 'INR')
  orderId: string;             // Order ID from your backend
  name: string;                // Your business name
  description?: string;        // Payment description
  image?: string;              // Your logo URL
  keyId: string;               // Your Razorpay Key ID
  prefill?: {
    name?: string;             // Customer name
    email?: string;            // Customer email
    contact?: string;          // Customer phone
  };
  theme?: {
    color?: string;            // Theme color
  };
  onSuccess: (response: RazorpaySuccessResponse) => void;
  onFailure: (error: any) => void;
}

const RazorpayPayment: React.FC<RazorpayPaymentProps> = ({
  amount,
  currency,
  orderId,
  name,
  description,
  image,
  keyId,
  prefill,
  theme,
  onSuccess,
  onFailure
}) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    if (!scriptLoaded) {
      alert("Razorpay SDK is still loading. Please try again.");
      return;
    }

    setIsProcessing(true);

    try {
      const options = {
        key: keyId,
        amount: amount,
        currency: currency,
        name: name,
        description: description || `Payment for Order ${orderId}`,
        image: image,
        order_id: orderId,
        handler: function (response: RazorpaySuccessResponse) {
          setIsProcessing(false);
          onSuccess(response);
        },
        prefill: prefill || {},
        theme: theme || { color: "#3399cc" },
        modal: {
          ondismiss: function() {
            setIsProcessing(false);
          }
        }
      };

      const razorpay = new (window as any).Razorpay(options);
      razorpay.open();
    } catch (error) {
      setIsProcessing(false);
      onFailure(error);
    }
  };

  return (
    <div className="razorpay-container">
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        onLoad={() => setScriptLoaded(true)}
        onError={() => {
          console.error("Failed to load Razorpay SDK");
          setScriptLoaded(false);
        }}
      />
      <button
        className="razorpay-payment-button"
        onClick={handlePayment}
        disabled={isProcessing || !scriptLoaded}
      >
        {isProcessing ? "Processing..." : "Pay Now"}
      </button>
      
      <style jsx>{`
        .razorpay-container {
          margin: 20px 0;
        }
        .razorpay-payment-button {
          background-color: #3399cc;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .razorpay-payment-button:hover {
          background-color: #297aa3;
        }
        .razorpay-payment-button:disabled {
          background-color: #cccccc;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default RazorpayPayment;