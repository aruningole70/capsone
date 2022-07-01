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
  
  const onFilterChange = (filter) => {
    console.log("onfilter", filter);
    if (filter) {
      initialDataCat.sort((a, b) => a.price - b.price);
        console.log(initialDataCat);
    }
}
  console.log(initialDataCat)

  return <ListingBanner data={initialDataCat} filterChange={onFilterChange} />
}

export default Categories;
