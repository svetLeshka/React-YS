import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    mas: [],
    tasks: {
        1: {
            title: "Нарисовать иллюстрации",
            tags: ["violet", 'green'],
            icons: ['desc', 'coms']
        },
        2: {
            title: "Сверстать лендинг по готовому шаблону",
            tags: ["violet", 'green', 'orange'],
            icons: ['coms']
        }
    },
    editingTask: {
        title: "",
        tags: ['violet', 'green'],
        icons: []
    }
}
export const appSlice = createSlice({
    name: "todo",
    initialState: initialValue,
    reducers: {
        changeCheckboxStateInEditing: (state, action) => {
            const newTag = action.payload;
            const tagIndex = state.editingTask.tags.indexOf(newTag);
            if(tagIndex !== -1) {
                state.editingTask.tags.splice(tagIndex, 1);
            } else {
                state.editingTask.tags.push(newTag);
            }
        },

    }
})

export const {
    changeCheckboxStateInEditing
} = appSlice.actions;

export default appSlice.reducer;