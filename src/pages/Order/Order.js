import "./Order.scss";
import {useContext, useState, useEffect} from "react";
import {CartContext, UserContext} from "../../App";
import OrderArticleHeader from "../../components/Order/OrderArticleHeader/OrderArticleHeader";
import ReadOnlyProduct from "../../components/Order/ReadOnlyProduct/ReadOnlyProduct";
import Button from "../../components/Button/Button";
import {getTotalPrice} from "../../utils/getTotalPrice";
import agreeData from "./agree.json";
import LightCheck from "../../components/LightCheck/LightCheck";
import Check from "../../components/Check/Check";

export default function Order() {

    const {user} = useContext(UserContext);
    const {cart, setCart} = useContext(CartContext);

    const checkedProduct = cart.filter(x => x.isChecked);

    const [productShow, setProductShow] = useState(false);
    const [payment, setPayment] = useState("kakaopay");
    const [nextPayment, setNextPayment] = useState(true);
    const [allChecked, setAllChecked] = useState(true);
    const [checkedItemCount, setCheckedItemCount] = useState(0);
    const [agree, setAgree] = useState(agreeData);
    const [totalPrice, setTotalPrice] = useState({
        itemSum: 0,
        discountSum: 0,
        accumulationSum: 0,
        delivery: 0,
        totalPrice: 0,
    });

    const toggleCheck = index => {
        let current = agree[index].isChecked;
        setAgree(
            [...agree],
            agree[index].isChecked = !current
        )
    }

    const toggleAllCheck = () => {
        let checkAllAgree = [...agree];
        checkAllAgree.forEach(a => a.isChecked = !allChecked);
        setAllChecked(!allChecked);
        setAgree(checkAllAgree);
    }

    useEffect(() => {
        setTotalPrice(getTotalPrice(user, checkedProduct));
    }, []);

    useEffect(() => setCheckedItemCount(agree.filter(a => a.isChecked).length), [agree]);
    useEffect(() => setAllChecked(checkedItemCount === agree.length), [checkedItemCount]);

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

                <OrderArticleHeader
                    title="배송 정보"
                    right={
                        <div className="order-article--header-delivery">
                            배송지 변경 안내
                            <span/>
                        </div>
                    }
                />
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

                <img className="order-delivery-banner"
                     src="https://res.kurly.com/kurly/img/2021/banner-order-paper_1050_107%402x.jpg" alt="친환경배송"/>


                <div className="order-price-area">
                    <div className="order-price-area--order-article">
                        <OrderArticleHeader title="쿠폰 / 적립금"/>
                        <div className="order-article--content bottom-bar">
                            <span className="order-article--content-title">쿠폰 적용</span>
                            <div className="order-article--content-content">
                                <button className="order-price-area--order-article--coupon">
                                    사용가능 쿠폰 0장 / 전체 0장
                                    <span className="order-price-area--order-article--coupon-drop-down">▾</span>
                                </button>
                                <span
                                    className="order-article--content-small-text order-price-area--order-article--coupon-more">쿠폰 사용 문의 (카카오톡) ﹥</span>
                            </div>
                        </div>
                        <div className="order-article--content">
                            <span className="order-article--content-title">적립금 적용</span>
                            <div className="order-article--content-content">
                                <div>
                                    <input
                                        className="order-price-area--order-article--accumulate-price"
                                        value={0}
                                        type="number"
                                        readOnly={true}
                                    />
                                    <button className="order-price-area--order-article--accumulate-price-use-all">
                                        모두사용
                                    </button>
                                </div>
                                <p className="order-price-area--order-article--accumulate-price-possible-to-use">
                                    사용가능 적립금 <span className="possible-to-use-price">0</span>원
                                </p>
                                <p className="order-article--content-small-text">
                                    적립금 내역: 마이컬리 > 적립금
                                </p>
                            </div>
                        </div>

                        <OrderArticleHeader
                            title="결제 수단"
                            right={
                                <div className="order-price-area--order-article--payment-next">
                                    <Check
                                        isChecked={nextPayment}
                                        willDo={() => setNextPayment(!nextPayment)}
                                    />
                                    <span>선택한 결제 수단을 다음에도 사용</span>
                                </div>
                            }
                        />
                        <div className="order-article--content bottom-bar">
                            <span className="order-article--content-title">결제수단 선택</span>
                            <div className="order-article--content-content">
                                <div className="order-price-area--order-article--payment">
                                    <button
                                        className={`order-price-area--order-article--payment-method kakopay ${payment === "kakaopay" ? "checked" : ""}`}
                                        onClick={() => setPayment("kakaopay")}
                                    >
                                        <img
                                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik03LjUxNSAyLjhDMy4zNjUgMi44IDAgNS40NDUgMCA4LjcwN2MwIDEuOTM4IDEuMTg3IDMuNjU3IDMuMDIxIDQuNzM0LS4xOTEuNzY4LS42ODQgMi43NDItLjc1IDIuOTU3LS4wODMuMjY2LS4xMDMgMS4wNDYuNzAyLjUxMi42MzQtLjQyIDIuNDc5LTEuNyAzLjU3LTIuMzQ4LjMxOC4wMzMuNjQyLjA1MS45NzIuMDUxIDQuMTUgMCA3LjUxNS0yLjY0NCA3LjUxNS01LjkwNiAwLTMuMjYyLTMuMzY1LTUuOTA3LTcuNTE1LTUuOTA3TTIxLjA0OCA0LjExM2MxLjUxNy0xLjMxMyAzLjQ2OC0xLjUwOCA0Ljg5My0uNTg1IDEuNzA3IDEuMTA2IDIuMTY4IDIuNzU0IDIuMTY4IDQuODkyIDAgMi40LTEuMTE1IDMuOTY4LTEuNjQyIDQuNDYtLjUyNi40OTMtMS42NzMgMS4yOTItMi44OCAxLjI5MkgyMS40MnYzLjc4NGgtMi45MTFWMy4yODJoMi4xMDZzLjI2LjU0OC40MzMuODN6bTEuOTUxIDEuMTUzYy0uNjk3IDAtMS4xNTMuMTc3LTEuNTMzLjQ3N3Y2LjMwNmgxLjEzOGMuNTU4IDAgMi41NDctLjUwNyAyLjU0Ny0zLjM4MyAwLS42NzctLjA5LTEuMzg1LS4yNzgtMS45LS4zNTctLjk3Ny0xLjI0Ny0xLjUtMS44NzQtMS41ek0zMy44MTcgMy4wNDZjMi4wODUgMCAyLjk0Mi43MTggMy40NDggMS4zNTQuNDgxLjYwNC44NjIgMS40OTcuODYyIDIuOHY2LjY4aC0yLjI2di0uOTU0cy0uNDQyLjQyLTEuMzc5LjgzMWMtLjk4LjQzLTIuNjUzLjg3Ny00LjA0MS0uMTg0LTEuMzk3LTEuMDY4LTEuMi0zLjQ3MS0uODUyLTQuMTU0LjQ4LS45MzggMS4zNjMtMS45NjggMy43MTYtMS45NjhoMi4wMjl2LS45MDhjMC0uNTU0LS41ODMtMS4xMDctMS43My0xLjEwNy0xLjI4IDAtMS44MzMuMTkyLTIuODE3LjYzNWwtLjk5Ni0xLjk0M3MxLjQ5Ni0xLjA4MiA0LjAyLTEuMDgyem0xLjQ3NyA2LjI1aC0xLjQxNWMtLjU5OSAwLTEuOTYxLjIxNi0xLjk2MSAxLjQ3NyAwIDEuMjgzIDEuMDkgMS4yNiAxLjQ0OCAxLjIzIDEuMDg5LS4wOTEgMS45MzgtLjc5NCAxLjkzOC0uNzk0bC0uMDEtMS45MTN6TTQ3LjA2MSAzLjA0NmwtMi4yOTEgOC4xMTEtMi41NC04LjExLTIuODQ5LjgyczMuNSA5LjM4MyAzLjYyNCA5Ljc4M2MuMTIzLjQtLjAwNS44NTgtLjI4IDEuMzIyLS4zNzEuNjMtMS44MjYgMi4wMy0xLjgyNiAyLjAzbDEuODc4IDEuNjYzcy44NTctLjY4OCAxLjc0NS0xLjc1NWMuNzQzLS44OTIgMS42MzYtMi44MyAxLjkzOC0zLjU3Ny44NTktMi4xMTkgMy40Mi05LjQ2NiAzLjQyLTkuNDY2bC0yLjgxOS0uODJ6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo="
                                            alt="kakopay"
                                        />
                                    </button>
                                    <div className="order-price-area--order-article--payment-collection">
                                        <button
                                            className={`order-price-area--order-article--payment-method ${payment === "credit-card" ? "checked" : ""}`}
                                            onClick={() => setPayment("credit-card")}
                                        >
                                            신용카드
                                        </button>
                                        <button
                                            className={`order-price-area--order-article--payment-method ${payment === "simple" ? "checked" : ""}`}
                                            onClick={() => setPayment("simple")}
                                        >
                                            간편 결제
                                        </button>
                                        <button
                                            className={`order-price-area--order-article--payment-method ${payment === "phone" ? "checked" : ""}`}
                                            onClick={() => setPayment("phone")}
                                        >
                                            휴대폰
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-price-area--order-article--payment-more">
                            <p className="order-article--content-small-text">※ 카카오페이, 차이, 토스, 네이버페이, 페이코 결제 시, 결제하신
                                수단으로만 환불되는 점 양해부탁드립니다.</p>
                            <p className="order-article--content-small-text">※ 고객님은 안전거래를 위해 현금 등으로 결제시 저희 쇼핑몰에서 가입한 토스
                                페이먼츠의 구매안전(에스크로) 서비스를 이용하실 수 있습니다.</p>
                        </div>
                    </div>
                    <div className="order-price-area--order-price-box">
                        <div className="order-price-area--order-price-box--title">결제 금액</div>
                        <div className="order-price-area--order-price-box--box">
                            <dl className="order-price-area--order-price-box--box-price">
                                <dt>주문금액</dt>
                                <dd>
                                    {(totalPrice.itemSum + totalPrice.discountSum).toLocaleString()}
                                    <span className="won"> 원</span>
                                </dd>
                            </dl>
                            <div className="order-price-area--order-price-box--box-price-more-wrapper">
                                <dl className="order-price-area--order-price-box--box-price-more">
                                    <dt>상품금액</dt>
                                    <dd>{totalPrice.itemSum.toLocaleString()} 원</dd>
                                </dl>
                                <dl className="order-price-area--order-price-box--box-price-more">
                                    <dt>상품할인금액</dt>
                                    <dd>{totalPrice.discountSum.toLocaleString()} 원</dd>
                                </dl>
                            </div>
                            <dl className="order-price-area--order-price-box--box-price">
                                <dt>배송비</dt>
                                <dd>
                                    {totalPrice.delivery > 0 && <>+ </>}
                                    {(totalPrice.delivery).toLocaleString()}
                                    <span className="won"> 원</span>
                                </dd>
                            </dl>
                            <dl className="order-price-area--order-price-box--box-price">
                                <dt>쿠폰할인</dt>
                                <dd>
                                    0
                                    <span className="won"> 원</span>
                                </dd>
                            </dl>
                            <dl className="order-price-area--order-price-box--box-price">
                                <dt>적립금사용</dt>
                                <dd>
                                    0
                                    <span className="won"> 원</span>
                                </dd>
                            </dl>
                            <dl className="order-price-area--order-price-box--box-price price-total-result">
                                <dt>결제예정금액</dt>
                                <dd>
                                    {(totalPrice.totalPrice).toLocaleString()}
                                    <span className="won"> 원</span>
                                </dd>
                            </dl>
                            <div className="order-price-area--order-price-box--box-price-accumulation clear">
                                <span className="badge">적립</span>
                                구매 시
                                <span
                                    className="bold"> {(totalPrice.accumulationSum).toLocaleString()}원({user.grade.accumulationPercent * 100}%)</span>
                            </div>
                        </div>
                    </div>
                </div>

                <OrderArticleHeader title="개인정보 수집/제공"/>
                <div className="order-price-area--order-article--agree-all-wrapper">
                    <Check
                        className="order-price-area--order-article--agree-all"
                        isChecked={allChecked}
                        willDo={toggleAllCheck}
                    />
                    <span>결제 진행 필수 전체 동의</span>
                </div>
                <div className="order-price-area--order-article--agree-wrapper bottom-bar">
                    {agree.map((a, index) => (
                        <p className="order-price-area--order-article--agree">
                            <LightCheck
                                isChecked={a.isChecked}
                                willDo={() => toggleCheck(index)}
                            />
                            <span>{a.text}</span>
                        </p>
                    ))
                    }
                </div>
                <div className="rder-price-area--order-article--agree-more">
                    <p className="order-article--content-small-text">※ 마켓컬리에서 판매되는 상품 중에는 마켓컬리에 입점한 개별 판매자가 판매하는
                        마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.</p>
                    <p className="order-article--content-small-text">※ 마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의 당사자가
                        아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.</p>
                </div>
                <Button
                    color="purple"
                    className="order-request-button"
                    willDo={() => console.log("order")}
                    text={`${totalPrice.totalPrice.toLocaleString()}원 결제하기`}
                />
                <p className="order-article--content-small-text order-request-more">
                    [주문완료] 상태일 경우에만 주문 취소 가능합니다.<br/>
                    미성년자가 결제 시 법정대리인이 그 거래를 취소할 수 있습니다.<br/>
                    상품 미배송 시, 결제수단으로 환불됩니다.<br/>
                    카카오페이, 차이, 토스, 네이버페이, 페이코 결제 시, 결제하신 수단으로만 환불됩니다.
                </p>
            </div>
        </section>
    )
}
