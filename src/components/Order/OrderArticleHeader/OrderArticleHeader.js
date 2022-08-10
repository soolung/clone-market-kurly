import "./OrderArticleHeader.scss";

export default function OrderArticleHeader(props) {

    return (
        <div className="order-article--header">
            <p className="order-article--header-title">{props.title}</p>
            <div className="order-article--header-right">
                {props.right}
            </div>
        </div>
    )
}
