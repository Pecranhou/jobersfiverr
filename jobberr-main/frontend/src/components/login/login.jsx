import React from "react";
import './login.css'
import {Form,Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function Login() {
    return(
        <div className={'loginWrapper'}>
            <div className={'loginDiv'}>
                <h1 className={'text-center mainHead'}>Jobers<span className={'mainHeadSpan'}>.</span></h1>
                <h3 className={'text-center head'}>Connexion à votre compte</h3>
                <p className={'text-center desc'}>Bienvenue,veuillez s’il vous plaît rentrer vos informations de connexion</p>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className={'inputLabel'}>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className={'inputLabel'}>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <div className={'container'}>
                        <div className={'row'}>
                            <div className={'col-xl-6 col-lg-6 col-md-6 col-sm-6'}>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                            </div>
                            <div className={'col-xl-6 col-lg-6 col-md-6 col-sm-6'}>
                                <p className={'loginOptions'}>Mot de passe oublié</p>
                            </div>
                        </div>
                    </div>
                    <p className={'text-center'}><Button className={'loginSubmitButton'}  type="submit">Se connecter</Button></p>
                </Form>
                <p className={'text-center'}>Pas encore de compte ? <Link className={'link'} to={'/register-select-type'}><span className={'loginOptions'}>S’inscrire</span></Link></p>
            </div>
        </div>
    )
}

export default Login;