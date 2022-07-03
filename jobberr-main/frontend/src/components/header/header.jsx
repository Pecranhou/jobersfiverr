import React from "react";
import './header.css'
import { useHistory } from "react-router-dom";
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import line1 from '../../assets/line1.png'
import line2 from '../../assets/line2.png'
import { navigatorBar } from "../../data/atoms";
import { useRecoilValue } from "recoil";

function Header(params) {
    const navigator = useRecoilValue(navigatorBar)
    let history = useHistory();

    function changeRoute() {
        history.push(params.url)
    }

    const icon1Handle = () => {
        if (navigator.icon1 === "icon2") {
            return icon2
        } else if (navigator.icon1 === "icon3") {
            return icon3
        } else if (navigator.icon1 === "icon1") {
            return icon1
        }
    }
    const icon2Handle = () => {
        if (navigator.icon2 === "icon1") {
            return icon1
        } else if (navigator.icon2 === "icon2") {
            return icon2
        } else if (navigator.icon2 === "icon3") {
            return icon3
        }
    }
    const icon3Handle = () => {
        if (navigator.icon3 === "icon1") {
            return icon1
        } else if (navigator.icon3 === "icon2") {
            return icon2
        } else if (navigator.icon3 === "icon3") {
            return icon3
        }
    }
    const icon4Handle = () => {
        if (navigator.icon4 === "icon1") {
            return icon1
        } else if (navigator.icon4 === "icon2") {
            return icon2
        } else if (navigator.icon4 === "icon3") {
            return icon3
        }
    }
    const line1Handle = () => {
        if (navigator.line1 === "line1") {
            return line1
        } else if (navigator.line1 === "line2") {
            return line2
        }
    }
    const line2Handle = () => {
        if (navigator.line2 === "line1") {
            return line1
        } else if (navigator.line2 === "line2") {
            return line2
        }
    }
    const line3Handle = () => {
        if (navigator.line3 === "line1") {
            return line1
        } else if (navigator.line3 === "line2") {
            return line2
        }
    }

    return (
        <div className={'headerWrapper'}>
            <div className={'headerParent'}>
                <div className={'headerChild1'}>
                    <p onClick={changeRoute} className={'text-center'} style={{ margin: 0 }}>
                        <p className={'fas fa-arrow-left headerBack'}></p>
                    </p>
                </div>
                <div className={'headerChild2'}>
                    <div className="navigator-wrapper">
                        <div className="navigator">
                            <img src={icon1Handle()} alt="" />
                            <p className="navigator-text">Informations Personelles</p>
                        </div>
                        <img src={line1Handle()} className="navigator-line" alt="" />
                        <div className="navigator">
                            <img src={icon2Handle()} alt="" />
                            <p className="navigator-text">Informations detudes</p>
                        </div>
                        <img src={line2Handle()} className="navigator-line" alt="" />
                        <div className="navigator">
                            <img src={icon3Handle()} alt="" />
                            <p className="navigator-text">Justificatifs</p>
                        </div>
                        <img src={line3Handle()} className="navigator-line" alt="" />
                        <div className="navigator">
                            <img src={icon4Handle()} alt="" />
                            <p className="navigator-text">Adhesion</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header