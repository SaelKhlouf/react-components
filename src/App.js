import "./App.css";
import ProductCardComponent from "./Components/ProductCardComponent/ProductCardComponent";

function App() {
  const product = {
    name: "CONVERSE CHUCK TAYLOR ALL STAR LOW TOP",
    price: 66.0,
    intro:
      "Ready to dress up or down, these classic canvas Chucks are an everyday wardrobe staple.",
    details: [
      "Lightweight, durable canvas sneaker.",
      "Lightly padded footbed for added comfort.",
      "Iconic Chuck Taylor ankle patch.",
    ],
    colors: ["black", "blue", "red", "#f0bf1e", "green", "brown"],
  };

  return (
    <section className="card-section">
      <h1>Product Card Component</h1>
      <ProductCardComponent {...product}></ProductCardComponent>
    </section>
  );
}

export default App;
