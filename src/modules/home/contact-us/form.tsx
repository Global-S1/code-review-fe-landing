import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import {
  FORM_LIST_ID,
  URL_FORM,
  WHATSAPP_LINK,
} from "src/constants/urls.constant";
import type { FormContent, FormErrors, FormState } from "./form.interface";
import { InputField } from "./input-form";
import { CheckboxField } from "./checkbox-form";

interface Props {
  content: FormContent;
}

const initialErrors: FormErrors = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  terms: "",
};

export function ContactForm({ content }: Props) {
  const [form, setForm] = useState<FormState>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    terms: false,
    newsletter: false,
  });

  const [errors, setErrors] = useState<FormErrors>(initialErrors);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = { ...initialErrors };
    let valid = true;

    if (!form.firstname.trim()) {
      newErrors.firstname = content.validations.firstname;
      valid = false;
    }
    if (!form.lastname.trim()) {
      newErrors.lastname = content.validations.lastname;
      valid = false;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = content.validations.email;
      valid = false;
    }
    if (!/^[0-9+\s()-]{7,20}$/.test(form.phone)) {
      newErrors.phone = content.validations.cellphone;
      valid = false;
    }
    if (!form.terms) {
      newErrors.terms = content.validations.termsConditions;
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSuccess(false);
    setIsError(false);
    if (!validate()) return;
    setIsLoading(true);

    const { firstname, lastname, email, phone } = form;
    const payload = {
      firstname,
      lastname,
      email,
      phone,
      listId: FORM_LIST_ID,
    };

    try {
      const res = await fetch(`${URL_FORM}/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      // Caso especial: contacto ya existe
      const isConflict =
        data?.status === "error" &&
        typeof data?.message === "string" &&
        data.message.toLowerCase().includes("contact already exists");

      if (!res.ok && !isConflict) {
        if (data?.errors?.length) {
          const newErrors: FormErrors = { ...initialErrors };
          for (const error of data.errors) {
            const field = error.context?.propertyName?.[0];
            const message = error.message;
            if (field && field in newErrors) {
              newErrors[field as keyof FormErrors] = message;
            }
          }
          setErrors(newErrors);
        } else {
          setIsError(true);
        }
        return;
      }

      setIsSuccess(true);
      setForm({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        terms: false,
        newsletter: false,
      });

      if (data.redirectUrl) {
        window.open(data.redirectUrl, "_blank", "noopener,noreferrer");
      } else if (isConflict) {
        // Redireccionamos a una URL propia si ya existe el contacto
        window.open(WHATSAPP_LINK, "_blank", "noopener,noreferrer");
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isSuccess || isError) {
      const timeout = setTimeout(() => {
        setIsError(false);
      }, 7000);
      return () => clearTimeout(timeout);
    }
  }, [isSuccess, isError]);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full px-6 rounded-lg shadow-md space-y-6"
      noValidate
      role="form"
      aria-labelledby="form-title"
    >
      <div className="flex flex-col md:flex-row gap-x-12 gap-y-6">
        <InputField
          id="firstname"
          name="firstname"
          label={content.firstname}
          value={form.firstname}
          placeholder={content.placeholder}
          error={errors.firstname}
          onChange={handleChange}
        />

        <InputField
          id="lastname"
          name="lastname"
          label={content.lastname}
          value={form.lastname}
          placeholder={content.placeholder}
          error={errors.lastname}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-x-12 gap-y-6">
        <InputField
          id="email"
          name="email"
          label={content.email}
          value={form.email}
          placeholder={content.placeholder}
          error={errors.email}
          onChange={handleChange}
        />

        <InputField
          id="phone"
          name="phone"
          label={content.cellphone}
          value={form.phone}
          placeholder={content.placeholder}
          error={errors.phone}
          onChange={handleChange}
        />
      </div>

      <CheckboxField
        id="terms"
        name="terms"
        label={content.termsConditions}
        checked={form.terms}
        onChange={handleChange}
        required
        error={errors.terms}
      />

      <CheckboxField
        id="newsletter"
        name="newsletter"
        label={content.news}
        checked={form.newsletter}
        onChange={handleChange}
      />

      {isSuccess && (
        <div className="text-green-600 font-medium text-center">
          {content.messages.success}
        </div>
      )}

      {/* Mensaje de error */}
      {isError && (
        <div className="text-red-600 font-medium text-center">
          {content.messages.error}
        </div>
      )}

      <div className="flex justify-center">
        <button
          type="submit"
          disabled={isLoading}
          className="bg-primary text-dark font-semibold py-2 px-12 rounded-2xl hover:bg-primary/80 transition cursor-pointer duration-500 text-custom-lg hover:shadow-lg hover:shadow-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? content.buttonLoading : content.button}
        </button>
      </div>
    </form>
  );
}
