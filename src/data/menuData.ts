import { LOCAL_IMAGES } from '../assets/images';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  fallbackImage?: string;
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
  // --- FEATURED DISHES ---
  {
    id: 'parmesan-crusted-chicken',
    name: 'Parmesan Crusted Chicken',
    description: 'Parmesan crusted chicken fillet served with mashed potatoes, sauté vegetables, and cheese sauce',
    price: 1560,
    category: 'Chicken',
    image: '/images/parmesan_chicken.jpg',
    fallbackImage: LOCAL_IMAGES.parmesanChicken,
    popular: true,
    featured: true,
    badge: 'Guest Favorite'
  },
  {
    id: 'chicken-fajita-pizza',
    name: 'Chicken Fajita Pizza',
    description: 'House special fajita sauce, chicken, olives, sweet corn, jalapeno, tomato, onion',
    price: 1540,
    category: 'Pizza',
    image: '/images/fajita_pizza.jpg',
    fallbackImage: LOCAL_IMAGES.fajitaPizza,
    popular: true,
    featured: true,
    badge: 'Artisanal Crust'
  },
  {
    id: 'grilled-chicken-sandwich',
    name: 'Grilled Chicken Sandwich',
    description: 'Grilled chicken, cheese, focaccia, green lettuce',
    price: 1360,
    category: 'Sandwiches',
    image: '/images/chicken_sandwich.jpg',
    fallbackImage: LOCAL_IMAGES.chickenSandwich,
    popular: true,
    featured: true,
    badge: 'Fresh Baked'
  },
  {
    id: 'brownie-with-ice-cream',
    name: 'Brownie with Ice Cream',
    description: 'Warm fudge brownie topped with rich vanilla bean ice cream and chocolate glaze drizzle',
    price: 880,
    category: 'Desserts',
    image: '/images/brownie_dessert.jpg',
    fallbackImage: LOCAL_IMAGES.brownieDessert,
    popular: true,
    featured: true,
    badge: 'Sweet Indulgence'
  },

  // --- SOUPS ---
  {
    id: 'chicken-broth',
    name: 'Chicken Broth',
    description: 'Chicken bones with sauté vegetables',
    price: 620,
    category: 'Soups',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mushroom-soup',
    name: 'Mushroom Soup',
    description: 'Mushroom, onion, garlic in a velvety aromatic broth',
    price: 790,
    category: 'Soups',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'roasted-tomato-soup',
    name: 'Roasted Tomato Soup',
    description: 'Roast tomato, onion, garlic, basil',
    price: 690,
    category: 'Soups',
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cream-of-chicken',
    name: 'Cream of Chicken',
    description: 'Chicken, onion, garlic in creamy velvety soup',
    price: 740,
    category: 'Soups',
    image: 'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?auto=format&fit=crop&w=800&q=80'
  },

  // --- STARTERS ---
  {
    id: 'hummus',
    name: 'Hummus',
    description: 'Served with crackers, fresh carrot and crisp cucumber',
    price: 690,
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'buffalo-wings',
    name: 'Buffalo Wings',
    description: 'Crispy chicken wings tossed in tangy buffalo sauce',
    price: 1090,
    category: 'Starters',
    popular: true,
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'thai-chicken-skewers',
    name: 'Thai Chicken Skewers',
    description: 'Tender chicken skewers in Thai chilli garlic glaze',
    price: 920,
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'popcorn-chicken',
    name: 'Popcorn Chicken',
    description: 'Crispy chicken cubes in chilli garlic sauce',
    price: 890,
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'chilli-prawns',
    name: 'Chilli Prawns',
    description: 'Crispy prawns tossed in garlic, red chilli, butter',
    price: 1320,
    category: 'Starters',
    popular: true,
    image: 'https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'loaded-cheese-fries',
    name: 'Loaded Cheese Fries',
    description: 'Fries loaded with chicken, cheese, olives, jalapeno, salsa and sour cream',
    price: 1250,
    category: 'Starters',
    popular: true,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'chipotle-chicken-tacos',
    name: 'Chipotle Chicken Tacos',
    description: 'Pair of chicken tacos with lettuce and salsa',
    price: 1200,
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prawn-tempura',
    name: 'Prawn Tempura',
    description: 'Battered fried prawns served with sweet chilli dipping sauce',
    price: 1350,
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'french-fries-starter',
    name: 'French Fries (250g)',
    description: 'Crispy golden seasoned fries served hot',
    price: 580,
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=800&q=80'
  },

  // --- SALADS ---
  {
    id: 'caesar-salad',
    name: 'Caesar Salad',
    description: 'Crispy salad, grilled chicken, egg, croutons, parmesan in our house special dressing',
    price: 1120,
    category: 'Salads',
    popular: true,
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'quinoa-salad',
    name: 'Quinoa Salad',
    description: 'Quinoa, green leaves, feta, roasted almond in raspberry dressing',
    price: 1160,
    category: 'Salads',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mediterranean-salad',
    name: 'Mediterranean Salad',
    description: 'Crispy salad, grilled chicken, feta, olive, peanuts in vinaigrette dressing',
    price: 1040,
    category: 'Salads',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'greek-salad',
    name: 'Greek Salad',
    description: 'Grilled chicken, green leaves, olive, cherry tomato in vinaigrette dressing',
    price: 990,
    category: 'Salads',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80'
  },

  // --- SANDWICHES ---
  {
    id: 'hummus-toast',
    name: 'Hummus Toast',
    description: 'Country bread, hummus, served with garden salad',
    price: 780,
    category: 'Sandwiches',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'club-sandwich',
    name: 'Club Sandwich',
    description: 'Grilled chicken, beef pepperoni, omelette, toasted country slices',
    price: 1590,
    category: 'Sandwiches',
    popular: true,
    image: 'https://images.unsplash.com/photo-1567234669003-dce7a7a88821?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'chicken-chimichurri-sandwich',
    name: 'Chicken Chimichurri Sandwich',
    description: 'Grilled chicken, chimichurri, artisanal focaccia, melted cheese',
    price: 1390,
    category: 'Sandwiches',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'steak-sandwich',
    name: 'Steak Sandwich',
    description: 'Beef steak, caramelised onion, French mustard sauce on toasted artisanal bread',
    price: 1550,
    category: 'Sandwiches',
    popular: true,
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80'
  },

  // --- BURGERS ---
  {
    id: 'classic-cheese-burger',
    name: 'Classic Cheese Burger',
    description: 'Ground beef patty, fresh lettuce, onion, tomato, melted cheddar cheese',
    price: 1390,
    category: 'Burgers',
    popular: true,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jalapeno-burger',
    name: 'Jalapeno Burger',
    description: 'Ground beef patty, lettuce, onion, tomato, signature jalapeno sauce',
    price: 1420,
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'swiss-mushroom-burger',
    name: 'Swiss Mushroom Burger',
    description: 'Ground beef patty, sautéed mushrooms, lettuce, onion, tomato, melted Swiss cheese',
    price: 1400,
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'grilled-chicken-burger',
    name: 'Grilled Chicken Burger',
    description: 'Grilled chicken breast, honey mustard, green chilli, crisp lettuce',
    price: 1350,
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'crispy-chicken-burger',
    name: 'Crispy Chicken Burger',
    description: 'Crispy chicken fillet, lettuce, sriracha mayo, spicy jalapeno',
    price: 1320,
    category: 'Burgers',
    popular: true,
    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'trio-of-sliders',
    name: 'Trio of Sliders',
    description: 'Three gourmet beef sliders: classic, jalapeno, and sautéed mushroom',
    price: 1400,
    category: 'Burgers',
    popular: true,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80'
  },

  // --- PIZZA ---
  {
    id: 'margarita-pizza',
    name: 'Margarita',
    description: 'Classic marinara, mozzarella, shaved parmesan, aromatic basil',
    price: 1300,
    category: 'Pizza',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pepperoni-pizza',
    name: 'Pepperoni Pizza',
    description: 'Rich marinara, sliced beef pepperoni, fresh mozzarella, sweet basil',
    price: 1480,
    category: 'Pizza',
    image: LOCAL_IMAGES.pizzaHero,
    fallbackImage: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'chicken-jalapeno-pizza',
    name: 'Chicken Jalapeno',
    description: 'Marinara, chicken chunks, jalapenos, black olives, onion, sliced mushrooms',
    price: 1440,
    category: 'Pizza',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'brasserie-special-pizza',
    name: 'Brasserie Special',
    description: 'Marinara, mozzarella, tender chicken, seasoned beef, bell peppers, olives, mushrooms',
    price: 1560,
    category: 'Pizza',
    image: LOCAL_IMAGES.fajitaPizza,
    fallbackImage: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
    popular: true
  },

  // --- CHICKEN (MAINS) ---
  {
    id: 'moroccan-chicken',
    name: 'Moroccan Chicken',
    description: 'Grilled chicken fillet, sambal sauce served with brown rice and sauté vegetables',
    price: 1550,
    category: 'Chicken',
    image: LOCAL_IMAGES.moroccanChicken,
    fallbackImage: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'tarragon-chicken',
    name: 'Tarragon Chicken',
    description: 'Grilled chicken fillet, tarragon sauce served with mashed potato and sauté vegetables',
    price: 1440,
    category: 'Chicken',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jalapeno-chicken',
    name: 'Jalapeno Chicken',
    description: 'Grilled chicken fillet, jalapeno cream sauce served with mashed potato and sauté vegetables',
    price: 1460,
    category: 'Chicken',
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=800&q=80'
  },

  // --- STEAK ---
  {
    id: 'pepper-steak',
    name: 'Pepper Steak',
    description: 'Beef steak, creamy black pepper sauce, served with mashed potatoes and fresh vegetables',
    price: 2440,
    category: 'Steak',
    popular: true,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mushroom-steak',
    name: 'Mushroom Steak',
    description: 'Beef steak, creamy mushroom sauce, served with roast potatoes and vegetables',
    price: 2520,
    category: 'Steak',
    popular: true,
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'chimichurri-steak',
    name: 'Chimichurri Steak',
    description: 'Beef steak, zesty chimichurri sauce, served with creamy spinach and roasted garlic',
    price: 2480,
    category: 'Steak',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tuscun-steak',
    name: 'Tuscan Steak',
    description: 'Beef steak, fresh herbs, sundried tomato in basil parmesan served with mashed potato and sauté vegetables',
    price: 2550,
    category: 'Steak',
    popular: true,
    image: 'https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=800&q=80'
  },

  // --- STIR FRY ---
  {
    id: 'classic-kung-pao',
    name: 'Classic Kung Pao',
    description: 'Stir fried chicken in kung pao sauce with peanuts, spring onion, red onion and dried red chilli',
    price: 1250,
    category: 'Stir Fry',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'thai-holy-basil',
    name: 'Thai Holy Basil',
    description: 'Traditional Thai stir fry chicken in red chilli and basil served with steamed rice',
    price: 1300,
    category: 'Stir Fry',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'beef-chilli-dry',
    name: 'Beef Chilli Dry',
    description: 'Stir fried beef with green chilli, red chilli and ginger, in our classic oyster sesame sauce',
    price: 1360,
    category: 'Stir Fry',
    popular: true,
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'crispy-beef',
    name: 'Crispy Beef',
    description: 'Crispy beef in dark soy sauce, topped with chilli flakes, served with steamed rice',
    price: 1400,
    category: 'Stir Fry',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
  },

  // --- PASTA ---
  {
    id: 'spaghetti-bolognese',
    name: 'Spaghetti Bolognese',
    description: 'Ground beef, slow-simmered tomato sauce, coriander, fresh basil, aged parmesan',
    price: 1580,
    category: 'Pasta',
    popular: true,
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fettucine-alfredo',
    name: 'Fettucine Alfredo',
    description: 'Creamy alfredo sauce, grilled chicken, parmesan, served with herb garlic toast',
    price: 1400,
    category: 'Pasta',
    image: LOCAL_IMAGES.creamyPasta,
    fallbackImage: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'penne-arrabbiata',
    name: 'Penne Arrabbiata',
    description: 'Grilled chicken, creamy red sauce, mushroom, sliced olives',
    price: 1400,
    category: 'Pasta',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'spaghetti-chilli-lime',
    name: 'Spaghetti with Chilli & Lime',
    description: 'Succulent prawn, cherry tomato, garlic, spicy chilli, fresh zesty lime',
    price: 1490,
    category: 'Pasta',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'beef-lasagna',
    name: 'Beef Lasagna',
    description: 'Ground beef, rich tomato sauce, white béchamel sauce, mozzarella and parmesan cheese layers',
    price: 1460,
    category: 'Pasta',
    popular: true,
    image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=800&q=80'
  },

  // --- SEAFOOD ---
  {
    id: 'fish-n-chips',
    name: 'Fish N Chips',
    description: 'Batter-fried red snapper served with tartar sauce and crispy french fries',
    price: 1490,
    category: 'Seafood',
    popular: true,
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'red-snapper-garlic-butter',
    name: 'Red Snapper in Garlic Butter',
    description: 'Red snapper in garlic butter sauce, served with mashed potatoes, sauté vegetables',
    price: 1820,
    category: 'Seafood',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'red-snapper-thai-chilli',
    name: 'Red Snapper with Thai Red Chilli',
    description: 'Pan-seared red snapper, cherry tomato, roasted garlic, Thai chilli',
    price: 1890,
    category: 'Seafood',
    image: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?auto=format&fit=crop&w=800&q=80'
  },

  // --- SIDES ---
  {
    id: 'mashed-potatoes',
    name: 'Mashed Potatoes',
    description: 'Creamy buttered mashed potatoes',
    price: 220,
    category: 'Sides',
    image: 'https://images.unsplash.com/photo-1633436375795-12b3b339712f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sauteed-vegetables',
    name: 'Sautéed Vegetables',
    description: 'Fresh seasonal vegetables tossed in herb butter',
    price: 220,
    category: 'Sides',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'creamy-spinach',
    name: 'Creamy Spinach',
    description: 'Slow-cooked velvety creamed spinach',
    price: 250,
    category: 'Sides',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'french-fries-side',
    name: 'French Fries',
    description: 'Golden seasoned skin-on fries',
    price: 250,
    category: 'Sides',
    image: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'garlic-bread',
    name: 'Garlic Bread',
    description: 'Toasted baguette with garlic herb butter',
    price: 220,
    category: 'Sides',
    image: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=800&q=80'
  },

  // --- COFFEE & BEVERAGES ---
  {
    id: 'espresso',
    name: 'Espresso',
    description: 'Rich concentrated shot of dark roasted espresso',
    price: 390,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'double-espresso',
    name: 'Double Espresso',
    description: 'Double shot of aromatic Italian espresso blend',
    price: 460,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'americano',
    name: 'Americano',
    description: 'Espresso topped with filtered hot water',
    price: 540,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cafe-latte',
    name: 'Café Latte',
    description: 'Espresso with steamed textured milk and microfoam',
    price: 620,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'flat-white',
    name: 'Flat White',
    description: 'Velvety microfoam over a double ristretto',
    price: 620,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    description: 'Espresso, steamed milk, and thick frothy foam dusting',
    price: 620,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cafe-mocha',
    name: 'Café Mocha',
    description: 'Rich cocoa, espresso, and silky steamed milk',
    price: 680,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'caramel-macchiato',
    name: 'Caramel Macchiato',
    description: 'Steamed milk with vanilla syrup, marked with espresso and caramel drizzle',
    price: 680,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hot-chocolate',
    name: 'Hot Chocolate',
    description: 'Decadent melted cocoa and warm cream',
    price: 700,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'affogato',
    name: 'Affogato',
    description: 'Scoop of premium vanilla gelato drowned in a hot shot of espresso',
    price: 780,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1594998893017-36147cbcae05?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'frappe-beverage',
    name: 'Frappe (Caramel / Vanilla / Mocha)',
    description: 'Blended iced coffee indulgence with whipped cream',
    price: 760,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'iced-latte',
    name: 'Iced Latte',
    description: 'Chilled milk and bold espresso poured over crystal ice',
    price: 720,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cardamom-tea',
    name: 'Cardamom Tea',
    description: 'Traditional aromatic spiced tea infused with fragrant green cardamom',
    price: 380,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mixed-tea',
    name: 'Mixed Chai / Doodh Patti',
    description: 'Rich slow-simmered Pakistani mixed tea',
    price: 400,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=800&q=80'
  },

  // --- MOCKTAILS ---
  {
    id: 'mint-lemonade',
    name: 'Mint Lemonade',
    description: 'Fresh crushed garden mint, zesty lime, crushed ice, touch of rock salt',
    price: 580,
    category: 'Mocktails',
    popular: true,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'electric-blue',
    name: 'Electric Blue',
    description: 'Blue curaçao citrus infusion with sparkling soda and crushed ice',
    price: 600,
    category: 'Mocktails',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'lemon-iced-tea',
    name: 'Lemon Iced Tea',
    description: 'Slow-brewed black tea infused with crisp lemon and crushed ice',
    price: 600,
    category: 'Mocktails',
    image: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'peach-iced-tea',
    name: 'Peach Iced Tea',
    description: 'Fragrant peach essence with chilled brewed tea',
    price: 600,
    category: 'Mocktails',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pina-colada',
    name: 'Pina Colada',
    description: 'Velvety coconut cream, fresh pineapple juice, and crushed ice',
    price: 660,
    category: 'Mocktails',
    popular: true,
    image: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'apple-mint-cooler',
    name: 'Apple Mint Cooler',
    description: 'Crisp green apple, muddled fresh mint, soda splash',
    price: 640,
    category: 'Mocktails',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80'
  },

  // --- MILKSHAKES (GELATO MILKSHAKES) ---
  {
    id: 'vanilla-milkshake',
    name: 'Vanilla Gelato Milkshake',
    description: 'Handcrafted creamy vanilla bean gelato milkshake',
    price: 700,
    category: 'Milkshakes',
    image: LOCAL_IMAGES.drinksSmoothies,
    fallbackImage: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'chocolate-milkshake',
    name: 'Chocolate Gelato Milkshake',
    description: 'Decadent chocolate gelato blended with cold farm milk',
    price: 700,
    category: 'Milkshakes',
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'oreo-crumble-milkshake',
    name: 'Oreo Crumble Milkshake',
    description: 'Crushed Oreo cookies blended with rich gelato and topped with cookie crumbs',
    price: 760,
    category: 'Milkshakes',
    popular: true,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'salted-caramel-milkshake',
    name: 'Salted Caramel Milkshake',
    description: 'Rich caramel with Himalayan sea salt flakes and creamy gelato',
    price: 760,
    category: 'Milkshakes',
    image: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=800&q=80'
  },

  // --- SMOOTHIES ---
  {
    id: 'mango-smoothie',
    name: 'Mango Smoothie (Seasonal)',
    description: 'Sweet ripe Sindhri mango blended with crushed ice and creamy yogurt',
    price: 740,
    category: 'Smoothies',
    image: LOCAL_IMAGES.drinksSmoothies,
    fallbackImage: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'strawberry-smoothie',
    name: 'Strawberry Smoothie',
    description: 'Sweet fresh strawberries blended with chilled yogurt and ice',
    price: 740,
    category: 'Smoothies',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'all-berries-smoothie',
    name: 'All Berries Smoothie',
    description: 'Vibrant medley of blackberry, blueberry, and raspberry',
    price: 740,
    category: 'Smoothies',
    image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=800&q=80'
  },

  // --- DESSERTS ---
  {
    id: 'strawberry-cheesecake',
    name: 'Strawberry Cheesecake',
    description: 'New York style velvety cream cheese with fresh strawberry compote',
    price: 890,
    category: 'Desserts',
    popular: true,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dark-chocolate-tart',
    name: 'Dark Chocolate Tart',
    description: 'Crisp buttery pastry shell filled with rich Belgian dark chocolate ganache',
    price: 860,
    category: 'Desserts',
    popular: true,
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'creme-brulee',
    name: 'Crème Brûlée',
    description: 'Classic French vanilla custard topped with caramelized burnt sugar crust',
    price: 550,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bread-pudding',
    name: 'Bread Pudding',
    description: 'Warm brioche bread pudding soaked in spiced vanilla cream',
    price: 590,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gelato-dessert',
    name: 'Artisanal Gelato',
    description: 'Double scoop of authentic Italian-style churned gelato',
    price: 400,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=800&q=80'
  }
];

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  fallbackImage: string;
  aspect: string;
  description: string;
  price?: number;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-pizza',
    title: 'Pepperoni & Artisanal Pizza',
    category: 'Stone Oven Pizza',
    image: LOCAL_IMAGES.pizzaHero,
    fallbackImage: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
    aspect: 'col-span-12 md:col-span-8 h-96',
    description: 'Hand-stretched dough baked to charred perfection with fresh mozzarella and beef pepperoni on a rustic peel.',
    price: 1480
  },
  {
    id: 'gal-parmesan-chicken',
    title: 'Parmesan Crusted Chicken',
    category: 'Chef Signature',
    image: LOCAL_IMAGES.parmesanChicken,
    fallbackImage: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80',
    aspect: 'col-span-12 md:col-span-4 h-96',
    description: 'Tender fillet with golden herb crust, velvety white cheese sauce, and wire basket fries.',
    price: 1560
  },
  {
    id: 'gal-sandwich',
    title: 'Grilled Chicken Sandwich',
    category: 'Sandwiches & Deli',
    image: LOCAL_IMAGES.chickenSandwich,
    fallbackImage: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
    aspect: 'col-span-12 md:col-span-4 h-80',
    description: 'Warm herb focaccia layered with melted cheddar cheese, grilled chicken breast, and crisp greens.',
    price: 1360
  },
  {
    id: 'gal-pasta',
    title: 'Creamy Fettuccine Alfredo',
    category: 'Pasta & Classics',
    image: LOCAL_IMAGES.creamyPasta,
    fallbackImage: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
    aspect: 'col-span-12 md:col-span-4 h-80',
    description: 'Silky parmesan cream sauce crowned with sliced grilled chicken and golden potato straw nest.',
    price: 1400
  },
  {
    id: 'gal-brownie',
    title: 'Brownie with Ice Cream',
    category: 'Dessert Parlour',
    image: LOCAL_IMAGES.brownieDessert,
    fallbackImage: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    aspect: 'col-span-12 md:col-span-4 h-80',
    description: 'Warm decadent chocolate brownie paired with chilled vanilla bean ice cream and cocoa drizzle.',
    price: 880
  },
  {
    id: 'gal-moroccan',
    title: 'Moroccan Chicken Main Course',
    category: 'Signature Mains',
    image: LOCAL_IMAGES.moroccanChicken,
    fallbackImage: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80',
    aspect: 'col-span-12 md:col-span-6 h-88',
    description: 'Char-grilled chicken fillets bathed in creamy spiced sambal reduction with crispy fries.',
    price: 1550
  },
  {
    id: 'gal-drinks',
    title: 'Mango Smoothie & Vanilla Gelato Shake',
    category: 'Beverages & Sips',
    image: LOCAL_IMAGES.drinksSmoothies,
    fallbackImage: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80',
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
