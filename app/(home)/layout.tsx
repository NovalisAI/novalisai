import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Container from "../../components/layout/Container";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="md:pt-20">
        {children}
        <Container type="intrinsic">
          <Footer />
        </Container>
      </main>
    </>
  );
}
