// Define an array of product objects, each representing a jewelry item
export const products = [
  {
    id: "id1",
    name: "The Gianna Ring",
    description: "Diamond Ring In 18Kt Yellow Gold (3.33 gram) with Diamonds (0.2650 Ct)",
    price: 52000,
    brand: "Malabar",
    category: "Ring",
    inStock: true,
    // Images representing different colors of the ring
    images: [
      {
        color: "Gold",
        colorCode: "#ffd700",
        image: "https://kinclimg9.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIDG0319R180_YAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-66194.png"
      },
      {
        color: "Silver",
        colorCode: "#c0c0c0",
        image: "https://kinclimg4.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BICM0337R03_WAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-68721.png"
      },
    ],
    // Reviews associated with the product
    reviews: [
      {
        rating: 5
      }
    ]
  },
  {
    id: "id2",
    name: "The Akarui Necklace",
    description: "Diamond Necklace In 18Kt Yellow Gold (7.08 gram) with Diamonds (0.6130 Ct)",
    price: 124999,
    brand: "",
    category: "Necklace",
    inStock: true,
    // Images representing the necklace
    images: [
      {
        image: "https://kinclimg7.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIKR0902N53_YAA18DIG4XXXXXXXX_ABCD00-PICS-00003-1024-69589.png"
      }
    ],
    // Reviews associated with the product
    reviews: [
      {
        rating: 3
      }
    ]
  },
  {
    id: "id3",
    name: "The Divija Gold Bracelet",
    description: "",
    price: 28000,
    brand: "",
    category: "Bangle",
    inStock: true,
    // Images representing the bracelet
    images: [
      {
        image: "https://kinclimg7.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BVCK0530V23_YAA22XXXXXXXXXXXX_ABCD00-PICS-00000-1024-35261.png"
      }
    ],
    // No reviews for this product
    reviews: []
  },
  {
    id: "id4",
    name: "The Jyotsana Earrings",
    description: "",
    price: 24999,
    brand: "",
    category: "Earring",
    inStock: true,
    // Images representing the earrings with different colors
    images: [
      {
        color: "Gold",
        colorCode: "#ffd700",
        image: "https://kinclimg4.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIVS0052D04_YAA18DIG6XXXXXXXX_ABCD00-PICS-00004-1024-16440.png",
      },
    ],
    // Reviews associated with the product
    reviews: [
      {
        id: "id4",
        userId: "ud1",
        productId: "pd1",
        rating: 5,
        comment: "Good",
        createdDate: "2023-07-06T06:08:33.067Z",
        user: {
          // User details for the review
          id: "ud1",
          name: "Amith",
          email: "",
          emailVerified: null,
          image: "",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
      {
        id: "id4",
        userId: "ud2",
        productId: "pd2",
        rating: 3,
        comment: "Good Product",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          // User details for the review
          id: "ud2",
          name: "Amith",
          email: "",
          emailVerified: null,
          image: "",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "id5",
    name: "The Shaey Regular Maang Tikka",
    description: "Diamond And White Pearl FD Maang Tikka In 18Kt Yellow Gold (4.74 gram) with Diamonds (0.1150 Ct)",
    price: 49999,
    brand: "",
    category: "Maang Tika",
    inStock: true,
    // Images representing different colors of the ring
    images: [
      {
        color: "Gold",
        colorCode: "#ffd700",
        image: "https://kinclimg9.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIMA0835M08_YAA18DIG6PRWFXXXX_ABCD00-PICS-00002-1024-61940.png"
      },
      {
        color: "Silver",
        colorCode: "#c0c0c0",
        image: "https://kinclimg4.bluestone.com/f_webp,c_scale,w_200,b_rgb:f0f0f0/giproduct/BT-P57_WAA18XXXXDIG4XXXX_ABCD00-PICS-00004-1024-12231.png"
      },
    ],
    // Reviews associated with the product
    reviews: [
      {
        rating: 5
      }
    ]
  },
  {
    id: "id6",
    name: "The Flaneur Anklet",
    description: "White Pearl HD Anklet In 18Kt Yellow Gold (2.43 gram)",
    price: 18099,
    brand: "",
    category: "Anklet",
    inStock: true,
    // Images representing the necklace
    images: [
      {
        image: "https://kinclimg1.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIAV0818A13_YAA18PRWHXXXXXXXX_ABCD00-PICS-00000-1024-61166.png"
      }
    ],
    // Reviews associated with the product
    reviews: [
      {
        rating: 3
      }
    ]
  },
  {
    id: "id7",
    name: "The Arete Stud Earrings",
    description: "Diamond Earrings In 18Kt Yellow Gold (7.344 gram) with Diamonds (0.5850 Ct)",
    price: 123999,
    brand: "",
    category: "Earring",
    inStock: true,
    // Images representing the earrings with different colors
    images: [
      {
        color: "Gold",
        colorCode: "#ffd700",
        image: "https://kinclimg0.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIID0378S39_YAA18DIG6XXXXXXXX_ABCD00-PICS-00004-1024-21666.png",
      },
    ],
    // Reviews associated with the product
    reviews: [
      {
        id: "id7",
        userId: "ud1",
        productId: "pd1",
        rating: 5,
        comment: "Good",
        createdDate: "2023-07-06T06:08:33.067Z",
        user: {
          // User details for the review
          id: "ud2",
          name: "Shamith",
          email: "",
          emailVerified: null,
          image: "",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
      {
        id: "id7",
        userId: "ud2",
        productId: "pd2",
        rating: 3,
        comment: "Good Product",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          // User details for the review
          id: "ud2",
          name: "Munna",
          email: "",
          emailVerified: null,
          image: "",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "id8",
    name: "The Avnita Pendant",
    description: "Diamond Pendant In 18Kt Yellow Gold (0.75 gram) with Diamonds (0.0330 Ct)",
    price: 10999,
    brand: "",
    category: "Pendant",
    inStock: true,
    // Images representing different colors of the ring
    images: [
      {
        color: "Gold",
        colorCode: "#ffd700",
        image: "https://kinclimg1.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIIP0359P04_YAA18DIG6XXXXXXXX_ABCD00-PICS-00004-1024-35451.png"
      },
      {
        color: "Silver",
        colorCode: "#c0c0c0",
        image: "https://kinclimg4.bluestone.com/f_webp,c_scale,w_200,b_rgb:f0f0f0/giproduct/BT-P57_WAA18XXXXDIG4XXXX_ABCD00-PICS-00004-1024-12231.png"
      },
    ],
    // Reviews associated with the product
    reviews: [
      {
        rating: 5
      }
    ]
  },

];
