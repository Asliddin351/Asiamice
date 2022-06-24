import { useState } from "react";
import styles from "./topBlock.module.css";
import LoginModal from "../../login-modal/LoginModal";
import RegistrationModal from "../../registration-modal/RegistrationModal";
import Avatar from "@material-ui/core/Avatar";

import { useRouter } from "next/router";


const TopBlock = () => {

  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();




  const changeLanguages = (ln) => {
    console.log(router.locale);
    return () => {
      router.replace(router.asPath, router.asPath, { locale: ln });
    };
   
  };

  return (
    <div className={styles.top_block}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.top_block__left}>
            <div className={styles.tel}>
              <span className={styles.phone_icon}>
                <i className='fas fa-phone-alt'></i>
              </span>
              <a href='tel:+998338375577' className={styles.phone}>
                +998(33) 837-55-77
              </a>
            </div>

            <div className={styles.mail}>
              <span className={styles.mail_icon}>
                <i className='fas fa-envelope'></i>
              </span>{" "}
              <a
                href='mailto:info@asiamice.uz'
                className={styles.mainl_txt}
                title='info@asiamice.uz'>
                info@asiamice.uz
              </a>
            </div>
          </div>
          <div className={styles.top_block__right}>
            <div className='dropdown'>
              <button
                className={`dropdown-toggle text-white ${styles.lang_drop}`}
                type='button'
                id='dropdownMenuButton1'
                data-bs-toggle='dropdown'
                aria-expanded='false'>
                {" "}
                {router.locale?.toUpperCase()}
                {"   "}
                <span className={styles.lang_icon}>
                  <i className='fas fa-language'></i>
                </span>
              </button>

              <ul
                className='dropdown-menu'
                aria-labelledby='dropdownMenuButton1'>
                <li className='dropdown-item' onClick={changeLanguages("ru")}>
                  <span className={styles.ln_txt}>RU</span>
                </li>
                <li className='dropdown-item' onClick={changeLanguages("en")}>
                  <span className={styles.ln_txt}>EN</span>
                </li>

                <li className='dropdown-item' onClick={changeLanguages("uz")}>
                  <span className={styles.ln_txt}>UZ</span>
                </li>
              </ul>
            </div>

            {isAuth ? (
              <>
                <span className={styles.userName}>Akobir</span>
                <div className={`dropdown`}>
                  <button
                    className={`dropdown-toggle ${styles.avatar_drop}`}
                    type='button'
                    id='dropdownMenuButton1'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'>
                    <Avatar
                      alt='Travis Howard'
                      src='/static/images/avatar/2.jpg'
                      className={styles.avatar}
                    />
                  </button>
                  <ul
                    className='dropdown-menu'
                    aria-labelledby='dropdownMenuButton1'>
                    <li>
                      <button
                        className='dropdown-item'
                        onClick={() => setIsAuth(false)}>
                        Log out{" "}
                        <span>
                          <i className='fas fa-sign-out-alt'></i>
                        </span>{" "}
                      </button>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <LoginModal setIsAuth={setIsAuth} />
                <RegistrationModal />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBlock;
