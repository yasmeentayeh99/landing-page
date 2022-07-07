import './style.css'


export const Card = (props) =>{
    const {icon, title, descr} = props;
    return(
        <div className="icon_section">
            <div>{icon}</div>
            <h5>{title}</h5>
            <span>{descr}</span>
        </div>
    )
}