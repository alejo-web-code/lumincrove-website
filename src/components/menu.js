import React, { useState } from 'react'
import { Link } from 'gatsby'

function Menu(props) {
    const { openMenu } = props;

    let [serviceMenu, setServiceMenu] = useState('hiden');
    let listClass;
    let menuClass;
    let submenuClass;

    const openServices = () => {
        setServiceMenu('show')
    }

    const closeServices = () => {
        setServiceMenu('hiden')
    }

    if (serviceMenu === 'hiden') {
        menuClass = "text-center menu"
        submenuClass = "text-center menu out"
    }
    else {
        menuClass = "text-center menu out"
        submenuClass = " text-center menu"
    }

    if (openMenu) {
        listClass = "nav-menu text-center flex center"
    }
    else {
        listClass = "nav-menu text-center flex center close"
    }

    return (
        <div className={listClass}>
            <ul className={menuClass}>
                <li className="menu-item padding-small">
                    <span onClick={openServices}>Our Services</span>
                </li>
                <li className="menu-item padding-small">
                    <Link to="#">Terms Of Use</Link>
                </li>
                <li className="menu-item padding-small">
                    <Link to="#">Privaci Policy</Link>
                </li>
                <li className="menu-item padding-small">
                    <Link to="#">Blog</Link>
                </li>
            </ul>
            <ul className={submenuClass}>
                <li className="menu-item padding-small">
                    <span onClick={closeServices}>Our Services</span>
                </li>
                <li className="menu-item padding-small">
                    <Link to="#">Service 1</Link>
                </li>
                <li className="menu-item padding-small">
                    <Link to="#">Service 2</Link>
                </li>
                <li className="menu-item padding-small">
                    <Link to="#">Service 3</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu;