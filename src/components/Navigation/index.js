import React, {useEffect, useState} from "react";
import Jump from 'react-reveal/Jump';

const Navigation = (props) => {
    const [count, setCount] = useState(0);
    setTimeout(() => {
        setCount(count + 1);
        return count }, 15000)
    useEffect(() => {
        document.title = 'Matthew Sievers ' + props.currentPageSelection;
    })

    return (
        <section className="d-flex align-items-end navBtnContainer">
            <ul className="d-flex flex-row justify-content-between">
                {props.pages.map((page,i) => (
                    <Jump key={i} spy={count}>
                    <li className="nav-item" >
                        <span 
                            className={`navBtn ${props.currentPageSelection === page && 'navBtnActivated'}`} 
                            onClick = { () => {
                                props.setCurrentPageSelection(page)
                            }}
                        >{page}
                        </span>
                    </li>
                    </Jump>    
                ))}
            </ul>
        </section>
    )
}

export default Navigation;