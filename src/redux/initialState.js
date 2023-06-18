const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      price: 30,
      oldPrice: 39,
      stars: 2,
      userRating: 3,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 30,
      stars: 2,
      userRating: 0,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 30,
      stars: 2,
      userRating: 0,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 30,
      stars: 2,
      userRating: 0,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      oldPrice: 33,
      stars: 2,
      userRating: 0,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      stars: 2,
      userRating: 0,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      price: 30,
      stars: 2,
      userRating: 0,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      stars: 2,
      userRating: 0,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      price: 30,
      stars: 2,
      userRating: 0,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      price: 30,
      stars: 2,
      userRating: 0,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      price: 30,
      stars: 2,
      userRating: 0,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      price: 30,
      stars: 2,
      userRating: 0,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      price: 30,
      stars: 2,
      userRating: 0,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      price: 30,
      stars: 2,
      userRating: 0,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      price: 30,
      stars: 2,
      userRating: 0,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      price: 30,
      stars: 2,
      userRating: 0,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      price: 30,
      stars: 2,
      userRating: 0,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      stars: 2,
      userRating: 0,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      price: 30,
      stars: 2,
      userRating: 0,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      price: 30,
      stars: 2,
      userRating: 0,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      price: 30,
      stars: 2,
      userRating: 0,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      price: 30,
      stars: 2,
      userRating: 0,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      price: 30,
      stars: 2,
      userRating: 0,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      price: 30,
      stars: 2,
      userRating: 0,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'chair-1',
      name: 'Chair 1',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'chair-2',
      name: 'Chair 2',
      category: 'chair',
      price: 30,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'chair-3',
      name: 'Chair 3',
      category: 'chair',
      price: 30,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'chair-4',
      name: 'Chair 4',
      category: 'chair',
      price: 30,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'chair-5',
      name: 'Chair 5',
      category: 'chair',
      price: 30,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'chair-6',
      name: 'Chair 6',
      category: 'chair',
      price: 30,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'chair-7',
      name: 'Chair 7',
      category: 'chair',
      price: 30,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'chair-8',
      name: 'Chair 8',
      category: 'chair',
      price: 30,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'sofa-1',
      name: 'Sofa 1',
      category: 'sofa',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'sofa-2',
      name: 'Sofa 2',
      category: 'sofa',
      price: 30,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'sofa-3',
      name: 'Sofa 3',
      category: 'sofa',
      price: 30,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'sofa-4',
      name: 'Sofa 4',
      category: 'sofa',
      price: 30,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'sofa-5',
      name: 'Sofa 5',
      category: 'sofa',
      price: 30,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'sofa-6',
      name: 'Sofa 6',
      category: 'sofa',
      price: 30,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'sofa-7',
      name: 'Sofa 7',
      category: 'sofa',
      price: 30,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'sofa-8',
      name: 'Sofa 8',
      category: 'sofa',
      price: 30,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'table-1',
      name: 'Table 1',
      category: 'table',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'table-2',
      name: 'Table 2',
      category: 'table',
      price: 30,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'table-3',
      name: 'Table 3',
      category: 'table',
      price: 30,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'table-4',
      name: 'Table 4',
      category: 'table',
      price: 30,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'table-5',
      name: 'Table 5',
      category: 'table',
      price: 30,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'table-6',
      name: 'Table 6',
      category: 'table',
      price: 30,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'table-7',
      name: 'Table 7',
      category: 'table',
      price: 30,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'table-8',
      name: 'Table 8',
      category: 'table',
      price: 30,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'dining-1',
      name: 'Dining 1',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'dining-2',
      name: 'Dining 2',
      category: 'dining',
      price: 30,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'dining-3',
      name: 'Dining 3',
      category: 'dining',
      price: 30,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'dining-4',
      name: 'Dining 4',
      category: 'dining',
      price: 30,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'dining-5',
      name: 'Dining 5',
      category: 'dining',
      price: 30,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'dining-6',
      name: 'Dining 6',
      category: 'dining',
      price: 30,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'dining-7',
      name: 'Dining 7',
      category: 'dining',
      price: 30,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
    {
      id: 'dining-8',
      name: 'Dining 8',
      category: 'dining',
      price: 30,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      compare: false,
    },
  ],
  cart: {
    products: [],
  },

  brands: [
    { id: 1, source: '/images/brands/brand 1.png', brandName: 'brand 1' },
    { id: 2, source: '/images/brands/brand 2.png', brandName: 'brand 2' },
    { id: 3, source: '/images/brands/brand 3.png', brandName: 'brand 3' },
    { id: 4, source: '/images/brands/brand 4.png', brandName: 'brand 4' },
    { id: 5, source: '/images/brands/brand 5.png', brandName: 'brand 5' },
    { id: 6, source: '/images/brands/brand 6.png', brandName: 'brand 6' },
  ],

  deals: [
    {
      id: 1,
      source: `${process.env.PUBLIC_URL}/images/deals/Left.jpg`,
      placeholder1: 'Guest Room',
      placeholder2: 'Sofa',
      placeholder3: '-20%',
    },
    {
      id: 2,
      source: `${process.env.PUBLIC_URL}/images/deals/Right1.jpg`,
      placeholder1: 'Office Chair',
      placeholder2: 'Collection',
      placeholder3: '$200.00',
    },
    {
      id: 3,
      source: `${process.env.PUBLIC_URL}/images/deals/Right2.jpg`,
      placeholder1: 'Special Collection',
      placeholder2: 'Save up 45% of furniture',
    },
  ],
};

export default initialState;
