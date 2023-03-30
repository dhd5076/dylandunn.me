import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div class="sm:h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
