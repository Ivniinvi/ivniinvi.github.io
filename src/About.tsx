import React, { ReactElement } from 'react'
import './App.css';

import Header from './Header';

interface Props {

}

export default function About(props: Props): ReactElement {
    return (
        <div className="App vertical">
            <Header isLink={true} />
            <div id="bio">
                <div id="bioPhoto">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/63/James_Corden_2015_%28cropped%29.jpg" alt="Handsome young lad"></img>
                </div>
                <div id="bioText">
                    <h1>I do things</h1>
                    <p>I also do stuff.</p>
                    <p>Here's a <a>link</a> to more stuff.</p>
                </div>
            </div>
        </div>
    )
}
