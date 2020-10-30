import React, { useState } from 'react'
import { Link } from 'gatsby'

function Menu(props) {
    const { openMenu } = props;

    let [serviceMenu, setServiceMenu] = useState('hiden');
    let listClass;

    const openServices = () => {
        setServiceMenu('show')
    }

    if (openMenu) {
        listClass = "nav-menu text-center"
    }
    else {
        listClass = "nav-menu text-center close"
    }

    return (
        <div className={listClass}>
            <ul>
                <li className="padding-small">
                    <span onClick={openServices}>Our Services</span>
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
        </div>
    )
}

export default Menu;