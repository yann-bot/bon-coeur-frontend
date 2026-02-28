import { http } from "./http";

export const api = {
  get: <T>(path: string) => http<T>(path, { method: "GET" }),
  post: <T>(path: string, body?: unknown) =>
    http<T>(path, { method: "POST", body }),
  put: <T>(path: string, body?: unknown) =>
    http<T>(path, { method: "PUT", body }),
  patch: <T>(path: string, body?: unknown) =>
    http<T>(path, { method: "PATCH", body }),
  delete: <T>(path: string) => http<T>(path, { method: "DELETE" }),
};
