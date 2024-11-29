import style from './SearchBox.module.css';
const SearchBox = ({ value, onChange }) => {
  return (
    <div className={style.searchBox}>
      <label className={style.searchLabel}>Find contacs by name</label>
      <input
        className={style.search}
        onChange={onChange}
        type="text"
        name="search"
        value={value}
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBox;
