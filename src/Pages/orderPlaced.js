import React from "react";

function OrderPlaced() {
  return (
    <div>
      <section className="order-placed">
        <div className="orderPlaced-content">
          <h1>Your Order Has Been Placed</h1>
          <p>
            Thank you for placing your order with Toy’s cove. Your Order will be
            delivered <br /> within 4-5 working days.
          </p>
          <button>Continue Shopping</button>
        </div>
      </section>
    </div>
  );
}

export default OrderPlaced;
