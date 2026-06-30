import { useParams, Navigate } from "react-router-dom";
import { categories, fromSlug } from "./data";
import BrandLogo from "./components/BrandLogo";

function BrandPage() {
  const { brand } = useParams();
  const brandData = fromSlug(brand);

  if (!brandData) return <Navigate to="/" replace />;

  const { name, logo } = brandData;

  return (
    <section className="section">

      <div style={{ display: "flex", alignItems: "center", gap: "20px", justifyContent: "center", marginBottom: "40px" }}>
        <BrandLogo name={name} logo={logo} />
        <h2 style={{ margin: 0 }}>{name} Accessories</h2>
      </div>

      <div className="grid">
        {categories.map((item) => (
          <div className="card" key={item}>
            <h3>{item}</h3>
            <p style={{ color: "#666", fontSize: "14px", margin: "8px 0" }}>
              for {name}
            </p>
            <button>Shop Now</button>
          </div>
        ))}
      </div>

    </section>
  );
}

export default BrandPage;
