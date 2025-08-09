import styles from "./search.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText } from "../../store/cartSlice";
import type { RootState } from "../../store/store";
import { useState } from "react";
import { Button } from "@mantine/core";

const Search = () => {
  const dispatch = useDispatch();
  const searchText = useSelector((state: RootState) => state.card.searchText);
  const [inputText, setInputText] = useState(searchText);

  return (
    <section className={styles.wrapper}>
      <div className={styles.wrapper__boxTitle}>
        <h2>Список вакансий</h2>
        <p>по профессии Frontend-разработчик</p>
      </div>

      <div className={styles.wrapper__boxSearch}>
        <img
          className={styles.wrapper__icon}
          src="public/Vector.png"
          alt="Vector"
        />

        <input
          type="text"
          placeholder="Должность или название компании"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />

        <Button onClick={() => dispatch(setSearchText(inputText))} h={42}>
          Найти
        </Button>
      </div>
    </section>
  );
};

export default Search;
