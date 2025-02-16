import AuthLayout from "../../components/layouts/Authenticate";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import jsPDF from "jspdf";

const OrderSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const orderDetails = location.state?.order; // Get order details from state

  useEffect(() => {
    if (!orderDetails) {
      navigate("/dashboard"); // Redirect if no order details found
    }
  }, [orderDetails, navigate]);

  const downloadInvoice = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.text("Invoice", 105, 20, null, null, "center");

    doc.setFontSize(12);
    doc.text(`Order ID: ${orderDetails?.id}`, 20, 40);
    doc.text(`Name: ${orderDetails?.customerName}`, 20, 50);
    doc.text(`Email: ${orderDetails?.email}`, 20, 60);
    doc.text(`Total Amount: $${orderDetails?.total}`, 20, 70);

    let y = 80;
    doc.text("Items Purchased:", 20, y);
    orderDetails?.items.forEach((item, index) => {
      y += 10;
      doc.text(
        `${index + 1}. ${item.title} - $${item.price} x ${item.quantity}`,
        20,
        y
      );
    });

    doc.save(`Invoice_${orderDetails?.id}.pdf`);
  };

  if (!orderDetails) return null; // Prevent rendering if no order details

  return (
    <AuthLayout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold text-green-600">
            Order Successful!
          </h2>
          <p className="mt-2">Thank you for your purchase.</p>
          <p className="text-gray-600">Order ID: {orderDetails.id}</p>
          <p className="text-gray-600">Total: ${orderDetails.total}</p>

          <button
            onClick={downloadInvoice}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Download Invoice
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="mt-4 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 ml-2"
          >
            Back to Home
          </button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default OrderSuccess;
