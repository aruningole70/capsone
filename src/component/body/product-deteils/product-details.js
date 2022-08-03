import React, { useState } from "react";
import '../../../App.css';
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber, addToCart } from '../../../redux/acion/index';
import slack from '../../../assects/slack.svg';
import feather from '../../../assects/feather.svg';
import coffee from '../../../assects/coffee.svg';
import layers from '../../../assects/layers.svg';
import headerline from '../../../assects/headerline.svg';
import share from '../../../assects/share.svg';
import heart from '../../../assects/heart.svg';
import minus from '../../../assects/minus.svg';
import plus from '../../../assects/plus.svg';
import star from '../../../assects/star.svg';
import star1 from '../../../assects/star1.svg';
// import SimpleImageSlider from "react-simple-image-slider";
import Imageslider from "./imageslider";
// import SimpleImageSlider from "react-simple-image-slider";
// import SimpleImageSlider from "react-simple-image-slider/dist/ImageSlider";
// import SimpleImageSlider from "react-simple-image-slider";
// import useResizeObserver from "@react-hook/resize-observer";

function Product() {
    const [isloading, setIsloading] = useState(true);
    const myState = useSelector((state) => state.Change);
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    // let image = "";
    const dispatch = useDispatch();
    const getProducts = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setIsloading(false);
        // images = product.image;
    }
    useEffect(() => {
        getProducts();
    }, [id]);

    const slides = [
        { url: product.image },
        { url: product.image },
        { url: product.image },
        { url: product.image },
        { url: product.image }

    ];
    // let image = img;
    // const [image1 , setImage1] = useState(image);
    // const imagechage = (img) => {
    //     image = img;
    //     setImage1(image);
    //     console.log(image);
    // }


    return (
        <div className="product-detail">
            {isloading ? (<h1 style={{ fontSize: "62px" }}>Loading...</h1>) :
                <>
                    <div className="aem-Grid aem-Grid--12 demo-Grid">
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 demo-GridColumn">
                            <div className="aem-Grid aem-Grid--12 demo-Grid image-section">
                                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--hide demo-GridColumn sub-images">
                                    <div className="sub-image">
                                        <div className="sub-img-style"><img src={product.image} alt="here is product image" /></div>
                                        <div className="sub-img-style"><img src={product.image} alt="here is product image" /></div>
                                        <div className="sub-img-style"><img src={product.image} alt="here is product image" /></div>
                                        <div className="sub-img-style"><img src={product.image} alt="here is product image" /></div>
                                        <div className="sub-img-style"><img src={product.image} alt="here is product image" /></div>
                                    </div>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 demo-GridColumn main-image">
                                    <Imageslider slides={slides} />
                                </div>
                                {/* <div className="aem-GridColumn aem-GridColumn--default--8 demo-GridColumn main-image">
                        <SimpleImageSlider
                            width={450}
                            height={600}
                            images={images}
                            showBullets={true}
                            showNavs={true}
                          />
                        </div> */}
                        {/* <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 demo-GridColumn">
                        <SimpleImageSlider
                            width={450}                            
                            height={600}
                            images={images}
                            showBullets={true}
                            showNavs={false}
                          />
                        </div> */}
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 demo-GridColumn product-details">
                            <div className="title">
                                <h1>{product.category}</h1>
                                <h2>{product.title}</h2>
                                <p>${product.price}</p>
                                <p>
                                    <img src={star} alt="this is rating" />
                                    <img src={star} alt="this is rating" />
                                    <img src={star} alt="this is rating" />
                                    <img src={star} alt="this is rating" />
                                    <img src={star1} alt="this is rating" />(175)
                                </p>
                                <p><span>{product.description}</span></p>
                            </div>
                            <hr />
                            <div className="product-button">
                                <div className="quentity-button">
                                    <p>Quantity</p>
                                    <button onClick={() => dispatch(decNumber())}><img src={minus} alt="photo" /></button>
                                    <input type="text" value={myState.count} />
                                    <button onClick={() => dispatch(incNumber())}><img src={plus} alt="photo" /></button>
                                </div>
                                <div className="add-cart-button">
                                    <button onClick={() => dispatch(addToCart(product))}>ADD TO CART</button>
                                </div>
                                <div className="shair-buttan">
                                    <button><img src={heart} alt="photo" />Save</button>
                                    <button><img src={share} alt="photo" />Share</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aem-Grid aem-Grid--12 demo-Grid product-bottom">
                        <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 demo-GridColum prdouct-discreiption-box ">
                            <h1>{product.title}</h1>
                            <h6>Description</h6>
                            <p>{product.description}</p>
                            <span><img src={headerline} alt="photo" /></span>
                        </div>
                    </div>
                </>}
        </div>
    );
}
export default Product;