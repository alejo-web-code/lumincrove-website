import React from 'react'
import { Link } from 'gatsby'

function Menu(props) {
    const { openMenu } = props;
    let listClass;

    if (openMenu) {
        listClass = "nav-menu text-center"
    }
    else {
        listClass = "nav-menu text-center close"
    }

    return (
        <ul className={listClass}>
            <li className="padding-small">
                <Link to="#">Our Services</Link>
                <div className="hide">
                    <p>Services 1</p>
                    <p>Services 2</p>
                    <p>Services 3</p>
                </div>
            </li>
            <li className="padding-small">
                <Link to="#">Terms Of Use</Link>
            </li>
            <li className="padding-small">
                <Link to="#">Privaci Policy</Link>
            </li>
            <li className="padding-small">
                <Link to="#">Blog</Link>
            </li>
        </ul>
    )
}

export default Menu;