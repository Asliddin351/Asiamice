import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./pagination.module.css";

const Pagination = ({count, next, prev, currentPage, setCurrentPage}) => {
  const router = useRouter()
  const pageNumbers = [];
  const totalPageCount = Math.ceil(count / 6)



  for (let i = 1; i <=totalPageCount; i++) {
    pageNumbers.push(i);
  }



  const handleClicked = (number) => {
      setCurrentPage(number)
      router.replace(`tours/?page=${currentPage}`, ``, {scroll: false})
  }

  const prevPage = () => {
    if(currentPage > 1) {
      setCurrentPage(currentPage-1)
      router.replace(`tours/?page=${currentPage-1}`, ``, {scroll: false})
    }
  }

  const nextPage = () => {
    if(currentPage < totalPageCount) {
      setCurrentPage(currentPage+1)
      router.replace(`tours/?page=${currentPage+1}`, ``, {scroll: false})
    }
  }

  return (
    <nav className={styles.paginationContainer}>
      <ul className={styles.pagination}>
        <button className={`${styles.prev}`} onClick={prevPage}>
          <i className="fas fa-chevron-circle-left"></i>
        </button>
        {pageNumbers.map((number) => {
          return (
            <button key={number} className={styles.item} value={number} onClick={()=>handleClicked(number)}>
                {number}
            </button>
          );
        })}
        <button className={`${styles.next}`} onClick={nextPage}>
          <i className="fas fa-chevron-circle-right"></i>
        </button>
      </ul>
    </nav>
  );
};

export default Pagination;
