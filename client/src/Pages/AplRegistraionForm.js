import React, { Component } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import { ToastsContainer, ToastsStore } from "react-toasts";
import { storage } from "../Firebase/index";
import Spinner from "../components/Spinner";
const fileToDataUri = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target.result);
    };
    reader.readAsDataURL(file);
  });

const departments = (value) => {
  if (value == "AIT") {
    return [
      "AE|Aeronutical Engineering",
      "CV|Civil Engineering",
      "AI/ML| Artificial Intelligence & Machine Learning Engg.",
      "AU|Automobile Engineering",
      "BT|BioTechnology Engineering",
      "CSE|Computer Science Engineering",
      "EEE|Electrical & Electronic Engineering",
      "ECE|Electronics & Communication Engineering",
      "ISE|Information Science & Engineering",
      "ME|Mechanical Engineering",
      "MT|Mechatronics Engineering",
      "MBA|Master of Buisness Administration",
      "OTH|Others",
    ];
  } else if (value == "ANRVASA") {
    return ["Arch|Bachelor Of Architecture", "OTH|Others"];
  } else if (value == "ABMRCP") {
    return [
      "DP|D.Pharm",
      "BP|B.Pharm",
      "MP|M.Pharm",
      "PD|Pharm D",
      "OTH|Others",
    ];
  } else if (value == "ASM") {
    return ["PGDM|P.G.D.M", "OTH|Others"];
  } else if (value == "ASE") {
    return [
      "DEE|Diploma in Elementary Education",
      "BE|Bachelor of Education",
      "OTH|Others",
    ];
  } else if (value == "AIGS") {
    return [
      "BAJ|Bachelor of Arts in Journalism",
      "BSC|Bachelor of science",
      "BA|Bachelor of Arts",
      "BSW|Bachelor of Social work",
      "BBAI|Bachelor of Business Administration International Immersion",
      "BC|Bachelor of Commerce",
      "BCA|Bachelor of Computer Application",
      "BBA|Bachelor of Business Application",
      "BSCF|Bsc in Fashion and Apparel Design",
      "ME|Master of Arts in Economics",
      "MAE|Master of Arts in English",
      "MSE|Master of Science in Electronic Media",
      "MAJ|Master of Arts in Journalism and Mass Communication",
      "MSW|Master of Social Work",
      "MIB|Master of International Business",
      "MFA|Master in Finance and Accounting",
      "MC|Master of Commerce",
      "MSP|Master of Science in Physics",
      "MSC|Master of Science in Chemistry",
      "MSM|Master of Science in Mathematics",
      "MSPy|Master of Science in Psychology",
      "MsF|Master of Science in Fashion and Apparel Design",
      "OTH|Others",
    ];
  } else if (value == "AP") {
    return [
      "AE|Aeronautical Engineering",
      "ADFT|Apparel Design & Fabrication Technology",
      "ArchE|Architecture Engineering",
      "AuE|Automobile Engineering",
      "CE|Civil Engineering",
      "CP|Commercial Practise",
      "CSE|Computer Science and Engineering",
      "EEE|Electrical & Electronics Engineering",
      "ECE|Electrical & Communication Engineering",
      "ME|Mechanical Engineering",
      "MtE|Mechatronics Engineering",
      "MiE|Mining Engineering",
      "OTH|Others",
    ];
  } else if (value == "SNSN") {
    return [
      "GNM|General Nursing and MidWife",
      "BBN|Basic BSc Nursingy",
      "PBBN|Post Basic BSc Nursing",
      "MN|Msc Nursing",
      "OTH|Others",
    ];
  } else if (value == "SNCN") {
    return [
      "BBN|Basic BSc Nursingy",
      "PBBN|Post Basic BSc Nursing",
      "MN|Msc Nursing",
      "OTH|Others",
    ];
  } else if (value == "APC") {
    return [
      "PCMB|Science-Physics Chemistry Mathematics and Biology",
      "PCMC|Science-Physics Chemistry Mathematics and Computer Science",
      "PCME|Science-Physics Chemistry Mathematics and Electronics",
      "COM|Commerce-Computer Science Economics Business Studies and Accountancy",
      "OTH|Others",
    ];
  } else if (value == "ASL") {
    return ["BA LLB|BA LLB", "LLB|LLB", "BBA LLB|BBA LLB", "OTH|Others"];
  } else if (value == "ASD") {
    return [
      "PA|Painting",
      "GD|Graphics Design",
      "AMD|Animation and Multimedia Design",
      "ISD|Interior and Spatial Design",
      "PD|Product Designy",
      "OTH|Others",
    ];
  } else if (value == "AIAS") {
    return [
      "BAT|B.Sc in Anesthesia Technology",
      "BOTT|B.Sc Operation Theater Technology",
      "BRCT|B.Sc in Renal Dialysis Technology",
      "BRT|BSc in Radio Therapy",
      "BO|BSc in Optometry",
      "OTH|Others",
    ];
  } else if (value == "AIP") {
    return ["BOP|Bachelor of Physiotheraphy", "OTH|Others"];
  } else if (value == "BS") {
    return ["MAT|Maths", "PHY|Physics", "CHE|Chemistry", "OTH|Others"];
  }
  else if (value == "AIEFL") {
    return ["OTH|English Spanish German"];
  }
  else if (value == "FOTH") {
    return ["HOS|Housekeeping", "MAN|Maintenance", "SYS|System Department", "ADM|Administrative", "CPRD|CPRD"]
  } else if (value == "") {
    return ["|"];
  }
};

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
    depts: <></>,
  };

  photoChange = (e) => {
    if (e.target.files[0]) {
      try {
        this.handleUpload(e.target.files[0]);
      } catch (error) {
        ToastsStore.error("File Upload Error");
      }
    }
  };

  handleUpload = (image) => {
    this.props.setLoading(true);
    const uploadTask = storage
      .ref(`APL-2022/${this.state.email + "-" + image.name}`)
      .put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("APL-2022")
          .child(this.state.email + "-" + image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            this.setState({ photo: url });

            ToastsStore.success("File uploaded Successfully");
            this.props.setLoading(false);
          });
      }
    );
  };

  handleChange = ({ target: { value, name } }) =>
    this.setState({ [name]: value });

  checkreg = async () => {
    this.props.setLoading(true);

    try {
      let c = await axios.put("/pdf/check-reg", this.state);

      console.log(c.data.data);
      ToastsStore.info(c.data.message);
      console.log(c.data.message);

      if (c.data.message.split(" ")[0] != "Already") {
        this.createAndDownloadPdf(c.data.data);
      }

      // this.setState(data);
    } catch (error) {
    } finally {
      this.props.setLoading(false);
    }
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

  dset = (value) => {
    let department = departments(value);

    if (value === "AIT" && this.state.type === "Faculty") {
      department.pop();
      department.push("BS|Basic Science");
      department.push("OTH|Other")
    }

    let o = department?.map((ea) => {
      return <option value={ea.split("|")[0]}>{ea.split("|")[1]}</option>;
    });

    this.setState({ depts: o });
  };

  checkPhoto = () => {
    if (this.state.photo === "") {
      ToastsStore.error("Upload a Photo");
      return;
    }
    return;
  };

  setGender(event) {
    this.setState({ gender: event.target.value });
  }
  setType(event) {
    this.setState({ type: event.target.value });
  }

  render() {
    const readImage = (e) => {
      let file = e.target.files[0];
      if (!file) {
        this.setState({ photo: "" });
        return;
      }

      if (file.size > 500000) {
        ToastsStore.error("Please upload a file smaller than 500KB");
        return;
      }
      try {
        this.photoChange(e);
      } catch (error) {
        ToastsStore.error("File Upload Error");
      }
    };

    return (
      <>

        <form
          onSubmit={(e) => {
            e.preventDefault();

            this.checkreg(this.state);
          }}

        // className=" needs-validation" noValidate
        >
          <div class="row register-form">
            <div class="col-md-6">
              <div class="form-group has-success">
                <div
                  required
                  id="register-type"
                  name="register-type"
                  onChange={this.setType.bind(this)}
                  style={{ marginBottom: "8px" }}
                >
                  <input
                    type="radio"
                    value="Faculty"
                    name="type"
                    checked={this.state.type === "Faculty" ? true : false}
                  />{" "}
                  Faculty &nbsp; &nbsp;
                  <input
                    type="radio"
                    value="Student"
                    name="type"
                    checked={this.state.type === "Student" ? true : false}
                  />{" "}
                  Student &nbsp;
                  {/* <input
                  type="radio"
                  value="Others"
                  name="type"
                  checked={this.state.type === "Others" ? true : false}
                />{" "}
                Others &nbsp; */}
                </div>
                <input
                  class="form-control"
                  type="email"
                  pattern="^[A-Za-z0-9]+(.|_)+[A-Za-z0-9]+@+acharya.ac.in$"
                  required
                  placeholder="Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <div style={{ fontSize: "10px" }}>
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
                  value={this.state.name}
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
                  value={this.state.auid}
                  onChange={this.handleChange}
                  style={{ display: this.state.type === "Faculty" ? "none" : "block" }}
                  disabled={this.state.type === "Faculty" ? true : false}
                />
              </div>
              <div class="form-group">
                <select
                  class="form-control"
                  required
                  name="college"
                  placeholder="College"
                  onChange={(e) => {
                    this.handleChange(e);
                    this.dset(e.target.value);
                  }}
                  value={this.state.college}
                >
                  <option selected value="">
                    Choose Your Institute
                  </option>
                  <option value="AIT">Acharya Institute of Technology</option>
                  <option value="ANRVASA">
                    Acharya's NRV School of Architecture
                  </option>
                  <option value="ABMRCP">
                    Acharya & B.M. Reddy College of Pharmacy
                  </option>
                  {/* <option value="ASM">Acharya School of Management</option> */}
                  {/* <option value="AP">Acharya Polytechnic</option> */}
                  <option value="AIGS">
                    Acharya Institute of Graduate Studies
                  </option>
                  <option value="SNSN">
                    Smt. Nagarathnamma School of Nursing
                  </option>
                  <option value="SNCN">
                    {" "}
                    Smt. Nagarathnamma College of Nursing
                  </option>
                  {/* <option value="ASE">Acharya College of Education</option> */}
                  {/* <option value="APC"> Acharya Pre-University College</option> */}
                  <option value="AIEFL">
                    Acharya Institute of English and Foriegn Languages
                  </option>
                  <option value="ASD">Acharya School of Design</option>
                  <option value="AIAS">
                    Acharya Institute of Allied Health Science
                  </option>
                  <option value="AIP">
                    Acharya's NR Institute of Physiotheraphy
                  </option>

                  {this.state.type === "Faculty" ?
                    <option value="FOTH">Others</option> : <option value="OTH">Others</option>}

                  <br />
                </select>
              </div>
              <div class="form-group">
                <select
                  placeholder="department"
                  class="form-control"
                  required
                  name="department"
                  onChange={this.handleChange}
                >
                  <option selected value="">
                    Choose Your Department
                  </option>

                  {this.state.depts}
                </select>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <select
                  placeholder=""
                  class="form-control"
                  required
                  name="year"
                  onChange={this.handleChange}
                  value={this.state.year}
                  style={{ display: this.state.type === "Faculty" ? "none" : "block" }}
                  disabled={this.state.type === "Faculty" ? true : false}
                >
                  <option selected value="">
                    Year of Study
                  </option>
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                  <option value="5">5th Year</option>
                  <option value="6">6th Year</option>
                </select>
              </div>
              {/* <div class="form-group">
                <input
                  onFocus={(e) => {
                    e.currentTarget.type = "date";
                    e.currentTarget.focus();
                  }}
                  onBlur={(e) => {
                    e.currentTarget.type = "text";
                    e.currentTarget.blur();
                  }}
                  type="text"
                  className="form-control"
                  placeholder="Date of Birth"
                  name="dob"
                  value={this.state.dob}
                  onChange={this.handleChange}
                />
              </div> */}
              <div class="form-group">
                {/* <label htmlFor="category">Choose a category: &nbsp;</label> */}
                <select
                  id="category"
                  className="form-control"
                  name="category"
                  defaultValue="NULL"
                  onChange={(e) => this.setState({ category: e.target.value })}
                  required
                >
                  <option value="NULL" disabled>
                    Select Category
                  </option>
                  <option value="Batsman">Batsman</option>
                  <option value="Bowler">Bowler</option>
                  <option value="All Rounder">All Rounder</option>
                </select>
              </div>

              {/* <div
                required
                onChange={this.setGender.bind(this)}
                value={this.state.type}
              >
                <input type="radio" value="M" name="gender" /> Male &nbsp;
                <input type="radio" value="F" name="gender" /> Female &nbsp;
              </div> */}

              <input
                type="file"
                required
                id="photo"
                name="photo"
                accept="image/png, image/jpeg"
                style={{ display: "none" }}
                onChange={(e) => readImage(e || null)}
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
              <div style={{ fontSize: "10px" }}>
                Image Size Should be less than 500KB
              </div>

              <br />
            </div>
            <div style={{ margin: "15px auto 0 auto" }}>
              {this.props.loading ? (
                <Spinner />
              ) : this.state.photo == "" ? (
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
                  onClick={() =>
                    ToastsStore.error("Complete the form to continue")
                  }
                >
                  Register
                </button>
              ) : (
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
                  onClick={(e) => this.checkPhoto()}
                >
                  Register
                </button>
              )}
            </div>
          </div>
        </form>
        <ToastsContainer store={ToastsStore} position="top_center" />
      </>
    );
  }
}

export default AplRegistrationForm;
