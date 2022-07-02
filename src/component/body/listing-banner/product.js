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
  //  const [onfilterChange, setFilterChange] = useState ([])
  const [sort, setSort] = useState()
  const onfilterChange = (filter) => {

    console.log("onfilter", sort);
    if (filter) {
      const result = initialDataCat.sort((a, b) => a.price - b.price);
      // console.log(initialDataCat);
      return setSort(result);
      
    }
  }
  // console.log(sort);

  return <ListingBanner data={initialDataCat} filterChange={onfilterChange} />
}

export default Categories;
