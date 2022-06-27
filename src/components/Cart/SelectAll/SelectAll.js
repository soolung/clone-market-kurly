import "./SelectAll.scss";
import Check from "../../Check/Check";

export default function SelectAll(props) {

    return (
        <div className="cart-select-all">
            <Check
                className="cart-select-all-button"
                isChecked={props.isChecked}
                willDo={props.toggleCheckAll}
            />
            <span className="cart-select-all--description">
                전체선택 ({props.countIsChecked}/{props.countAll})
            </span>
            <span className="bar"/>
            <span className="cart-select-delete" onClick={props.deleteCheckedItem}>
                선택삭제
            </span>
        </div>
    )
}
