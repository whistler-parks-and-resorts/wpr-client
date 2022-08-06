import Footer from "../common/layout/footer/Footer";
import CreateCustomerContainer from "../features/customers/create-customer/CreateCustomerContainer";

const App: React.FC = () => {
  return (
    <>
      <p className="has-text-primary has-text-weight-semibold">
        Welcome to Whistler Parks & Resorts!
      </p>
      <CreateCustomerContainer />
      <Footer />
    </>
  );
};

export default App;
