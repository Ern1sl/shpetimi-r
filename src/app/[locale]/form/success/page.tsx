import Link from "next/link";
import { font1, font2 } from "../../fonts";

export default function SuccessPage() {
  return (
    <div className={`min-h-screen w-full flex flex-col items-center justify-center bg-[rgb(54,68,79)] text-white p-8 ${font1.className}`}>
      <div className="max-w-md text-center flex flex-col items-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-6">
          <span className="text-2xl">✓</span>
        </div>
        
        <h1 className={`${font2.className} text-4xl md:text-5xl font-normal`}>
          Inquiry Sent
        </h1>
        
        <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-12">
          Thank you for reaching out. We have received your project details and will be in touch within one business day.
        </p>

        <Link
          href="/"
          className="px-12 py-5 text-[10px] uppercase tracking-[0.4em] transition-all duration-300 border-2 border-white/20 hover:bg-white hover:text-black group-valid:bg-white cursor-pointer"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
