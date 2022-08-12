import { HttpClient } from "./HttpClient";

import { API_URL } from "@env";

// Types
import { Temp } from "constants/types/Temp";
import { Info } from "constants/types/Info";
import { Hist } from "constants/types/Hist";

export default class ApiClient extends HttpClient {
  private static instance?: ApiClient;

  private constructor() {
    super(`${API_URL}`);
  }

  public static getInstance() {
    if (!this.instance) {
      this.instance = new ApiClient();
    }

    return this.instance;
  }

  public getTemp = () => this.instance.get("/temp");
  public getHist = () => this.instance.get("/hist");
  public getInfo = () => this.instance.get("/info");
}
