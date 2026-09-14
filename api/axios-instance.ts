import { config } from "@/lib/config/config";
import axios from "axios";

export const apiClient = axios.create({
  baseURL: config.apiBaseUrl,
  timeout: 10_000,
  headers: { Accept: "application/json" },
});
