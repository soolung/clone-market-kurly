import './Button.scss';

export default function Button(props) {
    return (
        <button
            className={`basic-button ${props.size} ${props.color}`}
            onClick={props.willDo}
        >
            {props.text}
        </button>
    );
}
