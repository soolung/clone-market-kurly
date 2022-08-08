import "./Order.scss";
import {useContext, useState} from "react";
import {CartContext, UserContext} from "../../App";
import OrderArticleHeader from "../../components/Order/OrderArticleHeader/OrderArticleHeader";
import ReadOnlyProduct from "../../components/Order/ReadOnlyProduct/ReadOnlyProduct";

export default function Order() {

    const {user} = useContext(UserContext);
    const {cart, setCart} = useContext(CartContext);

    const checkedProduct = cart.filter(x => x.isChecked);
    console.log(checkedProduct)

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
                    <div className="order-article--content">
                        <div className="order-product--light">
                            {checkedProduct.length === 1 ?
                                <>
                                    {checkedProduct[0].product.productName} 상품을 주문합니다.
                                </>
                                :
                                <>
                                    {checkedProduct[0].product.productName} 외 <span
                                    className="purple">{checkedProduct.length - 1}개</span> 상품을 주문합니다.
                                </>
                            }
                        </div>
                    </div>
                }

                <OrderArticleHeader title="주문자 정보"/>

                <OrderArticleHeader title="배송 정보"/>

                <OrderArticleHeader title="쿠폰 / 적립금"/>

                <OrderArticleHeader title="결제 수단"/>

                <OrderArticleHeader title="개인정보 수집/제공"/>

            </div>
            }
        </section>
    )
}
