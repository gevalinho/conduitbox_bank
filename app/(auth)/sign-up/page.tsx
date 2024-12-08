import AuthForm from "@/components/ui/AuthForm";
import React from "react";

const SignUp = async (data: {
  email: string;
  password: string;
  code: string;
  firstname: string;
  lastname: string;
  address1: string;
  state: string;
  dob: string;
  ssn: string;
}) => {
  return (
    <div className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-up" />
    </div>
  );
};

export default SignUp;
