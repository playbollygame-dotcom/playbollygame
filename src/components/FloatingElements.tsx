export default function FloatingElements() {
  return (
    <>
      {/* Green Glow */}
      <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-red-600/20 blur-[120px]" />

      {/* Blue Glow */}
      <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      {/* Small Circle */}
      <div className="absolute left-20 top-52 h-6 w-6 animate-bounce rounded-full bg-green-400"></div>

      {/* Medium Circle */}
      <div className="absolute right-32 top-24 h-10 w-10 animate-pulse rounded-full bg-yellow-400"></div>

      {/* Bottom Circle */}
      <div className="absolute bottom-24 left-1/3 h-8 w-8 animate-bounce rounded-full bg-green-300"></div>

      {/* Right Bottom */}
      <div className="absolute bottom-20 right-20 h-5 w-5 animate-ping rounded-full bg-emerald-400"></div>
    </>
  );
}