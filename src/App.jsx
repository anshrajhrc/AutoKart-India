import { Link } from "react-router-dom";
import { manufacturers, categories, toSlug } from "./data";
import BrandLogo from "./components/BrandLogo";
import "./App.css";

function App() {
  return (
    <>

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
            <input placeholder="Search Accessories, Car Brand..." />
            <button>Search</button>
          </div>
        </div>

      </section>

      {/* Brands */}

      <section className="section">

        <h2>Shop By Car Brand</h2>

        <div className="grid">
          {manufacturers.map(({ name, logo }) => (
            <div className="card" key={name}>
              <BrandLogo name={name} logo={logo} />
              <h3>{name}</h3>
              <Link to={`/accessories/${toSlug(name)}`}>
                <button>View Accessories</button>
              </Link>
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

    </>
  );
}

export default App;
