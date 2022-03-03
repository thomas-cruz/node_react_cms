import React from 'react';
import '../App.css';
const Footer = () => {
  return (
      <footer className="page-footer font-small bg-blue pt-4">
        <div className="container text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase font-weight-bold">Contact Us</h5>
              <p>You can contact us on email@us.com</p>
            </div>
            <div className="col-md-6 mb-md-0 mb-3">
              <h5 className="text-uppercase font-weight-bold">Basic product cms</h5>
              <p>Built with 💕 by <a href="#">Tom</a></p>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">© 2023 Copyright
          <span> Thomas Cruz</span>
        </div>
      </footer>
  );
};
export default Footer;