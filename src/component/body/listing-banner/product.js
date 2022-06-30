import { useEffect, useState } from "react";
// import ProductsDetails from "./ProductsDetails";
import ListingBanner from "./listing-banner";

function Categories() {
  const [initialDataCat, setDataCat] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => setDataCat(data));
  }, []);
  console.log(initialDataCat)

  return <ListingBanner data={initialDataCat} />
}

export default Categories;
