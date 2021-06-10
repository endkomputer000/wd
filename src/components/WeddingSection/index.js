import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
import ButtonLive from './ButtonLive';
import { styWrapper } from './styles';

function WeddingSection({ isInvitation }) {
  const renderGuestInfo = () => {
    return (
      <Fragment>
        <div className="col-md-8 col-md-offset-4">
          <WeddingInfoBox title="Syukuran Pernikahan" time="13.00 WIB (Live di Instagram)" date="Minggu, 25 Juli 2021" />
        </div>
        <ButtonLive />
      </Fragment>
    );
  };

  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <span className="bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</span>
              <h2 className="main-font main-font__wedding">Misa Pemberkatan Perkawinan dan Syukuran Pernikahan</h2>
              <span className="sub-title sub-title__wedding">Akan diselenggarakan pada:</span>
            </div>
          </div>
          <div className="row">
            {!isInvitation && renderGuestInfo()}
            {isInvitation && (
              <div className="col-md-10 col-md-offset-1">
                <WeddingInfoBox
                  title="Misa Pemberkatan Perkawinan"
                  time="10.00 WIB "
                  date="Minggu, 25 Juli 2021"
                  description="Gereja Pugeran <br/>Jalan Suryaden No.63, Suryodiningratan, Kec. Mantrijeron, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55142"
                />
                <WeddingInfoBox
                  title="Syukuran Pernikahan"
                  time="Sesuai jadwal undangan di e-ticket "
                  date="Minggu, 25 Juli 2021"
                  description="Ballroom <br/>Burza Hotel, Yogyakarta"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

WeddingSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
