const router = require('express').Router();

const stripe = require("stripe")("sk_test_51LGG89AdKjeuDnfepdX5AEFJrDfyQ1jhHRav9Nr6ygOrhDKU8umE0LJPKdsZkw9kxdAJdYmNaIG8Xwg77hq7z2qJ00zXr1Q2Fm");
const uuid = require("uuid");

// Import Helper
const Helpers=require('../helpers/helper_functions')


router.post("/register-student-checkout", async (req, res) => {
    console.log("Request:", req.body);

    let error;
    let status;
    try {
        const {token} = req.body;

        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        });

        // const idempotency_key = uuid();
        const charge = await stripe.charges.create(
            {
                amount: 10 * 100,
                currency: "eur",
                customer: customer.id,
                receipt_email: token.email,
            }
        );
        console.log("Charge:", { charge });
        status = "success";
    } catch (error) {
        console.error("Error:", error);
        status = "failure";
    }

    res.json({ error, status });
});


module.exports = router;