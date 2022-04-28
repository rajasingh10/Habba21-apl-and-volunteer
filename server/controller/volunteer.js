const pdf = require("html-pdf");
const pdfTemplate = require("../TemplatePdf");
const path = require("path");
var db = require("../connection/db");
const successTemplate = require("../Mail-success");
const MailSuccess = require("../Mail-success");


const nodemailer = require('nodemailer');
const {google} = require('googleapis')
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI;
const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN; 



const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI)
oAuth2Client.setCredentials({
  refresh_token:REFRESH_TOKEN
})

const sendMail =async (user) =>{
try {
  const accessToken = await oAuth2Client.getAccessToken()
  const transport = nodemailer.createTransport({
    service:"gmail",
    auth:{
      type:'OAuth2',
      user:"acharyahabba@acharya.ac.in",
      clientId:CLIENT_ID,
      clientSecret:CLIENT_SECRET,
      refreshToken:REFRESH_TOKEN,
      accessToken:accessToken
    }
  })

  const mailOptions={
    from:"Habba 2022 🐯<acharyahabba@acharya.ac.in>",
    to:user.email,
    subject:'Volunteer Registration for Habba 2022',
    text:"Do not reply",
    html:MailSuccess(user),
  }
  const result = transport.sendMail(mailOptions)
  console.log(`Email sent to ${user.email}`)
  return result
} catch (error) {
  console.log(error);
}

}


module.exports = {
  check_exists: async (req, res, next) => {
    let query = `select * from  reg_volunteer where email = "${req.body.email}" or auid = "${req.body.auid}"`;

    await db.conn.query(
      {
        sql: query,
      },
      async function (error, results, fields) {
        if (error) {
          res.json({ error, message: "Failed" });
        } else if (results?.length > 0) {
          res.json({
            message: "Already Exists Please Contact CPRD for further changes",
            results,
          });
        } else {
          res.json({ message: "New Registration" });
        }
      }
    );
  },

  register: async (req, res, next) => {
    let query = `INSERT INTO reg_volunteer (Name, auid, email,  dob , college ,year , department,Tpreference1,Tpreference2,gender , reason , experience , whatsapp , calling ,status) VALUES ("${req.body.name}","${req.body.auid}","${req.body.email}","${req.body.dob}","${req.body.college}","${req.body.year}","${req.body.department}","${req.body.Tpreference1}","${req.body.Tpreference2}","${req.body.gender}","${req.body.reason}","${req.body.experience}","${req.body.whatsapp}","${req.body.calling}" , "Not Approved");`;

    await db.conn.query(
      {
        sql: query,
      },
      async function (error, results, fields) {
        if (error) {
          res.json({ error, message: "Auid Already in Use " });
        } else if (Array.isArray(results) && !results.length) {
          res.json({ message: "Registration Failed", error }).status(400);
        } else {
          sendMail(req.body);
          res.json({ message: "Resgistration Successful", results });
        }
      }
    );
  },

  fetch: (req, res, next) => {
    res.send("hi");
  },
};
