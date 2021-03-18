import React, { Component } from "react";
import axios from "axios";
import { saveAs } from "file-saver";

const fileToDataUri = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target.result);
    };
    reader.readAsDataURL(file);
  });

class AplRegistrationForm extends Component {
  state = {
    name: "",
    photo: "",
    auid: "",
    college: "",
    year: "",
    department: "",
    category: "",
    gender: "",
    type: "Student",
    email: "",
    dob: "",
  };

  handleChange = ({ target: { value, name } }) =>
    this.setState({ [name]: value });

  checkreg = async () => {
    try {
      let c = await axios.put("/pdf/check-reg", this.state);

      console.log(c.data.data);

      this.createAndDownloadPdf(c.data.data);
      // this.setState(data);
    } catch (error) {}
  };

  createAndDownloadPdf = (formData) => {
    console.log(formData.name);
    axios
      .put("/pdf/create-pdf", formData)
      .then(() => axios.get(`/pdf/fetch-pdf/`, { responseType: "blob" }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });

        saveAs(pdfBlob, ` Registration Form.pdf`);
      });

    // console.log(this.state)
  };

  setGender(event) {
    this.setState({ gender: event.target.value });
  }
  setType(event) {
    this.setState({ type: event.target.value });
  }

  render() {
    const readImage = (file) => {
      if (!file) {
        this.setState({ photo: "" });
        return;
      }

      fileToDataUri(file).then((dataUri) => {
        this.setState({ photo: dataUri || null });
      });
    };

    return (
      <>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.checkreg(this.state);
          }}


          className=" needs-validation" novalidate
        >
          <div class="row register-form">
            <div class="col-md-6">
              <div class="form-group has-success">
                <input
                class="form-control" 
                  type="email"
                  pattern="^[A-Za-z0-9]+(.|_)+[A-Za-z0-9]+@+acharya.ac.in$"
                  required
                  placeholder="Email"
                  name="email"
                  onChange={this.handleChange}
                />
                <div style={{fontSize:'10px' , }} >
       Email-ID provided by Acharya
    </div>
              </div>
              <div class="form-group has-success">
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="Name"
                  name="name"
                  onChange={this.handleChange}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  className="form-control"
                  required={this.state.type === "Faculty" ? false : true}
                  placeholder="AUID"
                  name="auid"
                  onChange={this.handleChange}
                  disabled={this.state.type === "Faculty" ? true : false}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="College"
                  name="college"
                  onChange={this.handleChange}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="Department"
                  name="department"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Year"
                  name="year"
                  onChange={this.handleChange}
                />
              </div>
              <div class="form-group">
                <input
                  type="date"
                  className="form-control"
                  placeholder="Date of Birth"
                  name="dob"
                  onChange={this.handleChange}
                />
              </div>
              <div class="form-group">
              {/* <label htmlFor="category">Choose a category: &nbsp;</label> */}
              <select
                id="category"
                className="form-control"
                name="category"
                defaultValue='NULL'
                onChange={(e) => this.setState({ category: e.target.value })}
              >
                  <option value="NULL" disabled>Select Category</option>
                <option value="Batsman">Batsman</option>
                <option value="Bowler">Bowler</option>
                <option value="All Rounder">All Rounder</option>
              </select></div>
      

              <div onChange={this.setGender.bind(this)} value={this.state.type}>
                <input type="radio" value="M" name="gender" /> Male &nbsp;
                <input type="radio" value="F" name="gender" /> Female &nbsp;
              </div>
              <div
                id="register-type"
                name="register-type"
                onChange={this.setType.bind(this)}
              >
                <input type="radio" value="Faculty" name="type" checked={this.state.type === 'Faculty' ? true : false} /> Faculty
                &nbsp; &nbsp;
                <input type="radio" value="Student" name="type"  checked={this.state.type === 'Student' ? true : false}/> Student
                &nbsp;
              </div>

              <input
                type="file"
                id="photo"
                name="photo"
                accept="image/png, image/jpeg"
                style={{ display: "none" }}
                onChange={(e) => readImage(e.target.files[0] || null)}
              />
              <br></br>
              <button
                type="button"
                onClick={(e) => {
                  document.getElementById("photo").click();
                }}
                style={{
                  background: "#0DABF1",
                  color: "white",
                  borderRadius: "20px",
                  fontWeight: 500,
                  padding: "3px 22px",
                  border: "none",
                }}
              >
                Upload Photo
              </button>

              <br />
            </div>
            <div style={{ margin: "15px auto 0 auto" }}>
              <button
                type="submit"
                style={{
                  background: "#0DABF1",
                  color: "white",
                  borderRadius: "20px",
                  fontWeight: 500,
                  padding: "3px 22px",
                  border: "none",
                }}
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default AplRegistrationForm;
