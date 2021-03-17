import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

const fileToDataUri = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target.result)
    };
    reader.readAsDataURL(file);
    })

class AplRegistrationForm extends Component {
  state = {
    name: '',photo:'',auid:'',college: '' , year:'' , department:'',
    category:"", gender:"",type:'',email:'',dob:''
  }

  handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })

 
  checkreg = async () => {
  try {
  let c =  await axios.put('/pdf/check-reg', this.state)

 
  console.log(c.data.data)
 
    this.createAndDownloadPdf(c.data.data)
    // this.setState(data);

  } catch (error) {
    



  }
 
  
  }

  createAndDownloadPdf = (formData) => {
    console.log(formData.name)
    axios.put('/pdf/create-pdf', formData)
      .then(() => axios.get(`/pdf/fetch-pdf/`, { responseType: 'blob'}  ))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        saveAs(pdfBlob, ` Registration Form.pdf`);
      })


    // console.log(this.state)
  }

  setGender(event) {
    this.setState({ gender:event.target.value })
  }
  setType(event) {
    this.setState({type:event.target.value })
  }


  render() {


      
        const readImage = (file) => {
          
          if(!file) {
            this.setState({ photo:'' })
            return;
          }
      
          fileToDataUri(file)
            .then(dataUri => {
              this.setState({ photo:dataUri || null })
            })
          
        }
      
    return (
      <div className="App">
        
        <div class="form-group"><input type="email"  required placeholder="Email" name="email" onChange={this.handleChange}/>
        </div><div class="form-group"><input type="text" className="form-control" placeholder="Name" name="name" onChange={this.handleChange}/>
        </div><div class="form-group"><input type="text" className="form-control" placeholder="AUID" name="auid" onChange={this.handleChange}/>
        </div><div class="form-group"><input type="text" className="form-control" placeholder="College" name="college" onChange={this.handleChange}/>
        </div><div class="form-group"><input type="text" className="form-control" placeholder="Department" name="department" onChange={this.handleChange}/>
        </div><div class="form-group"><input type="text" className="form-control" placeholder="Year" name="year" onChange={this.handleChange}/>
        </div><div class="form-group"><input type="date"  className="form-control" placeholder="Date of Birth" name="dob" onChange={this.handleChange}/>
        </div>   
        <div onChange={this.setGender.bind(this)}>
        <input type="radio" value="M" name="gender"/> Male
        <input type="radio" value="F" name="gender"/> Female
        </div>
        <div onChange={this.setType.bind(this)}>
        <input type="radio" value="Faculty" name="type"/> Faculty
        <input type="radio" value="Student" name="type"/> Student
        </div>  <label htmlFor="category">Choose a category:</label>

<select id="category" name='category'  onChange={e=>this.setState({ category:e.target.value })} >
  <option value="Batsman">Batsman</option>
  <option value="Bowler">Bowler</option>
  <option value="All Rounder">All Rounder</option>

</select>
        <br/><input type="file"
       id="photo" name="photo"
       accept="image/png, image/jpeg"  onChange={e=>readImage(e.target.files[0] || null )}/>
        {/* <br/><button onClick={this.createAndDownloadPdf}>Download PDF</button> */}
        <br/><button onClick={e => this.checkreg(this.state)}>Download PDF</button>

      </div>
    );
  }
}

export default AplRegistrationForm