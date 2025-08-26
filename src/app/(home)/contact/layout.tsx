import Navbar from "@/components/material/landing/Navbar";
export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* TIDAK ADA FOOTER DI SINI */}
    </>
  );
}