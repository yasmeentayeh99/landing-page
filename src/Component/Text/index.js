import './style.css'


function text(props) {
    return (
        <p>
            {props.children}
        </p>
    );
}

export default text;