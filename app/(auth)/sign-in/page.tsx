/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import AuthForm from "@/components/ui/AuthForm";

export default function Sigin() {
  return (
    <>
      <section className="flex-center size-full max-sm:px-6">
        <AuthForm type="sign-in" />
      </section>
    </>
  );
}
