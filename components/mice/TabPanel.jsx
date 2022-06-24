import React from 'react'

import { useTranslation } from 'react-i18next'

const TabPanel = (props) => {
  const {t} = useTranslation()

  return (
    <div className='mice-tab'>
      <h2 className='text-center mb-3'>{t("mice.title")}</h2>
      <hr/>
      <ul className="nav nav-pills mb-3 tabs-control" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">{t("mice.meeting.title")}</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">{t("mice.incentives.title")}</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">{t("mice.conferencing.title")}</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-exhibitions-tab" data-bs-toggle="pill" data-bs-target="#pills-exhibitions" type="button" role="tab" aria-controls="pills-exhibitions" aria-selected="false">{t("mice.exhibitions.title")}</button>
          </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <div className="container-fluid">
              <div className='row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 align-items-center'>
                <div className="col p-0"><img src="/meeting.jpg" alt="meeting" width={'100%'} height={'100%'}/></div>
                <div className="col">
                  <h3 className='mice-title'>{t("mice.meeting.title")}</h3>
                  <p className='txt'>{t("mice.meeting.text")}</p></div>
              </div>
            </div>

          </div>
          <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
              <div className="container-fluid">
                  <div className='row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 align-items-center'>
                    <div className="col p-0"><img src="/investings.jpg" alt="meeting" width={'100%'} height={'100%'}/></div>
                    <div className="col">
                      <h3 className='mice-title'>{t("mice.incentives.title")}</h3>
                      <p className='txt'>{t("mice.incentives.text")}</p></div>
                  </div>
              </div>          
          </div>
            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
              <div className="container-fluid">
                  <div className='row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 align-items-center'>
                    <div className="col p-0"><img src="/conferencing.jpg" alt="meeting" width={'100%'} height={'100%'}/></div>
                    <div className="col">
                      <h3 className='mice-title'>{t("mice.conferencing.title")}</h3>
                      <p className='txt'>{t("mice.conferencing.text")}</p></div>
                  </div>
              </div>            
            </div>
            <div className="tab-pane fade" id="pills-exhibitions" role="tabpanel" aria-labelledby="pills-exhibitions-tab">
              <div className="container-fluid">
                  <div className='row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 align-items-center'>
                    <div className="col p-0"><img src="https://i.pinimg.com/originals/59/c0/c3/59c0c39cead4c4a18b04ff05cfec6569.jpg" alt="meeting" width={'100%'} height={'100%'}/></div>
                    <div className="col">
                      <h3 className='mice-title'>{t("mice.exhibitions.title")}</h3>
                      <p className='txt'>{t("mice.exhibitions.text")}</p></div>
                  </div>
                </div>            
            </div>
      </div>
    </div>
  ) 
}

export default TabPanel