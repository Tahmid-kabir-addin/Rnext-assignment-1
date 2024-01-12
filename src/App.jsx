import Footer from "./components/common/Footer";
import NavigationBar from "./components/common/NavigationBar";
import Homepage from "./components/homepage/Homepage";

export default function App() {
  return (
    <body className="bg-[#172227] font-[Inter] text-white">
      <NavigationBar />
      <Homepage />
      <Footer />
    </body>
  );
}
