// src/data/inventory.ts

export interface Property {
  id: string;
  title: string;
  location: string;
  size: string;
  price: string;
  load: string;
  status: "Available" | "Last Unit" | "Pre-Leased";
  rating: number;
  tag: string;
  image: string;
  category: "Warehouse" | "Industrial" | "Fulfillment";
}

export const properties: Property[] = [
  {
    id: "WH-WG01",
    title: "Express Logistics Park",
    location: "Wagholi",
    size: "45,000",
    price: "32",
    load: "8 Ton",
    status: "Available",
    rating: 4.8,
    tag: "Prime Corridor",
    image: "/assets/wagholi.avif", 
    category: "Warehouse"
  },
  {
    id: "WH-LK02",
    title: "Heavy-Duty Industrial Hub",
    location: "Lonikand",
    size: "95,000",
    price: "24",
    load: "12 Ton",
    status: "Available",
    rating: 4.7,
    tag: "High Load Capacity",
    image: "/assets/lonikand.avif",
    category: "Industrial"
  },
  {
    id: "WH-LG03",
    title: "Air-Cargo Terminal",
    location: "Lohegaon",
    size: "15,000",
    price: "45",
    load: "5 Ton",
    status: "Last Unit",
    rating: 4.9,
    tag: "Near Airport",
    image: "/assets/lohegaon.avif",
    category: "Fulfillment"
  },
  {
    id: "WH-KS04",
    title: "Strategic Distribution Point",
    location: "Kesanand Phata",
    size: "30,000",
    price: "28",
    load: "7 Ton",
    status: "Available",
    rating: 4.6,
    tag: "Easy Access",
    image: "/assets/kesanand.avif",
    category: "Warehouse"
  },
  {
    id: "WH-CK05",
    title: "Mega Manufacturing Plant",
    location: "Chakan MIDC",
    size: "150,000",
    price: "26",
    load: "15 Ton",
    status: "Available",
    rating: 4.9,
    tag: "Automotive Belt",
    image: "/assets/chakan.avif",
    category: "Industrial"
  },
  {
    id: "WH-TG06",
    title: "Grade-A Storage Solution",
    location: "Talegaon",
    size: "65,000",
    price: "25",
    load: "10 Ton",
    status: "Pre-Leased",
    rating: 4.8,
    tag: "Multi-Modal Link",
    image: "/assets/talegaon.avif",
    category: "Warehouse"
  }
];