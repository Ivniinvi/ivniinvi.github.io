import React, { Children, ReactElement } from 'react'

import useWindowSize from "@rooks/use-window-size"
import { useMediaQuery } from 'react-responsive'

interface Props {
    isLink: boolean,
    children?: ReactElement[] | ReactElement
}

export default function Header(props: Props): ReactElement {
    const { innerWidth, innerHeight, outerHeight, outerWidth } = useWindowSize();
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

    return (
        <div id="header" className={!isPortrait ? "horizontal" : "vertical"}>
            {props.isLink
                ? <a id="nameTitle" href="https://ivniinvi.github.io/" >MATT HEADLEY</a>
                : <div id="nameTitle">MATT HEADLEY</div>
            }
            {props.children}
        </div>
    )
}
