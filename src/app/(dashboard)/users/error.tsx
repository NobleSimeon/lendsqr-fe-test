"use client";

import { useEffect } from "react";
import { AlertCircle } from "lucide-react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error("Error caught in error.tsx:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <AlertCircle className="h-16 w-16 text-red-500 mb-4" />
      <h1 className="text-2xl font-semibold text-red-500">Something went wrong</h1>
      <p className="text-gray-600 mt-2">
        We encountered an error while loading the page data. Please try again later.
      </p>
      <button
        onClick={reset}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Try Again
      </button>
    </div>
  );
}