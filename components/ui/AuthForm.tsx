"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
// import { FieldErrors } from "react-hook-form";
// import { authFormSchema } from "@/lib/utils";

// interface FormValues {
//   firstname: string;
//   lastname: string;
//   address: string;
//   state: string;
//   code: string;
//   dob: Date;
//   ssn: string;
//   email: string;
//   password: string;
//   // Add other form field types as needed
// }

// Props for AuthForm
interface AuthFormProps {
  type: "sign-in" | "sign-up";
}

// Define the Zod schema for validation
const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

const signUpSchema = z.object({
  firstname: z.string().nonempty("First name is required"),
  lastname: z.string().nonempty("Last name is required"),
  address: z.string().nonempty("Address is required"),
  state: z.string().nonempty("Country is required"),
  code: z.string().regex(/^\d+$/, "Postal code must be numeric"),
  dob: z.string().nonempty("Date of birth is required"),
  ssn: z.string().nonempty("SSN is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

// Infer form types from the schema

type FormValues = z.infer<typeof signUpSchema>;
// type SignInFormData = z.infer<typeof signInSchema>;
// type SignUpFormData = z.infer<typeof signUpSchema>;

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Use react-hook-form with zodResolver based on the form type
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(type === "sign-in" ? signInSchema : signUpSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setIsLoading(true);
    console.log("Form Data:", data);
    // Handle form submission logic here (e.g., API calls)
    reset();
    setIsLoading(false);
  };

  return (
    <div>
      <div className="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <div className="flex h-16 pt-10 shrink-0 items-center pl-12">
            <Link href="/">
              <Image
                src="/icons/conduitbank.png"
                width={30}
                height={30}
                alt="logo"
              />
            </Link>
            <Link href="/">
              <div>
                <h1 className="text-2xl font-bold px-2">Conduit Bank</h1>
              </div>
            </Link>
          </div>
          {user ? (
            "Link Account"
          ) : type === "sign-in" ? (
            <h2 className="mt-8 text-2xl/9 font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          ) : (
            <h2 className="mt-8 text-2xl/9 font-bold tracking-tight text-gray-900">
              Create a new account
            </h2>
          )}

          {/* <p className="mt-2 text-sm/6 text-gray-500">
                Not a member?{" "}
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Start a 14 day free trial
                </a>
              </p> */}
        </div>

        <div className="mt-10">
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              method="POST"
              className="space-y-6"
            >
              {type === "sign-up" && (
                <>
                  {/* new user name input  */}

                  {/* end of code */}
                  <div className="flex gap-2 w-full">
                    <div className="w-full">
                      <label
                        htmlFor="email"
                        className="block text-sm/6 font-medium text-gray-900"
                      >
                        FirstName
                      </label>
                      <div className="mt-2">
                        <input
                          {...register("firstname", {
                            required: "First name is required",
                          })}
                          id="firstname"
                          name="firstname"
                          type="firstname"
                          required
                          autoComplete="firstname"
                          placeholder="Geva-eval"
                          className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                        />
                        <p className="text-red-500">
                          {errors.firstname?.message}
                        </p>
                      </div>
                    </div>

                    <div className="w-full">
                      <label
                        htmlFor="lastname"
                        className="block text-sm/6 font-medium text-gray-900"
                      >
                        LastName
                      </label>
                      <div className="mt-2">
                        <input
                          {...register("lastname", {
                            required: "Last name is required",
                          })}
                          id="lastname"
                          name="lastname"
                          type="lastname"
                          required
                          autoComplete="lastname"
                          placeholder="Egbe"
                          className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                        />
                        <p className="text-red-500">
                          {errors.lastname?.message}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Street address
                    </label>
                    <div className="mt-2">
                      <input
                        {...register("address", {
                          required: "address is required",
                        })}
                        id="address"
                        name="address"
                        type="address"
                        required
                        autoComplete="address"
                        placeholder="Address"
                        className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                      />
                      <p className="text-red-500">{errors.address?.message}</p>
                    </div>
                  </div>

                  <div className="flex gap-2 w-full">
                    <div className="w-full">
                      <label
                        htmlFor="state"
                        className="block text-sm/6 font-medium text-gray-900"
                      >
                        State
                      </label>
                      <div className="mt-2">
                        <input
                          {...register("state", {
                            required: "State is required",
                          })}
                          id="state"
                          name="state"
                          type="state"
                          required
                          autoComplete="state"
                          placeholder="State"
                          className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                        />
                        <p className="text-red-500">{errors.state?.message}</p>
                      </div>
                    </div>

                    <div className="w-full">
                      <label
                        htmlFor="code"
                        className="block text-sm/6 font-medium text-gray-900"
                      >
                        Postal Code
                      </label>
                      <div className="mt-2">
                        <input
                          {...register("code", {
                            required: "code is required",
                          })}
                          id="code"
                          name="code"
                          type="code"
                          required
                          autoComplete="postal code"
                          placeholder="ex:11101"
                          className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                        />
                        <p className="text-red-500">{errors.code?.message}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 w-full">
                    <div className="w-full">
                      <label
                        htmlFor="date"
                        className="block text-sm/6 font-medium text-gray-900"
                      >
                        Date of birth
                      </label>
                      <div className="mt-2">
                        <input
                          {...register("dob", {
                            required: "date of birth is required",
                          })}
                          id="dob"
                          name="dob"
                          type="dob"
                          required
                          autoComplete="dob"
                          placeholder="yyyy-mm-dd"
                          className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                        />
                        <p className="text-red-500">{errors.dob?.message}</p>
                      </div>
                    </div>

                    <div className="w-full">
                      <label
                        htmlFor="ssn"
                        className="block text-sm/6 font-medium text-gray-900"
                      >
                        SSN
                      </label>
                      <div className="mt-2">
                        <input
                          {...register("ssn", { required: "ssn is required" })}
                          id="ssn"
                          name="ssn"
                          type="ssn"
                          required
                          autoComplete="ssn"
                          placeholder="123-45-6789"
                          className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                        />
                        <p className="text-red-500">{errors.ssn?.message}</p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    {...register("email", { required: "email is required" })}
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="example@gmail.com"
                    className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                  <p className="text-red-500">{errors.email?.message}</p>
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2 ">
                  <input
                    {...register("password", {
                      required: "password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters long",
                      },
                    })}
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    placeholder="********"
                    className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                  <p className="text-red-500">{errors.password?.message}</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-3 block text-sm/6 text-gray-700"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm/6">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              {type === "sign-up" ? (
                <div>
                  <button
                    disabled={isLoading}
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    <span hidden={isLoading}>Create account </span>
                    {isLoading && (
                      <div className="flex items-center px-2">
                        <Loader2 size={20} className="animate-spin " /> &nbsp;
                        Loading...
                      </div>
                    )}
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    <span hidden={isLoading}>Sign in </span>
                    {isLoading && (
                      <div className="flex items-center px-2">
                        <Loader2 size={20} className="animate-spin " /> &nbsp;
                        Loading...
                      </div>
                    )}
                  </button>
                </div>
              )}
            </form>
          </div>
          {/* 
          <div className="mt-10">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center"
              >
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm/6 font-medium">
                <span className="bg-white px-6 text-gray-900">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <a
                href="#"
                className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                  <path
                    d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                    fill="#EA4335"
                  />
                  <path
                    d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                    fill="#34A853"
                  />
                </svg>
                <span className="text-sm/6 font-semibold">Google</span>
              </a>

              <a
                href="#"
                className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="h-5 w-5 fill-[#24292F]"
                >
                  <path
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  />
                </svg>
                <span className="text-sm/6 font-semibold">GitHub</span>
              </a>
            </div>
          </div> */}
          {type === "sign-in" ? (
            <div className="relative mt-6">
              <p className="mt-2 text-sm/6 text-gray-500">
                Don&apos;t have an account?{" "}
                <Link
                  href="/sign-up"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  SignUp
                </Link>
              </p>
            </div>
          ) : (
            <div className="relative mt-6 mb-6">
              <p className="mt-2 text-sm/6 text-gray-500">
                If you already have an account?{" "}
                <Link
                  href="/sign-in"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  SignIn
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
