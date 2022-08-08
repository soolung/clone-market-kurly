import "./ReadOnlyProduct.scss";

export default function ReadOnlyProduct(props) {
    return (
        <div className="readonly-product">
            <img src={props.product.productImage} alt="product"/>
            <span className="readonly-product-name">{props.product.productName}</span>
            <span className="readonly-product-amount">{props.amount}개</span>
            <div className="readonly-product-price">
                    <span
                        className="readonly-product-price-price">{(props.product.price * props.amount).toLocaleString()}원</span>
                {
                    props.product.isDiscount &&
                    <span
                        className="readonly-product-price-discount">{(props.product.priceBeforeDiscount * props.amount).toLocaleString()}원</span>
                }
            </div>
            <button className="readonly-product-delete" onClick={props.delete}/>
        </div>
    )
}
