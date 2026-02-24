import type { signUpInput } from "./auth.models";
import { authClient } from "./authClient";

export async function signUp(input: signUpInput): Promise<unknown> {
  const { data, error } = await authClient.signUp.email({
    name: input.name,
    email: input.email,
    password: input.password,
  });

  if (error) {
    throw new Error(error.message ?? "Échec de l'inscription");
  }

  return data;
}
