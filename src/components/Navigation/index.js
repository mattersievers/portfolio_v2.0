import React, {useEffect, useState} from "react";
import Jump from 'react-reveal/Jump';

const Navigation = (props) => {
    const [count, setCount] = useState(0);
    setTimeout(() => {
        setCount(count + 1);
        return count }, 8000)
    useEffect(() => {
        document.title = 'Matthew Sievers ' + props.currentPageSelection;
    })

    return (
        <section className="d-flex align-items-end navBtnContainer">
            <Jump duration={4000} spy={count} cascade={true}>
            <ul className="d-flex flex-row justify-content-between">
                {props.pages.map((page,i) => (
                    <li className="nav-item" key={i}>
                        <span 
                            className={`navBtn ${props.currentPageSelection === page && 'navBtnActivated'}`} 
                            onClick = { () => {
                                props.setCurrentPageSelection(page)
                            }}
                        >{page}
                        </span>
                    </li>
                ))}
            </ul>
            
            </Jump>    
        </section>
    )
}

export default Navigation;