import "./App.css";

const manufacturers = [
  "Maruti Suzuki",
  "Hyundai",
  "Tata",
  "Mahindra",
  "Kia",
  "Honda",
  "Toyota",
  "MG",
  "Skoda",
  "Volkswagen",
  "Renault",
  "Nissan",
  "Jeep",
  "BMW",
  "Mercedes-Benz",
  "Audi",
];

const categories = [
  "Seat Covers",
  "Floor Mats",
  "Android Screens",
  "Dash Cameras",
  "Car Perfumes",
  "LED Lights",
  "Alloy Wheels",
  "Tyres",
  "Car Covers",
  "Cleaning Kits",
  "Mobile Holders",
  "Air Purifiers",
];

function App() {
  return (
    <div className="app">

      {/* Navbar */}

      <header className="navbar">
        <h2>AutoKart India</h2>

        <nav>
          <a href="#">Home</a>
          <a href="#">Brands</a>
          <a href="#">Accessories</a>
          <a href="#">Offers</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      {/* Hero */}

      <section className="hero">

        <div className="hero-content">
          <h1>
            India's Largest Car Accessories Store
          </h1>

          <p>
            Shop Genuine & Premium Car Accessories
            for every car manufacturer in India.
          </p>

          <div className="search-box">
            <input
              placeholder="Search Accessories, Car Brand..."
            />

            <button>Search</button>
          </div>
        </div>

      </section>

      {/* Brands */}

      <section className="section">

        <h2>Shop By Car Brand</h2>

        <div className="grid">

          {manufacturers.map((brand) => (
            <div className="card" key={brand}>
              <h3>{brand}</h3>
              <button>View Accessories</button>
            </div>
          ))}

        </div>

      </section>

      {/* Categories */}

      <section className="section grey">

        <h2>Popular Categories</h2>

        <div className="grid">

          {categories.map((item) => (
            <div className="category" key={item}>
              {item}
            </div>
          ))}

        </div>

      </section>

      {/* Offers */}

      <section className="offer">

        <h2>🔥 Mega Sale</h2>

        <p>Up to 60% OFF on Premium Accessories</p>

        <button>Shop Now</button>

      </section>

      {/* Why Choose */}

      <section className="section">

        <h2>Why AutoKart?</h2>

        <div className="grid">

          <div className="card">
            🚚
            <h3>Free Shipping</h3>
          </div>

          <div className="card">
            🔒
            <h3>Secure Payments</h3>
          </div>

          <div className="card">
            ⭐
            <h3>Top Rated Products</h3>
          </div>

          <div className="card">
            ↩️
            <h3>Easy Returns</h3>
          </div>

        </div>

      </section>

      {/* Footer */}

      <footer className="footer">

        <h3>AutoKart India</h3>

        <p>
          Accessories for Maruti, Hyundai, Tata,
          Mahindra, Kia, Toyota, Honda, BMW,
          Mercedes and more.
        </p>

        <p>© 2026 AutoKart India</p>

      </footer>

    </div>
  );
}

export default App;