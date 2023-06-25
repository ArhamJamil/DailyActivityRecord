import otpGenerator from "otp-generator";
import nodemailer from "nodemailer";
import User from "../../model/userSchema";
import dbConnection from "../../db/dbConn";
const jwt = require("jsonwebtoken");

const handler = async (req, res) => {
    if (req.method === "POST") {
        try {
            // Generate OTP
            const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false });
            let token = jwt.sign({ userOTP: otp }, "JWT_SECRET_KEY_OTP_FETCHER");
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                console.log(user);
                const transporter = nodemailer.createTransport({
                    service: "Gmail",
                    auth: {
                        user: "MUHAMMADARHAMJAMILSABIH@gmail.com", // Replace with your email address
                        pass: "kejxznwmkhdadqlx", // Replace with your email password
                    },
                });
        

                const mailOptions = {
                    from: "MUHAMMADARHAMJAMILSABIH@gmail.com", // Replace with your email address
                    to: user.email,
                    subject: "Password Reset OTP - Daily Activity Records",
                    text: `Your OTP for password reset is: ${otp}`,
                };
                transporter.sendMail(mailOptions, (err, info)=>{
                    if (err) {
                        console.log(err)
                        res.status(400).json({error: err})
                    }else{
                        // localStorage.setItem(token)
                        console.log("success"+ info.response)
                        res.status(200).json({details: info.response, otp: otp, SMTPToken: token, userID: user._id})
                    }
                })

                
            }else {
                res.status(400).json({ error: "Internal Server Error" });
            }
        } catch (error) {
            res.status(400).json({ error: error });
        }
    } else {
        res.status(400).json({ error: "THIS METHOD IS NOT ALLOWED" });
    }
};
export default dbConnection(handler);
