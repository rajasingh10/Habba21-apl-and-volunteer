module.exports = ({ player_id,name, year, category,department,college,auid,photo,email,gender,dob , type}) => {
    const today = new Date();
return `<!doctype html>
<html>
   <head>
      <meta charset="utf-8">
      <title>PDF Result Template</title>
      <style>
      #watermark {
        position: absolute;
        top: 50%;
left: 50%;
margin-left:-70px;
margin-top:-50px;
transform-origin: 0 0;
transform: rotate(60deg);
        opacity: 0.2;
        text-align: right;
        color: grey;
      }

         .invoice-box {
             scale: 20%;
         max-width: 800px;
         margin: auto;
         padding: 25px;
         border: 1px solid #eee;
         box-shadow: 0 0 10px rgba(0, 0, 0, .15);
         font-size: 10px;
         line-height: 16px;
         font-family: 'Helvetica Neue', 'Helvetica';
         color: #555;
         }
         .margin-top {
         margin-top: 50px;
         }
         .justify-center {
         text-align: center;
         }
         .invoice-box table {
         width: 100%;
         line-height: inherit;
         text-align: left;
         }
         .invoice-box table td {
         padding: 5px;
         vertical-align: top;
         }
         .invoice-box table tr td:nth-child(2) {
         text-align: right;
         }
         .invoice-box table tr.top table td {
         padding-bottom: 20px;
         }
         .invoice-box table tr.top table td.title {
         font-size: 45px;
         line-height: 24px;
         color: #333;
         }
         .invoice-box table tr.information table td {
         padding-bottom: 20px;
         }
         .invoice-box table tr.heading td {
         background: #eee;
         border-bottom: 1px solid #ddd;
         font-weight: bold;
         }
         .invoice-box table tr.details td {
         padding-bottom: 20px;
         }
         .invoice-box table tr.item td {
         border-bottom: 1px solid #eee;
         }
         .invoice-box table tr.item.last td {
         border-bottom: none;
         }
         .invoice-box table tr.total td:nth-child(2) {
         border-top: 2px solid #eee;
         font-weight: bold;
         }
         @media only screen and (max-width: 600px) {
         .invoice-box table tr.top table td {
         width: 100%;
         display: block;
         text-align: center;
         }
         .invoice-box table tr.information table td {
         width: 100%;
         display: block;
         text-align: center;
         }
         }
      </style>
   </head>
   <body>

      <div class="invoice-box">
       <div style="width: 100%"><img  src="https://pbs.twimg.com/media/B6zaKSRCQAEkr_d?format=png&name=small"
        style="width:100%; max-width:60px;"> <h2 class='justify-center'>Acharya Premier League 7</h1></div>
        <h3 class='justify-center'>Registration Form</h2>
        <table cellpadding="0" cellspacing="0">
            <tr class="top">
               <td colspan="2">
                  <table>
                     <tr>
                        <td class="title"><img  src=${photo}
                           style="width:100%; max-width:156px; max-height:100px"></td>
                        <td>
                        <td>
                        <div id="watermark">
<h1>APL SEASON 7</h1>

</div>
                        </td>
                        <b>  Date:</b> ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}
                        </td>
                     </tr>
                  </table>
               </td>
            </tr>
            <tr class="information">
               <td >
                  <table>
                     <tr>
                        <td>
                           <b>Name:</b> ${name}
                        </td>
                        </tr>
                        <tr>
                        <td>
                           <b>DOB:</b> ${dob}
                        </td>
                        </tr>
                        <tr>
                        <td>
                           <b>APL ID:</b> APL-${player_id}
                        </td>
                        </tr>
                        <tr>
                        <td>
                        <b> College:</b> ${college}
                        </td>
                       
                     </tr>
                  </table>
               </td>
            </tr>
            <tr>
             
            </tr>
            <tr class="item">
            <td>
            <b>Email:</b> ${email}
         </td>
         </tr>


            <tr class="item">
                <td><b>AUID:</b> <span style='font-weight:500'> ${auid}</span></td>
               <td><b>Year:</b>  <span style='font-weight:500'> ${year} </span></td>
            </tr>
            <tr class="item">
                <td><b>Department:</b>  <span style='font-weight:500'> ${department} </span></td>
             
               <td><b>Category: </b> <span style='font-weight:500'> ${category} </span></td>
            </tr>
            <tr class="item">
               <td><b>Gender:</b>  <span style='font-weight:500'> ${gender} </span></td>
               <td><b>FACULTY/STUDENT: </b> <span style='font-weight:500'> ${type} </span></td>
            </tr>
         </table>
         <h5 class="">Proctor's Signature: </h4>
         <h5 class="">HOD's Signature: </h4><br />
         <p >
         1) Every player(student) must get this player application form signed from his department HOD/Proctor/Principal/Dean and will submit the same in CPRD reception before 30th of April 2021.<br/>
2) Those students who have submitted the application form will undergo tryouts by the organising committee in the stadium on 3,4 and 5th of May 2021. Owners of all the teams will be present during this process.<br/>
3)Only players who have participated in tryouts are eligible for the auction and to take part in APL Season-7.<br/>
4)Year Back Students are not allowed to participate </br>
         </p>
    
      </div>
      
 
   </body>
</html>
    `;
};