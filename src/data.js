export const manufacturers = [
  { name: "Maruti Suzuki", logo: "https://logo.clearbit.com/marutisuzuki.com" },
  { name: "Hyundai",       logo: "https://logo.clearbit.com/hyundai.com" },
  { name: "Tata",          logo: "https://logo.clearbit.com/tatamotors.com" },
  { name: "Mahindra",      logo: "https://logo.clearbit.com/mahindra.com" },
  { name: "Kia",           logo: "https://logo.clearbit.com/kia.com" },
  { name: "Honda",         logo: "https://logo.clearbit.com/honda.com" },
  { name: "Toyota",        logo: "https://logo.clearbit.com/toyota.com" },
  { name: "MG",            logo: "https://logo.clearbit.com/mgmotor.co.in" },
  { name: "Skoda",         logo: "https://logo.clearbit.com/skoda.com" },
  { name: "Volkswagen",    logo: "https://logo.clearbit.com/volkswagen.com" },
  { name: "Renault",       logo: "https://logo.clearbit.com/renault.com" },
  { name: "Nissan",        logo: "https://logo.clearbit.com/nissan.com" },
  { name: "Jeep",          logo: "https://logo.clearbit.com/jeep.com" },
  { name: "BMW",           logo: "https://logo.clearbit.com/bmw.com" },
  { name: "Mercedes-Benz", logo: "https://logo.clearbit.com/mercedes-benz.com" },
  { name: "Audi",          logo: "https://logo.clearbit.com/audi.com" },
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
  manufacturers.find((m) => toSlug(m.name) === slug) || null;
