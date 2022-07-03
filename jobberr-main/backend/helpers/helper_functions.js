const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken');

// Encrypt Data
module.exports.encryptData= function (data)
{
    return bcrypt.hashSync(data,5);
}

// Compare encrypt password
module.exports.compareEncryptedPassword=function (orignalPassword,hashPassword)
{
    return bcrypt.compareSync(orignalPassword,hashPassword)
}

// Generate JWT token
module.exports.generateJwtToken= function (data) {
    return jwt.sign({ email: data }, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRE})
}

// Check Auth Middleware
module.exports.verifyToken =function (req, res, next)
{
    const token = req.body.token || req.query.token || req.headers["x-access-token"];

    if (!token) {
        return res.status(403).json({'status': '403', 'message': 'token is required'});
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
    } catch (err) {
        return res.status(401).json({'status': '401', 'message': 'invalid token'});
    }
    return next();
};

// save student files
module.exports.saveStudentFile=function (_file) {
    let file=_file;
    let date=Date.now();
    let fileName=date+""+Math.floor(Math.random() * 99999) + 1+file.name;

    file.mv('./public/assets/uploads/student/'+fileName,(err)=>{
        if (err)
        {
            console.log(err)
        }
    })

    return fileName;
}

// save business files
module.exports.saveBusinessFile=function (_file) {
    let file=_file;
    let date=Date.now();
    let fileName=date+""+Math.floor(Math.random() * 99999) + 1+file.name;

    file.mv('./public/assets/uploads/business/'+fileName,(err)=>{
        if (err)
        {
            console.log(err)
        }
    })

    return fileName;
}