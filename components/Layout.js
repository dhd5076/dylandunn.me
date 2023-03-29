import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div class="min-h-screen">
      <Header />
      <div class="">{children}</div>
      <Footer />
    </div>
  );
}
