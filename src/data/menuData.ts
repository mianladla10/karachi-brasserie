export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  popular?: boolean;
  featured?: boolean;
  badge?: string;
}

export const MENU_CATEGORIES = [
  'All',
  'Featured',
  'Soups',
  'Starters',
  'Salads',
  'Sandwiches',
  'Burgers',
  'Pizza',
  'Chicken',
  'Steak',
  'Stir Fry',
  'Pasta',
  'Seafood',
  'Sides',
  'Coffee',
  'Mocktails',
  'Milkshakes',
  'Smoothies',
  'Desserts'
] as const;

export type MenuCategory = (typeof MENU_CATEGORIES)[number];

export const ALL_MENU_ITEMS: MenuItem[] = [
  // --- FEATURED DISHES (from the prompt requirements) ---
  {
    id: 'parmesan-crusted-chicken',
    name: 'Parmesan Crusted Chicken',
    description: 'Parmesan crusted chicken fillet served with mashed potatoes, sauté vegetables, and cheese sauce',
    price: 1560,
    category: 'Chicken',
    image: '/src/assets/images/parmesan_chicken_1792237135987.jpg',
    popular: true,
    featured: true,
    badge: "Guest Favorite"
  },
  {
    id: 'chicken-fajita-pizza',
    name: 'Chicken Fajita Pizza',
    description: 'House special fajita sauce, chicken, olives, sweet corn, jalapeno, tomato, onion',
    price: 1540,
    category: 'Pizza',
    image: '/src/assets/images/fajita_pizza_1792237136155.jpg',
    popular: true,
    featured: true,
    badge: "Artisanal Crust"
  },
  {
    id: 'grilled-chicken-sandwich',
    name: 'Grilled Chicken Sandwich',
    description: 'Grilled chicken, cheese, focaccia, green lettuce',
    price: 1360,
    category: 'Sandwiches',
    image: '/src/assets/images/chicken_sandwich_1792237136658.jpg',
    popular: true,
    featured: true,
    badge: "Fresh Baked"
  },
  {
    id: 'brownie-with-ice-cream',
    name: 'Brownie with Ice Cream',
    description: 'Warm fudge brownie topped with rich vanilla bean ice cream and chocolate glaze drizzle',
    price: 880,
    category: 'Desserts',
    image: '/src/assets/images/brownie_dessert_1792237137046.jpg',
    popular: true,
    featured: true,
    badge: "Sweet Indulgence"
  },

  // --- SOUPS ---
  {
    id: 'chicken-broth',
    name: 'Chicken Broth',
    description: 'Chicken bones with sauté vegetables',
    price: 620,
    category: 'Soups'
  },
  {
    id: 'mushroom-soup',
    name: 'Mushroom Soup',
    description: 'Mushroom, onion, garlic in a velvety aromatic broth',
    price: 790,
    category: 'Soups'
  },
  {
    id: 'roasted-tomato-soup',
    name: 'Roasted Tomato Soup',
    description: 'Roast tomato, onion, garlic, basil',
    price: 690,
    category: 'Soups'
  },
  {
    id: 'cream-of-chicken',
    name: 'Cream of Chicken',
    description: 'Chicken, onion, garlic in creamy velvety soup',
    price: 740,
    category: 'Soups'
  },

  // --- STARTERS ---
  {
    id: 'hummus',
    name: 'Hummus',
    description: 'Served with crackers, fresh carrot and crisp cucumber',
    price: 690,
    category: 'Starters'
  },
  {
    id: 'buffalo-wings',
    name: 'Buffalo Wings',
    description: 'Crispy chicken wings tossed in tangy buffalo sauce',
    price: 1090,
    category: 'Starters',
    popular: true
  },
  {
    id: 'thai-chicken-skewers',
    name: 'Thai Chicken Skewers',
    description: 'Tender chicken skewers in Thai chilli garlic glaze',
    price: 920,
    category: 'Starters'
  },
  {
    id: 'popcorn-chicken',
    name: 'Popcorn Chicken',
    description: 'Crispy chicken cubes in chilli garlic sauce',
    price: 890,
    category: 'Starters'
  },
  {
    id: 'chilli-prawns',
    name: 'Chilli Prawns',
    description: 'Crispy prawns tossed in garlic, red chilli, butter',
    price: 1320,
    category: 'Starters',
    popular: true
  },
  {
    id: 'loaded-cheese-fries',
    name: 'Loaded Cheese Fries',
    description: 'Fries loaded with chicken, cheese, olives, jalapeno, salsa and sour cream',
    price: 1250,
    category: 'Starters',
    popular: true
  },
  {
    id: 'chipotle-chicken-tacos',
    name: 'Chipotle Chicken Tacos',
    description: 'Pair of chicken tacos with lettuce and salsa',
    price: 1200,
    category: 'Starters'
  },
  {
    id: 'prawn-tempura',
    name: 'Prawn Tempura',
    description: 'Battered fried prawns served with sweet chilli dipping sauce',
    price: 1350,
    category: 'Starters'
  },
  {
    id: 'french-fries-starter',
    name: 'French Fries (250g)',
    description: 'Crispy golden seasoned fries served hot',
    price: 580,
    category: 'Starters'
  },

  // --- SALADS ---
  {
    id: 'caesar-salad',
    name: 'Caesar Salad',
    description: 'Crispy salad, grilled chicken, egg, croutons, parmesan in our house special dressing',
    price: 1120,
    category: 'Salads',
    popular: true
  },
  {
    id: 'quinoa-salad',
    name: 'Quinoa Salad',
    description: 'Quinoa, green leaves, feta, roasted almond in raspberry dressing',
    price: 1160,
    category: 'Salads'
  },
  {
    id: 'mediterranean-salad',
    name: 'Mediterranean Salad',
    description: 'Crispy salad, grilled chicken, feta, olive, peanuts in vinaigrette dressing',
    price: 1040,
    category: 'Salads'
  },
  {
    id: 'greek-salad',
    name: 'Greek Salad',
    description: 'Grilled chicken, green leaves, olive, cherry tomato in vinaigrette dressing',
    price: 990,
    category: 'Salads'
  },

  // --- SANDWICHES ---
  {
    id: 'hummus-toast',
    name: 'Hummus Toast',
    description: 'Country bread, hummus, served with garden salad',
    price: 780,
    category: 'Sandwiches'
  },
  {
    id: 'club-sandwich',
    name: 'Club Sandwich',
    description: 'Grilled chicken, beef pepperoni, omelette, toasted country slices',
    price: 1590,
    category: 'Sandwiches',
    popular: true
  },
  {
    id: 'chicken-chimichurri-sandwich',
    name: 'Chicken Chimichurri Sandwich',
    description: 'Grilled chicken, chimichurri, artisanal focaccia, melted cheese',
    price: 1390,
    category: 'Sandwiches'
  },
  {
    id: 'steak-sandwich',
    name: 'Steak Sandwich',
    description: 'Beef steak, caramelised onion, French mustard sauce on toasted artisanal bread',
    price: 1550,
    category: 'Sandwiches',
    popular: true
  },

  // --- BURGERS ---
  {
    id: 'classic-cheese-burger',
    name: 'Classic Cheese Burger',
    description: 'Ground beef patty, fresh lettuce, onion, tomato, melted cheddar cheese',
    price: 1390,
    category: 'Burgers',
    popular: true
  },
  {
    id: 'jalapeno-burger',
    name: 'Jalapeno Burger',
    description: 'Ground beef patty, lettuce, onion, tomato, signature jalapeno sauce',
    price: 1420,
    category: 'Burgers'
  },
  {
    id: 'swiss-mushroom-burger',
    name: 'Swiss Mushroom Burger',
    description: 'Ground beef patty, sautéed mushrooms, lettuce, onion, tomato, melted Swiss cheese',
    price: 1400,
    category: 'Burgers'
  },
  {
    id: 'grilled-chicken-burger',
    name: 'Grilled Chicken Burger',
    description: 'Grilled chicken breast, honey mustard, green chilli, crisp lettuce',
    price: 1350,
    category: 'Burgers'
  },
  {
    id: 'crispy-chicken-burger',
    name: 'Crispy Chicken Burger',
    description: 'Crispy chicken fillet, lettuce, sriracha mayo, spicy jalapeno',
    price: 1320,
    category: 'Burgers',
    popular: true
  },
  {
    id: 'trio-of-sliders',
    name: 'Trio of Sliders',
    description: 'Three gourmet beef sliders: classic, jalapeno, and sautéed mushroom',
    price: 1400,
    category: 'Burgers',
    popular: true
  },

  // --- PIZZA ---
  {
    id: 'margarita-pizza',
    name: 'Margarita',
    description: 'Classic marinara, mozzarella, shaved parmesan, aromatic basil',
    price: 1300,
    category: 'Pizza'
  },
  {
    id: 'pepperoni-pizza',
    name: 'Pepperoni Pizza',
    description: 'Rich marinara, sliced beef pepperoni, fresh mozzarella, sweet basil',
    price: 1480,
    category: 'Pizza',
    image: '/src/assets/images/pizza_hero_1792237134387.jpg',
    popular: true
  },
  {
    id: 'chicken-jalapeno-pizza',
    name: 'Chicken Jalapeno',
    description: 'Marinara, chicken chunks, jalapenos, black olives, onion, sliced mushrooms',
    price: 1440,
    category: 'Pizza'
  },
  {
    id: 'brasserie-special-pizza',
    name: 'Brasserie Special',
    description: 'Marinara, mozzarella, tender chicken, seasoned beef, bell peppers, olives, mushrooms',
    price: 1560,
    category: 'Pizza',
    popular: true
  },

  // --- CHICKEN (MAINS) ---
  {
    id: 'moroccan-chicken',
    name: 'Moroccan Chicken',
    description: 'Grilled chicken fillet, sambal sauce served with brown rice and sauté vegetables',
    price: 1550,
    category: 'Chicken',
    image: '/src/assets/images/moroccan_chicken_1792237137671.jpg',
    popular: true
  },
  {
    id: 'tarragon-chicken',
    name: 'Tarragon Chicken',
    description: 'Grilled chicken fillet, tarragon sauce served with mashed potato and sauté vegetables',
    price: 1440,
    category: 'Chicken'
  },
  {
    id: 'jalapeno-chicken',
    name: 'Jalapeno Chicken',
    description: 'Grilled chicken fillet, jalapeno cream sauce served with mashed potato and sauté vegetables',
    price: 1460,
    category: 'Chicken'
  },

  // --- STEAK ---
  {
    id: 'pepper-steak',
    name: 'Pepper Steak',
    description: 'Beef steak, creamy black pepper sauce, served with mashed potatoes and fresh vegetables',
    price: 2440,
    category: 'Steak',
    popular: true
  },
  {
    id: 'mushroom-steak',
    name: 'Mushroom Steak',
    description: 'Beef steak, creamy mushroom sauce, served with roast potatoes and vegetables',
    price: 2520,
    category: 'Steak',
    popular: true
  },
  {
    id: 'chimichurri-steak',
    name: 'Chimichurri Steak',
    description: 'Beef steak, zesty chimichurri sauce, served with creamy spinach and roasted garlic',
    price: 2480,
    category: 'Steak'
  },
  {
    id: 'tuscun-steak',
    name: 'Tuscan Steak',
    description: 'Beef steak, fresh herbs, sundried tomato in basil parmesan served with mashed potato and sauté vegetables',
    price: 2550,
    category: 'Steak',
    popular: true
  },

  // --- STIR FRY ---
  {
    id: 'classic-kung-pao',
    name: 'Classic Kung Pao',
    description: 'Stir fried chicken in kung pao sauce with peanuts, spring onion, red onion and dried red chilli',
    price: 1250,
    category: 'Stir Fry'
  },
  {
    id: 'thai-holy-basil',
    name: 'Thai Holy Basil',
    description: 'Traditional Thai stir fry chicken in red chilli and basil served with steamed rice',
    price: 1300,
    category: 'Stir Fry'
  },
  {
    id: 'beef-chilli-dry',
    name: 'Beef Chilli Dry',
    description: 'Stir fried beef with green chilli, red chilli and ginger, in our classic oyster sesame sauce',
    price: 1360,
    category: 'Stir Fry',
    popular: true
  },
  {
    id: 'crispy-beef',
    name: 'Crispy Beef',
    description: 'Crispy beef in dark soy sauce, topped with chilli flakes, served with steamed rice',
    price: 1400,
    category: 'Stir Fry'
  },

  // --- PASTA ---
  {
    id: 'spaghetti-bolognese',
    name: 'Spaghetti Bolognese',
    description: 'Ground beef, slow-simmered tomato sauce, coriander, fresh basil, aged parmesan',
    price: 1580,
    category: 'Pasta',
    popular: true
  },
  {
    id: 'fettucine-alfredo',
    name: 'Fettucine Alfredo',
    description: 'Creamy alfredo sauce, grilled chicken, parmesan, served with herb garlic toast',
    price: 1400,
    category: 'Pasta',
    image: '/src/assets/images/creamy_pasta_1792237138078.jpg',
    popular: true
  },
  {
    id: 'penne-arrabbiata',
    name: 'Penne Arrabbiata',
    description: 'Grilled chicken, creamy red sauce, mushroom, sliced olives',
    price: 1400,
    category: 'Pasta'
  },
  {
    id: 'spaghetti-chilli-lime',
    name: 'Spaghetti with Chilli & Lime',
    description: 'Succulent prawn, cherry tomato, garlic, spicy chilli, fresh zesty lime',
    price: 1490,
    category: 'Pasta'
  },
  {
    id: 'beef-lasagna',
    name: 'Beef Lasagna',
    description: 'Ground beef, rich tomato sauce, white béchamel sauce, mozzarella and parmesan cheese layers',
    price: 1460,
    category: 'Pasta',
    popular: true
  },

  // --- SEAFOOD ---
  {
    id: 'fish-n-chips',
    name: 'Fish N Chips',
    description: 'Batter-fried red snapper served with tartar sauce and crispy french fries',
    price: 1490,
    category: 'Seafood',
    popular: true
  },
  {
    id: 'red-snapper-garlic-butter',
    name: 'Red Snapper in Garlic Butter',
    description: 'Red snapper in garlic butter sauce, served with mashed potatoes, sauté vegetables',
    price: 1820,
    category: 'Seafood'
  },
  {
    id: 'red-snapper-thai-chilli',
    name: 'Red Snapper with Thai Red Chilli',
    description: 'Pan-seared red snapper, cherry tomato, roasted garlic, Thai chilli',
    price: 1890,
    category: 'Seafood'
  },

  // --- SIDES ---
  {
    id: 'mashed-potatoes',
    name: 'Mashed Potatoes',
    description: 'Creamy buttered mashed potatoes',
    price: 220,
    category: 'Sides'
  },
  {
    id: 'sauteed-vegetables',
    name: 'Sautéed Vegetables',
    description: 'Fresh seasonal vegetables tossed in herb butter',
    price: 220,
    category: 'Sides'
  },
  {
    id: 'creamy-spinach',
    name: 'Creamy Spinach',
    description: 'Slow-cooked velvety creamed spinach',
    price: 250,
    category: 'Sides'
  },
  {
    id: 'french-fries-side',
    name: 'French Fries',
    description: 'Golden seasoned skin-on fries',
    price: 250,
    category: 'Sides'
  },
  {
    id: 'garlic-bread',
    name: 'Garlic Bread',
    description: 'Toasted baguette with garlic herb butter',
    price: 220,
    category: 'Sides'
  },

  // --- COFFEE & BEVERAGES ---
  {
    id: 'espresso',
    name: 'Espresso',
    description: 'Rich concentrated shot of dark roasted espresso',
    price: 390,
    category: 'Coffee'
  },
  {
    id: 'double-espresso',
    name: 'Double Espresso',
    description: 'Double shot of aromatic Italian espresso blend',
    price: 460,
    category: 'Coffee'
  },
  {
    id: 'americano',
    name: 'Americano',
    description: 'Espresso topped with filtered hot water',
    price: 540,
    category: 'Coffee'
  },
  {
    id: 'cafe-latte',
    name: 'Café Latte',
    description: 'Espresso with steamed textured milk and microfoam',
    price: 620,
    category: 'Coffee'
  },
  {
    id: 'flat-white',
    name: 'Flat White',
    description: 'Velvety microfoam over a double ristretto',
    price: 620,
    category: 'Coffee'
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    description: 'Espresso, steamed milk, and thick frothy foam dusting',
    price: 620,
    category: 'Coffee'
  },
  {
    id: 'cafe-mocha',
    name: 'Café Mocha',
    description: 'Rich cocoa, espresso, and silky steamed milk',
    price: 680,
    category: 'Coffee'
  },
  {
    id: 'caramel-macchiato',
    name: 'Caramel Macchiato',
    description: 'Steamed milk with vanilla syrup, marked with espresso and caramel drizzle',
    price: 680,
    category: 'Coffee'
  },
  {
    id: 'hot-chocolate',
    name: 'Hot Chocolate',
    description: 'Decadent melted cocoa and warm cream',
    price: 700,
    category: 'Coffee'
  },
  {
    id: 'affogato',
    name: 'Affogato',
    description: 'Scoop of premium vanilla gelato drowned in a hot shot of espresso',
    price: 780,
    category: 'Coffee'
  },
  {
    id: 'frappe-beverage',
    name: 'Frappe (Caramel / Vanilla / Mocha)',
    description: 'Blended iced coffee indulgence with whipped cream',
    price: 760,
    category: 'Coffee'
  },
  {
    id: 'iced-latte',
    name: 'Iced Latte',
    description: 'Chilled milk and bold espresso poured over crystal ice',
    price: 720,
    category: 'Coffee'
  },
  {
    id: 'iced-caramel-macchiato',
    name: 'Iced Caramel Macchiato',
    description: 'Layers of chilled milk, caramel syrup, espresso and ice',
    price: 760,
    category: 'Coffee'
  },
  {
    id: 'cardamom-tea',
    name: 'Cardamom Tea',
    description: 'Traditional aromatic spiced tea infused with fragrant green cardamom',
    price: 380,
    category: 'Coffee'
  },
  {
    id: 'mixed-tea',
    name: 'Mixed Chai / Doodh Patti',
    description: 'Rich slow-simmered Pakistani mixed tea',
    price: 400,
    category: 'Coffee'
  },

  // --- MOCKTAILS ---
  {
    id: 'mint-lemonade',
    name: 'Mint Lemonade',
    description: 'Fresh crushed garden mint, zesty lime, crushed ice, touch of rock salt',
    price: 580,
    category: 'Mocktails',
    popular: true
  },
  {
    id: 'electric-blue',
    name: 'Electric Blue',
    description: 'Blue curaçao citrus infusion with sparkling soda and crushed ice',
    price: 600,
    category: 'Mocktails'
  },
  {
    id: 'lemon-iced-tea',
    name: 'Lemon Iced Tea',
    description: 'Slow-brewed black tea infused with crisp lemon and crushed ice',
    price: 600,
    category: 'Mocktails'
  },
  {
    id: 'peach-iced-tea',
    name: 'Peach Iced Tea',
    description: 'Fragrant peach essence with chilled brewed tea',
    price: 600,
    category: 'Mocktails'
  },
  {
    id: 'pina-colada',
    name: 'Pina Colada',
    description: 'Velvety coconut cream, fresh pineapple juice, and crushed ice',
    price: 660,
    category: 'Mocktails',
    popular: true
  },
  {
    id: 'apple-mint-cooler',
    name: 'Apple Mint Cooler',
    description: 'Crisp green apple, muddled fresh mint, soda splash',
    price: 640,
    category: 'Mocktails'
  },

  // --- MILKSHAKES (GELATO MILKSHAKES) ---
  {
    id: 'vanilla-milkshake',
    name: 'Vanilla Gelato Milkshake',
    description: 'Handcrafted creamy vanilla bean gelato milkshake',
    price: 700,
    category: 'Milkshakes',
    image: '/src/assets/images/drinks_smoothies_1792237138542.jpg',
    popular: true
  },
  {
    id: 'chocolate-milkshake',
    name: 'Chocolate Gelato Milkshake',
    description: 'Decadent chocolate gelato blended with cold farm milk',
    price: 700,
    category: 'Milkshakes'
  },
  {
    id: 'oreo-crumble-milkshake',
    name: 'Oreo Crumble Milkshake',
    description: 'Crushed Oreo cookies blended with rich gelato and topped with cookie crumbs',
    price: 760,
    category: 'Milkshakes',
    popular: true
  },
  {
    id: 'salted-caramel-milkshake',
    name: 'Salted Caramel Milkshake',
    description: 'Rich caramel with Himalayan sea salt flakes and creamy gelato',
    price: 760,
    category: 'Milkshakes'
  },
  {
    id: 'peanut-butter-milkshake',
    name: 'Peanut Butter Milkshake',
    description: 'Creamy peanut butter blended with sweet cream gelato',
    price: 760,
    category: 'Milkshakes'
  },

  // --- SMOOTHIES ---
  {
    id: 'mango-smoothie',
    name: 'Mango Smoothie (Seasonal)',
    description: 'Sweet ripe Sindhri mango blended with crushed ice and creamy yogurt',
    price: 740,
    category: 'Smoothies',
    image: '/src/assets/images/drinks_smoothies_1792237138542.jpg',
    popular: true
  },
  {
    id: 'strawberry-smoothie',
    name: 'Strawberry Smoothie',
    description: 'Sweet fresh strawberries blended with chilled yogurt and ice',
    price: 740,
    category: 'Smoothies'
  },
  {
    id: 'all-berries-smoothie',
    name: 'All Berries Smoothie',
    description: 'Vibrant medley of blackberry, blueberry, and raspberry',
    price: 740,
    category: 'Smoothies'
  },

  // --- DESSERTS ---
  {
    id: 'strawberry-cheesecake',
    name: 'Strawberry Cheesecake',
    description: 'New York style velvety cream cheese with fresh strawberry compote',
    price: 890,
    category: 'Desserts',
    popular: true
  },
  {
    id: 'dark-chocolate-tart',
    name: 'Dark Chocolate Tart',
    description: 'Crisp buttery pastry shell filled with rich Belgian dark chocolate ganache',
    price: 860,
    category: 'Desserts',
    popular: true
  },
  {
    id: 'creme-brulee',
    name: 'Crème Brûlée',
    description: 'Classic French vanilla custard topped with caramelized burnt sugar crust',
    price: 550,
    category: 'Desserts'
  },
  {
    id: 'bread-pudding',
    name: 'Bread Pudding',
    description: 'Warm brioche bread pudding soaked in spiced vanilla cream',
    price: 590,
    category: 'Desserts'
  },
  {
    id: 'gelato-dessert',
    name: 'Artisanal Gelato',
    description: 'Double scoop of authentic Italian-style churned gelato',
    price: 400,
    category: 'Desserts'
  }
];

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: string;
  description: string;
  price?: number;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-pizza',
    title: 'Pepperoni & Artisanal Pizza',
    category: 'Stone Oven Pizza',
    image: '/src/assets/images/pizza_hero_1792237134387.jpg',
    aspect: 'col-span-12 md:col-span-8 h-96',
    description: 'Hand-stretched dough baked to charred perfection with fresh mozzarella and beef pepperoni on a rustic peel.',
    price: 1480
  },
  {
    id: 'gal-parmesan-chicken',
    title: 'Parmesan Crusted Chicken',
    category: 'Chef Signature',
    image: '/src/assets/images/parmesan_chicken_1792237135987.jpg',
    aspect: 'col-span-12 md:col-span-4 h-96',
    description: 'Tender fillet with golden herb crust, velvety white cheese sauce, and wire basket fries.',
    price: 1560
  },
  {
    id: 'gal-sandwich',
    title: 'Grilled Chicken Sandwich',
    category: 'Sandwiches & Deli',
    image: '/src/assets/images/chicken_sandwich_1792237136658.jpg',
    aspect: 'col-span-12 md:col-span-4 h-80',
    description: 'Warm herb focaccia layered with melted cheddar cheese, grilled chicken breast, and crisp greens.',
    price: 1360
  },
  {
    id: 'gal-pasta',
    title: 'Creamy Fettuccine Alfredo',
    category: 'Pasta & Classics',
    image: '/src/assets/images/creamy_pasta_1792237138078.jpg',
    aspect: 'col-span-12 md:col-span-4 h-80',
    description: 'Silky parmesan cream sauce crowned with sliced grilled chicken and golden potato straw nest.',
    price: 1400
  },
  {
    id: 'gal-brownie',
    title: 'Brownie with Ice Cream',
    category: 'Dessert Parlour',
    image: '/src/assets/images/brownie_dessert_1792237137046.jpg',
    aspect: 'col-span-12 md:col-span-4 h-80',
    description: 'Warm decadent chocolate brownie paired with chilled vanilla bean ice cream and cocoa drizzle.',
    price: 880
  },
  {
    id: 'gal-moroccan',
    title: 'Moroccan Chicken Main Course',
    category: 'Signature Mains',
    image: '/src/assets/images/moroccan_chicken_1792237137671.jpg',
    aspect: 'col-span-12 md:col-span-6 h-88',
    description: 'Char-grilled chicken fillets bathed in creamy spiced sambal reduction with crispy fries.',
    price: 1550
  },
  {
    id: 'gal-drinks',
    title: 'Mango Smoothie & Vanilla Gelato Shake',
    category: 'Beverages & Sips',
    image: '/src/assets/images/drinks_smoothies_1792237138542.jpg',
    aspect: 'col-span-12 md:col-span-6 h-88',
    description: 'Refreshing tropical mango smoothie and velvety chilled vanilla shake served in tall glasses.',
    price: 740
  }
];

export const RESTAURANT_DETAILS = {
  name: 'Karachi Brasserie',
  tagline: 'ALL DAY EATERY',
  phone: '0330 8880773',
  phoneFormatted: '0330 8880773',
  whatsappRaw: '923308880773',
  instagram: '@karachibrasserie',
  instagramUrl: 'https://instagram.com/karachibrasserie',
  address: {
    line1: 'Karachi Brasserie',
    line2: 'Hotel Excelsior, Opposite Atrium Mall',
    line3: 'Saddar Town, Karachi, Pakistan'
  },
  mapsUrl: 'https://maps.google.com/?q=Karachi+Brasserie+Hotel+Excelsior+Opposite+Atrium+Mall+Saddar+Karachi',
  hours: 'Open Daily: 12:00 PM – 1:00 AM'
};
