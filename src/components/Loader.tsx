"use client";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050B12]">
      <div className="text-center">
        <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-red-600 border-t-transparent"></div>

        <h2 className="mt-6 text-3xl font-black text-white">
          Play<span className="text-red-500">BollyGame</span>
        </h2>

        <p className="mt-2 text-gray-400">
          Loading...
        </p>
      </div>
    </div>
  );
}