import React from 'react'

function Heading({ level, text, className}) {
    const Tag = `${level}`;

    return <Tag className={className}>{text}</Tag>;
  
}

export default Heading