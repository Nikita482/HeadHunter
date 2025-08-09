import styles from "./Skills.module.css";
import { PillsInput, Pill, Text, Group, Button } from "@mantine/core";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store/store";
import { setTags, removeTag } from "../../store/cartSlice";
import { useState } from "react";

const Skills = () => {
  const dispatch = useDispatch();
  const tags = useSelector((state: RootState) => state.card.tags);
  const [inputValue, setInputValue] = useState("");

  const addTag = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return;
    dispatch(setTags(trimmed));
    setInputValue("");
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addTag(inputValue);
    }
  };

  return (
    <div className={styles.skills}>
      <Text pt={24} pb={12} className={styles.skills__title}>
        Ключевые навыки
      </Text>

      <Group>
        <PillsInput.Field
          placeholder="Навык"
          value={inputValue}
          onChange={(e) => setInputValue(e.currentTarget.value)}
          onKeyDown={onKeyDown}
          className={styles.skills__pole}
        />

        <Button
          onClick={() => addTag(inputValue)}
          className={styles.skills__btn}
        >
          <p>+</p>
        </Button>
      </Group>

      <Pill.Group mt={15} mb={15}>
        {tags.map((tag) => (
          <Pill
            withRemoveButton
            key={tag}
            onRemove={() => dispatch(removeTag(tag))}
          >
            {tag}
          </Pill>
        ))}
      </Pill.Group>
    </div>
  );
};

export default Skills;
