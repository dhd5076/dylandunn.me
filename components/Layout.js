import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="sm:h-screen flex flex-col">
      <div className="max-w-7xl bg-gradient-to-r from-green-500 to-blue-500 bg-fixed w-full flex flex-col mx-auto shadow shadow-xl sm:pb-8">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}