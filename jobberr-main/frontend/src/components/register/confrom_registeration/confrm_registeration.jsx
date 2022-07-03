import React from "react";
import './confrm_registeration.css'
import {Button} from "react-bootstrap";

function ConformRegisteration() {
    return(
        <div className={'confrmRegWrapper'}>
            <div className={'confrmRegDiv'}>
                <h1 className={'text-center mainHead'}>Jobers<span className={'mainHeadSpan'}>.</span></h1>
                <h3 className={'text-center head'}>Merci pour votre message</h3>
                <p className={'text-center desc'}>Nous reviendrons vers vous dès que possible</p>
                <p className={'text-center'}><Button className={'confrmRegSubmit'}  type="submit">Revenir à l’accueil</Button></p>
            </div>
        </div>
    )
}

export default ConformRegisteration;