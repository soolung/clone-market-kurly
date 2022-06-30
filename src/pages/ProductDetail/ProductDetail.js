import "./ProductDetail.scss";
import {useContext, useState} from "react";
import {CartContext, UserContext} from "../../App";
import AmountButton from "../../components/AmountButton/AmountButton";
import {useParams} from "react-router-dom";
import {getProductDetailById} from "./getProductDetailService";

export default function ProduceDetail() {

    const {id} = useParams();

    const {user} = useContext(UserContext);
    const {cart, setCart} = useContext(CartContext);

    const [amount, setAmount] = useState(1);
    const [gym, setGym] = useState(false);

    const product = getProductDetailById(id);

    const getProductIndexInCart = () => {
        for (let i = 0; i < cart.length; i++) {
            if (product.id === cart[i].product.id) {
                return i;
            }
        }
        return -1;
    }

    const putProductToCart = () => {
        let updatedCart = [...cart];
        let productIndex = getProductIndexInCart();
        if (productIndex === -1) {
            updatedCart.push({
                product: product,
                amount: amount,
            });
        } else {
            cart[productIndex].amount += amount;
        }

        setCart([...updatedCart]);
    };

    const checkObjectIsEmpty = obj => JSON.stringify(obj) === '{}';

    return (
        <section>
            <div className="Detail_page">
                <div className="product_detail_image">
                    <img src={product.productImage} className="product_image" alt="product"/>
                </div>
                <div className="product_information">
                    <p className="detail_title">
                        <span className="share_button">
                            <button type="button" className="share">
                                <img src="https://res.kurly.com/mobile/service/goodsview/1910/ico_view_sns.png" alt="share"/>
                            </button>
                        </span>
                        <div className="name_pro"><span className="product_name">{product.productName}</span></div>
                        <div className="explain">
                            <span className="product_explain">{product.productMessage}</span>
                        </div>
                    </p>
                    <p className="product_price">
                        <span className="price_tit">
                            <div className="price">
                                {(product.price).toLocaleString()}
                                    <span className="won">원</span>
                            </div>

                        </span>
                        <span className="benefit">

                           {
                            checkObjectIsEmpty(user) ?
                            // user X
                            <div className="nlog_message">
                                <span className="nlog_ment">
                                    로그인 후, 적립혜택이 제공됨니다.
                                </span>
                            </div>
                            : <div className="ylog_message">
                                <span className="Rating">
                                    {user.grade.grade}&nbsp;
                                    {user.grade.accumulationPercent * 100}
                                    <span>%</span>
                                </span>
                                <span className="nlog_bar">
                                    |
                                </span>
                                <span className="Accumulate">
                                    개당&nbsp;
                                    <span className="accumulate_price">
                                    {Math.round(product.price * user.grade.accumulationPercent)}
                                     원 적립
                                    </span>
                                </span>
                            </div>
                            }
                        </span>
                    </p>
                    <div className="product_detail_info">
                        <dl className="sales_Unit">
                            <dt>판매단위</dt>
                            <dd>{product.salesUnit}</dd>
                        </dl>
                        <dl className="list">
                            <dt>중량/용량</dt>
                            <dd>{product.capacity}</dd>
                        </dl>
                        <dl className="list">
                            <dt>배송구분</dt>
                            <dd>{product.deliveryType}</dd>
                        </dl>
                        <dl className="list">
                            <dt>포장타입</dt>
                            <dd>
                                <div className="type">
                                    {product.package.packType}
                                </div>
                                <span className="pack_message">
                                    {product.package.message}
                                </span>
                            </dd>
                        </dl>
                        <dl className="sales_Unit">
                            <dt>구매수량</dt>
                            <dd className="amount_sale">
                                <AmountButton
                                    className="product-cart-modal--price-amount"
                                    amount={amount}
                                    plus={() => setAmount(amount + 1)}
                                    minus={() => amount > 0 && setAmount(amount - 1)}
                                />
                            </dd>
                        </dl>
                    </div>
                    <div className="buy_info">
                        <p className="tit_buy">
                            <span className="total_price_ment">총 상품금액 : </span>
                            <span className="total_price">{(Math.round(product.price * amount)).toLocaleString()}
                            </span>
                            <span className="won">원</span>
                            <div className="cart_button">
                                <p className="point_txt">
                                        <span className="icon">
                                            <span className="accumulate-icon">적립</span>
                                        </span>
                                        <span>
                                        {
                                            checkObjectIsEmpty(user) ?
                                                <span className="accumulate-ment">
                                                    로그인 후, 적립혜택 제공
                                                </span>
                                            :
                                            <span>
                                                <span className="accumulate-ment">구매 시</span> &nbsp;
                                                <span className="total-accumulate-price">
                                                    {Math.round((product.price * user.grade.accumulationPercent)* amount)}원 적립
                                                </span>
                                            </span>
                                        }
                                        </span>
                                </p>
                            </div>
                        </p>
                    </div>
                    <div className="total_button">
                        <p className="button_list">
                            <div className="heart">
                                <button onClick={() => setGym(!gym)}>
                                    <img src={gym ? "https://res.kurly.com/pc/service/pick/btn-itemdetail-like-on.svg" : "https://res.kurly.com/pc/service/pick/btn-itemdetail-like.svg"} alt="gym" />
                                </button>

                            </div>
                            <div className="bell">
                                <button>
                                    <img src="https://res.kurly.com/pc/service/goodsview/btn-itemdetail-restock-dim.svg" alt="bell"/>
                                </button>
                            </div>
                        </p>
                        <p className="cart_button">
                        <button
                            className="product-cart-modal--button-put-to-cart"
                            onClick={putProductToCart}
                        >장바구니 담기</button>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
