export default interface CreateCustomerRequest {
  username: string;
  password: string;
}

export function customerRequest(username: string, password: string): CreateCustomerRequest {
  return {
    username,
    password,
  };
}
