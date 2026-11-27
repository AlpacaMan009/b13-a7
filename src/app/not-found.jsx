import Link from 'next/link';
import React from 'react';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
  <h1 className="text-6xl font-extrabold text-gray-900 mb-4">404</h1>
  <p className="text-lg text-gray-600 mb-8">
    Oops! The page you're looking for doesn't exist.
  </p>
  <Link
    href="/"
    className="btn bg-[#244D3F] text-white"
  >
    Back to Home
  </Link>
</div>
    );
};

export default ErrorPage;