import styles from "./sidebar.module.css";
import TransferList from "./transfer-list/TransferList";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getSustenceName } from "../../redux/tourReducer/action";

// export const types_hotel = [
//   {
//     id: 1,
//     text: "Двумесный",
//   },
//   {
//     id: 2,
//     text: "Однокомнатный",
//   },
//   {
//     id: 3,
//     text: "Трехмесный",
//   },
// ];

// export const sustenceArr = [
//   {
//     id: 4,
//     text: "Шведский стол",
//   },
//   {
//     id: 5,
//     text: "Без еды",
//   },
//   {
//     id: 6,
//     text: "только ужин",
//   },
// ];

const Sidebar = ({
  handleChange,
}) => {
  const dispatch = useDispatch()
  const isShow = useSelector((state) => state.tours.isShow);




  const sustenceNames = useSelector(state => state.tours.sustenceNames)
  const roomTypes = useSelector(state => state.tours.roomTypes)



  return (
    <div className={`${styles.sidebar}  ${isShow ? `${styles.show}` : ""}`}>
      <div>
        <h4 className={styles.title}>Питание</h4>

        <TransferList
          data={sustenceNames.results}
          name={"sustenceNames"}
          handleChange={handleChange}
        />
      </div>

      <div>
        <h4 className={styles.title}>Комнаты</h4>
        <TransferList
          data={roomTypes.results}
          name={"roomTypes"}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};


export default Sidebar;

