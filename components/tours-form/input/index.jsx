import styles from "./input.module.css";
import { useSelector } from "react-redux";

const Option = ({ defText, value, name, onChange }) => {
  
  const countries = useSelector((state) => state.countries.countries);

  return (
    <>
      <input
        type='text'
        list='countries'
        placeholder={defText}
        name={name}
        className={styles.select}
        value={value}
        onChange={onChange}
      />
      <datalist id='countries'>
        {countries?.results?.map((el, index) => {
          return <option key={el.id} value={el.name} onChange={onChange} />;
        })}
      </datalist>
    </>
  );
};

export default Option;

