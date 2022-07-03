import React, {useState} from "react";
import './association.css'
import Header from "../../header/header";
import {Button, Form,InputGroup,DropdownButton,Dropdown} from "react-bootstrap";
import Api from '../../../apis/apis';
import {toast} from "react-toastify";

function RegisterAssociation() {

    let [name,setName]=useState(null);
    let [school,setSchool]=useState(null);
    let [contactInfo,setContactInfo]=useState(null);
    let [contactFName,setContactFName]=useState(null);
    let [contactLName,setContactLName]=useState(null);
    let [contactEmail,setContactEmail]=useState(null);
    let [contactPhone,setContactPhone]=useState(null);
    let [contactMessage,setContactMessage]=useState(null);
    let [phoneCode,setPhoneCode]=useState(null);

    function resetStates()
    {
        setName("");
        setSchool("");
        setContactInfo("");
        setContactFName("");
        setContactLName("");
        setContactEmail("");
        setContactPhone("");
        setContactMessage("");
        setPhoneCode("");
    }

    async function submitForm(e) {
        e.preventDefault();

        let data={
            fname: name,
            school: school,
            contact_info: contactInfo,
            cont_fname: contactFName,
            cont_lname: contactLName,
            email: contactEmail,
            phone: phoneCode+contactPhone,
            message: contactMessage,
        }

        let res= await Api.registerAssociation(data);
        toast.success(res.message);
        resetStates();
        // console.log(res)
    }

    return(
        <div className={'registerAssWrapper'}>

            <Header url={'/register-select-type'}/>

            <div className={'registerAssDiv'}>
                <h1 className={'text-center mainHead'}>Jobers<span className={'mainHeadSpan'}>.</span></h1>
                <h3 className={'text-center head'}>Informations de l’association</h3>
                <p className={'text-center desc'}>Vous souhaitez rejoindre le groupe Jobers ou vous souhaitez plus d’informations ?</p>
                <Form onSubmit={submitForm}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label className={'inputLabel1'}>Nom de l’association</Form.Label>
                        <Form.Control type="text" placeholder="Nom 1"  value={name} onChange={(e)=>{setName(e.target.value)}} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label className={'inputLabel1'}>École</Form.Label>
                        <Form.Control type="text" placeholder="École 1"  value={school} onChange={(e)=>{setSchool(e.target.value)}} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicSelect">
                        <Form.Label className={'inputLabel2'}>Information de contact</Form.Label>
                        <Form.Select aria-label="Default select example" value={contactInfo} onChange={(e)=>{setContactInfo(e.target.value)}} required>
                            <option value="Président">Président</option>
                            <option value="Secretary">Secretary</option>
                            <option value="Null">Null</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicSelect">
                        <Form.Label className={'inputLabel2'} style={{fontWeight: "bold"}}>Président</Form.Label>
                        <p style={{color: '#667085'}}>Veuillez entrer les informations de votre président</p>
                    </Form.Group>
                    <div className={'container regAssMultiField'}>
                        <div className={'row'}>
                            <div className={'col-xl-6 col-lg-6 col-md-6 col-sm-12'}>
                                <Form.Group className="mb-3" controlId="formBasicText">
                                    <Form.Label className={'inputLabel1'}>Nom</Form.Label>
                                    <Form.Control type="text" placeholder="Dourlens"  value={contactFName} onChange={(e)=>{setContactFName(e.target.value)}} required/>
                                </Form.Group>
                            </div>
                            <div className={'col-xl-6 col-lg-6 col-md-6 col-sm-12'}>
                                <Form.Group className="mb-3" controlId="formBasicText">
                                    <Form.Label className={'inputLabel1'}>Prénom</Form.Label>
                                    <Form.Control type="text" placeholder="Clément"  value={contactLName} onChange={(e)=>{setContactLName(e.target.value)}} required/>
                                </Form.Group>
                            </div>
                        </div>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className={'inputLabel'}>Adresse email</Form.Label>
                        <Form.Control type="email" placeholder="cd@mail.com"  value={contactEmail} onChange={(e)=>{setContactEmail(e.target.value)}} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label className={'inputLabel1'}>Numéro de téléphone</Form.Label>
                        <InputGroup className="mb-3">
                            <select aria-label="Default select example" value={phoneCode} onChange={(e)=>{setPhoneCode(e.target.value)}}>
                                <option value="+33">+33</option>
                                <option value="+92">+92</option>
                                <option value="+91">+91</option>
                            </select>
                            <Form.Control placeholder={'0786440430'} aria-label="Text input with dropdown button"  value={contactPhone} onChange={(e)=>{setContactPhone(e.target.value)}} required/>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Votre message</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder={'Écrivez nous votre message'}  value={contactMessage} onChange={(e)=>{setContactMessage(e.target.value)}} required/>
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
                    <p className={'text-center'}><Button className={'regAssSubmitButton'}  type="submit">Envoyer le message</Button></p>
                </Form>
            </div>

        </div>
    )
}

export default RegisterAssociation;