import "./NavItem.css";

function NavItem({icon, action}){
    return(
        <li className="navItem">
            <div className="navItem-icon">
                <img src={icon} alt={action} />
            </div>
            <div className="navItem-action">
                <span>{action}</span>
            </div>
        </li>
    )
}

{/* <NavItem 
            icon={item.icon}
            action={item.action}
        /> */}

export default NavItem;