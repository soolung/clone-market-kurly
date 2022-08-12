import "./NewProductArticle.scss";
import {Link} from "react-router-dom";
import Product from "../NewProduct_info/NewProduct_info";
import Newproduct from "../../../pages/Newproduct/Newproduct";


export default function ProductArticle(props) {

    return (
        <article>


            <div className="newproduct_product">
                    {
                        props.products.map(p => (
                            <div className="product-product">
                                <Product
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
                                />
                            </div>
                        ))
                    }
            </div>
        </article>
    )
}
