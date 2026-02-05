import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleIcon } from "../assets/GoogleIcon";
import { useTranslation } from "../i18n";
import { Logo } from "../components/Logo";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handleContinue = (): void => {
    navigate("/home");
  };

  const handleGoogleLogin = (): void => {
    console.log("Google login");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      handleContinue();
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
        <div className="flex justify-center mb-4">
          <Logo />
        </div>

        <h1 className="text-2xl font-bold text-black text-center mb-4">
          {t("login.title")}
        </h1>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 px-4 py-3 mb-8 border border-gray-300 rounded-lg bg-white text-black font-medium cursor-pointer hover:bg-gray-50 transition-colors"
          aria-label={t("login.continueGoogleAria")}
        >
          <GoogleIcon />
          <span>{t("login.continueGoogle")}</span>
        </button>

        <div className="flex items-center justify-center mb-8">
          <span className="text-gray-500 text-sm">{t("login.or")}</span>
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-black mb-2"
          >
            {t("login.emailLabel")}
          </label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={handleEmailChange}
            onKeyDown={handleKeyDown}
            placeholder={t("login.emailPlaceholder")}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            aria-label={t("login.emailLabel")}
          />
        </div>

        <button
          onClick={handleContinue}
          className="w-full py-3 mb-8 font-medium text-white bg-teal-500 rounded-lg cursor-pointer hover:bg-teal-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          aria-label={t("login.continueAria")}
          disabled={!email}
        >
          {t("login.continue")}
        </button>

        <div className="text-center">
          <span className="text-black text-sm">{t("login.noAccount")}</span>
          <a
            href="#"
            className="text-teal-500 text-sm font-medium hover:text-teal-600 transition-colors"
            aria-label={t("login.signUpAria")}
          >
            {t("login.signUp")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
