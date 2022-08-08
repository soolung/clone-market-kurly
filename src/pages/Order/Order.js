import "./Order.scss";
import {useContext, useState} from "react";
import {CartContext, UserContext} from "../../App";
import OrderArticleHeader from "../../components/Order/OrderArticleHeader/OrderArticleHeader";
import ReadOnlyProduct from "../../components/Order/ReadOnlyProduct/ReadOnlyProduct";
import Button from "../../components/Button/Button";

export default function Order() {

    const {user} = useContext(UserContext);
    const {cart, setCart} = useContext(CartContext);

    const checkedProduct = cart.filter(x => x.isChecked);
    console.log(user)

    const [productShow, setProductShow] = useState(false);

    return (
        <section>
            <div className="section-wrapper">
                <h3 className="order-title">주문서</h3>

                <OrderArticleHeader
                    title="주문 상품"
                    right={
                        <button
                            className={`arrow ${productShow ? "" : "upside-down"}`}
                            onClick={() => setProductShow(!productShow)}
                        />
                    }
                />
                {productShow ?
                    <div>
                        {cart.filter(x => x.isChecked).map(c => (
                            <ReadOnlyProduct
                                isChecked={c.isChecked}
                                product={c.product}
                                amount={c.amount}
                            />
                        ))}
                    </div>
                    :
                    <div className="bottom-bar">
                        <div className="order-product--light">
                            {checkedProduct.length === 1 ?
                                <>
                                    {checkedProduct[0].product.productName} 상품을 주문합니다.
                                </>
                                :
                                <>
                                    {checkedProduct[0].product.productName} 외 <span
                                    className="text-purple">{checkedProduct.length - 1}개</span> 상품을 주문합니다.
                                </>
                            }
                        </div>
                    </div>
                }

                <OrderArticleHeader title="주문자 정보"/>
                <div className="order-article--content-user">
                    <div className="order-article--content">
                        <span className="order-article--content-title">이름</span>
                        <span className="order-article--content-content">{user.name}</span>
                    </div>
                    <div className="order-article--content">
                        <span className="order-article--content-title">휴대폰</span>
                        <span className="order-article--content-content">{user.phoneNumber}</span>
                    </div>
                    <div className="order-article--content">
                        <span className="order-article--content-title">이메일</span>
                        <div className="order-article--content-content">
                            {user.email}
                            <div className="order-article--content-user--small-text">
                                <p className="order-article--content-small-text">이메일을 통해 주문처리과정을 보내드립니다.</p>
                                <p className="order-article--content-small-text">정보 변경은 마이컬리 > 개인정보 수정 메뉴에서 가능합니다.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <OrderArticleHeader title="배송 정보"/>
                <div className="order-article--content-delivery">
                    <div className="order-article--content bottom-bar">
                        <span className="order-article--content-title">배송지</span>
                        <span className="order-article--content-content">{user.delivery.address}</span>
                    </div>
                    <div className="order-article--content">
                        <span className="order-article--content-title">상세 정보</span>
                        <span className="order-article--content-content">
                            {user.delivery.more.recipient}, {user.delivery.more.phoneNumber}
                            <div className="order-article--content-delivery-more">
                                <p>{user.delivery.more.pickUpLocation}<span
                                    className="bar"/>{user.delivery.more.commonDoor}</p>
                                <p className="order-article--content-delivery-more-bottom">배송완료 메시지<span
                                    className="bar"/>{user.delivery.more.finishedMessageTime}</p>
                            </div>
                            <Button
                                className="order-article--content-delivery-more-edit"
                                color="white-gray"
                                text="수정"
                            />
                        </span>
                    </div>
                </div>

                <img className="order-delivery-banner" src="https://res.kurly.com/kurly/img/2021/banner-order-paper_1050_107%402x.jpg" alt="친환경배송"/>

                <OrderArticleHeader title="쿠폰 / 적립금"/>

                <OrderArticleHeader title="결제 수단"/>

                <OrderArticleHeader title="개인정보 수집/제공"/>

            </div>
            }
        </section>
    )
}
