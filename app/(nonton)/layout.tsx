import Script from 'next/script';

export default function NontonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
      {/* --- SCRIPT IKLAN ADSTERRA --- */}
      {/* Ganti src dengan link script Adsterra Anda */}
      <Script 
        id="adsterra-code"
        src="//pl12345.com/your-adsterra-code.js" 
        strategy="afterInteractive" 
      />

      {children}
    </div>
  );
}
