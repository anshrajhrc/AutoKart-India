import { Link } from "react-router-dom";
import { manufacturers, toSlug } from "./data";
import BrandLogo from "./components/BrandLogo";

function BrandsPage() {
  return (
    <section className="section">

      <h2>All Car Brands</h2>

      <div className="grid">
        {manufacturers.map(({ name, logo }) => (
          <Link
            to={`/accessories/${toSlug(name)}`}
            key={name}
            style={{ textDecoration: "none" }}
          >
            <div className="card">
              <BrandLogo name={name} logo={logo} />
              <h3>{name}</h3>
              <p style={{ color: "#666", fontSize: "14px", margin: "8px 0" }}>
                View Accessories
              </p>
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}

export default BrandsPage;
