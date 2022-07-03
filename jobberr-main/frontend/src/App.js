import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./components/login/login";
import RegisterSelectType from "./components/register/select_type/select_type";
import ConformRegisteration from "./components/register/confrom_registeration/confrm_registeration";
import RegisterAssociation from "./components/register/association/association";
import RegisterBusiness from "./components/register/business/business";
import RegisterStudent from "./components/register/student/student";
import RegisterStudent_2 from "./components/register/student/student_2";
import RegisterStudent_3 from "./components/register/student/student_3";
import RegisterStudent_4 from "./components/register/student/student_4";

function App() {
    return (
        <div className="App">
            {/* Login */}
            <Route exact path="/login">
                <Login />
            </Route>
            {/* Select Type Register */}
            <Route exact path="/register-select-type">
                <RegisterSelectType />
            </Route>
            {/* Conform Registration */}
            <Route exact path="/conform-registration">
                <ConformRegisteration />
            </Route>
            {/* Register Association */}
            <Route exact path="/register-association">
                <RegisterAssociation />
            </Route>
            {/* Register Business */}
            <Route exact path="/register-business">
                <RegisterBusiness />
            </Route>
            {/* Register Student Form 1 */}
            <Route exact path="/register-student">
                <RegisterStudent />
            </Route>
            {/* Register Student Form 2 */}
            <Route exact path="/register-student-2">
                <RegisterStudent_2 />
            </Route>
            {/* Register Student Form 3 */}
            <Route exact path="/register-student-3">
                <RegisterStudent_3 />
            </Route>
            {/* Register Student Form 4 */}
            <Route exact path="/register-student-4">
                <RegisterStudent_4 />
            </Route>
            <ToastContainer />
        </div>
    );
}


export default App;
