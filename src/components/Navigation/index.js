import React, {useEffect} from "react";
import Pulse from 'react-reveal/Pulse';

const Navigation = (props) => {

    useEffect(() => {
        document.title = 'Matthew Sievers ' + props.currentPageSelection;
    })

    return (
        <section className="d-flex align-items-end navBtnContainer">
            <ul className="d-flex flex-row justify-content-between">
                {props.pages.map((page,i) => (
                    <Pulse key={i}>
                    <li className="nav-item" >
                        <span 
                            className={`navBtn ${props.currentPageSelection === page && 'navBtnActivated'}`} 
                            onClick = { () => {
                                props.setCurrentPageSelection(page)
                            }}
                        >{page}
                        </span>
                    </li>
                    </Pulse>    
                ))}
            </ul>
        </section>
    )
}

export default Navigation;