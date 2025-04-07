export const generalStat = [
    {
      id: 1,
      title: 'Boycotted Products',
      count: 100,
      icon: 'chart-bar', // Updated to Material Community Icons format
      color: '#9B59B6', // Soft blue
      textColor: '#FFFFFF',
    },
    {
      id: 2,
      title: 'Boycotted Brands',
      count: 1231423,
      icon: 'currency-usd',
      color: '#50C878', // Mint green
      textColor: '#FFFFFF',
    },
    {
      id: 3,
      title: 'Alternatives',
      count: 2355,
      icon: 'cart',
      color: '#4A90E2', // Purple
      textColor: '#FFFFFF',
    },
    {
      id: 4,
      title: 'Participants',
      count: 400,
      icon: 'package-variant-closed',
      color: '#3498DB', // Light blue
      textColor: '#FFFFFF',
    },
  ];


  export interface IProductData {
    name: string;
    brandName: string;
    manufacturerInBangladesh: string;
    israelRelatedPerception: string;
    image:any;
  }
  
  export const productData: IProductData[] = [
    {
      name: "Coca-Cola",
      brandName: "Coca-Cola",
      manufacturerInBangladesh: "Abdul Monem Ltd. (AML)",
      israelRelatedPerception: "Boycotted due to U.S. ties and a historical factory in Israel; has a bottling plant in the West Bank operated by National Beverage Company.",
      image: require('../assets/images/product/coca-cola.jpg'), // Replace with the actual path to your image
    },
    {
      name: "Diet Coke",
      brandName: "Coca-Cola",
      manufacturerInBangladesh: "Abdul Monem Ltd. (AML)",
      israelRelatedPerception: "Variant of Coca-Cola, subject to the same boycott sentiment due to brand association with Israel-related perceptions.",
      image: require('../assets/images/product/coke-zero.jpg'), // Replace with the actual path to your image

    },
    {
      name: "Sprite",
      brandName: "Coca-Cola",
      manufacturerInBangladesh: "Abdul Monem Ltd. (AML)",
      israelRelatedPerception: "Coca-Cola subsidiary, included in boycotts for perceived U.S.-Israel links.",
      image: require('../assets/images/product/fanta.jpg'), // Replace with the actual path to your image

    },
    {
      name: "Fanta",
      brandName: "Coca-Cola",
      manufacturerInBangladesh: "Abdul Monem Ltd. (AML)",
      israelRelatedPerception: "Coca-Cola brand, targeted in boycotts alongside other Coca-Cola products.",
      image: require('../assets/images/product/pepsi.jpg'), // Replace with the actual path to your image

    },
    {
      name: "Pepsi",
      brandName: "Pepsi",
      manufacturerInBangladesh: "Transcom Beverage Ltd. (TBL)",
      israelRelatedPerception: "Boycotted due to U.S. origins and PepsiCo’s acquisition of SodaStream, an Israeli company, in 2018.",
      image: require('../assets/images/product/pepsi.jpg'), // Replace with the actual path to your image

    },
    {
      name: "Diet Pepsi",
      brandName: "Pepsi",
      manufacturerInBangladesh: "Transcom Beverage Ltd. (TBL)",
      israelRelatedPerception: "Pepsi variant, included in boycotts due to SodaStream association and U.S. ties.",
      image: require('../assets/images/product/pepsi.jpg'), // Replace with the actual path to your image

    },
    {
      name: "7UP",
      brandName: "Pepsi",
      manufacturerInBangladesh: "Transcom Beverage Ltd. (TBL)",
      israelRelatedPerception: "PepsiCo brand, targeted in boycott campaigns for perceived Israel links.",
      image: require('../assets/images/product/pepsi.jpg'), // Replace with the actual path to your image
    },
    {
      name: "Mountain Dew",
      brandName: "Pepsi",
      manufacturerInBangladesh: "Transcom Beverage Ltd. (TBL)",
      israelRelatedPerception: "PepsiCo product, subject to boycotts due to brand’s U.S. and SodaStream connections.",
      image: require('../assets/images/product/sprite.jpg'), // Replace with the actual path to your image
    },

  ];