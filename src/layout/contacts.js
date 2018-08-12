import React, { Component } from 'react';
import SimpleMap from './map';

export default class Contacts extends Component {
  render () {
    return (
      <main>
        <section id="mu-contact">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mu-contact-area">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mu-title">
                        <h2>Say Hello!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum sociis.</p>
                      </div>
                    </div>
                  </div>
                  <div className="mu-contact-content">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mu-contact-form-area">
                          <div id="form-messages"></div>
                          <form id="ajax-contact" method="post" action="mailer.php" className="mu-contact-form">
                            <div className="form-group">
                              <span className="fa fa-user mu-contact-icon"></span>
                              <input type="text" className="form-control" placeholder="Name" id="name" name="name" required />
                            </div>
                            <div className="form-group">
                              <span className="fa fa-envelope mu-contact-icon"></span>
                              <input type="email" className="form-control" placeholder="Enter Email" id="email" name="email" required />
                            </div>
                            <div className="form-group">
                              <span className="fa fa-folder-open-o mu-contact-icon"></span>
                              <input type="text" className="form-control" placeholder="Your Subject" id="subject" name="subject" required />
                            </div>
                            <div className="form-group">
                              <span className="fa fa-pencil-square-o mu-contact-icon"></span>
                              <textarea className="form-control" placeholder="Message" id="message" name="message" required></textarea>
                            </div>
                            <button type="submit" className="mu-send-msg-btn"><span>Send Message</span></button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12" id="mu-google-map" >
                <SimpleMap/>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
