import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Layout from "../../hoc/Layout";

import styles from "./blog.module.css";

function Post({ dataID, data, ln }) {
  const { t } = useTranslation();
  const router = useRouter();

  const [blog, setBlog] = useState({
    title: "",
    text: "",
    id: null,
    image: "",
  });

  useEffect(() => {
    if (dataID != null) {
      setBlog(dataID);
    }
  });

  const { title, text, id, image } = blog;
  const { results, count } = data ?? { results: [], count: 0 };

  const pageId = results.filter((el) => {
    if (el.id !== id) {
      return el;
    } else {
      return null;
    }
  });

  let firstPost = results[results.length - results.length]?.id;
  let lastPost = results[results.length - 1]?.id;

  const prevPost = () => {
    router.push(`/blog/${pageId[0].id}`, `/blog/${pageID[0].slug}`);
  };

  const nextPost = () => {
    router.push(`/blog/${pageId[0].id}`, `/blog/${pageID[0].slug}`);
  };

  return dataID !== null ? (
    <Layout title={title}>
      <div
        className={styles.imageBox}
        style={{ backgroundImage: `url(${image})` }}></div>
      <div className='container'>
        <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
        <p dangerouslySetInnerHTML={{ __html: text }}></p>
        <div className='mb-3 d-flex gap-3'>
          <button
            onClick={prevPost}
            disabled={firstPost == id ? true : false}
            className={`btn ${
              firstPost == id ? "btn-secondary" : "btn-primary"
            } `}>
            <span>
              <i className='fas fa-angle-left'></i>
            </span>{" "}
            {t("pagination.prev")}
          </button>
          <button
            onClick={nextPost}
            disabled={lastPost == id ? true : false}
            className={`btn ${
              firstPost == id ? "btn-primary" : "btn-secondary"
            } `}>
            {t("pagination.next")}{" "}
            <span>
              <i className='fas fa-angle-right'></i>
            </span>
          </button>
        </div>
      </div>
    </Layout>
  ) : (
    <div>Loading...</div>
  );
}

export const getStaticPaths = async ({ locales }) => {
  const res = await axios.get(`${process.env.BLOG_URL}`);
  // const res = await axios.get(`http://127.0.0.1:8000/api/v1/blog/`);
  var paths = [];
  res.data.results.forEach((b) => {
    locales.forEach((l) => {
      paths.push({
        params: {
          id: `${b.id}`,
        },
        locale: l,
      });
    });
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params, locale }) {
  console.log(locale);
  const res = await axios.get(`${process.env.BLOG_URL}${params.id}/`, {
    headers: {
      "Accept-Language": locale,
    },
  });

  const { data } = await axios.get(`${process.env.BLOG_URL}`);
  const dataID = await res.data;
  return {
    props: { dataID, data, locale },
  };
}

export default Post;
