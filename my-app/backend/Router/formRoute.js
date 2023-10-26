const express = require("express")
const router = express.Router();
const Form = require("../Model/formModel.js")
const bcrypt = require('bcrypt');


router.post("/addForm", async (req, res) => {
    console.log("backend req.body")
    console.log(req.body)

    const { name, email, password, profileImage } = req.body;
    console.log(name)
    console.log(email)
    console.log(password)
    console.log(profileImage)

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        student = await Form.create({
            name: name,
            email: email,
            password: hashedPassword,
        });
        return res.status(200).json({ message: "Successfully data Added" })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: "Internal server error" });
    }
})

router.get("/fetch_data", async (req, res) => {
    try {
        const data = await Form.find().exec();
        console.log("backend fetch")
        console.log(data)
        res.json(data)
    } catch (error) {
        res.status(500).json({ message: "error fetching data" });
    }
})


module.exports = router;