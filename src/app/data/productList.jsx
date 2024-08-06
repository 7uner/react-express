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
    name: 'Apple 2022 MacBook Air',
    image: 'src/app/Assets/MacBookPro.jpg',
    Description: 'Last Gen, Just as Good, fraction of the price',
    link: '#',
    price: 1289.99,
    features: [
      `STRIKINGLY THIN DESIGN — The redesigned MacBook Air is more portable than ever and weighs just 2.7 pounds. 
    It’s the incredibly capable laptop that lets you work, play or create just about anything — anywhere`,
      `SUPERCHARGED BY M2 — Get more done faster with a next-generation 8-core CPU, up to 10-core GPU and up to 24GB of unified memory.`,
      `UP TO 18 HOURS OF BATTERY LIFE — Go all day and into the night, thanks to the power-efficient performance of the Apple M2 chip.`,
    ],
    gallery: [
      'src/app/Assets/2022MacBookAir/MacBookAir (1).jpg',
      'src/app/Assets/2022MacBookAir/MacBookAir (2).jpg',
      'src/app/Assets/2022MacBookAir/MacBookAir (3).jpg',
      'src/app/Assets/2022MacBookAir/MacBookAir (4).jpg',
      'src/app/Assets/2022MacBookAir/MacBookAir (5).jpg',
      'src/app/Assets/2022MacBookAir/MacBookAir (6).jpg',
      'src/app/Assets/2022MacBookAir/MacBookAir (7).jpg',
      'src/app/Assets/2022MacBookAir/MacBookAir (8).jpg',
      'src/app/Assets/2022MacBookAir/MacBookAir (9).jpg',
    ],
    options: {
      Storage: [
        ['256 GB', 0],
        ['512 GB', 300],
        ['1 TB', 800],
      ],
      Colour: [
        ['Silver', 0],
        ['Midnight', 100],
        ['Starlight', 120],
      ],
      Configuration: [
        ['M2 8 Core', 0],
        ['M2 10 Core', 800],
      ],
    },
  },
  {
    id: '002',
    name: 'iPad 10th Gen',
    image: 'src/app/Assets/iPad10th.jpg',
    Description: 'Get the latest iPad 10th Gen!',
    link: '#',
    price: 489.99,
    features: [
      `Apple iPad (10th generation): With A14 Bionic chip, 10.9-inch Liquid Retina display, 64GB, Wi-Fi 6, 12MP front/12MP back camera, Touch ID, all-day battery life `,
      `Colourfully reimagined and more versatile than ever, iPad is great for the things you do every day. With an all-screen design, 10.9-inch Liquid Retina display, 
      powerful A14 Bionic chip, superfast Wi-Fi and four gorgeous colours, iPad delivers a powerful way to create, stay connected and get things done.`,
      `iPadOS makes iPad more productive, intuitive and versatile. With iPadOS, run multiple apps at once, use Apple Pencil to write in any text field with Scribble,
       and edit and share photos. iPad comes with essential apps like Safari, Messages and Keynote, with over a million more apps available on the App Store.`,
    ],
    gallery: [
      'src/app/Assets/iPad10/iPad10.jpg',
      'src/app/Assets/iPad10/iPad10 (1).jpg',
      'src/app/Assets/iPad10/iPad10 (2).jpg',
      'src/app/Assets/iPad10/iPad10 (3).jpg',
      'src/app/Assets/iPad10/iPad10 (4).jpg',
      'src/app/Assets/iPad10/iPad10 (5).jpg',
      'src/app/Assets/iPad10/iPad10 (6).jpg',
    ],
    options: {
      Storage: [
        ['256 GB', 0],
        ['512 GB', 100],
        ['1 TB', 300],
      ],
      Colour: [
        ['Silver', 0],
        ['Midnight', 50],
        ['Starlight', 80],
      ],
      Configuration: [
        ['Wifi Only', 0],
        ['Wifi and Cellular', 300],
      ],
    },
  },
  {
    id: '003',
    name: 'iPhone 15 Pro',
    image: 'src/app/Assets/iPhone15Pro.webp',
    Description: 'Get the latest iPhone 15 Pro!',
    link: '#',
    price: 1289.99,
    features: [
      `STRIKINGLY THIN DESIGN — The redesigned MacBook Air is more portable than ever and weighs just 2.7 pounds. 
    It’s the incredibly capable laptop that lets you work, play or create just about anything — anywhere`,
      `SUPERCHARGED BY M2 — Get more done faster with a next-generation 8-core CPU, up to 10-core GPU and up to 24GB of unified memory.`,
      `UP TO 18 HOURS OF BATTERY LIFE — Go all day and into the night, thanks to the power-efficient performance of the Apple M2 chip.`,
    ],
    gallery: [
      'src/app/Assets/2022MacBookAir/MacBookAir (1).jpg',
      'src/app/Assets/2022MacBookAir/MacBookAir (2).jpg',
      'src/app/Assets/2022MacBookAir/MacBookAir (3).jpg',
      'src/app/Assets/2022MacBookAir/MacBookAir (4).jpg',
      'src/app/Assets/2022MacBookAir/MacBookAir (5).jpg',
      'src/app/Assets/2022MacBookAir/MacBookAir (6).jpg',
      'src/app/Assets/2022MacBookAir/MacBookAir (7).jpg',
      'src/app/Assets/2022MacBookAir/MacBookAir (8).jpg',
      'src/app/Assets/2022MacBookAir/MacBookAir (9).jpg',
    ],
    options: {
      Storage: [
        ['256 GB', 0],
        ['512 GB', 300],
        ['1 TB', 800],
      ],
      Colour: [
        ['Silver', 0],
        ['Midnight', 100],
        ['Starlight', 120],
      ],
      Configuration: [
        ['M2 8 Core', 0],
        ['M2 10 Core', 800],
      ],
    },
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
