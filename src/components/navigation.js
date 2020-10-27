import React from "react"
import { Link } from "gatsby"

function Navigation() {
    return (
        <section>
          <div className="hide-desktop w-5">
              <button>
                  <i className="menu-icon"></i>
              </button>
          </div>
          <div className="flex between align-center">
              <div>
                  <img src="../../static/assets/logo.png"/>
              </div>
              <ul className="hide-mobile">
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
          </div>
        </section>
    )
}

export default Navigation;