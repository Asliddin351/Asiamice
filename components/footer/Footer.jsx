import { useTranslation } from "react-i18next";
import Link from "next/link";
import FormModal from "../form-modal/FormModal";
import {useState} from 'react'
import Form from '../form/index'

const Footer = () => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);


  let year = new Date();

  

  return (
    <footer id="footer">
      <div className="footer-wrapper">
        <div className="container">
          <div className="footer__titles">
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
              <div className="col">
                <h3>{t("footer.articles.title")}</h3>
                <ul className="footer-address-menu">
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    <p>
                      {t("footer.articles.address")} <br /> {t("footer.articles.address2")}, 224
                    </p>
                  </li>
                  <li>
                    <i className="fas fa-phone-alt"></i>
                    <a href="tel:+998338375577">+99833 837-55-77</a>
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i>
                    <a
                      href="mailto:asiamiceuz@gmail.com"
                      title="asiamiceuz@gmail.com"
                    >
                      asiamiceuz@gmail.com
                    </a>
                  </li>
                  <li style={{width: "250px"}}>
                    <svg
                      version="1.1"
                      id="Слой_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="58 408 964 264"
                    //   style="enable-background:new 58 408 964 264;"
                      xmlSpace="preserve"
                      width="100%"
                    >
                      <path style={{fill: "none"}}  />
                      <polygon
                        style={{fill:'#F2083A'}}
                        points="322.2,622.4 287.3,622.4 228.5,520.4 228.3,520.6 187.1,592.1 245.4,592.2 262.8,622.4 75.7,622.2 
	169.1,460.5 169.5,460.7 186.7,490.4 128,592.1 152.2,592.1 152.2,592.1 227.9,460.9 228.5,460.6 229,460.9 229,460.9 "
                      />
                      <g>
                        <path fill={'white'}
                          d="M382.9,538.3l-5.1,11h-24.2v-3.2l40.7-86.4H405l40.3,86.4v3.2h-23.9l-5.2-11H382.9z M390.4,518.9h18.4l-9.3-21.4
		L390.4,518.9z"
                        />
                        <path fill={'white'}
                          d="M470.1,522.1c0,6.1,7,9.1,14.1,9.1c6.6,0,13.6-3,13.6-8.4c0-8.5-9.9-8.9-16.3-9.2c-16.2-1-32.4-7.5-32.4-26
		c0-19.3,16.3-29,34.5-29c17.1,0,34.5,9.8,34.1,29h-21.7c-0.1-6.1-5.8-8.6-12-8.6c-5.2,0-12,1.4-12,8.1c0,6,5.1,7.3,13.6,8.2
		c18.9,1.6,35.4,6.1,35.4,27.6c0,18.6-18.1,28.4-36.2,28.4c-18.8,0-36.7-9.4-36.4-29.3H470.1z"
                        />
                        <path fill={'white'} d="M577.1,530.6v18.8h-45.7v-18.8h11.3v-51.2h-10.3v-18.8H576v18.8h-10.3v51.2H577.1z" />
                        <path
                        fill={'white'}
                          d="M610.9,538.3l-5.1,11h-24.2v-3.2l40.7-86.4h10.6l40.3,86.4v3.2h-23.9l-5.2-11H610.9z M618.4,518.9h18.4l-9.3-21.4
		L618.4,518.9z"
                        />
                        <path fill={'white'} d="M759.9,460.4h8.2v88.9h-23.2v-40.9l-18.9,19.8h-2.7l-18.9-19.8v40.9h-23.2v-88.9h8.2l35.2,38.4L759.9,460.4z" />
                        <path fill={'white'} d="M829.5,530.6v18.8h-45.7v-18.8H795v-51.2h-10.3v-18.8h43.7v18.8h-10.3v51.2H829.5z" />
                        <path
                        fill={'white'}
                          d="M885.8,459.8c18.2,0,38.3,9.9,41.7,33.6h-22.3c-3.2-9.1-9.9-12.7-19.4-12.7c-13.4,0-22.2,9.6-22.2,24.3
		c0,12.8,8.6,24.1,22.2,24.1c9.6,0,17.2-4.4,19.6-14.1h22.3c-3.4,25.2-23.1,35.2-41.9,35.2c-22.7,0-45.4-15.2-45.4-45.1
		C840.5,474.6,863.2,459.8,885.8,459.8z"
                        />
                        <path fill={'white'} d="M996.7,480.8h-32.2v12.7h29.6v20.3h-29.6v14.4h33.3v21.2h-56.5v-88.7h55.4V480.8z" />
                      </g>
                      <g>
                        <path fill={'white'} d="M365.6,617.4l-1.9,4h-8.8v-1.2l14.9-31.6h3.9l14.7,31.6v1.2h-8.7l-1.9-4H365.6z M368.3,610.3h6.7l-3.4-7.8L368.3,610.3z" />
                        <path
                        fill={'white'}
                          d="M419.7,589.6l5.7,17.7h0.1l2.3-9.4l3-8.8h8.9v1.2l-11.6,31.5h-4.5L418,607h-0.1l-5.4,14.8h-4.7l-11.6-31.5v-1.2h8.9
		l3.1,8.8l2.5,9.4h0.1l5.5-17.7H419.7z"
                        />
                        <path 
                        fill={'white'}
                          d="M457.6,622c-8.6,0-16.6-5.6-16.6-16.8c0-11.2,8.3-16.8,16.7-16.8c8.3,0,16.5,5.6,16.5,16.8
		C474.3,615.2,467.4,622,457.6,622z M457.6,614c4,0,8.1-3,8.1-8.8s-4-8.8-8.1-8.8c-4.2,0-8.2,2.9-8.2,8.8
		C449.5,611,453.5,614,457.6,614z"
                        />
                        <path
                         fill={'white'}
                          d="M507,620.2v1.2h-9l-5.6-10.1H488v10.1h-8.5V589c4.8,0,9.5,0,14.3,0c7.8,0,11.7,5.8,11.7,11.5c0,3.7-1.6,7.3-4.8,9.4
		L507,620.2z M493.7,604.4c2.4,0,3.5-2,3.5-4.1c0-2-1.1-3.9-3.5-3.9h-5.9v8H493.7z"
                        />
                        <path fill={'white'} d="M520.2,613.9h11.7v7.6h-20.2v-32.4h8.5V613.9z" />
                        <path
                        fill={'white'}
                          d="M548.5,589.1c10.6,0,16,8.1,16,16c0.1,8.1-5.2,16.3-16,16.3h-12.4v-32.3H548.5z M548.5,613.8c5.1,0,7.6-4.3,7.6-8.6
		c0-4.3-2.6-8.5-7.6-8.5h-3.8v17.1H548.5z"
                        />
                        <path
                        fill={'white'}
                          d="M595.7,622c-8.6,0-16.6-5.6-16.6-16.8c0-11.2,8.3-16.8,16.7-16.8c8.3,0,16.5,5.6,16.5,16.8
		C612.4,615.2,605.5,622,595.7,622z M595.8,614c4,0,8.1-3,8.1-8.8s-4-8.8-8.1-8.8c-4.2,0-8.2,2.9-8.2,8.8
		C587.6,611,591.6,614,595.8,614z"
                        /> 
                        <path fill={'white'} d="M636.4,611h-10.4v10.5h-8.5v-32.4h20.2v7.4h-11.8v7.2h10.4V611z" />
                        <path
                        fill={'white'}
                          d="M653.4,621.4V589c4.8,0,9.5,0,14.3,0c7.8,0,11.8,6.1,11.6,12.2c0,5.9-3.9,11.8-11.6,11.8h-5.8v8.4H653.4z M667.7,605.7
		c2.2,0,3.5-2.4,3.5-4.7c0-2.3-1.2-4.6-3.5-4.6h-6v9.3H667.7z"
                        />
                        <path
                         fill={'white'}
                          d="M698.7,622c-8.6,0-16.6-5.6-16.6-16.8c0-11.2,8.3-16.8,16.7-16.8c8.3,0,16.5,5.6,16.5,16.8
		C715.3,615.2,708.5,622,698.7,622z M698.7,614c4,0,8.1-3,8.1-8.8s-4-8.8-8.1-8.8c-4.2,0-8.2,2.9-8.2,8.8
		C690.6,611,694.6,614,698.7,614z"
                        />
                        <path
                         fill={'white'}
                          d="M727,611.5c0,2.2,2.5,3.3,5.1,3.3c2.4,0,5-1.1,5-3.1c0-3.1-3.6-3.2-6-3.4c-5.9-0.4-11.8-2.7-11.8-9.5c0-7,6-10.6,12.6-10.6
		c6.2,0,12.6,3.6,12.4,10.6h-7.9c0-2.2-2.1-3.1-4.4-3.1c-1.9,0-4.4,0.5-4.4,3c0,2.2,1.9,2.7,5,3c6.9,0.6,12.9,2.2,12.9,10.1
		c0,6.8-6.6,10.4-13.2,10.4c-6.8,0-13.4-3.4-13.3-10.7H727z"
                        />
                        <path
                        fill={'white'}
                          d="M757,611.5c0,2.2,2.5,3.3,5.1,3.3c2.4,0,5-1.1,5-3.1c0-3.1-3.6-3.2-6-3.4c-5.9-0.4-11.8-2.7-11.8-9.5c0-7,6-10.6,12.6-10.6
		c6.2,0,12.6,3.6,12.4,10.6h-7.9c0-2.2-2.1-3.1-4.4-3.1c-1.9,0-4.4,0.5-4.4,3c0,2.2,1.9,2.7,5,3c6.9,0.6,12.9,2.2,12.9,10.1
		c0,6.8-6.6,10.4-13.2,10.4c-6.8,0-13.4-3.4-13.3-10.7H757z"
                        />
                        <path fill={'white'} d="M796.1,614.6v6.8h-16.7v-6.8h4.1v-18.7h-3.7v-6.8h16v6.8H792v18.7H796.1z" />
                        <path
                        fill={'white'}
                          d="M823.7,604.5c2.6,1.3,4,4,4,6.9c0,5.6-3.6,9.9-10.3,9.9h-15.6v-32.3h14.3c6,0,10.2,3.9,10.2,10
		C826.4,600.9,825.3,603.2,823.7,604.5z M810.3,596.3v5.4h5.2c1.6,0,2.5-1.2,2.5-2.5c0-1.4-0.8-2.9-2.5-2.9H810.3z M810.3,608.5v5.4
		h6.5c1.6,0,2.4-1.2,2.5-2.5c0-1-0.4-2-1.2-2.5c-0.4-0.2-0.8-0.3-1.4-0.3H810.3z"
                        />
                        <path fill={'white'} d="M848.2,614.6v6.8h-16.7v-6.8h4.1v-18.7h-3.7v-6.8h16v6.8h-3.7v18.7H848.2z" />
                        <path fill={'white'} d="M862.4,613.9h11.7v7.6h-20.2v-32.4h8.5V613.9z" />
                        <path fill={'white'} d="M893.8,614.6v6.8h-16.7v-6.8h4.1v-18.7h-3.7v-6.8h16v6.8h-3.7v18.7H893.8z" />
                        <path fill={'white'} d="M896.9,596.5v-7.4H921v7.4h-7.9v25h-8.2v-25H896.9z" />
                        <path fill={'white'} d="M940.8,614.6v6.8h-16.7v-6.8h4.1v-18.7h-3.7v-6.8h16v6.8h-3.7v18.7H940.8z" />
                        <path fill={'white'} d="M966.7,596.4H955v4.6h10.8v7.4H955v5.3h12.2v7.7h-20.6v-32.4h20.2V596.4z" />
                        <path fill={'white'}
                          d="M979.4,611.5c0,2.2,2.5,3.3,5.1,3.3c2.4,0,5-1.1,5-3.1c0-3.1-3.6-3.2-6-3.4c-5.9-0.4-11.8-2.7-11.8-9.5
		c0-7,6-10.6,12.6-10.6c6.2,0,12.6,3.6,12.4,10.6h-7.9c0-2.2-2.1-3.1-4.4-3.1c-1.9,0-4.4,0.5-4.4,3c0,2.2,1.9,2.7,5,3
		c6.9,0.6,12.9,2.2,12.9,10.1c0,6.8-6.6,10.4-13.2,10.4c-6.8,0-13.4-3.4-13.3-10.7H979.4z"
                        />
                      </g>
                    </svg>
                  </li>
                </ul>
              </div>

              <div className="col">
                <h3>{t("footer.about-us.title")}</h3>
                <ul className="footer-important-list">
                  <li className="important-item">
                    <Link href={"/faq"}>
                      <a className="important-link">{t("links.faq")}</a>
                    </Link>
                  </li>
                  <li className="important-item">
                    <Link href={"/mice"}>
                      <a className="important-link">{t("links.mice")}</a>
                    </Link>
                  </li>
                  <li className="important-item">
                    <Link href={"/tours"}>
                      <a className="important-link">{t("links.tours")}</a>
                    </Link>
                  </li>
                  <li className="important-item">
                    <Link href={"/about"}>
                      <a className="important-link">{t("links.about")}</a>
                    </Link>
                  </li>
                  <li className="important-item">
                    <Link href={"/contact"}>
                      <a className="important-link">{t("links.contacts")}</a>
                    </Link>
                  </li>
                  <li className="important-item">
                    <Link href={"/memo"}>
                      <a className="important-link">{t("links.memo")}</a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col">
                <h3>{t("footer.newsletter.title")}</h3>
                <p>{t("footer.newsletter.text")}</p>
                <FormModal title={t("footer.newsletter.title")} open={open} setOpen={setOpen} >
                  <Form open={open} setOpen={setOpen}/>
                </FormModal>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="footer_widget">
          <div className="container">
            <div className="row  align-items-center gap-4">
              <div className="col">
                <a
                  className="phone"
                  title="+998(33) 837-55-77"
                  href="tel:+998338375577"
                >
                  <span className="toll-free-box">
                    <i className="fas fa-phone-alt"></i>
                    {t("footer.callMe")} : <br />
                    +998(33) 837-55-77
                  </span>
                </a>
              </div>
              <div className="col">
                <div className="follow-us">
                  <h6 className="title">{t("footer.followUs")}</h6>
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/asiamiceuz/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src="/facebook.png" alt="icon" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/asiamiceuz"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src="/instagram.png" alt="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="/linkedin.png"
                          alt="icon"
                          target="_blank"
                          rel="noreferrer"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.t.me/asiamiceuz"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src="/telegram.png" alt="icon" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="payment">
                  <h6 className="title">{t("footer.supported")}</h6>
                  <div className="payment__card">
                    <img src="/visa.png" alt="visa" />
                    <img src="/mastercard.png" alt="master" />
                    <img src="/humo.png" alt="humo" />
                    <img src="/uzcard.png" alt="uzcard" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p> &copy; {year.getFullYear()}. ASIAMICE</p>
        <div className="sertificate">
          <a href="/License.pdf" target="_blank">{t("uslugi")}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
