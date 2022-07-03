import React from "react";
import './select_type.css'
import student from '../../../assets/student.png';
import business from '../../../assets/business.png';
import association from '../../../assets/association.png';
import Header from "../../header/header";
import {useHistory} from 'react-router-dom';


function RegisterSelectType() {

    let history=useHistory()

    function registerAssociation() {
        history.push('/register-association')
    }
    function registerBusiness() {
        history.push('/register-business')
    }
    function registerStudent() {
        history.push('/register-student')
    }

    return(
        <div className={'resgisterSelectTypeWrapper'}>
            <Header url={'/login'}/>

            <div className={'registerSelectDiv'}>
                <h1 className={'text-center mainHead'} style={{color: "#337F81"}}>Jobers<span className={'mainHeadSpan'}>.</span></h1>
                <p className={'text-center registerDesc'}>Vous êtes ?</p>
                <div className={'selectTypeParent'}>
                    <div className={'selectTypeChild1'} onClick={registerStudent}>
                        <p className={'text-center'}><img className={'selectTypeLogo'} src={student} alt={'pic'} /></p>
                        <h5 className={'text-center'}>Étudiant</h5>
                        <p className={'text-center selectDescExt'}>Vous souhaitez travailler pour des agences</p>
                    </div>
                    <div className={'selectTypeChild2'} onClick={registerBusiness}>
                        <p className={'text-center'}><img className={'selectTypeLogo'} src={business} alt={'pic'} /></p>
                        <h5 className={'text-center'}>Une entreprise</h5>
                        <p className={'text-center selectDescExt'}>Vous souhaitez effectuer des missions avec des étudiants</p>
                    </div>
                    <div className={'selectTypeChild3'} onClick={registerAssociation}>
                        <p className={'text-center'}><img className={'selectTypeLogo'} src={association} alt={'pic'} /></p>
                        <h5 className={'text-center'}>Une association</h5>
                        <p className={'text-center selectDescExt'}>Vous souhaitez étendre le réseau de votre association</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterSelectType;