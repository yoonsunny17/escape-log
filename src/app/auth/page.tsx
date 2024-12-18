"use client";

import Input from "@/components/Input";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useCallback, useState } from "react";

export default function Auth() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState<"login" | "register">("login");

  const toggleVariant = useCallback(() => {
    setVariant((current) => (current === "login" ? "register" : "login"));
  }, []);

  // 로그인
  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        callbackUrl: "/", // 로그인 성공 시 메인화면으로
      });
    } catch (error) {
      console.log(error);
    }
  }, [email, password]);

  // 회원가입
  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        name,
        password,
      });

      login(); // 회원가입 완료 시 바로 로그인
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, login]);

  return (
    <div
      className="
        relative
        w-screen
        h-screen
        bg-[url('/images/background.png')]
        bg-fixed
        bg-cover
    "
    >
      <div className="w-full h-full">
        <nav className="px-4 md:px-16 py-6 h-20 md:h-[88px] flex items-center">
          <img src="/images/logo.png" alt="logo" />
        </nav>
        <div className="flex justify-center">
          <div
            className="
              bg-black 
              bg-opacity-40 
              px-16 
              py-16 
              self-center 
              mt-2 
              lg:w-3/5
              lg:max-w-xl
              rounded-md 
              w-full
              "
          >
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Sign in" : "Register"}
            </h2>

            {/* input */}
            <div className="flex flex-col gap-4">
              {/* username */}
              {variant === "register" && (
                <Input
                  id={name}
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  label="Username"
                  type="text"
                />
              )}

              {/* email */}
              <Input
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                label="Email"
                type="email"
              />

              {/* password */}
              <Input
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                label="Password"
                type="password"
              />
            </div>

            {/* login/register button */}
            <button
              onClick={variant === "login" ? login : register}
              className="
                bg-primary-600
                hover:bg-primary-700
                py-3 
                text-white 
                rounded-md 
                w-full 
                mt-10 
                transition
              "
            >
              {variant === "login" ? "login" : "register"}
            </button>

            {/* footer */}
            <p className="text-neutral-500 mt-4 text-sm text-end">
              {variant === "login"
                ? "아직 회원이 아니신가요?"
                : "이미 계정이 있으신가요?"}
              <span
                onClick={toggleVariant}
                className="
                  text-white
                  ml-2
                  hover:underline
                  cursor-pointer
                "
              >
                {variant === "login" ? "회원가입" : "로그인"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
