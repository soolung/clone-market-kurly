import {Link} from "react-router-dom";
import "./Product.scss";

export default function Product(props) {

    return (
        <div className="product-card">
            <Link to="">
                <div className="product-thumbnail">
                    <div className="product-thumbnail--image-wrapper">
                        <img className="product-thumbnail--image" src={props.productImage} alt="product" width={249}
                             height={320}/>
                    </div>
                    {props.hasCoupon &&
                        <span className="product-thumbnail--coupon">+{props.coupon}%쿠폰</span>
                    }
                    <button>
                        <img
                            className="product-thumbnail--cart"
                            src="https://s3.ap-northeast-2.amazonaws.com/res.kurly.com/kurly/ico/2021/cart_white_45_45.svg"
                            alt="cart"
                        />
                    </button>
                </div>

                <div className="product-description">
                    <span className="product-name">{props.productName}</span>

                    <div className="product-price">
                        {props.isDiscount ?
                            <>
                                <span className="product-price--discount">{props.discount}%</span>
                                <span className="product-price--price">{props.price.toLocaleString()}원</span>
                                <span
                                    className="product-price--price-before-discount">{props.priceBeforeDiscount.toLocaleString()}원</span>
                            </>
                            :
                            <span className="product-price--price">{props.price.toLocaleString()}원</span>
                        }
                    </div>
                </div>
            </Link>
        </div>
    )
}
