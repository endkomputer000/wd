import React, { Fragment } from 'react';
import { GOOGLE_MAPS_LINK } from '@/constants';
import { styWrapper } from './styles';

function LocationSection() {
  return (
    <Fragment>
      <div id="fh5co-couple-story" className="fh5co-section-gray" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <h2 className="main-font">Lokasi Acaraa</h2>
              <p className="sub-title">
                <a
                  href={GOOGLE_MAPS_LINK}
                  title="Click untuk melihat peta di Google Maps"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#828282' }}
                >
                  <strong>Burza Hotel Yogyakarta</strong>
                </a>{' '}
                <br />
                Jl. Jogokaryan No.61-63, Mantrijeron, Kec. Mantrijeron, Kota Yogyakarta, <br />
                Daerah Istimewa Yogyakarta 55143
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.6788002842386!2d110.36444191533216!3d-7.823780879874278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57bb035eaa4d%3A0x3ab5982f33aae7af!2sBurza%20Hotel%20Yogyakarta!5e0!3m2!1sen!2sid!4v1623341215927!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default React.memo(LocationSection);
