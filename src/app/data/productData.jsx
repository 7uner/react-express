const productList = [
  {
    id: '000',
    name: 'Apple 2023 MacBook Pro',
    image: 'https://m.media-amazon.com/images/I/61dnax4xchL._AC_SL1500_.jpg',
    Description: 'Mind Blowing, Head Turning',
    link: '#',
    price: 3299.99,
    features: [
      `SUPERCHARGED BY M3 PRO OR M3 MAX—The Apple M3 Pro chip, with a
    12-core CPU and 18-core GPU using hardware-accelerated ray
    tracing, delivers amazing performance for demanding workflows like
    manipulating gigapixel panoramas or compiling millions of lines of
    code. M3 Max, with an up to 16-core CPU and up to 40-core GPU,
    drives extreme performance for the most advanced workflows like
    rendering intricate 3D content or developing transformer models
    with billions of parameters.`,
      `UP TO 22 HOURS OF BATTERY LIFE—Go all day thanks to the
    power-efficient design of Apple silicon. MacBook Pro delivers the
    same exceptional performance whether it’s running on battery or
    plugged in.`,
      `RESPONSIVE UNIFIED MEMORY AND STORAGE—Up to 36GB (M3 Pro) or up to
    128GB (M3 Max) of unified memory makes everything you do fast and
    fluid. Up to 4TB (M3 Pro) or up to 8TB (M3 Max) of superfast SSD
    storage launches apps and opens files in an instant.`,
    ],
    gallery: [
      'src/app/Assets/2023MacBookProM3/MacBook_Pro_M3_Gallery_1.jpg',
      'src/app/Assets/2023MacBookProM3/MacBook_Pro_M3_Gallery_2.jpg',
      'src/app/Assets/2023MacBookProM3/MacBook_Pro_M3_Gallery_3.jpg',
      'src/app/Assets/2023MacBookProM3/MacBook_Pro_M3_Gallery_4.jpg',
      'src/app/Assets/2023MacBookProM3/MacBook_Pro_M3_Gallery_5.jpg',
      'src/app/Assets/2023MacBookProM3/MacBook_Pro_M3_Gallery_6.jpg',
      'src/app/Assets/2023MacBookProM3/MacBook_Pro_M3_Gallery_7.jpg',
      'src/app/Assets/2023MacBookProM3/MacBook_Pro_M3_Gallery_8.jpg',
    ],
    options: {
      Storage: [
        ['256 GB', 0],
        ['512 GB', 300],
        ['1 TB', 800],
      ],
      Colour: [
        ['Silver', 0],
        ['Space Black', 100],
      ],
      Configuration: [
        ['M3 Pro', 0],
        ['M3 Max', 1000],
      ],
    },
  },
  {
    id: '001',
    name: 'Mac Book Pro 15th Gen',
    image: 'src/app/Assets/MacBookPro.jpg',
    Description: 'Last Gen, Just as Good, fraction of the price',
    link: '#',
  },
  {
    id: '002',
    name: 'iPad 10th Gen',
    image: 'src/app/Assets/iPad10th.jpg',
    Description: 'Get the latest iPad 10th Gen!',
    link: '#',
  },
  {
    id: '003',
    name: 'iPhone 15 Pro',
    image: 'src/app/Assets/iPhone15Pro.webp',
    Description: 'Get the latest iPhone 15 Pro!',
    link: '#',
  },
  {
    id: '004',
    name: 'iPhone 14',
    image: 'src/app/Assets/iPhone14.jpg',
    Description: 'Last Gen but still packs a punch!',
    link: '#',
  },
  {
    id: '005',
    name: 'Air Pods Max',
    image: 'src/app/Assets/AirPodsMax.jpg',
    Description: 'these wont fall out of your ears!',
    link: '#',
  },
  {
    id: '006',
    name: 'Apple Watch',
    image: 'src/app/Assets/apple watch.jpg',
    Description: 'Get the apple watch to pair with your iphone!',
    link: '#',
  },
];

export default productList;
