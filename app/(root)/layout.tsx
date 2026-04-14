import SmoothScroll from "@/providers/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootGroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="flex min-h-full flex-col">{children}</main>
      <Footer />
    </SmoothScroll>
  );
}
