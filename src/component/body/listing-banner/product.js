import React from "react";

import { useEffect, useState } from "react";

import ListingBanner from "./listing-banner";

function Categories() {

  const [initialDataCat, setDataCat] = useState([]);

  const [sort, setSort] = useState();

  const [loading, setLoading] = useState(true);


  const [products, setProducts] = useState([]);

  const [selectedCategories, setSelectedCategories] = useState([]);
  
 

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(data => {
        setDataCat(data);
        setLoading(false);
        setProducts(data);
// this.list=data;
      })
  }, []);
  const filterProduct =(cat) => {
    var isInArray = selectedCategories.find(function (el) { return el === cat }) !== undefined;
    if (!isInArray) {
      selectedCategories.push(cat);
    }else{
      for (let i = 0; i < selectedCategories.length; i++) {
        if(selectedCategories[i] === cat){
          selectedCategories.splice(i,1);
        }
      }
    }
    var updatedList = [];
    for ( var i = 0; i < products.length; i++ ) {
      for ( var e = 0; e < selectedCategories.length; e++ ) {
          if ( products[i].category === selectedCategories[e] ){
            updatedList.push( products[i] )
          };
      }
    }
    if(selectedCategories.length === 0){
      updatedList = products;
    }
    console.log("men's clothing",updatedList);
    setDataCat(updatedList);    
  }
  const onfilterChange = (filter) => {
    if (filter) {
      const result = initialDataCat.sort((a, b) => a.price - b.price);
      return setSort(result);
    }
    else {
      return setSort(sort);
    }
  }

  return <ListingBanner loading={loading} filterProduct={filterProduct} data={initialDataCat} filterChange={onfilterChange} />
}

export default Categories;
