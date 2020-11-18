import React from 'react';
import { Link } from 'gatsby';

function ButtonLink(props) {
    const { url, customStyle, name } = props;

    return (
        <Link
            to={url}
            className={customStyle}>
            {name}
        </Link>
    )
}

export default ButtonLink;
