"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="p-6">
      <div className="border border-red-300 bg-red-50 p-4 rounded-lg">
        <p className="mb-2">Something went wrong.</p>
        <button
          onClick={reset}
          className="px-4 py-2 bg-black text-white rounded"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
