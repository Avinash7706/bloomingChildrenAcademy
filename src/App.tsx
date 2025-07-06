import "./App.css";
import Footer from "./components/Blooming/Footer";
import Header from "./components/Blooming/Header";
export default function App() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <div className=" absolute bottom-0 w-full flex flex-col">
        <Footer />
      </div>
    </div>
  );
}
