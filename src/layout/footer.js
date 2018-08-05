import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer id="mu-footer">
        <div className="mu-footer-top">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="mu-single-footer">
                  <img className="mu-footer-logo" src="../images/logo.png" alt="logo" />
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus. </p>
                  <div className="mu-social-media">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a className="mu-twitter" href="#"><i className="fa fa-twitter"></i></a>
                    <a className="mu-pinterest" href="#"><i className="fa fa-pinterest-p"></i></a>
                    <a className="mu-google-plus" href="#"><i className="fa fa-google-plus"></i></a>
                    <a className="mu-youtube" href="#"><i className="fa fa-youtube"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="mu-single-footer">
                  <h3>Twitter feed</h3>
                  <ul className="list-unstyled">
                    <li className="media">
                      <span className="fa fa-twitter"></span>
                      <div className="media-body">
                        <p><strong>@b_hero</strong> Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        <a href="#">2 hours ago</a>
                      </div>
                    </li>
                    <li className="media">
                      <span className="fa fa-twitter"></span>
                      <div className="media-body">
                        <p><strong>@b_hero</strong> Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        <a href="#">2 hours ago</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="mu-single-footer">
                  <h3>Useful link</h3>
                  <ul className="mu-useful-links">
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Download Center</a></li>
                    <li><a href="#">User Account</a></li>
                    <li><a href="#">Support Forum</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="mu-single-footer">
                  <h3>Contact Information</h3>
                  <ul className="list-unstyled">
                    <li className="media">
                      <span className="fa fa-home"></span>
                      <div className="media-body">
                        <p>349 Main St, Deseronto, ON K0K 1X0, Canada</p>
                      </div>
                    </li>
                    <li className="media">
                      <span className="fa fa-phone"></span>
                      <div className="media-body">
                        <p>+00 123 456 789 00</p>
                        <p>+ 00 254 632 548 00</p>
                      </div>
                    </li>
                    <li className="media">
                      <span className="fa fa-envelope"></span>
                      <div className="media-body">
                        <p>support@bhero.com</p>
                        <p>help.behero@gmail.com</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mu-footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mu-footer-bottom-area">
                  <p className="mu-copy-right">&copy; Copyright <a rel="nofollow" href="http://markups.io">markups.io</a>. All right reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
