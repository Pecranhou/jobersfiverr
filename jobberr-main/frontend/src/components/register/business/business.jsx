import React, {useEffect, useState} from "react";
import './business.css'
import Header from "../../header/header";
import {Button, Form, InputGroup} from "react-bootstrap";
import fileUpload from '../../../assets/file_upload.png';
import ReactFlagsSelect from "react-flags-select";
import Api from '../../../apis/apis';
import {toast} from "react-toastify";

function RegisterBusiness() {

    let [name,setName]=useState(null);
    let [logo,setLogo]=useState(null)
    let [siret,setSiret]=useState(null)
    let [email,setEmail]=useState(null)
    let [phone,setPhone]=useState(null)
    let [phoneCode,setPhoneCode]=useState(null)
    let [password,setPassword]=useState(null)
    let [address,setAddress]=useState(null)
    let [city,setCity]=useState(null)
    let [zipCode,setZipCode]=useState(null)
    let [country, setCountry] = useState("FR");
    let [refFname,setRefFname]=useState(null)
    let [refLname,setRefLname]=useState(null)
    let [refEmail,setRefemail]=useState(null)

    let [logoImgStatus,setLogoImgStatus]=useState(true);
    let [logoTagStatus,setLogoTagStatus]=useState(false);

    useEffect(()=>{
        if (logo)
        {
            setLogoImgStatus(false)
            setLogoTagStatus(true);
        }
        else
        {
            setLogoImgStatus(true)
            setLogoTagStatus(false);
        }
    },[logo])


    let [iconName,setIconName]=useState('fa-solid fa-eye');
    let [passType,setPassType]=useState('password')


    const onSelect = (code) => setCountry(code);
    // console.log("SELECT", country);

    function changePassType() {
        if (passType === 'password')
        {
            setIconName('fa-solid fa-eye-slash');
            setPassType('text')
        }
        else
        {
            setIconName('fa-solid fa-eye');
            setPassType('password')
        }
    }

    function clickSubmitButton() {
        document.getElementById('regBusinessSubmitButton').click();
    }

    async function submitForm(e) {
        e.preventDefault();

        if (logo)
        {

        }
        else
        {
            toast.error('Please upload logo image');
            return ;
        }

        if (logo.size > 2048)
        {
            toast.error('Size of logo cannot be greater than 2MB');
            return ;
        }

        const data = new FormData()

        data.append('business_logo', logo);
        data.append('fname', name);
        data.append('siret_no', siret);
        data.append('email', email);
        data.append('phone', phoneCode+phone);
        data.append('password', password);
        data.append('address', address);
        data.append('ref_fname', refFname);
        data.append('ref_lname', refLname);
        data.append('ref_email', refEmail);
        data.append('city', city);
        data.append('zip_code', zipCode);
        data.append('country', country);
        data.append('payment_id', null);

        let res= await Api.registerBusiness(data);
        toast.success(res.message);
        resetStates();
    }

    function resetStates() {
        setName("");
        setLogo("");
        setSiret("");
        setEmail("");
        setPhone("");
        setPhoneCode("");
        setPassword("");
        setAddress("");
        setCity("");
        setZipCode("");
        setCountry("");
        setRefFname("");
        setRefLname("");
        setRefemail("");
    }

    return(
        <div className={'registerAssWrapper'}>

            <Header url={'/register-select-type'}/>

            <div className={'registerAssDiv'}>
                <h1 className={'text-center mainHead'}>Jobers<span className={'mainHeadSpan'}>.</span></h1>
                <h3 className={'text-center head'}>Informations de l’entreprise</h3>
                {/*<p className={'text-center desc'}>Vous souhaitez rejoindre le groupe Jobers ou vous souhaitez plus d’informations ?</p>*/}
                <Form onSubmit={submitForm}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label className={'inputLabel1'}>Nom de l’entreprise</Form.Label>
                        <Form.Control type="text" value={name} required onChange={(e)=>{setName(e.target.value)}} placeholder="Nom 1" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText" required>
                        <Form.Label className={'inputLabel1'}>Logo de l’entreprise</Form.Label>
                        {/*<Form.Control type="text" placeholder="Nom 1" />*/}
                        <input className={logoTagStatus ? "":"hide"} name="logo" id="logo" type="file" onChange={(e)=>{setLogo(e.target.files[0])}}  />
                        <label className={logoImgStatus ? "":"hide"} htmlFor="logo">
                            <img style={{width: '100%'}} src={fileUpload} alt={'logo'}  />
                        </label>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label className={'inputLabel1'}>Numéro de SIRET</Form.Label>
                        <Form.Control type="text" placeholder="123 568 941 00056" required value={siret} onChange={(e)=>{setSiret(e.target.value)}} maxLength={14} minLength={14} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label className={'inputLabel1'}>Adresse email associé au compte</Form.Label>
                        <Form.Control type="email" placeholder="pierre@agence.com" required value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label className={'inputLabel1'}>Numéro de téléphone</Form.Label>
                        <InputGroup className="mb-3">
                            <select aria-label="Default select example" onChange={(e)=>{setPhoneCode(e.target.value)}}>
                                <option value="+33">+33</option>
                                <option value="+92">+92</option>
                                <option value="+91">+91</option>
                            </select>
                            <Form.Control placeholder={'0786440430'} aria-label="Text input with dropdown button" required value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label className={'inputLabel1'}>Mot de passe</Form.Label>
                        <div className="input-group">
                            <input type={passType} name="password" id="password" className="form-control" data-toggle="password" required value={password} minLength={8}  onChange={(e)=>{setPassword(e.target.value)}}/>
                            <div className="input-group-append">
                                <span className="input-group-text" onClick={changePassType}>
                                    <i className={iconName}></i>
                                </span>
                            </div>
                        </div>
                        <p style={{color: '#667085'}}>Doit être au moins de 8 caractères et avoir un caractère spécial</p>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicSelect">
                        <Form.Label className={'inputLabel2'} style={{fontWeight: "bold"}}>Adresse</Form.Label>
                        <p style={{color: '#667085'}}>Veuillez entrer votre adresse</p>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label className={'inputLabel1'}>Adresse</Form.Label>
                        <Form.Control type="text" placeholder="97 chaussée de rouvroy" required value={address} onChange={(e)=>{setAddress(e.target.value)}}  />
                    </Form.Group>
                    <div className={'container regAssMultiField'}>
                        <div className={'row'}>
                            <div className={'col-xl-6 col-lg-6 col-md-6 col-sm-12'}>
                                <Form.Group className="mb-3" controlId="formBasicText">
                                    <Form.Label className={'inputLabel1'}>Ville</Form.Label>
                                    <Form.Control type="text" placeholder="Abbeville" required value={city} onChange={(e)=>{setCity(e.target.value)}} />
                                </Form.Group>
                            </div>
                            <div className={'col-xl-6 col-lg-6 col-md-6 col-sm-12'}>
                                <Form.Group className="mb-3" controlId="formBasicText">
                                    <Form.Label className={'inputLabel1'}>Code postal</Form.Label>
                                    <Form.Control type="text" placeholder="80100" required value={zipCode} onChange={(e)=>{setZipCode(e.target.value)}} />
                                </Form.Group>
                            </div>
                        </div>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label className={'inputLabel1'}>Pays</Form.Label>
                        <ReactFlagsSelect
                                selected={country}
                            onSelect={onSelect}
                            countries={["FR","fi", "GB", "IE", "IT", "NL", "SE",]}
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
                            style={{background: 'white'}}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicSelect">
                        <Form.Label className={'inputLabel2'} style={{fontWeight: "bold"}}>Référent mission</Form.Label>
                        <p style={{color: '#667085'}}>Veuillez entrer les informations de la personne à contacter</p>
                    </Form.Group>
                    <div className={'container regAssMultiField'}>
                        <div className={'row'}>
                            <div className={'col-xl-6 col-lg-6 col-md-6 col-sm-12'}>
                                <Form.Group className="mb-3" controlId="formBasicText">
                                    <Form.Label className={'inputLabel1'}>Nom</Form.Label>
                                    <Form.Control type="text" placeholder="Dourlens" required value={refFname} onChange={(e)=>{setRefFname(e.target.value)}} />
                                </Form.Group>
                            </div>
                            <div className={'col-xl-6 col-lg-6 col-md-6 col-sm-12'}>
                                <Form.Group className="mb-3" controlId="formBasicText">
                                    <Form.Label className={'inputLabel1'}>Prénom</Form.Label>
                                    <Form.Control type="text" placeholder="Clément" required value={refLname} onChange={(e)=>{setRefLname(e.target.value)}} />
                                </Form.Group>
                            </div>
                        </div>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label className={'inputLabel1'}>Adresse email</Form.Label>
                        <Form.Control type="email" placeholder="pierre@agence.com" required value={refEmail} onChange={(e)=>{setRefemail(e.target.value)}} />
                    </Form.Group>
                    <div className={'regAssCheck'}>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check
                                required={'true'}
                                type={'radio'}
                                label={'J’accepte la gestion et le traitements de mes informations. Wording à revoir'}
                            />
                        </Form.Group>
                    </div>
                    <button style={{display: "none"}} id={'regBusinessSubmitButton'} type={'submit'}></button>
                </Form>
            </div>
            <div className={'pageToggleButtons'}>
                <Button className={'regBusinessBtn1'}>Étape précédente</Button><Button onClick={clickSubmitButton}  className={'regBusinessBtn2'}>Valider l’inscription</Button>
            </div>
        </div>
    )
}

export default RegisterBusiness;