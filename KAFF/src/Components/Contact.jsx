import  { useState } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, address, message } = userData;

    if (firstName && lastName && phone && email && address && message) {
      const res = fetch(
        "https://fir-react-3119e-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            address,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
        alert("Data Stored");
      } else {
        alert("plz fill the data");
      }
    } else {
      alert("plz fill the data");
    }
  };

  return (
    <>
    
      <section className="contactus-section">
      
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    Connect With Our <br /> Sales Team.
                  </h1>
                  <p className="main-hero-para">
                  Ready to transform your business with KAFF Solutions SaaS and PaaS services? Contact us to discuss your needs, request a demo, or get a quote.
                  </p>
                  <figure>
                    <img
                      src="data:image/png;base64,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"
                      alt="contatUsImg"
                      className="img-fluid"
                    />
                  </figure>
                </div>

                {/* right side contact form  */}
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="firstName"
                          id=""
                          className="form-control"
                          placeholder="First Name"
                          value={userData.firstName}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="lastName"
                          id=""
                          className="form-control"
                          placeholder="Last Name"
                          value={userData.lastName}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="phone"
                          id=""
                          className="form-control"
                          placeholder="Phone Number "
                          value={userData.phone}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="email"
                          id=""
                          className="form-control"
                          placeholder="Email ID"
                          value={userData.email}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name="address"
                          id=""
                          className="form-control"
                          placeholder="Email Address"
                          value={userData.address}
                          onChange={postUserData}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 ">
                        <input
                          type="text"
                          name="message"
                          id=""
                          className="form-control"
                          placeholder="Enter Your Message"
                          value={userData.message}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="form-check form-checkbox-style">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label"
                        
                      >
                        I agree that KAFF Solutions may contact me at the
                        email address or phone number above
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-style w-100"
                      onClick={submitData}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;