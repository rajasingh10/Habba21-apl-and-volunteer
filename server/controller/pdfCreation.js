const pdf = require("html-pdf");
const pdfTemplate = require("../TemplatePdf");
const path = require("path");
var db = require("../connection/db");
const pdf2base64 = require("pdf-to-base64");
const { response } = require("express");

// send email function






const nodemailer = require('nodemailer');
const { google } = require('googleapis')
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI;
const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN;



const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN
})

const sendMail = async (user, string64) => {
  try {
    const accessToken = await oAuth2Client.getAccessToken()
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: 'OAuth2',
        user: "acharyahabba@acharya.ac.in",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken
      }
    })

    const mailOptions = {
      from: "Habba 2022 🐯<acharyahabba@acharya.ac.in>",
      to: user.email,
      subject: 'Registration Successful For APL-2022',
      text: `Hi,${user.name}, you have successfully registered for APL-2022. Please find the Application Form attached to this email`,
      attachments: [
        {
          filename: `${user.name} - APL Registration.pdf`,
          content: string64,
          encoding: 'base64',
          contentType: "application/pdf",
        },

      ]


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
    let query = `select  player_id, name, auid, email, dob , category , college ,year , department,type  ,gender , photo from apl_players where  email = "${req.body.email.toLowerCase()}"`;

    await db.conn.query(
      {
        sql: query,
      },
      async function (error, results, fields) {
        if (error) {
          res.status(400).json({
            message: "Invalid DATA ", error
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
                      message: "Please wait for the files to download",
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
            message: "Already Registered contact CPRD for further changes.",
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
    pdf.create(pdfTemplate(req.body), {}).toFile(`result.pdf`, async (err) => {
      if (err) {
        res.send(Promise.reject());
      }
      else {

        await res.send(Promise.resolve());

        let base64 = "";
        await pdf2base64(path.join(__dirname, `../../result.pdf`))
          .then((response) => {
            base64 = response;
          })
          .catch((error) => {
            console.log(error); //Exepection error....
          });

        sendMail(req.body, base64);



      }
    });

  },

  fetchPdf: async (req, res, next) => {
    console.log(req.body)
    console.log(req.params.id);
    res.sendFile(path.join(__dirname, `../../result.pdf`));
  },
};
