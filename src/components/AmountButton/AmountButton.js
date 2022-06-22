import "./AmountButton.scss";

export default function AmountButton(props) {
    return (
        <div className="amount-count">
            <button onClick={props.minus} className="amount-count-button amount-count-minus on" />
            <input className="amount-count-value" value={props.amount} readOnly={true}/>
            <button onClick={props.plus} className="amount-count-button amount-count-plus on" />
        </div>
    )
}
