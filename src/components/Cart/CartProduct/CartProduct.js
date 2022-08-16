import "./CartProduct.scss";
import AmountButton from "../../AmountButton/AmountButton";
import Check from "../../Check/Check";
import {Link} from "react-router-dom";

export default function CartProduct(props) {
    return (
        <>
            <div className="cart-product">
                <Check className="cart-product-check" isChecked={props.isChecked} willDo={props.toggleCheck}/>
                <Link to={`/product/${props.product.id}`}>
                    <img src={props.product.productImage} alt="product"/>
                    <span className="cart-product-name">{props.product.productName}</span>
                </Link>
                <AmountButton
                    minus={props.amountMinus}
                    plus={props.amountPlus}
                    amount={props.amount}
                />
                <div className="cart-product-price">
                    <span
                        className="cart-product-price-price">{(props.product.price * props.amount).toLocaleString()}원</span>
                    {
                        props.product.isDiscount &&
                        <span
                            className="cart-product-price-discount">{(props.product.priceBeforeDiscount * props.amount).toLocaleString()}원</span>
                    }
                </div>
                <button className="cart-product-delete" onClick={props.delete}/>
            </div>
        </>
    )
}
