const API_URL = "http://localhost:1337/api/shoes";

const shoes = [
  {
    name: "Air Max 270",
    brand: "nike",
    price: 150,
    currency: "USD",
    category: "Running",
    sizes: [38, 39, 40, 41, 42, 43, 44],
    color: "Black",
    stock: 25,
  },
  {
    name: "Air Force 1 '07",
    brand: "nike",
    price: 120,
    currency: "USD",
    category: "Lifestyle",
    sizes: [38, 39, 40, 41, 42, 43],
    color: "White",
    stock: 30,
  },
  {
    name: "Dunk Low Retro",
    brand: "nike",
    price: 135,
    currency: "USD",
    category: "Lifestyle",
    sizes: [39, 40, 41, 42, 43, 44],
    color: "White/Red",
    stock: 18,
  },
  {
    name: "Ultraboost Light",
    brand: "adidas",
    price: 180,
    currency: "USD",
    category: "Running",
    sizes: [39, 40, 41, 42, 43, 44],
    color: "Black",
    stock: 20,
  },
  {
    name: "Samba OG",
    brand: "adidas",
    price: 100,
    currency: "USD",
    category: "Lifestyle",
    sizes: [38, 39, 40, 41, 42, 43],
    color: "White/Black",
    stock: 35,
  },
];

async function seed() {
  for (const shoe of shoes) {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: shoe,
        }),
      });

      if (!response.ok) {
        const error = await response.text();
        console.error(`❌ Failed: ${shoe.name}`);
        console.error(error);
        continue;
      }

      const result = await response.json();

      console.log(`✅ Created: ${shoe.name}`);
      console.log(`   ID: ${result.data.documentId}`);
    } catch (error) {
      console.error(`❌ Error: ${shoe.name}`, error);
    }
  }

  console.log("🎉 Seeding completed!");
}

seed();
