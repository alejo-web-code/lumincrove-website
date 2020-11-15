import React, { useState } from 'react'
import { Link } from 'gatsby'

function Menu(props) {
    const { openMenu } = props;

    let [serviceMenu, setServiceMenu] = useState('hiden');
    let listClass;
    let menuClass;
    let submenuClass;

    if (openMenu) {
        listClass = "nav-menu text-center"
    }
    else {
        listClass = "nav-menu text-center close"
        if (serviceMenu === 'show') {
            setServiceMenu('hiden')
        }
    }

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

    return (
        <div className={listClass}>
            <div className={menuClass}>
                <ul>
                    <li className="menu-item padding-small">
                        <span onClick={openServices} onKeyDown={openServices} role="presentation">Our Services</span>
                    </li>
                    <li className="menu-item padding-small">
                        <Link to="/terms-of-use">Terms Of Use</Link>
                    </li>
                    <li className="menu-item padding-small">
                        <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li className="menu-item padding-small">
                        <Link to="#">Blog</Link>
                    </li>
                </ul>
            </div>
            <div className={submenuClass}>
                <ul>
                    <li className="menu-item padding-small flex">
                        <span onClick={closeServices} onKeyDown={closeServices} role="presentation">
                            <i className="back-arrow"></i>
                        </span>
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
        </div>
    )
}

export default Menu;