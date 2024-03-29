import styles from "./style.module.css";
import Tag from "components/Tag/Tag";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCheckboxStateInEditing } from "store/appSlice";
import { Colors } from "constants/constants";

const ChosenTags = ({ isEdit = false }) => {
  const tags = useSelector((state) => state["editingTask"].tags);
  const dispatch = useDispatch();
  const setTag = useCallback(
    (tag) => {
      dispatch(changeCheckboxStateInEditing([tag]));
    },
    [dispatch]
  );
  return (
    <div className={styles["wrapper"]}>
      {Array.from(Object.entries(tags)).map((entry) => {
        return (
          <div
            key={entry[0]}
            className={`${styles["tag"]}${
              Boolean(isEdit) ? " " + styles["tag-hover"] : ""
            }`}
          >
            <span
              onClick={() => setTag(entry[1])}
              className={`${styles["del"]} _icon-close`}
            ></span>
            <Tag color={Colors[entry[1]]} w="60px" h="24px" />
          </div>
        );
      })}
    </div>
  );
};

export default ChosenTags;
