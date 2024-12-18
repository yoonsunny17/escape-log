"use client";

import { useCallback, useState } from "react";

const Auth = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState<"login" | "register">("login");

  const toggleVariant = useCallback(() => {
    setVariant((current) => (current === "login" ? "register" : "login"));
  }, []);

  return (
    <div
      className="
        relative
        w-full
        h-full
        bg-[url('/images/alien-bold.png')]
    "
    >
      {/* <div
      className="
        w-full
        h-full
        bg-[url('/images/background.png')]
        bg-center
        bg-cover
    "
    > */}
      <div className="w-full h-full">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" />
        </nav>
        <div className="flex justify-center">
          <div
            className="
              bg-black 
              bg-opacity-70 
              px-16 
              py-16 
              self-center 
              mt-2 
              lg:w-2/5 
              lg:max-w-md 
              rounded-md 
              w-full
              "
          >
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Sign in" : "Register"}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth();
// "use client";

// import { useState } from "react";

// export function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");

//     // const result = await signIn
//   };
//   return (
//     <form action="">
//       {/* email */}
//       <div>
//         <label htmlFor="email">Email</label>
//         <input
//           id="email"
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>

//       {/* password */}
//       <div>
//         <label htmlFor="password">password</label>
//         <input
//           id="password"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </div>

//       {/* submit btn */}
//       <button type="submit">Login</button>
//     </form>
//   );
// }
