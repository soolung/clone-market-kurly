import "./Cart.scss";
import {useContext, useEffect, useState} from "react";
import {CartContext, UserContext} from "../../App";
import CartProductType from "../../components/Cart/CartProductType/CartProductType";
import SelectAll from "../../components/Cart/SelectAll/SelectAll";
import typeData from "./typeData.json";
import Button from "../../components/Button/Button";
import {Link} from "react-router-dom";

export default function Cart() {

    const {cart, setCart} = useContext(CartContext);
    const {user} = useContext(UserContext);

    const [checkedItemCount, setCheckedItemCount] = useState(cart.length);
    const [allChecked, setAllChecked] = useState(true);
    const [totalPrice, setTotalPrice] = useState({
        itemSum: 0,
        discountSum: 0,
        accumulationSum: 0,
        delivery: 0,
        totalPrice: 0,
    });

    const toggleAllCheck = () => {
        let checkAllCart = [...cart];
        checkAllCart.forEach(c => c.isChecked = !allChecked);
        setAllChecked(!allChecked);
        setCart(checkAllCart);
    }

    const deleteCheckedItem = () => {
        setCart(cart.filter(c => !c.isChecked));
    }

    useEffect(() => setCheckedItemCount(cart.filter(c => c.isChecked).length), [cart]);
    useEffect(() => setAllChecked(checkedItemCount === cart.length), [checkedItemCount]);

    useEffect(() => {
        let tempTotalPrice = {
            itemSum: 0,
            discountSum: 0,
            accumulationSum: 0,
            delivery: 0,
            totalPrice: 0,
        };

        let accumulationPercent = checkObjectIsEmpty(user) ? 0 : user.grade.accumulationPercent;
        const checkedItem = cart.filter(c => c.isChecked);

        for (let i of checkedItem) {
            if (i.product.isDiscount) {
                tempTotalPrice.itemSum += i.amount * i.product.priceBeforeDiscount;
                if (!checkObjectIsEmpty(user)) tempTotalPrice.discountSum += i.amount * (i.product.price - i.product.priceBeforeDiscount);
            } else {
                tempTotalPrice.itemSum += i.amount * i.product.price;
            }

            if (i.product.isAccumulate) tempTotalPrice.accumulationSum += i.product.price * i.amount;
        }

        if (tempTotalPrice.itemSum > 0 && tempTotalPrice.itemSum + tempTotalPrice.discountSum < 40000) tempTotalPrice.delivery = 3000;
        tempTotalPrice.totalPrice = tempTotalPrice.itemSum + tempTotalPrice.discountSum + tempTotalPrice.delivery
        tempTotalPrice.accumulationSum = Math.round(tempTotalPrice.accumulationSum * accumulationPercent);
        setTotalPrice(tempTotalPrice)
        console.log(totalPrice);
    }, [cart]);

    useEffect(() => {
        let checkAllCart = [...cart];
        checkAllCart.forEach(c => c.isChecked = true);
        setCart(checkAllCart);
    }, [])

    const checkObjectIsEmpty = obj => JSON.stringify(obj) === '{}';

    return (
        <section>
            <div className="cart-section-inner">
                <h3 className="title">장바구니</h3>

                <div className="cart-section-content">
                    <div className="cart-item">
                        <SelectAll
                            isChecked={allChecked}
                            toggleCheckAll={toggleAllCheck}
                            countIsChecked={checkedItemCount}
                            countAll={cart.length}
                            deleteCheckedItem={deleteCheckedItem}
                        />
                        <div className={`cart-item--select ${cart.length === 0 && "cart-item--is-empty"}`}>
                            {cart.length > 0 ?
                                <>
                                    {typeData.types.map(t => (
                                        <>
                                            <CartProductType
                                                type={t}
                                                content={cart.filter(c => c.product.type === t.type)}
                                            />
                                        </>
                                    ))}
                                </>
                                :
                                <p>장바구니에 담긴 상품이 없습니다.</p>
                            }
                        </div>
                        <SelectAll
                            isChecked={allChecked}
                            toggleCheckAll={toggleAllCheck}
                            countIsChecked={checkedItemCount}
                            countAll={cart.length}
                            deleteCheckedItem={deleteCheckedItem}
                        />
                    </div>
                    <div className="cart-result">
                        <div className="cart-result-box">
                            <div className="cart-result-box--delivery">
                                <div className="cart-result-box--delivery-header">
                                    <span className="cart-result-box--delivery-icon"/>
                                    <span className="cart-result-box--delivery-text">배송지</span>
                                </div>
                                <div className="cart-result-box--delivery-content">
                                    {checkObjectIsEmpty(user) ?
                                        <>
                                            <span className="purple">배송지를 입력</span>하고 <br/>
                                            배송유형을 확인해 보세요!
                                            <Link to="">
                                                <button className="cart-result-box--delivery-content-btn">
                                                    <span className="search-address"/>
                                                    주소 검색
                                                </button>
                                            </Link>
                                        </>
                                        :
                                        <>
                                            {user.delivery.address}
                                            <span
                                                className="cart-result-box--delivery-content-type">{user.delivery.type}</span>
                                            <Link to="">
                                                <button className="cart-result-box--delivery-content-btn">
                                                    배송지 변경
                                                </button>
                                            </Link>
                                        </>
                                    }
                                </div>
                            </div>
                            <div className="cart-result-box--price">
                                <dl className="cart-result-box--price-price">
                                    <dt>상품금액</dt>
                                    <dd>
                                        {(totalPrice.itemSum).toLocaleString()}
                                        <span className="won"> 원</span>
                                    </dd>
                                </dl>
                                <dl className="cart-result-box--price-price">
                                    <dt>상품할인금액</dt>
                                    <dd>
                                        {(totalPrice.discountSum).toLocaleString()}
                                        <span className="won"> 원</span>
                                    </dd>
                                </dl>
                                {checkObjectIsEmpty(user) && cart.length > 0 &&
                                    <p className="more-description">로그인 후 할인 금액 적용</p>
                                }
                                <dl className="cart-result-box--price-price">
                                    <dt>배송비</dt>
                                    <dd>
                                        {totalPrice.delivery > 0 && <>+</>}
                                        {(totalPrice.delivery).toLocaleString()}
                                        <span className="won"> 원</span>
                                    </dd>
                                </dl>
                                {totalPrice.delivery !== 0 &&
                                    <p className="more-description purple">{(43000 - totalPrice.totalPrice).toLocaleString()}원
                                        추가주문 시, <span>무료배송</span></p>
                                }
                                <dl className="cart-result-box--price-price price-total-result">
                                    <dt>결제예정금액</dt>
                                    <dd>
                                        {(totalPrice.totalPrice).toLocaleString()}
                                        <span className="won"> 원</span>
                                    </dd>
                                </dl>
                                {cart.length > 0 &&
                                    <div className="cart-result-box--price-price-accumulation clear">
                                        <span className="badge">적립</span>
                                        {checkObjectIsEmpty(user) ?
                                            <>
                                                로그인 후 회원등급에 따라 적립
                                            </>
                                            :
                                            <>
                                                구매 시
                                                <span className="bold"> {(totalPrice.accumulationSum).toLocaleString()}원 적립</span>
                                            </>
                                        }
                                    </div>
                                }
                            </div>
                        </div>
                        <Button
                            className={`cart-result-order-button ${(cart.length === 0 || checkObjectIsEmpty(user) || checkedItemCount === 0) && "de-cart"}`}
                            color="purple"
                            willdo={() => console.log("dd")}
                            text={cart.length > 0 ? checkObjectIsEmpty(user) ? "로그인 해주세요" : checkedItemCount > 0 ? "주문하기" : "상품을 선택해주세요" : "상품을 담아주세요"}
                        />
                        <div className="cart-result-notice">
                            {checkObjectIsEmpty(user) &&
                                <div className="cart-result-notice--notice">
                                    <span className="cart-result-notice--notice-dot">·</span>
                                    <span className="cart-result-notice--notice-content">쿠폰/적립금은 주문서에서 사용 가능합니다.</span>
                                </div>
                            }
                            <div className="cart-result-notice--notice">
                                <span className="cart-result-notice--notice-dot">·</span>
                                <span className="cart-result-notice--notice-content">[배송준비중] 이전까지 주문 취소 가능합니다.</span>
                            </div>
                            <div className="cart-result-notice--notice">
                                <span className="cart-result-notice--notice-dot">·</span>
                                <span className="cart-result-notice--notice-content">[마이컬리 > 주문내역 상세페이지] 에서 직접 취소하실 수 있습니다.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
