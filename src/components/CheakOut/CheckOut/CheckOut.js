import React from 'react';
import './CheckOut.css'

const CheckOut = () => {
    return (
        <section class="contact-section mt-5" id="contact">
          <div class="text-center mb-5">
            <h2 class="section-heading">Contact us</h2>
          </div>

          <div class="contact container">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-1 text-center">

                <h3><i class="icon fas fa-map-marker-alt"></i> My Office Adress</h3>
                <p>1- 25, Bidhan Sarani Road, Sealdah, Kolkata, West Bengal 700006</p>
                <p>2- Ground floor, 22nd Cross, #532, 23rd Main Rd, opp. Airtel Office, 2nd Sector, Parangi Palaya, Sector 2, HSR Layout, Bengaluru, Karnataka 560102</p>
                <p>3- 1B, 704, Phase 3, West, Mohan Tulsi Vihar, Hendre Pada, Badlapur, Maharashtra 421503</p> <br/>
                

                <h3><i class="icon far fa-envelope"></i> General Enquiries</h3>
                <p>Phonix.1@gmail.com</p>

                <h3><i class="icon fas fa-phone-alt"></i> Call Me</h3>
                <p>+91-7872358979</p>

                <h3><i class="icon far fa-clock"></i> My Timing</h3>
                <p>Mon-Sun : 10:00 AM - 07:00 PM</p>
              </div>

              <div class="col-lg-6 col-md-6 col-sm-1">
                <form class="">
                  <div class="form-row">
                    <div class="form-group">
                      <input type="name" class="form-control" id="inputEmail4" placeholder="YOUR NAME"/>
                    </div>
                    <div class="form-group col-md-12">
                      <input type="email" class="form-control" id="inputPassword4" placeholder="YOUR EMAIL"/>
                    </div>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" id="inputAddress" placeholder="Adress 1"/>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Adress 2"/>
                  </div>
                  <div class="form-row">
                    <div class="form-floating my-3">
                      <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{
                          height: '100px'
                      }}></textarea>
                      <label for="floatingTextarea2">Your Message</label>
                    </div>

                    <div class="form-group col-md-2">
                      <select id="inputState" class="form-control">
                        <option selected>State</option>
                        <option>Chennai</option>
                        <option>Bangalore</option>
                        <option>Mumbai</option>
                        <option>Pune</option>
                        <option>Others...</option>
                        
                      </select>
                    </div>
                    
                  </div>
                  <button type="submit" class="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </section>
    );
};

export default CheckOut;