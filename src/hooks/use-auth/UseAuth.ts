import signInCustomerRequest from "../../features/customers/sign-in-customer/SignInCustomerRequest";
import HttpClient from "../../utilities/data/HttpClient";
import IUseAuth from "./IUseAuth";

export default function useAuth(): IUseAuth {
  const signIn = (request: signInCustomerRequest): void => {
    HttpClient.instance()
      .signInCustomer(request)
      .then((x) => console.log(x))
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    signIn,
  };
}
