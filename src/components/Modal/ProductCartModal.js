import Modal from "react-modal";
import './ProductCartModal.scss';
import {useContext, useState} from "react";
import AmountButton from "../AmountButton/AmountButton";
import Button from "../Button/Button";
import {UserContext} from "../../App";

export default function ProductCartModal(props) {
    const [amount, setAmount] = useState(1)
    const putProductToCart = () => 1;

    const {user} = useContext(UserContext);
    const checkObjectIsEmpty = obj => JSON.stringify(obj) === '{}';

    return (
        <Modal
            isOpen={props.isOpen}
            className="product-cart-modal"
            overlayClassName="product-cart-modal--overlay"
            centered
        >
            <div className="product-cart-modal--information-wrapper">
                <div className="product-cart-modal--information">
                    <div className="product-cart-modal--detail-information">
                        {props.product.productName}
                        {!props.product.isAccumulate && !checkObjectIsEmpty(user) &&
                            <><br/><br/><span className="product-cart-modal--detail-information-no-accumulation">적립제외상품</span></>
                        }
                    </div>
                    <div className="product-cart-modal--price">
                        <span className="product-cart-modal--price-price">{props.product.price.toLocaleString()}원</span>
                        <AmountButton
                            className="product-cart-modal--price-amount"
                            amount={amount}
                            plus={() => setAmount(amount + 1)}
                            minus={() => amount > 0 && setAmount(amount - 1)}
                        />
                    </div>
                </div>
            </div>
            <div className="product-cart-modal--total">
                <div className="product-cart-modal--total-wrapper">
                    <span className="product-cart-modal--total-total">합계</span>
                    <span className="product-cart-modal--total-won">원</span>
                    <span
                        className="product-cart-modal--total-amount">{(amount * props.product.price).toLocaleString()}</span>
                </div>
                <div className="product-cart-modal--total-accumulation">
                    <span className="product-cart-modal--total-accumulation-badge">적립</span>
                    <span className="product-cart-modal--total-accumulation-description">
                    {checkObjectIsEmpty(user) ?
                        <>로그인 후, {props.product.isDiscount && <>회원할인가와</>} 적립혜택 제공</>
                        :
                        // TODO :: login 했을 때 isAccumulation 검사해서 적립 예쌍 금액 표시
                        <></>
                    }
                    </span>
                </div>
            </div>
            <div className="product-cart-modal--button">
                <Button
                    className="product-cart-modal--button-cancel"
                    willDo={props.closeModal}
                    color="white"
                    text="취소"
                />
                <Button
                    // TODO :: 장바구니 추가
                    className="product-cart-modal--button-put-to-cart"
                    willDo={putProductToCart}
                    color="purple"
                    text="장바구니 담기"
                />
            </div>
        </Modal>
    )
}
