function Dog_card(props) {
    const objStyle = {color:props.elementColor}
    const {name,age,kind} = props
    return (
    <div>
        <h2 style = {objStyle}>{name} {age} {kind}</h2>
    </div>
    )
}
export default Dog_card;