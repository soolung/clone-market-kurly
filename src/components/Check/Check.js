import './Check.scss';

export default function Check(props) {

    return (
        <input
            className={`check ${props.className}`}
            type="checkbox"
            checked={props.isChecked}
            onChange={props.willDo}
            value={props.value}
            name={props.name}
            id={props.id}
        />
    )
}
