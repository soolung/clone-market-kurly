import "./CartProductType.scss";
import CartProduct from "../CartProduct/CartProduct";
import {useContext, useState} from "react";
import {CartContext} from "../../../App";

export default function CartProductType(props) {

    const {cart, setCart} = useContext(CartContext);
    const [contentShow, setContentShow] = useState(true);

    const changeAmount = (id, amount) => {
        const index = cart.findIndex(c => c.product.id === id);
        setCart(
            [...cart],
            cart[index].amount = amount
        );
    }

    const deleteProduct = deleteId => {
        setCart(cart.filter((c) => c.product.id !== deleteId));
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
                        <button className={`cart-product-type--header-content-xor ${contentShow ? "" : "upside-down"}`}
                                onClick={() => setContentShow(!contentShow)}/>
                    </div>
                    <div className={`cart-product-type--content ${contentShow ? "" : "none"}`}>
                        {props.content.map(fc =>
                            (
                                <CartProduct
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
