import styles from "./City.module.css";
import { useState } from "react";
import { Collapse } from "@mantine/core";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store/store";
import { setCityList } from "../../store/cartSlice";
import cityIcons from "../../../public/cityIcons.png";

const City = () => {
  const dispatch = useDispatch();

  const [opened, setOpened] = useState(false);
  const cityList = useSelector((state: RootState) => state.card.cityList);

  return (
    <section className={styles.city}>
      <div className={styles.city__box}>
        <img src={cityIcons} alt="cityIcons" />

        <button
          className={styles.city__mainBtn}
          onClick={() => setOpened((i) => !i)}
        >
          Все города
        </button>
      </div>

      <Collapse in={opened}>
        {cityList.map((city) => (
          <button
            key={city}
            className={styles.city__btn}
            onClick={() => dispatch(setCityList(city))}
          >
            {city}
          </button>
        ))}
      </Collapse>
    </section>
  );
};

export default City;
