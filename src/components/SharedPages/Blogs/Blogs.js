import React from 'react';

const Blogs = () => {
    return (
        <div className='container my-5'>
            <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Difference between Authorization vs Authentication ?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>The basic difference between Authentication and authorization is that authentication is the process of verifying a user whereas Authorization is the process of verifying specific applications, files, and data of a user has access to.Before the authorization process authentication is done.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Why are you using Firebase?What other methods do you have to implement Authentication?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       <p>have to implement Authentication?
I am using firebase for web authentication purpose like google ,email-pass,facebook etc social media login.
The list of some common authentication methods used to secure modern systems are-
Password-based authentication. Passwords are the most common methods of authentication.
Password-based authentication. Passwords are the most common methods of authentication.
Certificate-based authentication.
Biometric authentication.
Token-based authentication.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      What other services does firebase provide other than Authentication?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>The other services that Firebase provides other than Authentication, Most useful of them are-
Cloud Firestore.
Cloud Functions.
Hosting
Cloud Storage.
Google Analytics.
Predictions.
Cloud Messaging.</p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blogs;