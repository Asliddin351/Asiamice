import { useEffect } from "react";
import Layout from "../../hoc/Layout";
import styles from "./blog.module.css";
import Link from "next/link";
import axios from 'axios'
import {useRouter} from 'next/router'


import { useTranslation } from "react-i18next";
import Pagination from "../../components/pagination";

function Blog({data}) {

  const { t } = useTranslation();

    const router = useRouter()



  const { results } = data;

  return (
    <Layout title={t("links.blog")}>
      <div className={`container d-flex gap-5 ${styles.blogContainer}`}>
        <div className={styles.blog}>
          <header className={styles.header}>
            {results?.map((el) => {
              const { title, id, text, slug } = el;
              let te = router.locale == "ru" ? text?.substring(0, 450) + "..."  : text?.substring(0, 350) + "...";
              console.log(te)
              return (
                <div key={el.id} className={styles.blog_article}>
                  <section className={styles.section}>
                    <h1 className={styles.title}>
                      <Link
                        href={{
                          pathname: `/blog/${id}`,
                          query: {
                            name: `${slug}`
                          }
                        }} replace>
                        <a
                          rel={"noreferrer"}
                          target='_blank'
                          dangerouslySetInnerHTML={{ __html: title }}></a>
                      </Link>
                    </h1>

                    <p dangerouslySetInnerHTML={{ __html: te}}></p>
                  </section>
                  <hr />
                </div>
              );
            })}

            {data.count > 2 ? <Pagination totalPage={data.count} /> : null}
          </header>
        </div>
        <aside className={styles.sidebar}>
          <div className={styles.filter}>
            <input
              type='text'
              id='filter'
              name='filter'
              className={styles.search_input}
              placeholder='Search'
            />
            <label className={styles.search_icon} htmlFor='filter'>
              <i className='fas fa-search'></i>
            </label>
          </div>

          <div className={styles.catigories}>
            <h4>{t("blog.category").toLocaleUpperCase()}</h4>
            <ul className={styles.catigory}>{t("blog.categoryText")}</ul>
          </div>

          <div className={styles.selectCatigories}>
            <h4>{t("blog.category").toLocaleUpperCase()}</h4>
            {/* <select name="category" className={styles.catigorySelect}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select> */}
            <span>{t("blog.categoryText")}</span>
          </div>

          <hr />
        </aside>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async ({ locale }) => {
  const {data} = await axios.get(`${process.env.BLOG_URL}`, {
    headers: {
      "Accept-Language": locale,
    },
  });

  return {
    props: { data }
  }
}


export default Blog;
