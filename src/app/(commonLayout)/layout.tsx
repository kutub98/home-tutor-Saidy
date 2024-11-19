import NavBar from "@/app/Components/Shared/NavBar";
import Footer from "@/app/Components/Shared/Footer";
import ProgressBar from "@/app/Components/Shared/ProgressBar";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="sticky customWidth mx-auto z-[999] top-0 ">
        <NavBar />
        <ProgressBar />
      </div>
      {children}
      <Footer />
    </>
  );
}
