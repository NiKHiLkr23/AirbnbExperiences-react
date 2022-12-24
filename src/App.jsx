import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";
import Footer from "./components/Footer";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="p-5 container flex flex-col mx-auto">
        <div className=" grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-4 ">
          {cards}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
