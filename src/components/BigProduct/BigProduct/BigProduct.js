import {Link} from "react-router-dom";
import "./BigProduct.scss";
import ProductCartModal from "../../Modal/ProductCartModal";
import {useState} from "react";

export default function BigProduct(props) {

    const [cartModalIsOpen, setCartModalIsOpen] = useState(false);

    return (
        <>
            <div className="big-product-card">
                <div className="big-product-thumbnail">
                    <Link to={`/product/${props.id}`}>
                        <div className="product-thumbnail--image-wrapper">
                            <img className="product-thumbnail--image" src={props.productImage} alt="product" width={338}
                                 height={435}/>
                        </div>
                    </Link>
                    {props.hasCoupon &&
                        <span className="product-thumbnail--coupon">+{props.coupon}%쿠폰</span>
                    }
                    <button>
                        <img
                            onClick={() => setCartModalIsOpen(true)}
                            className="product-thumbnail--cart"
                            src="https://s3.ap-northeast-2.amazonaws.com/res.kurly.com/kurly/ico/2021/cart_white_45_45.svg"
                            alt="cart"
                        />
                    </button>
                </div>

                <div className="big-product-description">
                    <span className="delivery_sat">샛별배송</span>
                    <span className="big-product-name">{props.productName}</span>

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
                    <p className="product-message">{props.productMessage}</p>
                </div>
            </div>
            <ProductCartModal
                isOpen={cartModalIsOpen}
                closeModal={() => setCartModalIsOpen(false)}
                product={props}
                isAccumulate={false}
            />
        </>
    )
}
