import axios, { AxiosInstance } from "axios";
import CreateCustomerRequest from "../../features/customers/create-customer/CreateCustomerRequest";
import CreateCustomerResponse from "../../features/customers/create-customer/CreateCustomerResponse";
import signInCustomerRequest from "../../features/customers/sign-in-customer/SignInCustomerRequest";

export default class HttpClient {
  private readonly api: string = "https://localhost:7168/api/";

  private axiosInstance(): AxiosInstance {
    return axios.create({
      baseURL: this.api,
    });
  }

  public static instance(): HttpClient {
    return new HttpClient();
  }

  public async createCustomer(request: CreateCustomerRequest): Promise<CreateCustomerResponse> {
    const result = await this.axiosInstance().post<CreateCustomerResponse>(
      "Security/CreateCustomer",
      request
    );

    return result.data;
  }

  public async signInCustomer(request: signInCustomerRequest): Promise<string> {
    const result = await this.axiosInstance().post<string>("Security/SignInCustomer", request);

    return result.data;
  }
}
