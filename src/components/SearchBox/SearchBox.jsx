import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  // const filter = useSelector(selectNameFilter);

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Find contacts by name</h2>
      <input
        className={s.input}
        type="text"
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
