import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../assets/Logo';
import { GoogleIcon } from '../assets/GoogleIcon';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handleContinue = (): void => {
    navigate('/home');
  };

  const handleGoogleLogin = (): void => {
    console.log('Google login');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
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
          Sign in to diagnoVET
        </h1>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg bg-white text-black font-medium hover:bg-gray-50 transition-colors mb-8"
          aria-label="Continue with Google"
        >
          <GoogleIcon />
          <span>Continue with Google</span>
        </button>

        <div className="flex items-center justify-center mb-8">
          <span className="text-gray-500 text-sm">or</span>
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-black mb-2"
          >
            Email or username
          </label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={handleEmailChange}
            onKeyDown={handleKeyDown}
            placeholder="Email or username"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            aria-label="Email or username"
          />
        </div>

        <button
          onClick={handleContinue}
          className="w-full bg-teal-500 text-white font-medium py-3 rounded-lg hover:bg-teal-600 transition-colors mb-8 disabled:bg-gray-300 disabled:cursor-not-allowed"
          aria-label="Continue"
          disabled={!email}
        >
          Continue
        </button>

        {/* Registration Link */}
        <div className="text-center">
          <span className="text-black text-sm">Don't have an account? </span>
          <a
            href="#"
            className="text-teal-500 text-sm font-medium hover:text-teal-600 transition-colors"
            aria-label="Sign up for diagnoVET"
          >
            Sign up for diagnoVET
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
