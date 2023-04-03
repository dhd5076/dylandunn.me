import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div class="sm:h-screen mb-8">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
