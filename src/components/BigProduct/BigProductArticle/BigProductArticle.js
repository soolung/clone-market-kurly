import "./BigProductArticle.scss";
import BigProduct from "../BigProduct/BigProduct";


export default function BigProductArticle(props) {

    return (
        <div className="big_product_product">
            {
                props.products.map(p => (
                    <div className="product-product">
                        <BigProduct
                            id={p.id}
                            productImage={p.productImage}
                            productName={p.productName}
                            price={p.price}
                            isDiscount={p.isDiscount}
                            discount={p.discount}
                            priceBeforeDiscount={p.priceBeforeDiscount}
                            hasCoupon={p.hasCoupon}
                            coupon={p.coupon}
                            isAccumulate={p.isAccumulate}
                            type={p.type}
                            productMessage={p.productMessage}
                        />
                    </div>
                ))
            }
        </div>
    )
}
