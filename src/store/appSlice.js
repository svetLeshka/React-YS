import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    tasks: {
        1: {
            stage: 'todo',
            title: "Нарисовать иллюстрации",
            desc: '123',
            tags: ["violet", 'green'],
            comments: [
                {
                    id: 1,
                    author: 'Иванов Иван',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
                }
            ]
        },
        2: {
            stage: 'progress',
            title: "Сверстать лендинг по готовому шаблону",
            desc: '',
            tags: ["violet", 'green', 'orange'],
            comments: []
        },
        3: {
            stage: 'done',
            title: 'Нарисовать иллюстрации',
            desc: '',
            tags: ['blue', 'green', 'yellow'],
            comments: []
        }
    },
    editingTask: {
        stage: '',
        title: "",
        desc: '',
        tags: [],
        comments: []
    },
    filters: {
        com: {
            title: 'Комментарий',
            checked: true
        },
        desc: {
            title: 'Описание',
            checked: false
        },
        tag: {
            title: 'Тег',
            checked: false
        }
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
        changeFilterState: (state, action) => {
            state.filters[action.payload].checked = !state.filters[action.payload].checked;
        }
    }
})

export const {
    changeCheckboxStateInEditing,
    changeFilterState
} = appSlice.actions;

export default appSlice.reducer;