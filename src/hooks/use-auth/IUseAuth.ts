import signInCustomerRequest from "../../features/customers/sign-in-customer/SignInCustomerRequest";

export default interface IUseAuth {
  signIn: (requst: signInCustomerRequest) => void;
}
