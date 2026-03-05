export const products = [
  {
    id: 1,
    name: "Turmeric Powder",
    image: "/products/turmeric 500.png",
    category: "Basic",
    tag: "Best Seller",
    price: 45,
    mrp: 50,
    rating: 4.8,
    reviewsCount: 124,
    sizes: ["500g", "250g", "100g", "50g"],
    sizePrices: {
      "500g": { price: 210, mrp: 230 },
      "250g": { price: 110, mrp: 125 },
      "100g": { price: 45, mrp: 50 },
      "50g": { price: 25, mrp: 30 }
    },
    description: "Pure and authentic turmeric powder, cold-ground to retain natural oils and potency.",
    stock: 50
  },
  {
    id: 2,
    name: "Dhaniya Powder",
    image: "/products/Dhaniya 500.png",
    category: "Basic",
    tag: "Most Loved",
    price: 35,
    mrp: 40,
    rating: 4.7,
    reviewsCount: 89,
    sizes: ["500g", "250g", "100g", "50g"],
    sizePrices: {
      "500g": { price: 160, mrp: 180 },
      "250g": { price: 85, mrp: 95 },
      "100g": { price: 35, mrp: 40 },
      "50g": { price: 20, mrp: 25 }
    },
    description: "Freshly ground coriander seeds, providing a rich aroma and earthy flavor to your dishes.",
    stock: 45
  },
  {
    id: 3,
    name: "Chilli Powder",
    image: "/products/chilli 500.png",
    category: "Basic",
    tag: "Best Seller",
    price: 55,
    mrp: 60,
    rating: 4.9,
    reviewsCount: 210,
    sizes: ["500g", "250g", "100g", "50g"],
    sizePrices: {
      "500g": { price: 260, mrp: 280 },
      "250g": { price: 135, mrp: 150 },
      "100g": { price: 55, mrp: 60 },
      "50g": { price: 30, mrp: 35 }
    },
    description: "High-quality red chillies, sun-dried and ground to perfection for the perfect heat level.",
    stock: 30
  },
  {
    id: 4,
    name: "Kulambu Thool",
    image: "/products/kulambu thool.png",
    category: "Mix",
    tag: "Trending",
    price: 120,
    mrp: 140,
    rating: 4.6,
    reviewsCount: 56,
    sizes: ["500g", "200g", "100g", "50g"],
    sizePrices: {
      "500g": { price: 280, mrp: 310 },
      "200g": { price: 120, mrp: 140 },
      "100g": { price: 65, mrp: 75 },
      "50g": { price: 35, mrp: 45 }
    },
    description: "A traditional South Indian house-made curry powder, perfect for all types of gravies.",
    stock: 20
  },
  {
    id: 5,
    name: "Idly Podi",
    image: "/products/idli 500.png",
    category: "Mix",
    tag: "Most Loved",
    price: 80,
    mrp: 95,
    rating: 4.9,
    reviewsCount: 178,
    sizes: ["250g", "100g", "50g"],
    sizePrices: {
      "250g": { price: 190, mrp: 210 },
      "100g": { price: 80, mrp: 95 },
      "50g": { price: 45, mrp: 55 }
    },
    description: "The perfect side for idly and dosa. Crunchy, spicy, and full of flavor.",
    stock: 15
  },
  {
    id: 6,
    name: "Sambar Powder",
    image: "/products/sambar 500.png",
    category: "Mix",
    tag: "Best Seller",
    price: 90,
    mrp: 110,
    rating: 4.8,
    reviewsCount: 143,
    sizes: ["500g", "250g", "100g", "50g"],
    sizePrices: {
      "500g": { price: 420, mrp: 460 },
      "250g": { price: 215, mrp: 240 },
      "100g": { price: 90, mrp: 110 },
      "50g": { price: 50, mrp: 60 }
    },
    description: "Experience the authentic taste of South Indian Sambar with our secret blend of spices.",
    stock: 40
  },
  {
    id: 7,
    name: "Rasam Powder",
    image: "/products/rasam powder 500.png",
    category: "Mix",
    tag: "Trending",
    price: 75,
    mrp: 85,
    rating: 4.7,
    reviewsCount: 67,
    sizes: ["250g", "100g", "50g"],
    sizePrices: {
      "250g": { price: 180, mrp: 200 },
      "100g": { price: 75, mrp: 85 },
      "50g": { price: 40, mrp: 50 }
    },
    description: "Makes perfectly tangy and aromatic rasam every time. Healthy and digestive.",
    stock: 25
  },
  {
    id: 8,
    name: "Paruppu Podi",
    image: "/products/parupu 500.png",
    category: "Mix",
    tag: "Most Loved",
    price: 65,
    mrp: 75,
    rating: 4.6,
    reviewsCount: 42,
    sizes: ["250g", "100g", "50g"],
    sizePrices: {
      "250g": { price: 150, mrp: 170 },
      "100g": { price: 65, mrp: 75 },
      "50g": { price: 35, mrp: 45 }
    },
    description: "Lentil-based spice powder that's perfect when mixed with hot rice and ghee.",
    stock: 18
  },
  {
    id: 9,
    name: "Chicken Masala",
    image: "/products/chicken 500.png",
    category: "Non-Veg",
    tag: "Best Seller",
    price: 70,
    mrp: 80,
    rating: 4.9,
    reviewsCount: 320,
    sizes: ["500g", "200g", "100g", "50g"],
    sizePrices: {
      "500g": { price: 320, mrp: 350 },
      "200g": { price: 135, mrp: 155 },
      "100g": { price: 70, mrp: 80 },
      "50g": { price: 38, mrp: 45 }
    },
    description: "Premium blend of spices for the perfect home-style chicken curry.",
    stock: 60
  },
  {
    id: 10,
    name: "Curry Masala",
    image: "/products/curry 500.png",
    category: "Mix",
    tag: "Trending",
    price: 60,
    mrp: 70,
    rating: 4.5,
    reviewsCount: 38,
    sizes: ["200g", "100g", "50g"],
    sizePrices: {
      "200g": { price: 115, mrp: 130 },
      "100g": { price: 60, mrp: 70 },
      "50g": { price: 32, mrp: 40 }
    },
    description: "All-purpose masala for all your vegetable and meat gravies.",
    stock: 22
  },
  {
    id: 11,
    name: "Chicken 65 Masala",
    image: "/products/chicken 65 500.png",
    category: "Non-Veg",
    tag: "Most Loved",
    price: 304,
    mrp: 320,
    rating: 4.8,
    reviewsCount: 33,
    sizes: ["500g", "200g", "100g", "50g"],
    sizePrices: {
      "500g": { price: 304, mrp: 320 },
      "200g": { price: 125, mrp: 140 },
      "100g": { price: 65, mrp: 75 },
      "50g": { price: 35, mrp: 45 }
    },
    stock: 4,
    description: "Shree VV Chicken 65 Masala brings the bold, spicy flavor and crispy texture of the famous Indian appetizer, Chicken 65, to your kitchen. This flavorful non-veg masala is crafted to deliver the perfect balance of heat and aroma, helping you recreate the restaurant-style experience at home. Whether it's for a family dinner or a special occasion, this masala ensures that your homemade Chicken 65 will be a crowd-pleaser with its vibrant color and rich taste.",
    ingredients: [
      "500g chicken (boneless, cut into small pieces)",
      "2 tablespoons Shree VV Chicken 65 Masala",
      "1/2 cup yogurt",
      "1 tablespoon ginger-garlic paste",
      "2 tablespoons cornflour",
      "1 egg (optional)",
      "Oil for deep frying"
    ],
    instructions: [
      {
        title: "Marinate the Chicken",
        text: "In a bowl, mix the chicken pieces with Shree VV Chicken 65 Masala, yogurt, ginger-garlic paste, cornflour, and egg (if using). Let it marinate for at least 30 minutes to allow the flavors to infuse."
      },
      {
        title: "Fry the Chicken",
        text: "Heat oil in a deep pan. Fry the marinated chicken pieces in batches until they are crispy and golden brown. Drain excess oil by placing the chicken on paper towels."
      },
      {
        title: "Garnish and Serve",
        text: "Garnish with fried curry leaves and lemon wedges. Serve hot with a side of onion rings as a standalone appetizer."
      }
    ],
    highlights: [
      {
        title: "Perfect Spice Blend",
        text: "Our Chicken 65 Masala is a convenient, ready-to-use mix that contains the right balance of spices, including chili, cumin, and coriander. It ensures your dish has the ideal level of spiciness and flavor every time."
      },
      {
        title: "Time-Saving Solution",
        text: "This masala eliminates the need for multiple ingredients, making it quick and easy to prepare Chicken 65. It's perfect for when you want a delicious snack or appetizer without spending too much time in the kitchen."
      }
    ]
  },
  {
    id: 12,
    name: "Chilli Chicken Masala",
    image: "/products/chilli chicken 500.png",
    category: "Non-Veg",
    tag: "Trending",
    price: 65,
    mrp: 75,
    rating: 4.7,
    reviewsCount: 54,
    sizes: ["200g", "100g", "50g"],
    sizePrices: {
      "200g": { price: 125, mrp: 140 },
      "100g": { price: 65, mrp: 75 },
      "50g": { price: 35, mrp: 45 }
    },
    description: "The secret to restaurant-style chilli chicken at home.",
    stock: 12
  },
  {
    id: 13,
    name: "Fish Kulambu Masala",
    image: "/products/fish kulambu 500.png",
    category: "Non-Veg",
    tag: "Trending",
    price: 85,
    mrp: 100,
    rating: 4.8,
    reviewsCount: 92,
    sizes: ["250g", "100g", "50g"],
    sizePrices: {
      "250g": { price: 200, mrp: 230 },
      "100g": { price: 85, mrp: 100 },
      "50g": { price: 45, mrp: 55 }
    },
    description: "Authentic coastal flavors for a delicious fish curry.",
    stock: 28
  },
  {
    id: 14,
    name: "Mutton Masala",
    image: "/products/mutton 500.png",
    category: "Non-Veg",
    tag: "Trending",
    price: 150,
    mrp: 175,
    rating: 4.9,
    reviewsCount: 110,
    sizes: ["500g", "200g", "100g", "50g"],
    sizePrices: {
      "500g": { price: 360, mrp: 400 },
      "200g": { price: 150, mrp: 175 },
      "100g": { price: 80, mrp: 95 },
      "50g": { price: 45, mrp: 55 }
    },
    description: "Rich and robust spices specially blended for mutton dishes.",
    stock: 10
  },
  {
    id: 15,
    name: "Garam Masala",
    image: "/products/garam 500.png",
    category: "Basic",
    tag: "Most Loved",
    price: 110,
    mrp: 130,
    rating: 4.9,
    reviewsCount: 245,
    sizes: ["250g", "100g", "50g"],
    sizePrices: {
      "250g": { price: 260, mrp: 300 },
      "100g": { price: 110, mrp: 130 },
      "50g": { price: 60, mrp: 75 }
    },
    description: "The essential blend of warming spices for Indian cooking.",
    stock: 35
  },
  {
    id: 16,
    name: "Fish Fry Masala",
    image: "/products/FIshfry 500.png",
    category: "Non-Veg",
    tag: "Trending",
    price: 63,
    mrp: 75,
    rating: 4.7,
    reviewsCount: 48,
    sizes: ["100g", "50g"],
    sizePrices: {
      "100g": { price: 63, mrp: 75 },
      "50g": { price: 35, mrp: 45 }
    },
    description: "Crispy and spicy masala for the perfect fish fry.",
    stock: 14
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Ananya Iyer",
    text: "The Kulambu Thool is exactly like how my grandmother used to make. Authentic and pure.",
    rating: 5
  },
  {
    id: 2,
    name: "Chef Rajesh",
    text: "As a professional chef, I vouch for the quality of Shree VV Masala. Their Chicken Masala is top-notch.",
    rating: 5
  },
  {
    id: 3,
    name: "Meenakshi Sundaram",
    text: "The Idly Podi is our family favorite. Perfectly balanced spice and flavor.",
    rating: 5
  }
];
