import "./NavigationBar.css"
import NavItem from "../NavItem/NavItem";
import navInfo from "./navInfo.json"

function NavigationBar({profilePicture}) {
    return (
        <menu className="navigation-bar">
            <div className="navigation-bar-top">
                {navInfo.map(({action, icon})=>(
                    <NavItem 
                        key={action}
                        action={action}
                        icon={icon}
                    />
                ))}
                <NavItem 
                    action="Profile"
                    icon={profilePicture}
                />
            </div>
            <NavItem 
                className="navigation-bar-bottom"
                action="More"
                icon="https://cdn-icons-png.flaticon.com/128/5358/5358649.png"
            />
        </menu>
    )
}

export default NavigationBar;