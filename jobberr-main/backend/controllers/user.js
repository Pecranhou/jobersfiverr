const router = require('express').Router();

// Import Helper
const Helpers=require('../helpers/helper_functions')

// User Model
const User = require('../models/users');

// Verify JWT Token Middleware
const verifyJWT=require('../middlewares/verify_jwt_token');



// Register User
router.post('/register-student', async (req, res) => {
    // Find Student
    const checkUser = await User.findOne({ where: { email: req.body.email } });

    if (checkUser === null)    // if user not found
    {
        // console.log('Not found!');

        let school_certificate_pic;
        let civil_insurance_pic;
        let secu_pic;
        let rib_pic;

        //  Save files if exist
        if (req.files.school_certificate_pic)
        {
            school_certificate_pic=Helpers.saveStudentFile(req.files.school_certificate_pic);
        }
        if (req.files.civil_insurance_pic)
        {
            civil_insurance_pic=Helpers.saveStudentFile(req.files.civil_insurance_pic);
        }
        if (req.files.secu_pic)
        {
            secu_pic=Helpers.saveStudentFile(req.files.secu_pic);
        }
        if (req.files.rib_pic)
        {
            rib_pic=Helpers.saveStudentFile(req.files.rib_pic);
        }

        let data = await User.create({
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            password: Helpers.encryptData(req.body.password),
            type: "student",
            roll: "1",
            address: req.body.address,
            nationality: req.body.nationality,
            phone: req.body.phone,
            city: req.body.city,
            zip_code: req.body.zip_code,
            country: req.body.country,
            years_of_scolarity: req.body.years_of_scolarity,
            level_of_studies: req.body.level_of_studies,
            my_school_or_association_list: req.body.my_school_or_association_list,
            my_school_or_association_text: req.body.my_school_or_association_text,
            secu_code: req.body.secu_code,
            bank_name: req.body.bank_name,
            bank_iban: req.body.bank_iban,
            bank_bic: req.body.bank_bic,
            y_field: req.body.y_field,
            payment_id: req.body.payment_id,
            school_certificate_pic: school_certificate_pic,
            civil_insurance_pic: civil_insurance_pic,
            secu_pic: secu_pic,
            rib_pic: rib_pic
        });

        res.status(200).json({ 'status': '200', 'message': "student created successfully" });
    }
    else  // if user found
    {
        // console.log("User found")
        res.status(200).json({ 'status': '200', 'message': "student already exist with same email" });
    }

    res.end();
})


// Register Business
router.post('/register-business', async (req, res) => {
    // Find Business
    const checkUser = await User.findOne({ where: { email: req.body.email } });

    if (checkUser === null)    // if user not found
    {
        // console.log('Not found!');

        let business_logo;

        //  Save files if exist
        if (req.files.business_logo)
        {
            business_logo=Helpers.saveBusinessFile(req.files.business_logo);
        }


        let data = await User.create({
            fname: req.body.fname,
            email: req.body.email,
            password: Helpers.encryptData(req.body.password),
            type: "business",
            roll: "2",
            address: req.body.address,
            phone: req.body.phone,
            city: req.body.city,
            zip_code: req.body.zip_code,
            country: req.body.country,
            ref_fname: req.body.ref_fname,
            ref_lname: req.body.ref_lname,
            ref_email: req.body.ref_email,
            business_logo: business_logo,
            siret_no: req.body.siret_no,
            payment_id: req.body.payment_id,
        });

        res.status(200).json({ 'status': '200', 'message': "business created successfully" });
    }
    else  // if user found
    {
        // console.log("User found")
        res.status(200).json({ 'status': '200', 'message': "business already exist with same email" });
    }

    res.end();
})


// Register Association
router.post('/register-association', async (req, res) => {
    // Find Business
    const checkUser = await User.findOne({ where: { email: req.body.email } });

    if (checkUser === null)    // if user not found
    {
        // console.log('Not found!');

        let data = await User.create({
            fname: req.body.fname,
            email: req.body.email,
            type: "association",
            roll: "3",
            school: req.body.school,
            contact_info: req.body.contact_info,
            cont_fname: req.body.cont_fname,
            cont_lname: req.body.cont_lname,
            phone: req.body.phone,
            message: req.body.message
        });

        res.status(200).json({ 'status': '200', 'message': "association created successfully" });
    }
    else  // if user found
    {
        // console.log("User found")
        res.status(200).json({ 'status': '200', 'message': "association already exist with same email" });
    }

    res.end();
})


// Login User
router.post('/login',async (req,res)=>{
    // Fing User
    const checkUser = await User.findOne({ where: { email: req.body.email } });
    if (checkUser === null)
    {
        // console.log('Not found!');
        res.status(200).json({ 'status': '200', 'message': "User not registered with this email" });
    }
    else
    {
        // console.log("user found")
        let checkPassword=Helpers.compareEncryptedPassword(req.body.password,checkUser.password);

        if (checkPassword)
        {
            let jwtToken=Helpers.generateJwtToken(req.body.email)
            res.status(200).json({ 'status': '200', 'user_id': checkUser.id, 'name': checkUser.name, 'email': checkUser.email, 'type':checkUser.type, 'roll': checkUser.roll, 'token': jwtToken });
        }
        else
        {
            res.status(200).json({ 'status': '200', 'message': "Invalid Credentals" });
        }
    }

    res.end();
})

// test authorization
router.post('/test',verifyJWT,(req,res)=>{
    res.status(200).json({'status': '200', 'message': "Test Successful"})
    res.end();
})




module.exports = router;