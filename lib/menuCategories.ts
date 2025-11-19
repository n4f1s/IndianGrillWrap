export type ProductCard = {
  slug: string
  title: string
  price: string
  description: string
  img: string
  popular?: boolean
}

export type MenuCategory = {
  slug: string
  label: string
  description?: string
  image?: string
  productCards: ProductCard[]
}

export const MENU_CATEGORIES: MenuCategory[] = [
  // Wraps
  {
    slug: 'wraps',
    label: 'Wraps',
    description:
      'Signature veggie, shrimp, and chicken wraps on freshly baked bread.',
    image: '/menu/wraps.webp',
    productCards: [
      {
        slug: 'veggie-wraps',
        title: 'Veggie Wraps',
        price: '$9.99',
        description:
          'Selected ponir (cheese), garden fresh salad, tomato, cucumber, authentic green sauce, freshly baked bread.',
        img: '/menu/wraps.webp'
      },
      {
        slug: 'fisherman-shrimp-wraps',
        title: 'Fisherman Shrimp Wraps',
        price: '$12.99',
        description:
          'Lemon garlic grilled shrimp, garden fresh salad, green sauce, palita sauce, and mixed authentic fish salsa.',
        img: '/menu/wraps.webp'
      },
      {
        slug: 'mexican-chicken-wraps',
        title: 'Mexican Chicken Wraps',
        price: '$9.99',
        description:
          'Grilled chicken with tikka sauce, tomato, onion, cucumber, salsa, garden-fresh arugula, spinach, and chipotle sauce.',
        img: '/menu/wraps.webp'
      }
    ]
  },
  // Burgers
  {
    slug: 'burgers',
    label: 'Burgers',
    description: 'House burgers with juicy chicken patties and crisp toppings.',
    image: '/burger.jpg',
    productCards: [
      {
        slug: 'double-cheese-burger',
        title: 'Double Cheese Burger',
        price: '$10.99',
        description:
          'Homemade juicy chicken patty, garden fresh salad, and selective sauces.',
        img: '/burger.jpg'
      },
      {
        slug: 'crispy-chicken-burger',
        title: 'Crispy Chicken Burger',
        price: '$10.99',
        description:
          'Grilled boneless chicken, garden fresh tomato, lettuce, and signature topping sauce.',
        img: '/burger.jpg'
      }
    ]
  },
  // Tandoori Specials
  {
    slug: 'tandoori-specials',
    label: 'Tandoori Specials',
    description:
      'Grilled favorites from the tandoor, marinated in yogurt, herbs, and spices.',
    image: '/menu/tandoori.webp',
    productCards: [
      {
        slug: 'lamb-seekh-kabab',
        title: 'Lamb Seekh Kabab',
        price: '$21.99',
        description:
          'Ground lamb mixed with onion, ginger, and herbs, cooked in the tandoor.',
        img: '/menu/tandoori.webp'
      },
      {
        slug: 'fish-tikka',
        title: 'Fish Tikka',
        price: '$16.99',
        description:
          'Cubes of salmon marinated in yogurt and spices, broiled in the tandoor.',
        img: '/menu/tandoori.webp'
      },
      {
        slug: 'tandoori-chicken-full',
        title: 'Tandoori Chicken (Full)',
        price: '$23.99',
        description:
          'Whole chicken marinated with yogurt and spices, roasted in the tandoor.',
        img: '/menu/tandoori.webp'
      },
      {
        slug: 'tandoori-chicken-half',
        title: 'Tandoori Chicken (Half)',
        price: '$15.99',
        description: 'Half tandoori chicken marinated with yogurt and spices.',
        img: '/menu/tandoori.webp'
      },
      {
        slug: 'chicken-tikka',
        title: 'Chicken Tikka',
        price: '$16.99',
        description:
          'Boneless chicken thigh marinated in yogurt and mild spices, then broiled in the tandoor.',
        img: '/menu/tandoori.webp'
      },
      {
        slug: 'rashmi-seekh-kabab',
        title: 'Rashmi Seekh Kabab',
        price: '$16.99',
        description:
          'Ground chicken mixed with onion, ginger, and herbs, cooked on skewers.',
        img: '/menu/tandoori.webp'
      },
      {
        slug: 'tandoor-shrimp',
        title: 'Tandoor Shrimp',
        price: '$16.99',
        description:
          'Jumbo shrimp marinated in yogurt and mild spices, then broiled in the tandoor.',
        img: '/shrimp.jpg'
      },
      {
        slug: 'chicken-shashlik',
        title: 'Chicken Shashlik',
        price: '$16.99',
        description:
          'Marinated chicken breast with mustard paste, yogurt, and herbs, grilled to perfection.',
        img: '/menu/tandoori.webp'
      },
      {
        slug: 'boti-kabab',
        title: 'Boti Kabab',
        price: '$22.99',
        description: 'Cubes of lamb seasoned with aromatic spices and grilled.',
        img: '/menu/tandoori.webp'
      },
      {
        slug: 'malai-kabab',
        title: 'Malai Kabab',
        price: '$16.99',
        description:
          'Boneless chicken cubes marinated in sour cream with herbs.',
        img: '/menu/tandoori.webp'
      },
      {
        slug: 'mix-grill',
        title: 'Mix Grill',
        price: '$20.99',
        description:
          'Assorted platter of shrimp, lamb, tandoori chicken, chicken tikka, lamb seekh kabab, and malai kebab.',
        img: '/menu/tandoori.webp'
      }
    ]
  },
  // Seafood Specials
  {
    slug: 'seafood-specials',
    label: 'Seafood Specials',
    description: 'Shrimp and fish curries with regional Indian flavors.',
    image: '/menu/seafood.webp',
    productCards: [
      {
        slug: 'shrimp-palak',
        title: 'Shrimp Palak',
        price: '$17.99',
        description: 'Large shrimp cooked in mild spices with spinach.',
        img: '/shrimp.jpg'
      },
      {
        slug: 'goan-fish-curry',
        title: 'Goan Fish Curry',
        price: '$17.99',
        description:
          'Boneless salmon cooked with coconut and special Goan-style sauce.',
        img: '/menu/food.webp'
      },
      {
        slug: 'fish-masala-salmon',
        title: 'Fish Masala Salmon',
        price: '$22.99',
        description:
          "Boneless salmon lightly sautéed then simmered in the chef's special masala sauce.",
        img: '/menu/food.webp'
      },
      {
        slug: 'shrimp-bhuna',
        title: 'Shrimp Bhuna',
        price: '$17.99',
        description:
          'Shrimp cooked with fresh tomato, onion, peppers, and herbs.',
        img: '/menu/food.webp'
      },
      {
        slug: 'shrimp-curry',
        title: 'Shrimp Curry',
        price: '$17.99',
        description:
          'Shrimp cooked in a coconut-based sauce with special herbs.',
        img: '/menu/food.webp'
      }
    ]
  },
  // Chicken Specials
  {
    slug: 'chicken-specials',
    label: 'Chicken Specials',
    description: 'Classic and regional chicken curries and dry dishes.',
    image: '/menu/chicken.webp',
    productCards: [
      {
        slug: 'chicken-makhani',
        title: 'Chicken Makhani',
        price: '$16.99',
        description:
          'BBQ boneless chicken cooked with special spices in a mild creamy sauce.',
        img: '/menu/food.webp',
        popular: true
      },
      {
        slug: 'chicken-curry',
        title: 'Chicken Curry',
        price: '$15.99',
        description: 'Chicken cooked with the house-made curry sauce.',
        img: '/menu/food.webp',
        popular: true
      },
      {
        slug: 'chicken-tikka-masala',
        title: 'Chicken Tikka Masala',
        price: '$16.99',
        description:
          'BBQ chicken cooked in a tomato and fenugreek-based creamy sauce with red peppers and onions.',
        img: '/menu/food.webp',
        popular: true
      },
      {
        slug: 'chicken-dhaniwal-korma',
        title: 'Chicken Dhaniwal Korma',
        price: '$16.99',
        description:
          'Pieces of chicken cooked with coriander sauce, mint, and a blend of spices.',
        img: '/menu/food.webp'
      },
      {
        slug: 'chicken-jaipuri',
        title: 'Chicken Jaipuri',
        price: '$16.99',
        description: 'Chicken cooked with peanuts and spices.',
        img: '/menu/food.webp'
      },
      {
        slug: 'chicken-coconut',
        title: 'Chicken Coconut',
        price: '$16.99',
        description: 'Chicken cooked with coconut milk and herbs.',
        img: '/menu/food.webp'
      },
      {
        slug: 'chicken-vindaloo',
        title: 'Chicken Vindaloo',
        price: '$15.99',
        description:
          'Chicken cooked in a tangy tomato-based sauce with potatoes.',
        img: '/menu/food.webp'
      },
      {
        slug: 'chicken-shahi-korma',
        title: 'Chicken Shahi Korma',
        price: '$16.99',
        description:
          'Chicken in a light creamy sauce garnished with nuts, raisins, and almonds.',
        img: '/menu/food.webp'
      },
      {
        slug: 'chicken-karahi',
        title: 'Chicken Karahi',
        price: '$16.99',
        description:
          'Chicken cooked in a wok with tomatoes, fresh ginger, herbs, peppers, and spices.',
        img: '/menu/food.webp'
      },
      {
        slug: 'chili-chicken',
        title: 'Chili Chicken',
        price: '$16.99',
        description:
          'Thin slices of chicken lightly fried and cooked with peppers, onions, garlic, and ginger.',
        img: '/menu/food.webp'
      },
      {
        slug: 'chicken-saag',
        title: 'Chicken Saag',
        price: '$15.99',
        description: 'Chicken cooked with puréed spinach and spices.',
        img: '/menu/food.webp'
      },
      {
        slug: 'chicken-madras',
        title: 'Chicken Madras',
        price: '$15.99',
        description: 'Chicken cooked with mustard seeds and hot chili pepper.',
        img: '/menu/food.webp'
      }
    ]
  },
  // Goat Specials
  {
    slug: 'goat-specials',
    label: 'Goat Specials',
    description: 'Slow-cooked goat curries with bold, traditional flavors.',
    image: '/menu/goat.webp',
    productCards: [
      {
        slug: 'goat-curry',
        title: 'Goat Curry',
        price: '$18.99',
        description: 'Goat cooked with the house special homemade curry sauce.',
        img: '/menu/food.webp'
      },
      {
        slug: 'goat-vindaloo',
        title: 'Goat Vindaloo',
        price: '$18.99',
        description: 'Goat in a tangy tomato-based sauce with potatoes.',
        img: '/menu/food.webp'
      },
      {
        slug: 'goat-karahi',
        title: 'Goat Karahi',
        price: '$18.99',
        description:
          'Goat sautéed with fresh ginger, tomatoes, onions, and peppers.',
        img: '/menu/food.webp'
      },
      {
        slug: 'goat-saag',
        title: 'Goat Saag',
        price: '$18.99',
        description: 'Cubes of goat cooked with spinach and herbs.',
        img: '/menu/food.webp'
      },
      {
        slug: 'goat-bhuna',
        title: 'Goat Bhuna',
        price: '$18.99',
        description: 'Goat cooked with thick curry sauce and tomatoes.',
        img: '/menu/food.webp'
      }
    ]
  },
  // Lamb Specials
  {
    slug: 'lamb-specials',
    label: 'Lamb Specials',
    description: 'Slow-cooked lamb curries and house specialties.',
    image: '/menu/lamp.webp',
    productCards: [
      {
        slug: 'lamb-dhaniwal-korma',
        title: 'Lamb Danival Korma',
        price: '$18.99',
        description: 'Lamb with fresh mint, coriander, and spices.',
        img: '/menu/food.webp'
      },
      {
        slug: 'lamb-coconut',
        title: 'Lamb Coconut',
        price: '$18.99',
        description: 'Lamb cooked in coconut milk and herbs.',
        img: '/menu/food.webp'
      },
      {
        slug: 'lamb-vindaloo',
        title: 'Lamb Vindaloo',
        price: '$18.99',
        description: 'Lamb cubes in a tangy tomato sauce with potatoes.',
        img: '/menu/food.webp'
      },
      {
        slug: 'lamb-karahi',
        title: 'Lamb Karahi',
        price: '$18.99',
        description:
          'Lamb sautéed with fresh ginger, tomatoes, onion, pepper, and spices.',
        img: '/menu/food.webp'
      },
      {
        slug: 'lamb-saag',
        title: 'Lamb Saag',
        price: '$18.99',
        description: 'Lamb cooked in puréed spinach.',
        img: '/menu/food.webp'
      },
      {
        slug: 'lamb-bhuna',
        title: 'Lamb Bhuna',
        price: '$18.99',
        description:
          'Lamb with herbs and coriander in a thick tomato-based sauce with black pepper.',
        img: '/menu/food.webp'
      },
      {
        slug: 'lamb-pasanda',
        title: 'Lamb Pasanda',
        price: '$18.99',
        description:
          'Cubes of lamb cooked with fresh garlic, butter, yogurt, and herbs.',
        img: '/menu/food.webp'
      },
      {
        slug: 'lamb-roganjosh',
        title: 'Lamb Roganjosh',
        price: '$18.99',
        description: 'Lamb cooked with split fresh tomatoes and herbs.',
        img: '/menu/food.webp'
      },
      {
        slug: 'lamb-korma',
        title: 'Lamb Korma',
        price: '$18.99',
        description:
          'Lamb with fresh mint, coriander, and spices in a light creamy sauce, garnished with raisins and almonds.',
        img: '/menu/food.webp'
      },
      {
        slug: 'lamb-curry',
        title: 'Lamb Curry',
        price: '$18.99',
        description: 'Lamb cooked with homemade curry sauce.',
        img: '/menu/food.webp'
      },
      {
        slug: 'lamb-tikka-masala',
        title: 'Lamb Tikka Masala',
        price: '$18.99',
        description:
          'BBQ lamb cooked in a tomato and fenugreek-based creamy sauce with red pepper and onion.',
        img: '/menu/food.webp'
      }
    ]
  },

  // Beef Specials
  {
    slug: 'beef-specials',
    label: 'Beef Specials',
    description: 'Beef curries and karahi-style dishes.',
    image: '/menu/beef.webp',
    productCards: [
      {
        slug: 'beef-karahi',
        title: 'Beef Karahi',
        price: '$18.99',
        description:
          'Beef cooked with pepper, onion, tomatoes, ginger, herbs, and spices.',
        img: '/menu/food.webp'
      },
      {
        slug: 'beef-bhuna',
        title: 'Beef Bhuna',
        price: '$18.99',
        description: 'Beef cooked with thick curry sauce and tomatoes.',
        img: '/menu/food.webp'
      },
      {
        slug: 'beef-korma',
        title: 'Beef Korma',
        price: '$18.99',
        description:
          'Beef in a light creamy sauce garnished with nuts, raisins, and almonds.',
        img: '/menu/food.webp'
      },
      {
        slug: 'beef-curry',
        title: 'Beef Curry',
        price: '$18.99',
        description: 'Beef cooked with homemade curry sauce.',
        img: '/menu/food.webp'
      },
      {
        slug: 'beef-vindaloo',
        title: 'Beef Vindaloo',
        price: '$18.99',
        description: 'Beef cooked in a special tangy sauce with potatoes.',
        img: '/menu/food.webp'
      }
    ]
  },

  // Rice Specials
  {
    slug: 'rice-specials',
    label: 'Rice Specials',
    description: 'Biryani, pulao, and rice plates.',
    image: '/menu/rice.webp',
    productCards: [
      {
        slug: 'goat-biryani',
        title: 'Goat Biryani',
        price: '$18.99',
        description:
          'Sautéed goat with fresh garlic cooked with basmati rice and special biryani spices.',
        img: '/menu/food.webp'
      },
      {
        slug: 'chicken-biryani',
        title: 'Chicken Biryani',
        price: '$16.99',
        description:
          'Chicken cooked with basmati rice, herbs, and biryani spices.',
        img: '/menu/food.webp'
      },
      {
        slug: 'chicken-over-rice',
        title: 'Chicken over Rice',
        price: '$10.99',
        description:
          'Grilled chicken over basmati rice with mixed salad, seasoned French fries, and choice of sauce: white, hot, green, or barbecue.',
        img: '/menu/food.webp'
      },
      {
        slug: 'lamb-biryani',
        title: 'Lamb Biryani',
        price: '$18.99',
        description:
          'Cubes of lamb and basmati rice cooked with herbs and biryani spices.',
        img: '/menu/food.webp'
      },
      {
        slug: 'shrimp-biryani',
        title: 'Shrimp Biryani',
        price: '$18.99',
        description:
          'Sautéed shrimp cooked with spices and saffron-flavored basmati rice with biryani spices.',
        img: '/shrimp.jpg'
      },
      {
        slug: 'chefs-special-biryani',
        title: "Chef's Special Biryani",
        price: '$20.99',
        description:
          'Mixed biryani with chicken, shrimp, goat, lamb, and vegetables.',
        img: '/menu/food.webp'
      },
      {
        slug: 'vegetable-biryani',
        title: 'Vegetable Biryani',
        price: '$12.99',
        description: 'Fresh vegetables cooked with herbs and biryani spices.',
        img: '/menu/food.webp'
      },
      {
        slug: 'kashmiri-pulao',
        title: 'Kashmiri Pulao',
        price: '$10.99',
        description: 'Sweet pulao with honey, nuts, and raisins.',
        img: '/menu/food.webp'
      },
      {
        slug: 'matar-pulao',
        title: 'Matar Pulao',
        price: '$7.99',
        description: 'Cumin-flavored basmati rice with peas.',
        img: '/menu/food.webp'
      },
      {
        slug: 'side-basmati-rice',
        title: 'Side Basmati Rice',
        price: '$5.99',
        description: 'Side portion of plain basmati rice.',
        img: '/menu/food.webp'
      },
      {
        slug: 'chicken-tikka-biryani',
        title: 'Chicken Tikka Biryani',
        price: '$15.99',
        description:
          'BBQ chicken tikka cooked with basmati rice, herbs, and biryani spices, garnished with almonds and raisins.',
        img: '/menu/food.webp'
      }
    ]
  },

  // Non-Vegetarian Starters
  {
    slug: 'non-vegetarian-appetizers',
    label: 'Non-Vegetarian',
    description: 'Tandoori bites, fried appetizers, and mixed platters.',
    image: '/menu/chicken.webp',
    productCards: [
      {
        slug: 'malai-kabab-appetizer',
        title: 'Malai Kabab',
        price: '$7.99',
        description:
          'Boneless chicken cubes marinated in malai sauce with herbs.',
        img: '/menu/food.webp'
      },
      {
        slug: 'chicken-tikka-appetizer',
        title: 'Chicken Tikka',
        price: '$7.99',
        description:
          'Boneless chicken cubes marinated in tikka sauce with herbs.',
        img: '/menu/food.webp'
      },
      {
        slug: 'chicken-pakora',
        title: 'Chicken Pakora',
        price: '$5.99',
        description:
          'Chicken pieces coated in chickpea flour with salt and pepper, fried until crisp.',
        img: '/menu/food.webp'
      },
      {
        slug: 'pomigrano-chicken-kabab',
        title: 'Pomigrano Ck Kabab',
        price: '$6.99',
        description:
          'Boneless chicken cubes marinated in pomegranate-style sauce with herbs.',
        img: '/menu/food.webp'
      },
      {
        slug: 'seekh-kabab-appetizer',
        title: 'Seekh Kabab',
        price: '$7.99',
        description:
          'Chicken or lamb minced meat with aromatic herbs cooked in the tandoor.',
        img: '/menu/food.webp'
      },
      {
        slug: 'chicken-fingers-3pcs',
        title: 'Chicken Fingers (3 Pcs)',
        price: '$7.99',
        description: 'Crispy chicken fingers, three pieces.',
        img: '/menu/food.webp'
      },
      {
        slug: 'chicken-fingers-with-fries',
        title: 'Chicken Finger with Fries',
        price: '$8.99',
        description: 'Crispy chicken strips served with fries.',
        img: '/menu/food.webp'
      },
      {
        slug: 'garlic-shrimp',
        title: 'Garlic Shrimp',
        price: '$10.99',
        description:
          'Shrimp mildly spiced and sautéed with onions, peppers, and tomatoes.',
        img: '/shrimp.jpg'
      },
      {
        slug: 'assorted-non-veg-devours',
        title: 'Assorted Non-Veg Devours',
        price: '$10.99',
        description:
          'Platter with seekh kabab, malai kabab, meat samosa, and chicken tikka.',
        img: '/menu/food.webp'
      },
      {
        slug: 'meat-samosa-2pcs',
        title: 'Meat Samosa (2 Pcs)',
        price: '$7.99',
        description: 'Two crisp pastries filled with seasoned minced lamb.',
        img: '/menu/food.webp'
      }
    ]
  },

  // Soups
  {
    slug: 'soups',
    label: 'Soups',
    description: 'Comforting lentil and vegetable soups.',
    image: '/menu/soup.webp',
    productCards: [
      {
        slug: 'daal-soup',
        title: 'Daal Soup',
        price: '$5.99',
        description: 'Split yellow lentil soup.',
        img: '/menu/food.webp'
      },
      {
        slug: 'tomato-soup',
        title: 'Tomato Soup',
        price: '$5.99',
        description: 'Soup made with fresh tomatoes and herbs.',
        img: '/menu/food.webp'
      },
      {
        slug: 'mulligatawny-soup',
        title: 'Mulligatawny Soup',
        price: '$5.99',
        description: 'Split lentils simmered in chicken broth.',
        img: '/menu/food.webp'
      },
      {
        slug: 'sabzi-shorba',
        title: 'Sabzi Shorba',
        price: '$5.99',
        description: 'Garden-fresh vegetables with lentils.',
        img: '/menu/food.webp'
      }
    ]
  },
  // Accompaniments
  {
    slug: 'accompaniments',
    label: 'Accompaniments',
    description: 'Pickles, chutneys, and cooling raita.',
    image: '/menu/food.webp',
    productCards: [
      {
        slug: 'mango-pickle',
        title: 'Mango Pickle',
        price: '$3.99',
        description: 'Tangy and flavorful condiment made with mango.',
        img: '/menu/food.webp'
      },
      {
        slug: 'lemon-pickle',
        title: 'Lemon Pickle',
        price: '$3.99',
        description: 'Tangy and flavorful condiment made with lemons.',
        img: '/menu/food.webp'
      },
      {
        slug: 'mango-chutney',
        title: 'Mango Chutney',
        price: '$3.99',
        description: 'Sweet and sour mango extract.',
        img: '/menu/food.webp'
      },
      {
        slug: 'raita',
        title: 'Raita',
        price: '$3.99',
        description:
          'Yogurt with grated cucumber and carrot flavored with cumin.',
        img: '/menu/food.webp'
      }
    ]
  },
  // Sides
  {
    slug: 'sides',
    label: 'Sides',
    description: 'Classic lentil and spinach sides.',
    image: '/menu/food.webp',
    productCards: [
      {
        slug: 'tarka-daal-side',
        title: 'Tarka Daal',
        price: '$6.99',
        description: 'Blend of mixed lentils sautéed in garlic and cumin.',
        img: '/menu/food.webp'
      },
      {
        slug: 'saag-bhaji',
        title: 'Saag Bhaji',
        price: '$6.99',
        description: 'Spinach cooked with chopped onions and garlic.',
        img: '/menu/food.webp'
      },
      {
        slug: 'daal-makkhani-side',
        title: 'Daal Makkhani',
        price: '$6.99',
        description:
          'Whole black lentils in a creamy sauce with a medley of spices.',
        img: '/menu/food.webp'
      }
    ]
  },
  // Bread Specials
  {
    slug: 'bread-specials',
    label: 'Bread Specials',
    description: 'Freshly baked naan, paratha, roti, and more.',
    image: '/menu/bread.webp',
    productCards: [
      {
        slug: 'garlic-naan',
        title: 'Garlic Naan',
        price: '$4.99',
        description: 'Leavened flatbread infused with garlic.',
        img: '/menu/food.webp',
        popular: true
      },
      {
        slug: 'til-naan',
        title: 'Til Naan with Sesame Seed',
        price: '$4.99',
        description: 'Naan bread topped with sesame seeds.',
        img: '/menu/food.webp'
      },
      {
        slug: 'rosemary-naan',
        title: 'Rosemary Naan',
        price: '$3.99',
        description: 'Flatbread infused with rosemary.',
        img: '/menu/food.webp'
      },
      {
        slug: 'laccha-paratha',
        title: 'Laccha Paratha (Tandoori Paratha)',
        price: '$4.99',
        description: 'Layered, flaky flatbread from the tandoor oven.',
        img: '/menu/food.webp'
      },
      {
        slug: 'keema-paratha',
        title: 'Keema Paratha',
        price: '$6.99',
        description: 'Paratha stuffed with minced lamb.',
        img: '/menu/food.webp'
      },
      {
        slug: 'aloo-paratha',
        title: 'Aloo Paratha',
        price: '$4.99',
        description: 'Paratha stuffed with spiced potatoes.',
        img: '/menu/food.webp'
      },
      {
        slug: 'onion-kulcha',
        title: 'Onion Kulcha',
        price: '$4.99',
        description: 'Kulcha stuffed with onion.',
        img: '/menu/food.webp'
      },
      {
        slug: 'cheese-naan',
        title: 'Cheese Naan',
        price: '$4.99',
        description: 'Naan stuffed with cheese.',
        img: '/menu/food.webp'
      },
      {
        slug: 'coconut-naan',
        title: 'Coconut Naan',
        price: '$4.99',
        description: 'Naan stuffed with coconut.',
        img: '/menu/food.webp'
      },
      {
        slug: 'garlic-cheese-naan',
        title: 'Garlic & Cheese',
        price: '$5.99',
        description:
          'Naan stuffed with shredded cheese and topped with garlic.',
        img: '/testimonials2.jpg'
      },
      {
        slug: 'puri',
        title: 'Puri a Deep Fried Bread',
        price: '$4.99',
        description: 'Crispy, deep-fried Indian flatbread.',
        img: '/menu/food.webp'
      },
      {
        slug: 'peshawary-naan',
        title: 'Peshawary Naan',
        price: '$5.99',
        description: 'Traditional leavened flatbread from Peshawar.',
        img: '/menu/food.webp'
      },
      {
        slug: 'bread-basket-sweet',
        title: 'Bread Basket (Sweet)',
        price: '$10.99',
        description: 'Basket stuffed with coconut, almond, raisin, and sugar.',
        img: '/menu/food.webp'
      },
      {
        slug: 'bread-basket-savory',
        title: 'Bread Basket (Savory)',
        price: '$10.99',
        description:
          'Basket with rosemary naan, onion kulcha, and garlic naan.',
        img: '/menu/food.webp'
      },
      {
        slug: 'naan-plain',
        title: 'Naan Plain',
        price: '$3.50',
        description: 'Plain naan served dry or with butter.',
        img: '/menu/food.webp'
      },
      {
        slug: 'whole-wheat-roti',
        title: 'Whole Wheat Roti',
        price: '$3.99',
        description: 'Soft, lightly browned whole wheat flatbread.',
        img: '/menu/food.webp'
      }
    ]
  },
  // Desserts
  {
    slug: 'dessert',
    label: 'Dessert',
    description: 'Indian sweets and ice creams.',
    image: '/menu/dessert.webp',
    productCards: [
      {
        slug: 'kheer-rice',
        title: 'Kheer Rice (Rice Pudding)',
        price: '$3.99',
        description: 'Traditional rice pudding dessert.',
        img: '/menu/food.webp'
      },
      {
        slug: 'mango-ice-cream',
        title: 'Mango Ice Cream',
        price: '$4.99',
        description: 'Creamy and smooth dessert made with mango.',
        img: '/menu/food.webp'
      },
      {
        slug: 'chocolate-ice-cream',
        title: 'Chocolate',
        price: '$4.99',
        description: 'Classic chocolate ice cream.',
        img: '/menu/food.webp'
      },
      {
        slug: 'vanilla-ice-cream',
        title: 'Vanilla',
        price: '$4.99',
        description: 'Classic vanilla ice cream.',
        img: '/menu/food.webp'
      },
      {
        slug: 'cookies-and-cream',
        title: 'Cookies & Cream',
        price: '$4.99',
        description: 'Ice cream with cookie pieces.',
        img: '/menu/food.webp'
      },
      {
        slug: 'rasmalai',
        title: 'Rasmalai',
        price: '$4.99',
        description: 'Homemade cottage cheese patties in sweet milk syrup.',
        img: '/menu/food.webp'
      },
      {
        slug: 'gulab-jamun',
        title: 'Gulab Jamun',
        price: '$4.99',
        description: 'Soft fried balls in warm sugar syrup.',
        img: '/menu/food.webp'
      },
      {
        slug: 'pistachio-ice-cream',
        title: 'Pistachio Ice Cream',
        price: '$4.99',
        description: 'Creamy dessert with nutty pistachio flavor.',
        img: '/menu/food.webp'
      },
      {
        slug: 'malai-kulfi-cream',
        title: 'Malai Kulfi Cream',
        price: '$4.99',
        description:
          'Indian-style ice cream flavored with cardamom and saffron.',
        img: '/menu/food.webp'
      }
    ]
  },
  // Beverages
  {
    slug: 'beverages',
    label: 'Beverages',
    description: 'Lassis, tea, sodas, and more.',
    image: '/menu/beverages.webp',
    productCards: [
      {
        slug: 'mango-lassi',
        title: 'Mango Lassi',
        price: '$4.99',
        description: 'Creamy yogurt drink blended with mango purée.',
        img: '/menu/food.webp'
      },
      {
        slug: 'sweet-lassi',
        title: 'Sweet Lassi',
        price: '$4.99',
        description: 'Sweet, creamy yogurt-based drink.',
        img: '/menu/food.webp'
      },
      {
        slug: 'salty-lassi',
        title: 'Salty Lassi',
        price: '$4.99',
        description: 'Yogurt-based drink with a salty twist.',
        img: '/menu/food.webp'
      },
      {
        slug: 'masaledar-ice-tea',
        title: 'Masaledar Ice Tea',
        price: '$3.99',
        description: 'Well-brewed iced tea with spices.',
        img: '/menu/food.webp'
      },
      {
        slug: 'lemonade',
        title: 'Lemonade',
        price: '$2.99',
        description: 'Refreshing drink made with lemon juice.',
        img: '/menu/food.webp'
      },
      {
        slug: 'pellegrino',
        title: 'Pellegrino',
        price: '$3.99',
        description: 'Sparkling mineral water.',
        img: '/menu/food.webp'
      },
      {
        slug: 'soda',
        title: 'Soda',
        price: '$2.50',
        description: 'Assorted soft drinks.',
        img: '/menu/food.webp'
      },
      {
        slug: 'bottled-water',
        title: 'Bottled Water',
        price: '$2.00',
        description: 'Pure and refreshing bottled water.',
        img: '/menu/food.webp'
      },
      {
        slug: 'indian-masala-tea',
        title: 'Indian Masala Tea',
        price: '$2.50',
        description: 'Traditional black tea infused with aromatic spices.',
        img: '/menu/food.webp'
      }
    ]
  },
  // Rice Platter (Special)
  {
    slug: 'rice-platter-special',
    label: 'Rice Platter (Special)',
    description: 'Chicken, lamb, and gyro over rice plates.',
    image: '/menu/rice.webp',
    productCards: [
      {
        slug: 'chicken-over-rice-special',
        title: 'Chicken over Rice',
        price: '$10.99',
        description:
          'Grilled chicken over basmati rice with mixed salad, seasoned fries, and choice of sauces: white, hot, green, and barbecue.',
        img: '/menu/food.webp'
      },
      {
        slug: 'lamb-over-rice-special',
        title: 'Lamb over Rice (Special)',
        price: '$10.99',
        description:
          'Grilled lamb over basmati rice with mixed salad, seasoned fries, and choice of sauces: white, hot, green, and barbecue.',
        img: '/menu/food.webp'
      },
      {
        slug: 'mix-over-rice-special',
        title: 'Mix over Rice (Special)',
        price: '$11.99',
        description:
          'Grilled chicken and lamb over basmati rice with mixed salad, seasoned fries, and choice of sauces.',
        img: '/menu/food.webp'
      },
      {
        slug: 'chicken-gyro-special',
        title: 'Chicken Gyro (Special)',
        price: '$7.99',
        description:
          'Grilled chicken with mixed salad, seasoned fries, and choice of sauces.',
        img: '/menu/food.webp'
      },
      {
        slug: 'lamb-gyro-special',
        title: 'Lamb Gyro (Special)',
        price: '$7.99',
        description:
          'Grilled lamb with mixed salad, seasoned fries, and choice of sauces.',
        img: '/menu/food.webp'
      }
    ]
  },
  // Sauces for Wings, Nuggets & Tenders
  {
    slug: 'sauces-for-wings',
    label: 'Sauces for Wings, Nuggets & Tenders',
    description: 'Pick your sauce for wings, nuggets, and tenders.',
    image: '/menu/sauces.webp',
    productCards: [
      {
        slug: 'honey-lemon-peppers',
        title: 'Honey Lemon Peppers',
        price: '$0.00',
        description: 'Tangy and citrusy sauce with a hint of honey.',
        img: '/menu/food.webp'
      },
      {
        slug: 'ranch',
        title: 'Ranch',
        price: '$0.00',
        description: 'Creamy sauce with a tangy flavor.',
        img: '/menu/food.webp'
      },
      {
        slug: 'white-sauce',
        title: 'White Sauce',
        price: '$0.00',
        description: 'Creamy sauce to complement wings, nuggets, and tenders.',
        img: '/menu/food.webp'
      },
      {
        slug: 'sweet-and-spicy',
        title: 'Sweet & Spicy',
        price: '$0.00',
        description: 'Tangy and savory sauce for wings, nuggets, and tenders.',
        img: '/menu/food.webp'
      },
      {
        slug: 'honey-mustard',
        title: 'Honey Mustard',
        price: '$0.00',
        description: 'Sweet and tangy mustard sauce with a hint of honey.',
        img: '/menu/food.webp'
      }
    ]
  },
  // Chicken Nuggets Lovers
  {
    slug: 'chicken-nuggets-lovers',
    label: 'Chicken Nuggets Lovers',
    description: 'Crispy chicken nuggets in sharable sizes.',
    image: '/menu/nuggets.webp',
    productCards: [
      {
        slug: '20pcs-chicken-nuggets',
        title: '20 Pcs Chicken Nuggets',
        price: '$12.99',
        description: 'Tender and juicy chicken pieces in a crispy exterior.',
        img: '/menu/food.webp'
      },
      {
        slug: '6pcs-chicken-nuggets',
        title: '6 Pcs Chicken Nuggets',
        price: '$5.99',
        description: 'Tender and juicy chicken pieces in a crispy coating.',
        img: '/menu/food.webp'
      },
      {
        slug: '12pcs-chicken-nuggets',
        title: '12 Pcs Chicken Nuggets',
        price: '$8.99',
        description: 'Tender and juicy chicken pieces in a crispy exterior.',
        img: '/menu/food.webp'
      }
    ]
  },
  // Chicken Tender Lovers
  {
    slug: 'chicken-tender-lovers',
    label: 'Chicken Tender Lovers',
    description: 'Chicken tenders in different portion sizes.',
    image: '/menu/tender.webp',
    productCards: [
      {
        slug: '10pcs-chicken-tender',
        title: '10 Pcs Chicken Tender',
        price: '$15.99',
        description: 'Tender and juicy chicken strips, perfect for snacking.',
        img: '/menu/food.webp'
      },
      {
        slug: '3pcs-chicken-tenders',
        title: '3 Pcs Chicken Tenders',
        price: '$7.99',
        description:
          'Tender and juicy chicken strips, perfect for a quick bite.',
        img: '/menu/food.webp'
      },
      {
        slug: '5pcs-chicken-tender',
        title: '5 Pcs Chicken Tender',
        price: '$8.99',
        description:
          'Tender and juicy chicken strips, perfect for a satisfying meal.',
        img: '/menu/food.webp'
      }
    ]
  },
  // Chicken Wings Lovers
  {
    slug: 'chicken-wings-lovers',
    label: 'Chicken Wings Lovers',
    description: 'Crispy chicken wings for every craving.',
    image: '/menu/wings.webp',
    productCards: [
      {
        slug: '12pcs-chicken-wings',
        title: '12 Pcs Chicken Wings',
        price: '$14.99',
        description: 'Tender and juicy chicken wings, perfect for snacking.',
        img: '/menu/food.webp'
      },
      {
        slug: '6pcs-chicken-wings',
        title: '6 Pcs Chicken Wings',
        price: '$8.99',
        description: 'Tender and juicy chicken wings, perfect for snacking.',
        img: '/menu/food.webp'
      },
      {
        slug: '9pcs-chicken-wings',
        title: '9 Pcs Chicken Wings',
        price: '$11.99',
        description: 'Tender and juicy chicken wings, perfect for snacking.',
        img: '/menu/food.webp'
      }
    ]
  },
  // Salads
  {
    slug: 'salads',
    label: 'Salads',
    description: 'Fresh salads with house dressings.',
    image: '/menu/salad.webp',
    productCards: [
      {
        slug: 'cucumber-salad',
        title: 'Cucumber Salad',
        price: '$5.99',
        description: 'Refreshing cucumber salad.',
        img: '/menu/food.webp'
      },
      {
        slug: 'caesar-salad',
        title: 'Caesar Salad',
        price: '$7.99',
        description: 'Romaine lettuce, creamy Caesar dressing, and croutons.',
        img: '/menu/food.webp'
      },
      {
        slug: 'honey-lime-grill-shrimp-salad',
        title: 'Honey Lime Grill Shrimp Salad',
        price: '$9.99',
        description:
          'Lettuce, tomato, cucumber, parmesan, honey-lime grilled shrimp, red onion, cilantro, lemon juice, and olive oil.',
        img: '/shrimp.jpg'
      },
      {
        slug: 'salad-chaat',
        title: 'Salad Chaat',
        price: '$5.99',
        description: 'Flavorful mix of vegetables and spices.',
        img: '/menu/food.webp'
      },
      {
        slug: 'simple-green-salad',
        title: 'Simple Green Salad',
        price: '$8.99',
        description:
          'Lettuce, tomato, cucumber, olives, carrot, green and red peppers, red onion, and cilantro.',
        img: '/menu/food.webp'
      },
      {
        slug: 'avocado-salad',
        title: 'Avocado Salad',
        price: '$9.99',
        description:
          'Avocado, tomato, cucumber, olive oil, red onion, cilantro, and fresh lemon juice.',
        img: '/menu/food.webp'
      },
      {
        slug: 'grilled-chicken-salad',
        title: 'Grilled Chicken Salad',
        price: '$9.99',
        description:
          'Kerala-herb-marinated grilled chicken over lettuce, tomato, cucumber, lemon juice, and olive oil.',
        img: '/menu/food.webp'
      }
    ]
  },
  // Vegetarian Appetizers
  {
    slug: 'vegetarians',
    label: 'Vegetarians',
    description: 'Vegetarian appetizers and snacks.',
    image: '/menu/vegetarians.webp',
    productCards: [
      {
        slug: 'mixed-pakora',
        title: 'Mixed Pakora',
        price: '$4.99',
        description:
          'Assorted fried vegetable fritters (cauliflower, onion, potato, spinach).',
        img: '/menu/food.webp'
      },
      {
        slug: 'vegetable-samosas-2pcs',
        title: 'Vegetable Samosas (2 Pcs)',
        price: '$4.99',
        description:
          'Seasoned potatoes and mixed vegetables stuffed in a crisp wrap.',
        img: '/menu/food.webp'
      },
      {
        slug: 'chana-chaat-papri',
        title: 'Chana Chaat Papri',
        price: '$7.99',
        description: 'Chickpeas and cucumbers in yogurt and tamarind blend.',
        img: '/menu/food.webp',
        popular: true
      },
      {
        slug: 'ponir-ka-sole',
        title: 'Ponir Ka Sole',
        price: '$8.99',
        description: 'Marinated assorted vegetables broiled in the tandoor.',
        img: '/menu/food.webp'
      },
      {
        slug: 'vegetable-platter',
        title: 'Vegetable Platter',
        price: '$6.99',
        description: 'Assorted vegetables platter.',
        img: '/menu/food.webp'
      },
      {
        slug: 'french-fries',
        title: 'French Fries',
        price: '$4.99',
        description:
          'Thinly sliced potatoes, crispy outside and fluffy inside.',
        img: '/menu/food.webp'
      },
      {
        slug: 'onion-pakora',
        title: 'Onion Pakora',
        price: '$4.99',
        description: 'Onion fritters with chickpea flour, salt, and pepper.',
        img: '/menu/food.webp',
        popular: true
      }
    ]
  },
  // Vegetable Specials
  {
    slug: 'vegetable-specials',
    label: 'Vegetable Specials',
    description: 'House vegetarian curries and paneer dishes.',
    image: '/menu/vegetable.webp',
    productCards: [
      {
        slug: 'saag-paneer',
        title: 'Saag Paneer',
        price: '$13.99',
        description:
          'Homemade cheese cubes simmered in puréed spinach with light spices.',
        img: '/menu/food.webp',
        popular: true
      },
      {
        slug: 'bhindi-masala',
        title: 'Bhindi Masala',
        price: '$14.99',
        description: 'Okra cooked with onions, tomatoes, and herbs.',
        img: '/menu/food.webp'
      },
      {
        slug: 'tarka-daal-veg',
        title: 'Tarka Daal',
        price: '$13.99',
        description:
          'Lentils cooked with onion and tomatoes, sautéed with garlic and cumin.',
        img: '/menu/food.webp'
      },
      {
        slug: 'aloo-gobi',
        title: 'Aloo Gobi',
        price: '$13.99',
        description:
          'Cauliflower, potatoes, peas, and garlic sautéed with ginger, tomatoes, and spices.',
        img: '/menu/food.webp'
      },
      {
        slug: 'vegetable-jalfrezi',
        title: 'Vegetable Jalfrezi',
        price: '$13.99',
        description: 'Fresh garden vegetables sautéed in a tangy sauce.',
        img: '/menu/food.webp'
      },
      {
        slug: 'navrattan-korma',
        title: 'Navzattan Korma',
        price: '$14.99',
        description:
          'Combination of fresh vegetables cooked in a rich gravy with nuts and paneer.',
        img: '/menu/food.webp'
      },
      {
        slug: 'mixed-vegetables-curry',
        title: 'Mixed Vegetables',
        price: '$13.99',
        description: 'Mixed vegetables cooked in a house-blended curry sauce.',
        img: '/menu/food.webp'
      },
      {
        slug: 'malai-kofta',
        title: 'Malai Kofta',
        price: '$14.99',
        description:
          'Vegetable croquettes simmered in butter sauce, garnished with almonds and raisins.',
        img: '/menu/food.webp'
      },
      {
        slug: 'chana-masala',
        title: 'Chana Masala',
        price: '$13.99',
        description:
          'Chickpeas cooked with fresh tomatoes, onion, garlic, and coriander.',
        img: '/menu/food.webp'
      },
      {
        slug: 'baigan-bhurta',
        title: 'Baigan Bhurta',
        price: '$14.99',
        description:
          'Mashed eggplant sautéed with tomatoes, green peas, herbs, and spices.',
        img: '/menu/food.webp'
      },
      {
        slug: 'matar-mushroom-curry',
        title: 'Matar Mushroom Curry',
        price: '$14.99',
        description:
          'Mushrooms and green peas cooked in a creamy sauce with herbs.',
        img: '/menu/food.webp'
      },
      {
        slug: 'paneer-tikka-masala',
        title: 'Paneer Tikka Masala',
        price: '$14.99',
        description:
          'BBQ paneer cubes cooked in a creamy sauce with pepper and onion.',
        img: '/menu/food.webp'
      },
      {
        slug: 'daal-makkhani-veg',
        title: 'Daal Makkhani',
        price: '$13.99',
        description:
          'Lentils with garlic and ginger, sautéed with cream and herbs.',
        img: '/menu/food.webp'
      },
      {
        slug: 'matar-paneer',
        title: 'Matar Paneer',
        price: '$14.99',
        description:
          'Paneer cubes with green peas, onions, and tomatoes cooked in a special sauce.',
        img: '/menu/food.webp'
      },
      {
        slug: 'paneer-makhani',
        title: 'Paneer Makhani',
        price: '$14.99',
        description: 'Paneer in a rich, creamy tomato sauce.',
        img: '/menu/food.webp'
      },
      {
        slug: 'karahi-paneer',
        title: 'Karahi Paneer',
        price: '$14.99',
        description:
          'Paneer sautéed with tomato, onion, peppers, coriander seeds, and herbs.',
        img: '/menu/food.webp'
      },
      {
        slug: 'palak-paneer',
        title: 'Palak Paneer',
        price: '$14.99',
        description:
          'Paneer cubes simmered in puréed spinach with light spices.',
        img: '/menu/food.webp'
      }
    ]
  }
]
