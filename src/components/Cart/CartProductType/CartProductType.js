import "./CartProductType.scss";
import CartProduct from "../CartProduct/CartProduct";
import {useContext, useState} from "react";
import {CartContext} from "../../../App";

export default function CartProductType(props) {

    const {cart, setCart} = useContext(CartContext);
    const [contentShow, setContentShow] = useState(true);

    const changeAmount = (id, amount) => {
        setCart(
            [...cart],
            cart[cart.findIndex(c => c.product.id === id)].amount = amount
        );
    }

    const deleteProduct = deleteId => {
        setCart(cart.filter((c) => c.product.id !== deleteId));
    }

    const toggleCheck = id => {
        let current = cart[cart.findIndex(c => c.product.id === id)].isChecked;
        setCart(
            [...cart],
            cart[cart.findIndex(c => c.product.id === id)].isChecked = !current
        )
    }

    return (
        <>
            {props.content.length > 0 &&
                <div className="cart-product-type">
                    <div className="cart-product-type--header">
                        <div className="cart-product-type--type-place">
                            <img src={props.type.iconImage} alt="type"/>
                            <span className="cart-product-type--header-type">{props.type.type} 상품</span>
                        </div>
                        <button className={`cart-product-type--header-content-xor arrow ${contentShow ? "" : "upside-down"}`}
                                onClick={() => setContentShow(!contentShow)}/>
                    </div>
                    <div className={`cart-product-type--content ${contentShow ? "" : "none"}`}>
                        {props.content.map(fc =>
                            (
                                <CartProduct
                                    isChecked={fc.isChecked}
                                    toggleCheck={() => toggleCheck(fc.product.id)}
                                    product={fc.product}
                                    amount={fc.amount}
                                    amountPlus={() => changeAmount(fc.product.id, fc.amount + 1)}
                                    amountMinus={() => fc.amount - 1 > 0 && changeAmount(fc.product.id, fc.amount - 1)}
                                    delete={() => deleteProduct(fc.product.id)}
                                />
                            )
                        )
                        }
                    </div>
                </div>
            }
        </>
    )
}
