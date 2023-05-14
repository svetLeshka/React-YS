import Button from "components/Button/Button";
import styles from "./style.module.css";
import EditingTicketPopUp from "components/TicketPopUp/TicketPopUp";
import { ITicket } from "typings/interfaces";
import { useCallback, useState } from "react";
import useEditingTicket from "hooks/useEditingTicket";
import { addTicket, updateEditingTicketProperly } from "store/appSlice";
import { Route, Routes, useNavigate } from "react-router";
import { TaskActions } from "constants/constants";
import { useAppDispatch } from "hooks/useAppDispatch";

export interface IStageButtonProps {
  stage: string;
}

const StageButton = ({ stage }: IStageButtonProps) => {
  const navigate = useNavigate();
  const [isModalShown, setModal] = useState(false);
  const dispatch = useAppDispatch();
  const updateEditingTicket = useEditingTicket({
    stage: stage,
    title: "",
    desc: "",
    tags: [],
    comments: [],
  });
  const updateImmediatly = useCallback(() => {
    dispatch(
      updateEditingTicketProperly({
        stage: stage,
        title: "",
        desc: "",
        tags: [],
        comments: [],
      })
    );
  }, [dispatch, stage]);
  const updateAfterSave = useCallback(
    (ticket: ITicket) => {
      dispatch(addTicket({ ...ticket, stage: stage }));
    },
    [dispatch, stage]
  );
  return (
    <div className={styles["btn"]}>
      <Button
        clickFn={() => {
          if (!isModalShown) {
            updateEditingTicket();
            updateImmediatly();
            setModal(true);
            navigate(`/${TaskActions.CREATE}?stage=${stage}`);
          }
        }}
        text="Добавить тикет"
        addedClass={["add-ticket"]}
        isPlusExist={true}
        formId={""}
      />
      <Routes>
        <Route
          path={`/${TaskActions.CREATE}/*`}
          element={
            <EditingTicketPopUp
              stage={stage}
              id={-1}
              setTicket={updateAfterSave}
              isEdit={false}
              setModal={() => setModal(false)}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default StageButton;
