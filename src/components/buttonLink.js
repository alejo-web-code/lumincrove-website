import React from 'react';
import { Link } from 'gatsby';

function ButtonLink (props) {
    const { url, style, name } = props;

    return (
        <Link 
            to={url} 
            className={style}>
            {name}
        </Link>
    )
}

export default ButtonLink;
