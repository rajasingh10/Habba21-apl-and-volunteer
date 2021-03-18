const pdf = require("html-pdf");
const pdfTemplate = require("../TemplatePdf");
const path = require("path");
var db = require("../connection/db");
const pdf2base64 = require("pdf-to-base64");
const { response } = require("express");

// send email function

sendMail = (user, string64) => {
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
        Subject: "Registration for APL",
        TextPart: "Successfully registered For APL ",
        Attachments: [
          {
            ContentType: "application/pdf",
            Filename: "Registration.pdf",
            Base64Content: string64,
          },
        ],

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
    let query = `select  player_id, name, auid, email, dob , category , college ,year , department,type  ,gender , photo from apl_players where  email = "${req.body.email.toLowerCase()}"`;

    await db.conn.query(
      {
        sql: query,
      },
      async function (error, results, fields) {
        if (error) {
          res.status(400).json({
            message: "Invalid DATA ",error
          });
          return
        }

        if (!results?.length) {
          let query1 = `INSERT INTO apl_players (Name, auid, email, photo , dob , category , college ,year , department  ,gender,type )
        VALUES ("${req.body.name}","${req.body.auid}","${req.body.email}","${req.body.photo}","${req.body.dob}","${req.body.category}","${req.body.college}","${req.body.year}","${req.body.department}","${req.body.gender}","${req.body.type}");`;

          await db.conn.query(
            {
              sql: query1,
            },
            async function (error, results, fields) {
              if (error) {
                res.status(400).json({
                  message: "Invalid Data",
                  error
                });
                console.log(error)
                return
              }

              if (results) {
                await db.conn.query(
                  {
                    sql: `select player_id,name, auid, email, dob , category , college ,year , department,type  ,gender , photo from apl_players where  email = "${req.body.email.toLowerCase()}"`,
                  },
                  function (error, results, fields) {
                    res.status(200).json({
                      data: results[0],
                      message: "New Entry",
                    });
                  }
                );
                return;
              }
            }
          );
        }
        if (results[0]) {
          res.status(200).json({
            data: results[0],
            message: "Already Registered",
          });

          // console.log(error)
          //  console.log(fields)
        }
      }
    );

    // UPDATE table_name
    // SET column1 = value1, column2 = value2, ...
    // WHERE condition;
  },

  createPdf: async (req, res, next) => {
    pdf.create(pdfTemplate(req.body), {}).toFile(`result.pdf`, (err) => {
      if (err) {
        res.send(Promise.reject());
      }

      res.send(Promise.resolve());
    });

    let base64 = "";
    await pdf2base64(path.join(__dirname, `../../result.pdf`))
      .then((response) => {
        base64 = response;
      })
      .catch((error) => {
        console.log(error); //Exepection error....
      });

    sendMail(req.body, base64);
  },

  fetchPdf: async (req, res, next) => {
    console.log(req.params.id);
    res.sendFile(path.join(__dirname, `../../result.pdf`));
  },
};
