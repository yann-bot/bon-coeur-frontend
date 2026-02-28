import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import type React from "react";
import { z, flattenError } from "zod";

import Input from "./input";
import Button from "./button";
import type { signUpInput } from "../utils/auth.models";
import { signUp } from "../utils/signUp";
import { useAuthStore } from "@/store/authStore";

const signUpSchema = z
  .object({
    name: z.string().min(1, "Le nom est requis"),
    email: z.pipe(
      z.string().min(1, "L'email est requis"),
      z.email({ message: "Email invalide" })
    ),
    password: z
      .string()
      .min(1, "Le mot de passe est requis")
      .min(6, "Le mot de passe doit contenir au moins 6 caractères"),
    confirmPassword: z.string().min(1, "Veuillez confirmer le mot de passe"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Les mots de passe ne correspondent pas",
    path: ["confirmPassword"],
  });

type SignUpFormData = signUpInput & { confirmPassword: string };
type ValidationErrors = Partial<Record<keyof SignUpFormData, string>>;

async function validateInput(input: SignUpFormData): Promise<true> {
  const result = signUpSchema.safeParse(input);
  if (result.success) return true;
  const flattened = flattenError(result.error);
  const errors: ValidationErrors = {};
  for (const [key, messages] of Object.entries(flattened.fieldErrors)) {
    if (messages?.length) {
      errors[key as keyof SignUpFormData] = Array.isArray(messages)
        ? messages[0]
        : String(messages);
    }
  }
  throw { fieldErrors: errors };
}

export default function SignUpForm() {
  const navigate = useNavigate();
  const setLogin = useAuthStore((state) => state.login);
  const [formData, setFormData] = useState<SignUpFormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);
    try {
      await validateInput(formData);
      await signUp({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      setLogin({ user: { name: formData.name, email: formData.email } });
      setFormData({ name: "", email: "", password: "", confirmPassword: "" });
      navigate("/dashboard");
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
    if (errors[name as keyof SignUpFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section className="w-full space-y-6">
      <form
        action=""
        className="flex flex-col gap-6"
        onSubmit={handleSubmit}
        noValidate
      >
        <Input
          label="Nom"
          type="text"
          name="name"
          placeholder="Votre nom"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
        />
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
        <Input
          label="Confirmer le mot de passe"
          type="password"
          name="confirmPassword"
          placeholder="••••••••"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
          required
          showPasswordToggle
        />
        <Button
          type="submit"
          variant="primary"
          size="large"
          className="w-full rounded-xl mt-2"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Inscription..." : "S'inscrire"}
        </Button>
        <p className="text-sm text-gray-600 text-center">
          Déjà un compte ?{" "}
          <Link
            to="/login"
            className="text-[#00AFE0] hover:underline font-medium transition-colors duration-200"
          >
            Se connecter
          </Link>
        </p>
      </form>
    </section>
  );
}
