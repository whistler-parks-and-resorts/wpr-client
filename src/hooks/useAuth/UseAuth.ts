import signInCustomerRequest from "../../features/customers/sign-in-customer/SignInCustomerRequest";
import HttpClient from "../../utilities/data/HttpClient";
import jwtDecode from "jwt-decode";
import IUseAuth from "./IUseAuth";
import TokenResponse from "./TokenResponse";

export default function useAuth(): IUseAuth {
  const signIn = (request: signInCustomerRequest): void => {
    HttpClient.instance()
      .signInCustomer(request)
      .then((x) => console.log(jwtDecode<TokenResponse>(x)))
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    signIn,
  };
}
