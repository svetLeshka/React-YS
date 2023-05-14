import { useCallback } from "react";
import {
  changeNewComsInEditing,
  changeNewTagsInEditing,
  updateEditingTicketText,
} from "store/appSlice";
import { ICom, IEditingTicket, ITicket } from "typings/interfaces";
import { useAppDispatch } from "./useAppDispatch";

const useEditingTicket = (ticket: ITicket): Function => {
  const dispatch = useAppDispatch();
  return useCallback(() => {
    dispatch(
      updateEditingTicketText({
        stage: ticket.stage,
        title: ticket.title,
        desc: ticket.desc,
      } as IEditingTicket)
    );
    dispatch(changeNewTagsInEditing(ticket.tags));
    dispatch(changeNewComsInEditing(ticket.comments as ICom[]));
  }, [
    dispatch,
    ticket.stage,
    ticket.title,
    ticket.desc,
    ticket.tags,
    ticket.comments,
  ]);
};

export default useEditingTicket;
