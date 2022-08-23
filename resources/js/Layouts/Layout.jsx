import Nav from "@/Components/Nav";
import Footer from "@/Components/Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <main className="pt-14 bg-neutral-100">{children}</main>
      <Footer />
    </div>
  );
}
