const {DataTypes} = require('sequelize');

// DB Connection
const sequelize = require('../connection/db_connection');

// User Schema
const User = sequelize.define('users', {
        fname: {
            type: DataTypes.STRING,
            defaultValue: 'null'
        },
        lname: {
            type: DataTypes.STRING,
            defaultValue: 'null'
        },
        email: {
            type: DataTypes.STRING,
            defaultValue: 'null'
        },
        password: {
            type: DataTypes.TEXT,
            defaultValue: "null"
        },
        type: {
            type: DataTypes.STRING,
            defaultValue: 'null'
        },
        roll: {      // 0 => admin   1 => student    2 => business   3 => association
            type: DataTypes.STRING,
            defaultValue: 'null'
        },
        address: {
            type: DataTypes.STRING,
            defaultValue: 'null'
        },
        nationality: {
            type: DataTypes.STRING,
            defaultValue: 'null'
        },
        phone: {
            type: DataTypes.STRING,
            defaultValue: 'null'
        },
        city: {
            type: DataTypes.STRING,
            defaultValue: 'null'

        },
        zip_code: {
            type: DataTypes.STRING,
            defaultValue: 'null'

        },
        country: {
            type: DataTypes.STRING,
            defaultValue: 'null'

        },
        years_of_scolarity: {
            type: DataTypes.STRING,
            defaultValue: 'null'

        },
        level_of_studies: {
            type: DataTypes.STRING,
            defaultValue: 'null'

        },
        my_school_or_association_list: {
            type: DataTypes.STRING,
            defaultValue: 'null'
        },
        my_school_or_association_text: {
            type: DataTypes.STRING,
            defaultValue: 'null'
        },
        school_certificate_pic: {
            type: DataTypes.STRING,
            defaultValue: 'null'
        },
        civil_insurance_pic: {
            type: DataTypes.STRING,
            defaultValue: 'null'
        },
        secu_code: {
            type: DataTypes.STRING,
            defaultValue: 'null'
        },
        secu_pic: {
            type: DataTypes.STRING,
            defaultValue: 'null'
        },
        bank_name: {
            type: DataTypes.STRING,
            defaultValue: 'null'
        },
        bank_iban: {
            type: DataTypes.STRING,
            defaultValue: 'null'
        },
        bank_bic: {
            type: DataTypes.STRING,
            defaultValue: 'null'
        },
        rib_pic: {
            type: DataTypes.STRING,
            defaultValue: 'null'
        },
        y_field: {
            type: DataTypes.STRING,
            defaultValue: 'null'
        },
        business_logo: {
            type: DataTypes.STRING,
            defaultValue: 'null'
        },
        siret_no: {
            type: DataTypes.STRING,
            defaultValue: 'null'
        },
        ref_fname: {
            type: DataTypes.STRING,
            defaultValue: 'null'
        },
        ref_lname: {
            type: DataTypes.STRING,
            defaultValue: 'null'
        },
        ref_email: {
            type: DataTypes.STRING,
            defaultValue: 'null'
        },
        school: {
            type: DataTypes.STRING,
            defaultValue: 'null'
        },
        contact_info: {
            type: DataTypes.STRING,
            defaultValue: 'null'
        },
        cont_fname: {
            type: DataTypes.STRING,
            defaultValue: 'null'
        },
        cont_lname: {
            type: DataTypes.STRING,
            defaultValue: 'null'
        },
        message: {
            type: DataTypes.STRING,
            defaultValue: 'null'
        },
        payment_id: {
            type: DataTypes.STRING,
            defaultValue: 'null'
        },
    },
// Other Settings
    {
        //  Change Table Name
        //  tableName: 'userData',
        // Disable TimeStamps
        // timestamps: false,

        // Disable Single Timestamps
        // updatedAt: false,
        // createdAt: false,

        // Change Name of Entity
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',

        // Change Engine
        // engine: 'MYISAM'
    });

module.exports = User;