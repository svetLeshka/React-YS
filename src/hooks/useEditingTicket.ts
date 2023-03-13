import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { changeNewComsInEditing, changeNewTagsInEditing, updateEditingTicketText } from "store/appSlice";
import { ITicket } from "typings/interfaces";

const useEditingTicket = (ticket: ITicket): Function => {
    const dispatch = useDispatch();
    return useCallback(() => {
        dispatch(updateEditingTicketText({
            stage: ticket.stage,
            title: ticket.title,
            desc: ticket.desc,
        }));
        dispatch(changeNewTagsInEditing(ticket.tags));
        dispatch(changeNewComsInEditing(ticket.comments));
    }, [dispatch, ticket.stage, ticket.title, ticket.desc, ticket.tags, ticket.comments]);
}

export default useEditingTicket;