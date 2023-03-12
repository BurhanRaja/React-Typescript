import CheckoutForm from "../components/users/checkout/CheckoutForm";
import CheckoutProducts from "../components/users/checkout/CheckoutProducts";

const CheckoutPage = () => {
  return (
    <section>
      <h1 className="sr-only">Checkout</h1>
      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
        <CheckoutProducts />
        <CheckoutForm />
      </div>
    </section>
  );
};

export default CheckoutPage;
