import axios from "axios";

//  Live Api URL :    https://server.poptiles.art:8443

export default class Api {

    // Register User Checkout
    static registerUserCheckout = async (data) => {
        try {
            const res = await axios.post(`http://localhost:4700/register-student-checkout`, data);
            return res;
        } catch (error) {
            return error;
        }
    }

    // Register Association
    static registerAssociation = async (data) => {
        try {
            const res = await axios.post(`http://localhost:4700/register-association`, data);
            return res.data;
        } catch (error) {
            return error.data;
        }
    }

    // Register Business
    static registerBusiness = async (data) => {
        try {
            const res = await axios.post(`http://localhost:4700/register-business`, data);
            return res.data;
        } catch (error) {
            return error.data;
        }
    }

    // Register Student
    static registerStudent = async (data) => {
        try {
            const res = await axios.post(`http://localhost:4700/register-student`, data);
            return res.data;
        } catch (error) {
            return error.data;
        }
    }
}