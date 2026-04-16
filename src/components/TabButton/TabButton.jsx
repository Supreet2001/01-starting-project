// export default function TabButton(props) {
//     return(
//         <li><button>{props}</button></li>
//     )
// }
export default function TabButton({children, onSelect, isSelected}) {
    return(
        <li><button className={isSelected ? "active" : ""} onClick={onSelect}>{children}</button></li>
    )
}