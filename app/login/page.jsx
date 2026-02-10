// app/login/page.tsx
"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-xl p-8 shadow-2xl border border-white/20">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Welcome Back 👋
        </h1>
        <p className="text-slate-300 text-center mb-8">
          Sign in to continue
        </p>

        {/* Google Button */}
        <button
          onClick={() => signIn("google")}
          className="w-full flex items-center justify-center gap-3 rounded-xl bg-white py-3 text-slate-800 font-medium hover:bg-slate-100 transition active:scale-95"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 48 48"
          >
            <path
              fill="#EA4335"
              d="M24 9.5c3.54 0 6.7 1.22 9.19 3.22l6.85-6.85C35.9 2.34 30.3 0 24 0 14.6 0 6.4 5.38 2.56 13.22l7.98 6.2C12.43 13.27 17.74 9.5 24 9.5z"
            />
            <path
              fill="#4285F4"
              d="M46.5 24c0-1.57-.14-3.09-.4-4.57H24v9.15h12.7c-.55 2.96-2.2 5.48-4.67 7.17l7.22 5.6C43.94 37.03 46.5 30.98 46.5 24z"
            />
            <path
              fill="#FBBC05"
              d="M10.54 28.58a14.43 14.43 0 010-9.16l-7.98-6.2A23.94 23.94 0 000 24c0 3.88.93 7.56 2.56 10.78l7.98-6.2z"
            />
            <path
              fill="#34A853"
              d="M24 48c6.3 0 11.9-2.08 15.86-5.65l-7.22-5.6c-2 1.34-4.56 2.13-8.64 2.13-6.26 0-11.57-3.77-13.46-8.92l-7.98 6.2C6.4 42.62 14.6 48 24 48z"
            />
          </svg>

          Sign in with Google
        </button>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-slate-400">
          Secure authentication powered by Google
        </p>
      </div>
    </div>
  );
}
