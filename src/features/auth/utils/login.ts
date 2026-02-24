import type { loginInput } from "./auth.models";
import { authClient } from "./authClient";

export async function login(input: loginInput):Promise<unknown> {
  const { data, error } = await authClient.signIn.email({
    email: input.email,
    password: input.password,
  });

  if (error) {
    throw new Error(error.message ?? "Échec de la connexion");
  }

  return data;
}