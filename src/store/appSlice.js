import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    tasks: {
        0: {
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
        1: {
            stage: 'progress',
            title: "Сверстать лендинг по готовому шаблону",
            desc: '',
            tags: ["violet", 'green', 'orange'],
            comments: []
        },
        2: {
            stage: 'done',
            title: 'Нарисовать иллюстрации',
            desc: '',
            tags: ['blue', 'green', 'yellow'],
            comments: []
        },
        3: {
            stage: 'progress',
            title: 'Нарисовать иллюстрации',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, s',
            tags: ['green'],
            comments: []
        }
    },
    editingTask: {
        id: -1,
        stage: 'todo',
        title: "Нарисовать иллюстрации",
        desc: '123',
        tags: ["violet", 'green'],
        comments: [
            {
                id: 1,
                author: 'Иванов Иван',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
            },
            {
                id: 2,
                author: 'Иванов Иван',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
            }
        ]
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
        changeCardStage: (state, action) => {
            state.tasks[action.payload.id].stage = action.payload.stage;
        },
        changeCheckboxStateInEditing: (state, action) => {
            const newTags = action.payload;
            newTags.forEach(newTag => {
                const tagIndex = state.editingTask.tags.indexOf(newTag);
                if(tagIndex !== -1) {
                    state.editingTask.tags.splice(tagIndex, 1);
                } else {
                    state.editingTask.tags.push(newTag);
                } 
            });
        },
        changeNewTagsInEditing: (state, action) => {
            state.editingTask.tags = action.payload;
        },
        deleteCom: (state, action) => {
            const newComs = action.payload.coms;
            newComs.forEach(newCom => {
                let tagIndex = -1;
                state.editingTask.comments.forEach((el, index) => {
                    //eslint-disable-next-line
                    if(el.id == newCom.id) tagIndex = index;
                });
                state.editingTask.comments.splice(tagIndex, 1);
            });
        },
        addNewCom: (state, action) => {
            const newCom = action.payload.com;
            const task = state.editingTask;
            newCom.id = (task.comments.length > 0) ? task.comments[task.comments.length-1].id+1 : 1;
            task.comments.push(newCom);
        },
        changeNewComsInEditing: (state, action) => {
            state.editingTask.comments = action.payload;
        },
        changeFilterState: (state, action) => {
            state.filters[action.payload].checked = !state.filters[action.payload].checked;
        },
        updateEditingTicketText: (state, action) => {
            const t = state.editingTask;
            const p = action.payload;
            if(p.stage !== undefined) t.stage = p.stage;
            if(p.title !== undefined) t.title = p.title;
            if(p.desc !== undefined) t.desc = p.desc;
        },
        updateTicket: (state, action) => {
            const p = action.payload;
            let t;
            if(p.id >= 0) {
                t = state.tasks[p.id];
            } else {
                let c = 0;
                for(const key of Object.keys(state.tasks)){
                    if(Number(key) === c) {
                        c++;
                    } else {
                        break;
                    }
                }
                state.tasks[c] = t = {};
                t.comments = [];
            }
            if(p.stage !== undefined) t.stage = p.stage;
            if(p.title !== undefined) t.title = p.title;
            if(p.desc !== undefined) t.desc = p.desc;
            if(p.tags !== undefined) t.tags = p.tags;
            if(p.comments !== undefined) t.comments = p.comments;
        },
        updateEditingTicket: (state, action) => {
            const p = action.payload;
            const t = state.editingTask;
            if(p.id !== undefined) t.id = p.id;
            if(p.stage !== undefined) t.stage = p.stage;
            if(p.title !== undefined) t.title = p.title;
            if(p.desc !== undefined) t.desc = p.desc;
            if(p.tags !== undefined) t.tags = p.tags;
            if(p.comments !== undefined) t.comments = p.comments;
        }
    }
})

export const {
    changeCardStage,
    changeCheckboxStateInEditing,
    changeFilterState,
    updateEditingTicketText,
    deleteCom,
    addNewCom,
    updateTicket,
    updateEditingTicket,
    changeNewTagsInEditing,
    changeNewComsInEditing
} = appSlice.actions;

export default appSlice.reducer;