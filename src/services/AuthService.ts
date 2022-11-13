import axios from "axios";
import { LoginRequest } from "../types/LoginRequest";
import { SignUpRequest } from "../types/SignUpRequest";

class AuthService {
  base_url: string = import.meta.env.VITE_BASE_API_URL;
  async signup(values: SignUpRequest) {
    return await axios.post(`${this.base_url}/auth/signup`, values);
  }

  async signin(values: LoginRequest) {
    return await axios.post(`${this.base_url}/auth/signup`, values);
  }
}

export default new AuthService();
