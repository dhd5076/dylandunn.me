import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col  bg-gradient-to-r from-green-500 to-blue-500">
      <div className="bg-fixed w-full flex flex-col mx-auto shadow shadow-xl">
        <Header />
        <div className="max-w-7xl mx-auto pb-8 pt-16">
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
}