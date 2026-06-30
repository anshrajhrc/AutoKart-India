export const manufacturers = [
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

export const categories = [
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

export const toSlug = (name) =>
  name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

export const fromSlug = (slug) =>
  manufacturers.find((m) => toSlug(m) === slug) || null;
