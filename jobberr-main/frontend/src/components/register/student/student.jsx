import React, { useEffect, useState } from "react";
import Header from "../../header/header";
import { Button, Form, InputGroup } from "react-bootstrap";
import fileUpload from "../../../assets/file_upload.png";
import ReactFlagsSelect from "react-flags-select";
import { useHistory } from 'react-router-dom'
import { useRecoilState, useSetRecoilState } from "recoil";
import { fname, lname, email, password, phone, phoneCode, address, nationality, city, zipCode, country, navigatorBar } from "../../../data/atoms";

function RegisterStudent() {

    let history = useHistory();
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

    let [iconName, setIconName] = useState('fa-solid fa-eye');
    let [passType, setPassType] = useState('password')


    const onSelect1 = (code) => setNationality(code);
    const onSelect2 = (code) => setCountry(code);
    // const [select, setSelect] = useState("SE");
    // const onSelect = (code) => setSelect(code);
    // console.log("SELECT", select);

    function changePassType() {
        if (passType === 'password') {
            setIconName('fa-solid fa-eye-slash');
            setPassType('text')
        } else {
            setIconName('fa-solid fa-eye');
            setPassType('password')
        }
    }

    function clickSubmitButton() {
        document.getElementById('regBusinessSubmitButton').click();
    }

    function submitForm(e) {
        e.preventDefault();
        history.push('/register-student-2');
    }

    useEffect(() => {
        setNavigator((obj) => ({
            icon1: "icon2",
            icon2: "icon1",
            icon3: "icon1",
            icon4: "icon1",
            line1: "line1",
            line2: "line1",
            line3: "line1"
        }))
    }, [setNavigator])

    return (
        <div className={'registerAssWrapper'}>

            <Header url={'/register-select-type'} />

            <div className={'registerAssDiv'}>
                {/*<h1 className={'text-center mainHead'}>Jobers<span className={'mainHeadSpan'}>.</span></h1>*/}
                <h3 className={'text-center head'}>Informations personnelles</h3>
                {/*<p className={'text-center desc'}>Vous souhaitez rejoindre le groupe Jobers ou vous souhaitez plus d’informations ?</p>*/}
                <Form onSubmit={submitForm}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label className={'inputLabel1'}>Adresse email</Form.Label>
                        <Form.Control type="email" placeholder="pierre@agence.com" required value={_email} onChange={(e) => { setEmail(e.target.value) }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label className={'inputLabel1'}>Mot de passe</Form.Label>
                        <div className="input-group">
                            <input type={passType} name="password" id="password" className="form-control" minLength={8} data-toggle="password" required value={_password} onChange={(e) => { setPassword(e.target.value) }} />
                            <div className="input-group-append">
                                <span className="input-group-text" onClick={changePassType}>
                                    <i className={iconName}></i>
                                </span>
                            </div>
                        </div>
                        <p style={{ color: '#667085' }}>Doit être au moins de 8 caractères et avoir un caractère spécial</p>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label className={'inputLabel1'}>Nom</Form.Label>
                        <Form.Control type="text" placeholder="Nom" required value={_fname} onChange={(e) => { setFName(e.target.value) }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label className={'inputLabel1'}>Prénom</Form.Label>
                        <Form.Control type="text" placeholder="Prénom" required value={_lname} onChange={(e) => { setLName(e.target.value) }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label className={'inputLabel1'}>Nationalité</Form.Label>
                        <ReactFlagsSelect
                            selected={_nationality}
                            onSelect={onSelect1}
                            countries={["FR", "fi", "GB", "IE", "IT", "NL", "SE"]}
                            required
                            /*showSelectedLabel={showSelectedLabel}
                            selectedSize={selectedSize}
                            showOptionLabel={showOptionLabel}
                            optionsSize={optionsSize}
                            placeholder={placeholder}
                            searchable={searchable}
                            searchPlaceholder={searchPlaceholder}
                            alignOptionsToRight={alignOptionsToRight}
                            fullWidth={fullWidth}
                            disabled={disabled} */
                            style={{ background: 'white' }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label className={'inputLabel1'}>Numéro de téléphone</Form.Label>
                        <InputGroup className="mb-3">
                            <select aria-label="Default select example" required value={_phoneCode} onChange={(e) => { setPhoneCode(e.target.value) }}>
                                <option value="+33">+33</option>
                                <option value="+92">+92</option>
                                <option value="+91">+91</option>
                            </select>
                            <Form.Control placeholder={'0786440430'} aria-label="Text input with dropdown button" required value={_phone} onChange={(e) => { setPhone(e.target.value) }} />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label className={'inputLabel1'}>Adresse</Form.Label>
                        <Form.Control type="text" placeholder="97 chaussée de rouvroy" required value={_address} onChange={(e) => { setAddress(e.target.value) }} />
                    </Form.Group>
                    <div className={'container regAssMultiField'}>
                        <div className={'row'}>
                            <div className={'col-xl-6 col-lg-6 col-md-6 col-sm-12'}>
                                <Form.Group className="mb-3" controlId="formBasicText">
                                    <Form.Label className={'inputLabel1'}>Ville</Form.Label>
                                    <Form.Control type="text" placeholder="Abbeville" required value={_city} onChange={(e) => { setCity(e.target.value) }} />
                                </Form.Group>
                            </div>
                            <div className={'col-xl-6 col-lg-6 col-md-6 col-sm-12'}>
                                <Form.Group className="mb-3" controlId="formBasicText">
                                    <Form.Label className={'inputLabel1'}>Code postal</Form.Label>
                                    <Form.Control type="text" placeholder="80100" required value={_zipCode} onChange={(e) => { setZipCode(e.target.value) }} />
                                </Form.Group>
                            </div>
                        </div>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label className={'inputLabel1'}>Pays</Form.Label>
                        <ReactFlagsSelect
                            required
                            selected={_country}
                            onSelect={onSelect2}
                            countries={["FR", "fi", "GB", "IE", "IT", "NL", "SE"]}
                            /*showSelectedLabel={showSelectedLabel}
                            selectedSize={selectedSize}
                            showOptionLabel={showOptionLabel}
                            optionsSize={optionsSize}
                            placeholder={placeholder}
                            searchable={searchable}
                            searchPlaceholder={searchPlaceholder}
                            alignOptionsToRight={alignOptionsToRight}
                            fullWidth={fullWidth}
                            disabled={disabled} */
                            style={{ background: 'white' }}
                        />
                    </Form.Group>

                    <div className={'regAssCheck'}>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check
                                required
                                type={'radio'}
                                label={'J’accepte la gestion et le traitements de mes informations. Wording à revoir'}
                            />
                        </Form.Group>
                    </div>
                    <button style={{ display: "none" }} id={'regBusinessSubmitButton'} type={'submit'}></button>
                </Form>
            </div>
            <div className={'pageToggleButtons'}>
                <Button className={'regBusinessBtn1'}>Étape précédente</Button><Button onClick={clickSubmitButton} className={'regBusinessBtn2'}>Étape suivante</Button>
            </div>
        </div>
    )
}

export default RegisterStudent