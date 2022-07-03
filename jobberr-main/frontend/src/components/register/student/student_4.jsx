import Header from "../../header/header";
import { Button, Form } from "react-bootstrap";
import fileUpload from "../../../assets/file_upload.png";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ReactStripe from 'react-stripe-checkout';
import Api from '../../../apis/apis';
import { toast } from "react-toastify";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
    address, bank, bic,
    city, civilInsurance, country,
    email,
    fname, iban,
    lname,
    nationality,
    navigatorBar,
    password,
    phone,
    phoneCode, rib, school, schoolCertificate, scolarityYear, secu, secuImg, studiesLevel,
    yfield,
    zipCode
} from "../../../data/atoms";

function RegisterStudent_4() {

    const setNavigator = useSetRecoilState(navigatorBar)
    let [_fname, setFName] = useRecoilState(fname)
    let [_lname, setLName] = useRecoilState(lname)
    let [_email, setEmail] = useRecoilState(email)
    let [_password, setPassword] = useRecoilState(password)
    let [_phone, setPhone] = useRecoilState(phone)
    let [_phoneCode, setPhoneCode] = useRecoilState(phoneCode)
    let [_address, setAddress] = useRecoilState(address)
    let [_nationality, setNationality] = useRecoilState(nationality)
    let [_city, setCity] = useRecoilState(city)
    let [_zipCode, setZipCode] = useRecoilState(zipCode)
    let [_country, setCountry] = useRecoilState(country)
    let [_scolarityYear, setScolarityYear] = useRecoilState(scolarityYear)
    let [_studiesLevel, setStudiesLevel] = useRecoilState(studiesLevel)
    let [_school, setSchool] = useRecoilState(school)
    let [_schoolCertificate, setSchoolCertificate] = useRecoilState(schoolCertificate)
    let [_civilInsurance, setCivilInsurance] = useRecoilState(civilInsurance)
    let [_secuImg, setSecuImg] = useRecoilState(secuImg)
    let [_secu, setSecu] = useRecoilState(secu)
    let [_rib, setRib] = useRecoilState(rib)
    let [_bank, setBank] = useRecoilState(bank)
    let [_iban, setIban] = useRecoilState(iban)
    let [_bic, setBic] = useRecoilState(bic)
    let [_yfield, setYField] = useRecoilState(yfield)

    function clickSubmitButton() {
        document.get('StripeCheckout').click();
    }

    async function handleToken(e, token) {


        // console.log(token)
        let data = {
            token: token
        }

        let response = await Api.registerUserCheckout(data);

        if (response.status == 200) {
            toast.success("Payment Success")

            const data = new FormData()

            data.append('fname', _fname);
            data.append('lname', _lname);
            data.append('email', _email);
            data.append('password', _password);
            data.append('phone', _phoneCode + _phone);
            data.append('address', _address);
            data.append('nationality', _nationality);
            data.append('city', _city);
            data.append('zip_code', _zipCode);
            data.append('country', _country);
            data.append('years_of_scolarity', _scolarityYear);
            data.append('level_of_studies', _studiesLevel);
            data.append('my_school_or_association_list', _school);
            data.append('school_certificate_pic', _schoolCertificate);
            data.append('civil_insurance_pic', _civilInsurance);
            data.append('secu_pic', _secuImg);
            data.append('secu_code', _secu);
            data.append('rib_pic', _rib);
            data.append('bank_name', _bank);
            data.append('bank_iban', _iban);
            data.append('bank_bic', _bic);
            data.append('y_field', _yfield);
            console.log(data)
            let res = await Api.registerStudent(data);
            toast.success(res.message);
            // resetStates();
        }
        else {
            toast.error("Payment Failed")
        }
    }

    useEffect(() => {
        setNavigator((obj) => ({
            icon1: "icon3",
            icon2: "icon3",
            icon3: "icon3",
            icon4: "icon2",
            line1: "line2",
            line2: "line2",
            line3: "line2"
        }))
    }, [setNavigator])

    return (
        <div className={'registerAssWrapper'}>

            <Header url={'/register-student-3'} />

            <div className={'registerAssDiv'}>
                {/*<h1 className={'text-center mainHead'}>Jobers<span className={'mainHeadSpan'}>.</span></h1>*/}
                <h3 className={'text-center head'}>Adhésion à une association</h3>
                {/*<p className={'text-center desc'}>Vous souhaitez rejoindre le groupe Jobers ou vous souhaitez plus d’informations ?</p>*/}
                <Form onSubmit={handleToken}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label className={'inputLabel1'}>Vous allez adhérer à</Form.Label>
                        <Form.Control type="text" placeholder="Association 1 – École" required value={_yfield} onChange={(e) => { setYField(e.target.value) }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicSelect">
                        <Form.Label className={'inputLabel2'} style={{ fontWeight: "bold" }}>L’adhésion est au tarif de 10€/an et est obligatoire pour accéder aux fonctionnalités de Jobers.</Form.Label>
                        <p style={{ color: '#667085' }}>Le renouvellement n’est pas automatique. Vous pouvez changer d’association chaque début d’année.</p>
                    </Form.Group>
                    <button style={{ display: "none" }} id={'regBusinessSubmitButton'} type={'submit'}></button>
                </Form>
                <ReactStripe
                    stripeKey="pk_test_51LGG89AdKjeuDnfeROkfECSrdtwGzvguTrbMmOeW19CnyeIaZ0zRMwt0tY1eLicJ67eaKxvxto8u8GDNjNE7VR7V00Py8wYY8m"
                    token={handleToken}
                    currency="EUR"
                    amount={10 * 100}
                    name="Jobers." // the pop-in header title
                    description="Register Student" // the pop-in header subtitle
                />
            </div>
            <div className={'pageToggleButtons'}>
                <Link to={'/register-student-3'}><Button className={'regBusinessBtn1'}>Étape précédente</Button></Link><Button className={'regBusinessBtn2'}><ReactStripe
                    stripeKey="pk_test_51LGG89AdKjeuDnfeROkfECSrdtwGzvguTrbMmOeW19CnyeIaZ0zRMwt0tY1eLicJ67eaKxvxto8u8GDNjNE7VR7V00Py8wYY8m"
                    token={handleToken}
                    currency="EUR"
                    amount={10 * 100}
                    name="Jobers." // the pop-in header title
                    description="Register Student" // the pop-in header subtitle
                /></Button>
            </div>
        </div>
    )
}

export default RegisterStudent_4;