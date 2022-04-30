module.exports = ({ player_id, name, year, category, department, college, auid, photo, email, gender, dob, type }) => {
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
         margin-top: 40px;
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
         font-size: 30px;
         line-height: 24px;
         color: #333;
         }
         .invoice-box table tr.information table td {
         padding-bottom: 10px;
         }
         .invoice-box table tr.heading td {
         background: #eee;
         border-bottom: 1px solid #ddd;
         font-weight: bold;
         }
         .invoice-box table tr.details td {
         padding-bottom: 10px;
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
                           style="width:100%; max-width:55px ;max-height:90px;"></td>
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
         <td><b>${type === "Faculty" ? "EMPID" : "AUID"}:</b> <span style='font-weight:500'> ${auid}</span></td>
        <td><b>Year:</b>  <span style='font-weight:500'> ${type === "Faculty" ? "2022" : year} </span></td>
     </tr>
     <tr class="item">
         <td><b>Department:</b>  <span style='font-weight:500'> ${department} </span></td>
      
        <td><b>Category: </b> <span style='font-weight:500'> ${category} </span></td>
     </tr>
     <tr class="item">
        
        <td><b>FACULTY/STUDENT: </b> <span style='font-weight:500'> ${type} </span></td>
     </tr>
         </table>
        
      </div>
      
 
   </body>
</html>
    `;
};
