import React, { useState } from "react";
import AuthLayout from "../../components/layouts/Authenticate";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../utils/redux/Slice/usersSlice";

const Checkout = () => {
  const totalAmount = useSelector(selectCartTotal);
  const [selectedAddress, setSelectedAddress] = useState({
    geolocation: { lat: "-37.3159", long: "81.1496" },
    city: "Kilcoole",
    street: "New Road",
    number: 7682,
    zipcode: "12926-3874",
  });

  const [newAddress, setNewAddress] = useState({
    city: "",
    street: "",
    number: "",
    zipcode: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("credit_card");

  const handleAddressChange = (e) => {
    setNewAddress({ ...newAddress, [e.target.name]: e.target.value });
  };

  const handleAddNewAddress = () => {
    if (newAddress.city && newAddress.street && newAddress.zipcode) {
      setSelectedAddress(newAddress);
      setNewAddress({ city: "", street: "", number: "", zipcode: "" });
    }
  };

  const handleBuyNow = () => {
    alert(`Order placed successfully with ${paymentMethod} payment!`);
  };

  return (
    <AuthLayout>
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
        {/* Address Confirmation Section */}
        <div className="mb-6 p-4 border rounded-lg bg-gray-100">
          <h3 className="text-lg font-semibold mb-2">Shipping Address</h3>
          <p className="text-gray-600">
            {selectedAddress.number}, {selectedAddress.street},{" "}
            {selectedAddress.city} - {selectedAddress.zipcode}
          </p>
        </div>

        {/* Add New Address Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Add New Address</h3>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={newAddress.city}
            onChange={handleAddressChange}
            className="w-full p-2 mb-2 border rounded"
          />
          <input
            type="text"
            name="street"
            placeholder="Street"
            value={newAddress.street}
            onChange={handleAddressChange}
            className="w-full p-2 mb-2 border rounded"
          />
          <input
            type="number"
            name="number"
            placeholder="House Number"
            value={newAddress.number}
            onChange={handleAddressChange}
            className="w-full p-2 mb-2 border rounded"
          />
          <input
            type="text"
            name="zipcode"
            placeholder="Zipcode"
            value={newAddress.zipcode}
            onChange={handleAddressChange}
            className="w-full p-2 mb-2 border rounded"
          />
          <button
            onClick={handleAddNewAddress}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Save Address
          </button>
        </div>

        <div className="mb-6">
          <span className="text-lg font-semibold">Total Amount: </span>
          <span className="font-semibold">${totalAmount.toFixed(2)}</span>
        </div>

        {/* Payment Method Selection */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
          <div className="flex flex-col space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="payment"
                value="credit_card"
                checked={paymentMethod === "credit_card"}
                onChange={() => setPaymentMethod("credit_card")}
              />
              <span>Credit Card</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="payment"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={() => setPaymentMethod("paypal")}
              />
              <span>PayPal</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="payment"
                value="upi"
                checked={paymentMethod === "upi"}
                onChange={() => setPaymentMethod("upi")}
              />
              <span>BHIM UPI</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="payment"
                value="cash_on_delivery"
                checked={paymentMethod === "cash_on_delivery"}
                onChange={() => setPaymentMethod("cash_on_delivery")}
              />
              <span>Cash on Delivery</span>
            </label>
          </div>
        </div>

        {/* Buy Now Button */}
        <button
          onClick={handleBuyNow}
          className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 font-semibold"
        >
          Buy Now
        </button>
      </div>
    </AuthLayout>
  );
};

export default Checkout;
