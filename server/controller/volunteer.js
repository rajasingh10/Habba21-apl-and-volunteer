const pdf = require("html-pdf");
const pdfTemplate = require("../TemplatePdf");
const path = require("path");
var db = require("../connection/db");

const successTemplate = require("../Mail-success");
const MailSuccess = require("../Mail-success");

sendMailRegister = (user) => {
  const mailjet = require("node-mailjet").connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE)
  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "habba@acharya.ac.in",
          Name: "Acharya Habba",
        },
        To: [
          {
            Email: user.email,
            Name: user.name,
          },
        ],
        Subject: "Registration for Habba 2021",
        TextPart: "Do not reply",
        HTMLPart: MailSuccess(user),
        CustomID: "Habba 21",
      },
    ],
  });
  request
    .then((result) => {
      console.log("Email sent to ", user.email);
      //console.log(result.body)
    })
    .catch((err) => {
      console.log(err);
    });
};

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
    let query = `INSERT INTO reg_volunteer (Name, auid, email,  dob , college ,year , department  ,gender , reason , experience , whatsapp , calling ,status) VALUES ("${req.body.name}","${req.body.auid}","${req.body.email}","${req.body.dob}","${req.body.college}","${req.body.year}","${req.body.department}","${req.body.gender}","${req.body.reason}","${req.body.experience}","${req.body.whatsapp}","${req.body.calling}" , "Not Approved");`;

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
          sendMailRegister(req.body);
          res.json({ message: "Resgistration Successful", results });
        }
      }
    );
  },

  fetch: (req, res, next) => {
    res.send("hi");
  },
};
