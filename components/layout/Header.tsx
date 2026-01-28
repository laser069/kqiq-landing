// components/Header.tsx (The Billing Bar)
export default function Header() {
  return (
    <header className="w-full border-b border-slate-800 bg-[#0B0E14] px-6 py-4">
      {/* Note: If the trapezoid covers the text, add pt-16 to this 
         container to push the text below the floating orange shape. 
      */}
      <h1 className="text-xl font-semibold text-slate-100">Billing</h1>
    </header>
  );
}