const data = [
  {
    _id: "product-1",
    title: "t-shirts",
    catagory: "tops",
    image: "tshirt.jpg",
    price: 25.99,
    stock: 8,
    minium: 1,
  },
  {
    _id: "product-2",
    title: "pants",
    catagory: "bottoms",
    image: "pants.jpg",
    price: 67.99,
    stock: 5,
    minium: 1,
  },
  {
    _id: "product-3",
    title: "sweater",
    catagory: "tops",
    image: "sweater.jpg",
    price: 74.99,
    stock: 5,
    minium: 1,
  },
  {
    _id: "product-4",
    title: "beanies",
    catagory: "hats",
    image: "beanie.jpg",
    price: 27.99,
    stock: 10,
    minium: 1,
  },
  {
    _id: "product-5",
    title: "shoes",
    catagory: "footware",
    image: "shoes.jpg",
    price: 119.99,
    stock: 7,
    minium: 1,
  },
  {
    _id: "product-6",
    title: "flannel",
    catagory: "tops",
    image: "flannel.jpg",
    price: 54.99,
    stock: 3,
    minium: 1,
  },
  {
    _id: "product-7",
    title: "glasses",
    catagory: "accessories",
    image: "glasses.jpg",
    price: 79.99,
    stock: 3,
    minium: 1,
  },
];

class DataService {
  getCatalog() {
    // TODO: call the srrvicer to retrieve the catalog

    // work with mock data (temporal information)
    return data;
  }
  saveProduct() {}
  login() {}
}
export default DataService;
