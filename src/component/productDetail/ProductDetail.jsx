import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import "./productDetail.css"
import Rating from "@mui/material/Rating"
import StarIcon from "@mui/icons-material/Star"
const ProductDetail = () => {
  const value = 4
  return (
    <div className="productDetail_main">
      <div>
        <Carousel infiniteLoop autoPlay>
          <div className="product_detail_image">
            <img src="https://dummyimage.com/medrect" alt="" />
          </div>
          <div className="product_detail_image">
            <img src="https://dummyimage.com/medrect" alt="" />
          </div>
          <div className="product_detail_image">
            <img src="https://dummyimage.com/medrect" alt="" />
          </div>
          <div className="product_detail_image">
            <img src="https://dummyimage.com/medrect" alt="" />
          </div>
          <div className="product_detail_image">
            <img src="https://dummyimage.com/medrect" alt="" />
          </div>
        </Carousel>
      </div>
      <div>
        <div>
          <p>Brand: Home furniture</p>
          <h1 className="productDetail_heading">
            Home furniture Wooden Sofa set for Living Room and office Five
            Seater (5 Seater, Trak Finish)
          </h1>
          <Rating
            name="text-feedback"
            value={value}
            readOnly
            precision={0.5}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          <div style={{ display: "flex", margin: "5px 0px 10px 0px" }}>
            <span className="productDetail_save1 ">₹</span>
            <span className="productDetail_save2 ">30,3999</span>
          </div>
          <div>
            <span className="productdetail_save31">M.R.P: </span>
            <span className="productdetail_save3"> ₹49,999.00</span>
          </div>
          <div>
            <p>Inclusive of all taxes</p>
          </div>
        </div>
      </div>
      <div className="productDetail_card">
        <div style={{ display: "flex", margin: "5px 0px 10px 0px" }}>
          <span className="productDetail_save1 ">₹</span>
          <span className="productDetail_save2 ">30,3999</span>
        </div>
        <p className="productDetail_stock">In Stock</p>
        <p>
          Sold and fulfilled by <span>Home furniture</span>
        </p>
        <div style={{ display: "flex" }}>
          <p style={{ paddingRight: "20px" }}>Quantity:</p>
          <select name="" style={{ height: "20px", marginTop: "13px" }}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>

        <div className="productDetail_buttons">
          <button className="productDetail_button1">Add to Cart</button>
          <button className="productDetail_button1 productDetail_button2">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail