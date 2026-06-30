import { useState } from "react";

function BrandLogo({ name, logo }) {
  const [error, setError] = useState(false);

  if (error) {
    return <div className="brand-logo-fallback">{name[0]}</div>;
  }

  return (
    <img
      src={logo}
      alt={name}
      className="brand-logo"
      onError={() => setError(true)}
    />
  );
}

export default BrandLogo;
