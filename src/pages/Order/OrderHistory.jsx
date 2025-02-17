import { jsPDF } from "jspdf";

const OrderHistory = ({ orders }) => {
  const generatePDF = (order) => {
    const doc = new jsPDF();
    doc.text(`Invoice - ${order.id}`, 20, 20);
    doc.text(`Date: ${order.date}`, 20, 30);
    doc.text(`Total: $${order.total}`, 20, 40);
    doc.text("Items:", 20, 50);

    order.items.forEach((item, index) => {
      doc.text(`${index + 1}. ${item.name} - $${item.price} x ${item.quantity}`, 20, 60 + index * 10);
    });

    doc.save(`Invoice_${order.id}.pdf`);
  };

  return (
    <div>
      {orders.length === 0 ? (
        <p className="text-gray-600 text-center">No past orders found.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white p-2 md:p-4 rounded-lg shadow-lg border">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-sm lg:text-lg">Order ID: {order.id}</p>
                  <p className="text-gray-600 text-sm">Date: {order.date}</p>
                  <p className="text-gray-700 font-medium text-sm">Total: ${order.total}</p>
                </div>
                <button
                  onClick={() => generatePDF(order)}
                  className="cursor-pointer text-sm px-4 py-2 whitespace-nowrap bg-blue-500 text-white rounded-lg hover:bg-blue-700"
                >
                  Download Invoice
                </button>
              </div>

              <ul className="mt-3 text-gray-700">
                {order.items.map((item, index) => (
                  <li key={index} className="flex justify-between text-sm">
                    <span>{item.name}</span>
                    <span>${item.price} x {item.quantity}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
