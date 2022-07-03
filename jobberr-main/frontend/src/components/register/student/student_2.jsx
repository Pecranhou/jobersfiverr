import React, { useEffect, useState } from "react";
import Header from "../../header/header";
import { Button, Form, InputGroup } from "react-bootstrap";
import ReactFlagsSelect from "react-flags-select";
import { Link, useHistory } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { scolarityYear, studiesLevel, school, navigatorBar } from "../../../data/atoms";

function RegisterStudent_2() {

    let history = useHistory();
    const setNavigator = useSetRecoilState(navigatorBar)
    let [_scolarityYear, setScolarityYear] = useRecoilState(scolarityYear)
    let [_studiesLevel, setStudiesLevel] = useRecoilState(studiesLevel)
    let [_school, setSchool] = useRecoilState(school)

    const [select, setSelect] = useState("SE");
    const onSelect = (code) => setSelect(code);
    console.log("SELECT", select);

    function clickSubmitButton() {
        document.getElementById('regBusinessSubmitButton').click();
    }

    function submitForm(e) {
        e.preventDefault();
        history.push('/register-student-3');
    }

    useEffect(() => {
        setNavigator((obj) => ({
            icon1: "icon3",
            icon2: "icon2",
            icon3: "icon1",
            icon4: "icon1",
            line1: "line2",
            line2: "line1",
            line3: "line1"
        }))
    }, [setNavigator])


    return (
        <div className={'registerAssWrapper'}>

            <Header url={'/register-student'} />

            <div className={'registerAssDiv'}>
                {/*<h1 className={'text-center mainHead'}>Jobers<span className={'mainHeadSpan'}>.</span></h1>*/}
                <h3 className={'text-center head'}>Informations d’études</h3>
                {/*<p className={'text-center desc'}>Vous souhaitez rejoindre le groupe Jobers ou vous souhaitez plus d’informations ?</p>*/}
                <Form onSubmit={submitForm}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label className={'inputLabel1'}>Année scolaire</Form.Label>
                        <Form.Control type="date" requires value={_scolarityYear} onChange={(e) => { setScolarityYear(e.target.value) }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicSelect">
                        <Form.Label className={'inputLabel2'}>Niveau d’étude</Form.Label>
                        <Form.Select aria-label="Default select example" requires value={_studiesLevel} onChange={(e) => { setStudiesLevel(e.target.value) }}>
                            <option value="1ère année">1ère année</option>
                            <option value="1ère année">1ère année</option>
                            <option value="1ère année">1ère année</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicSelect">
                        <Form.Label className={'inputLabel2'}>Mon association ou école</Form.Label>
                        <Form.Select aria-label="Default select example" requires value={_school} onChange={(e) => { setSchool(e.target.value) }}>
                            <option value="Paris ESA - AERESA">Paris ESA - AERESA</option>
                            <option value="Paris ESA - AERESA">Paris ESA - AERESA</option>
                            <option value="Paris ESA - AERESA">Paris ESA - AERESA</option>
                        </Form.Select>
                    </Form.Group>
                    <button style={{ display: "none" }} id={'regBusinessSubmitButton'} type={'submit'}></button>
                </Form>
            </div>
            <div className={'pageToggleButtons'}>
                <Link to={'/register-student'}><Button className={'regBusinessBtn1'}>Étape précédente</Button></Link><Button onClick={clickSubmitButton} className={'regBusinessBtn2'}>Étape suivante</Button>
            </div>
        </div>
    )
}

export default RegisterStudent_2;