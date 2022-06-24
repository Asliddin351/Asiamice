import { useState, useEffect } from "react";
import Layout from "../../hoc/Layout";
import TourForm from "../../components/tours-form/TourForm";
import TourCard from "../../components/tourCard/TourCard";

import { useDispatch, useSelector } from "react-redux";

import { useTranslation } from "react-i18next";

import {
  getTours,
  getSustenceName,
  getRoomTypes,
} from "../../redux/tourReducer/action";

import Pagination from "../../components/pagination";

const ToursPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const tours = useSelector((state) => state.tours.tours);

  const { results, count, next, previous } = tours;

  const [filters, setFilters] = useState({
    fromCountry: "",
    toCountry: "",
    start: "",
    end: "",
    roomTypes: [],
    sustenceNames: [],
  });

  const { toCountry, start, end, roomTypes, sustenceNames } = filters;

  const room = roomTypes.join(",");
  const sustence = sustenceNames.join(",");

  useEffect(() => {
    const pageChange = async () => {
      await dispatch(
        getTours(currentPage, toCountry, start, end, room, sustence)
      );
      await dispatch(getSustenceName());
      await dispatch(getRoomTypes());
    };
    pageChange();
    // dispatch(getTours(currentPage, toCountry, start, end, room, sustence));
    // dispatch(getSustenceName());
    // dispatch(getRoomTypes());
  }, [currentPage, filters]);

  return (
    <Layout title={t("links.tours")}>
      <div className='tourForm'>
        <TourForm
          filters={filters}
          setFilters={setFilters}
          currentPage={currentPage}
        />
      </div>
      <div className='tours-container'>
        <div className='container container-sm container-md container-lg container-xxl'>
          <div className='row justify-content-between'>
            <div
              className='col-md-12 col-lg-12 col-xl-12 col-xxl-12  bg-white justify-content-center'
              style={{ marginTop: "35px", padding: "20px 10px" }}>
              <div
                id='tours-list'
                className={`row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4 mb-3`}>
                {count > 0 ? (
                  results?.map((tour) => {
                    return (
                      <div key={tour.id} className='col'>
                        <TourCard tour={tour} />
                      </div>
                    );
                  })
                ) : (
                  <div
                    className='d-flex align-items-center w-100  text-light py-3'
                    style={{ backgroundColor: "#F7931E" }}>
                    <strong>Tours not found!</strong>
                  </div>
                )}
              </div>
              {count > 0 ? (
                <Pagination
                  count={count}
                  next={next}
                  prev={previous}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ToursPage;
