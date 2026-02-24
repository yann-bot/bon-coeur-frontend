import { useState } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import type React from "react";
import { z, flattenError } from "zod";

import Input from "./input";
import Button from "./button";
import type { loginInput } from "../utils/auth.models";
import { login } from "../utils/login";

const loginSchema = z.object({
  email: z.pipe(
    z.string().min(1, "L'email est requis"),
    z.email({ message: "Email invalide" })
  ),
  password: z.string().min(1, "Le mot de passe est requis").min(6, "Le mot de passe doit contenir au moins 6 caractères"),
});

type ValidationErrors = Partial<Record<keyof loginInput, string>>;

async function validateInput(input: loginInput): Promise<true> {
  const result = loginSchema.safeParse(input);
  if (result.success) return true;
  const flattened = flattenError(result.error);
  const errors: ValidationErrors = {};
  for (const [key, messages] of Object.entries(flattened.fieldErrors)) {
    if (messages?.length) {
      errors[key as keyof loginInput] = Array.isArray(messages) ? messages[0] : String(messages);
    }
  }
  throw { fieldErrors: errors };
}

const DEFAULT_REDIRECT = "/dashboard";

export default function LoginForm() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState<loginInput>({ email: "", password: "" });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const redirectTo = searchParams.get("redirect") ?? DEFAULT_REDIRECT;

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);
    try {
      await validateInput(formData);
      await login(formData);
      setFormData({ email: "", password: "" });
      navigate(redirectTo);
    } catch (err: unknown) {
      if (err && typeof err === "object" && "fieldErrors" in err) {
        setErrors((err as { fieldErrors: ValidationErrors }).fieldErrors);
      }
      return;
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof loginInput]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section className="w-full space-y-6">
      <form action="" className="flex flex-col gap-6" onSubmit={handleSubmit} noValidate>
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="exemple@email.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
        <div className="space-y-1">
          <Input
            label="Mot de passe"
            type="password"
            name="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            required
            showPasswordToggle
          />
          <div className="flex justify-end">
            <a
              href="#"
              className="text-sm pt-3 text-gray-600 hover:text-[#00AFE0] hover:underline transition-colors duration-200"
            >
              Mot de passe oublié ?
            </a>
          </div>
        </div>
        <Button
          type="submit"
          variant="primary"
          size="large"
          className="w-full rounded-xl mt-2"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Connexion..." : "Se connecter"}
        </Button>
        <p className="text-sm text-gray-600 text-center">
          Pas encore de compte ?{" "}
          <Link
            to="/signup"
            className="text-[#00AFE0] hover:underline font-medium transition-colors duration-200"
          >
            S'inscrire
          </Link>
        </p>
      </form>
    </section>
  );
}
