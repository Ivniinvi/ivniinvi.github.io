import React, { ReactElement } from 'react'

interface Props {
    title: string,
    description: string,
    image: string,
    link: string
}

export default function Content(props: Props): ReactElement {
    return (
        <a href={props.link} target="_blank" className="contentBox colorMerge bgColorMerge">
            <div className="contentHead">{props.title}</div>
            <div className="contentImgDiv">
                <img src={props.image} alt={props.title} />
            </div>
            <p>{props.description}</p>
        </a>
    )
}
