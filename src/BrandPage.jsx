import { useParams, Navigate } from "react-router-dom";
import { categories, fromSlug } from "./data";

function BrandPage() {
  const { brand } = useParams();
  const brandName = fromSlug(brand);

  if (!brandName) return <Navigate to="/" replace />;

  return (
    <section className="section">

      <h2>{brandName} Accessories</h2>

      <div className="grid">
        {categories.map((item) => (
          <div className="card" key={item}>
            <h3>{item}</h3>
            <p style={{ color: "#666", fontSize: "14px", margin: "8px 0" }}>
              for {brandName}
            </p>
            <button>Shop Now</button>
          </div>
        ))}
      </div>

    </section>
  );
}

export default BrandPage;
