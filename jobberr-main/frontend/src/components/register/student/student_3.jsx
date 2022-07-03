import Header from "../../header/header";
import { Button, Form, InputGroup } from "react-bootstrap";
import fileUpload from "../../../assets/file_upload.png";
import ReactFlagsSelect from "react-flags-select";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useRecoilState, useSetRecoilState } from "recoil";
import { schoolCertificate, civilInsurance, secuImg, secu, rib, bank, iban, bic, navigatorBar } from "../../../data/atoms";

function RegisterStudent_3() {

    let history = useHistory();
    const setNavigator = useSetRecoilState(navigatorBar)
    let [_schoolCertificate, setSchoolCertificate] = useRecoilState(schoolCertificate)
    let [_civilInsurance, setCivilInsurance] = useRecoilState(civilInsurance)
    let [_secuImg, setSecuImg] = useRecoilState(secuImg)
    let [_secu, setSecu] = useRecoilState(secu)
    let [_rib, setRib] = useRecoilState(rib)
    let [_bank, setBank] = useRecoilState(bank)
    let [_iban, setIban] = useRecoilState(iban)
    let [_bic, setBic] = useRecoilState(bic)


    function clickSubmitButton() {
        document.getElementById('regBusinessSubmitButton').click();
    }


    function submitForm(e) {
        e.preventDefault();

        if (schoolCertificate && civilInsurance && rib && secuImg) {

        }
        else {
            toast.error("Please upload all the images")
            return;
        }

        if (schoolCertificate.size > 2048) {
            toast.error("schoolCertificate size should be less than 2MB  : " + schoolCertificate.size)
            return;
        }
        if (civilInsurance.size > 2048) {
            toast.error("civilInsurance size should be less than 2MB")
            return;
        }
        if (secuImg.size > 2048) {
            toast.error("secuImg size should be less than 2MB")
            return;
        }
        if (rib.size > 2048) {
            toast.error("rib size should be less than 2MB")
            return;
        }


        history.push('/register-student-4');

    }

    let [scI, setScI] = useState(true);
    let [scT, setScT] = useState(false);
    useEffect(() => {
        if (schoolCertificate) {
            setScI(false)
            setScT(true);
        }
        else {
            setScI(true)
            setScT(false);
        }
    }, [schoolCertificate])

    let [ciI, setCiI] = useState(true);
    let [ciT, setCiT] = useState(false);
    useEffect(() => {
        if (civilInsurance) {
            setCiI(false)
            setCiT(true);
        }
        else {
            setCiI(true)
            setCiT(false);
        }
    }, [civilInsurance])

    let [seI, setSeI] = useState(true);
    let [seT, setSeT] = useState(false);
    useEffect(() => {
        if (secuImg) {
            setSeI(false)
            setSeT(true);
        }
        else {
            setSeI(true)
            setSeT(false);
        }
    }, [secuImg])

    let [riI, setRiI] = useState(true);
    let [riT, setRiT] = useState(false);
    useEffect(() => {
        if (rib) {
            setRiI(false)
            setRiT(true);
        }
        else {
            setRiI(true)
            setRiT(false);
        }
    }, [rib])

    useEffect(() => {
        setNavigator((obj) => ({
            icon1: "icon3",
            icon2: "icon3",
            icon3: "icon2",
            icon4: "icon1",
            line1: "line2",
            line2: "line2",
            line3: "line1"
        }))
    }, [setNavigator])


    return (
        <div className={'registerAssWrapper'}>

            <Header url={'/register-student-2'} />

            <div className={'registerAssDiv'}>
                {/*<h1 className={'text-center mainHead'}>Jobers<span className={'mainHeadSpan'}>.</span></h1>*/}
                <h3 className={'text-center head'}>Justificatifs</h3>
                {/*<p className={'text-center desc'}>Vous souhaitez rejoindre le groupe Jobers ou vous souhaitez plus d’informations ?</p>*/}
                <Form onSubmit={submitForm}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label className={'inputLabel1'}>Certificat de scolarité</Form.Label>
                        {/*<Form.Control type="text" placeholder="Nom 1" />*/}
                        <input className={scT ? "" : "hide"} name="logo" id="logo" type="file" onChange={(e) => { setSchoolCertificate(e.target.files[0]) }} />
                        <label className={scI ? "" : "hide"} htmlFor="logo">
                            <img style={{ width: '100%' }} src={fileUpload} alt={'logo'} />
                        </label>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label className={'inputLabel1'}>Attestation d’assurance civile</Form.Label>
                        {/*<Form.Control type="text" placeholder="Nom 1" />*/}
                        <input className={ciT ? "" : "hide"} name="logo" id="logo1" type="file" onChange={(e) => { setCivilInsurance(e.target.files[0]) }} />
                        <label className={ciI ? "" : "hide"} htmlFor="logo1">
                            <img style={{ width: '100%' }} src={fileUpload} alt={'logo'} />
                        </label>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label className={'inputLabel1'}>Numéro de sécurité sociale</Form.Label>
                        <Form.Control type="text" placeholder="126237893242424" minLength={15} maxlength={15} required value={_secu} onChange={(e) => { setSecu(e.target.value) }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label className={'inputLabel1'}>Pièce d’identité valide</Form.Label>
                        {/*<Form.Control type="text" placeholder="Nom 1" />*/}
                        <input className={seT ? "" : "hide"} name="logo" id="logo2" type="file" onChange={(e) => { setSecuImg(e.target.files[0]) }} />
                        <label className={seI ? "" : "hide"} htmlFor="logo2">
                            <img style={{ width: '100%' }} src={fileUpload} alt={'logo2'} />
                        </label>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label className={'inputLabel1'}>Banque</Form.Label>
                        <Form.Control type="text" placeholder="Société Générale" required value={_bank} onChange={(e) => { setBank(e.target.value) }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label className={'inputLabel1'}>IBAN</Form.Label>
                        <Form.Control type="text" placeholder="FR74 3233 4242 4244 2332 324" required value={_iban} onChange={(e) => { setIban(e.target.value) }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label className={'inputLabel1'}>BIC</Form.Label>
                        <Form.Control type="text" placeholder="632839232 32" required value={_bic} onChange={(e) => { setBic(e.target.value) }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label className={'inputLabel1'}>Photo du RIB</Form.Label>
                        {/*<Form.Control type="text" placeholder="Nom 1" />*/}
                        <input className={riT ? "" : "hide"} name="logo" id="logo3" type="file" onChange={(e) => { setRib(e.target.files[0]) }} />
                        <label className={riI ? "" : "hide"} htmlFor="logo3">
                            <img style={{ width: '100%' }} src={fileUpload} alt={'logo3'} />
                        </label>
                    </Form.Group>
                    <button style={{ display: "none" }} id={'regBusinessSubmitButton'} type={'submit'}></button>
                </Form>
            </div>
            <div className={'pageToggleButtons'}>
                <Link to={'/register-student-2'}><Button className={'regBusinessBtn1'}>Étape précédente</Button></Link><Button onClick={clickSubmitButton} className={'regBusinessBtn2'}>Étape suivante</Button>
            </div>
        </div>
    )
}

export default RegisterStudent_3;