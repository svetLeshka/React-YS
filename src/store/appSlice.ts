import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  ICom,
  IEditingTicket,
  // eslint-disable-next-line
  IInitialValue,
  ITicket,
} from "typings/interfaces";

/*const initialValue = {
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
}*/

const initialValue = {
  /*filters: {
    com: {
      title: "Комментарий",
      checked: true,
    },
    desc: {
      title: "Описание",
      checked: false,
    },
    tag: {
      title: "Тег",
      checked: false,
    },
  },*/
  tasks: {},
  editingTask: {
    id: -1,
    stage: "",
    title: "",
    desc: "",
    tags: [],
    comments: [],
  },
};

const initData = () => {
  if (!localStorage.getItem("todoList")) {
    localStorage.setItem("todoList", JSON.stringify(initialValue));
  }
  return JSON.parse(localStorage.getItem("todoList") as string);
};

const storage = initData();

export const addTicket = createAsyncThunk(
  "addTicket",
  async (action: ITicket) => {
    const p = action;
    let t;
    let c = 0;
    for (const key of Object.keys(storage.tasks)) {
      if (Number(key) === c) {
        c++;
      } else {
        break;
      }
    }
    storage.tasks[c] = t = {} as ITicket;
    if (p.stage !== undefined) t.stage = p.stage;
    if (p.title !== undefined) t.title = p.title;
    if (p.desc !== undefined) t.desc = p.desc;
    t.tags = [];
    t.comments = [];
    localStorage.setItem("todoList", JSON.stringify(storage));
    return action;
  }
);

export const changeCardStage = createAsyncThunk(
  "changeCardStage",
  async (action: { id: number; stage: string }) => {
    storage.tasks[action.id].stage = action.stage;
    localStorage.setItem("todoList", JSON.stringify(storage));
    return action;
  }
);

export const changeCheckboxStateInEditing = createAsyncThunk(
  "changeCheckboxStateInEditing",
  async (action: string[]) => {
    const newTags = action;
    newTags.forEach((newTag: string) => {
      const tagIndex = storage.editingTask.tags.indexOf(newTag);
      if (tagIndex !== -1) {
        const newTagsArr = new Array(storage.editingTask.tags);
        newTagsArr.splice(tagIndex, 1);
        storage.editingTask.tags = [...newTagsArr];
      } else {
        storage.editingTask.tags = [...storage.editingTask.tags, newTag];
      }
    });
    localStorage.setItem("todoList", JSON.stringify(storage));
    return action;
  }
);

export const changeNewTagsInEditing = createAsyncThunk(
  "changeNewTagsInEditing",
  async (action: string[] | undefined) => {
    storage.editingTask.tags = action;
    localStorage.setItem("todoList", JSON.stringify(storage));
    return action;
  }
);

export const deleteCom = createAsyncThunk(
  "deleteCom",
  async (action: { coms: ICom[] }) => {
    const newComs = action.coms;
    newComs.forEach((newCom: ICom) => {
      let tagIndex = -1;
      storage.editingTask.comments.forEach((el: ICom, index: number) => {
        //eslint-disable-next-line
        if (el.id == newCom.id) tagIndex = index;
      });
      const newCommentsArr = new Array(storage.editingTask.comments);
      newCommentsArr.splice(tagIndex, 1);
      storage.editingTask.comments = [...newCommentsArr];
    });
    localStorage.setItem("todoList", JSON.stringify(storage));
    return action;
  }
);

export const addNewCom = createAsyncThunk(
  "addNewCom",
  async (action: { com: ICom }) => {
    const newCom = action.com;
    const task = storage.editingTask;
    newCom.id =
      task.comments.length > 0
        ? task.comments[task.comments.length - 1].id + 1
        : 1;
    task.comments = [...task.comments, newCom];
    localStorage.setItem("todoList", JSON.stringify(storage));
    return action;
  }
);

export const changeNewComsInEditing = createAsyncThunk(
  "changeNewComsInEditing",
  async (action: ICom[]) => {
    storage.editingTask.comments = action;
    localStorage.setItem("todoList", JSON.stringify(storage));
    return action;
  }
);

export const changeFilterState = createAsyncThunk(
  "changeFilterState",
  async (action: string) => {
    storage.filters[action].checked = !storage.filters[action].checked;
    localStorage.setItem("todoList", JSON.stringify(storage));
    return action;
  }
);

export const updateEditingTicket = createAsyncThunk(
  "updateEditingTicket",
  async (action: IEditingTicket) => {
    const p = action;
    const t = storage.editingTask;
    if (p.id !== undefined) t.id = p.id;
    if (p.stage !== undefined) t.stage = p.stage;
    if (p.title !== undefined) t.title = p.title;
    if (p.desc !== undefined) t.desc = p.desc;
    if (p.tags !== undefined) t.tags = p.tags;
    if (p.comments !== undefined) t.comments = p.comments;
    localStorage.setItem("todoList", JSON.stringify(storage));
    return action;
  }
);

export const updateTicket = createAsyncThunk(
  "updateTicket",
  async (action: IEditingTicket) => {
    const p = action;
    let t;
    if (Number(p.id) >= 0) {
      t = storage.tasks[p.id];
    } else {
      let c = 0;
      for (const key of Object.keys(storage.tasks)) {
        if (Number(key) === c) {
          c++;
        } else {
          break;
        }
      }
      storage.tasks[c] = t = {} as ITicket;
      t.comments = [];
    }
    if (p.stage !== undefined) t.stage = p.stage;
    if (p.title !== undefined) t.title = p.title;
    if (p.desc !== undefined) t.desc = p.desc;
    if (p.tags !== undefined) t.tags = p.tags;
    if (p.comments !== undefined) t.comments = p.comments;
    localStorage.setItem("todoList", JSON.stringify(storage));
    return action;
  }
);

export const deleteTicket = createAsyncThunk(
  "deleteTicket",
  async (action: string) => {
    const id = parseInt(action);
    delete storage.tasks[id];
    localStorage.setItem("todoList", JSON.stringify(storage));
    return action;
  }
);

export const updateEditingTicketText = createAsyncThunk(
  "updateEditingTicketText",
  async (action: IEditingTicket) => {
    const t = storage.editingTask;
    const p = action;
    if (p.stage !== undefined) t.stage = p.stage;
    if (p.title !== undefined) t.title = p.title;
    if (p.desc !== undefined) t.desc = p.desc;
    localStorage.setItem("todoList", JSON.stringify(storage));
    return action;
  }
);

export const appSlice = createSlice({
  name: "todo",
  initialState: initData(),
  reducers: {
    /*changeCardStage: (state, action) => {
            state.tasks[action.payload.id].stage = action.payload.stage;
        },*/
    /*changeCheckboxStateInEditing: (state, action) => {
      const newTags = action.payload;
      newTags.forEach((newTag: string) => {
        const tagIndex = state.editingTask.tags.indexOf(newTag);
        if (tagIndex !== -1) {
          state.editingTask.tags.splice(tagIndex, 1);
        } else {
          state.editingTask.tags.push(newTag);
        }
      });
    },*/
    /*changeNewTagsInEditing: (state, action) => {
      state.editingTask.tags = action.payload;
    },*/
    /*deleteCom: (state, action) => {
      const newComs = action.payload.coms;
      newComs.forEach((newCom: ICom) => {
        let tagIndex = -1;
        state.editingTask.comments.forEach((el: ICom, index: number) => {
          //eslint-disable-next-line
          if (el.id == newCom.id) tagIndex = index;
        });
        state.editingTask.comments.splice(tagIndex, 1);
      });
    },*/
    /*addNewCom: (state, action) => {
      const newCom = action.payload.com;
      const task = state.editingTask;
      newCom.id =
        task.comments.length > 0
          ? task.comments[task.comments.length - 1].id + 1
          : 1;
      task.comments.push(newCom);
    },*/
    /*changeNewComsInEditing: (state, action) => {
      state.editingTask.comments = action.payload;
    },*/
    /*changeFilterState: (state, action) => {
      state.filters[action.payload].checked =
        !state.filters[action.payload].checked;
    },*/
    /*updateEditingTicketText: (state, action) => {
      const t = state.editingTask;
      const p = action.payload;
      if (p.stage !== undefined) t.stage = p.stage;
      if (p.title !== undefined) t.title = p.title;
      if (p.desc !== undefined) t.desc = p.desc;
    },*/
    /*updateTicket: (state, action) => {
      const p = action.payload;
      let t;
      if (p.id >= 0) {
        t = state.tasks[p.id];
      } else {
        let c = 0;
        for (const key of Object.keys(state.tasks)) {
          if (Number(key) === c) {
            c++;
          } else {
            break;
          }
        }
        state.tasks[c] = t = {} as ITicket;
        t.comments = [];
      }
      if (p.stage !== undefined) t.stage = p.stage;
      if (p.title !== undefined) t.title = p.title;
      if (p.desc !== undefined) t.desc = p.desc;
      if (p.tags !== undefined) t.tags = p.tags;
      if (p.comments !== undefined) t.comments = p.comments;
    },*/
    updateEditingTicketProperly: (state, action) => {
      const p = action.payload;
      const t = state.editingTask;
      if (p.id !== undefined) t.id = p.id;
      if (p.stage !== undefined) t.stage = p.stage;
      if (p.title !== undefined) t.title = p.title;
      if (p.desc !== undefined) t.desc = p.desc;
      if (p.tags !== undefined) t.tags = p.tags;
      if (p.comments !== undefined) t.comments = p.comments;
    },
    /* addTicket: (state, action) => {
            const p = action.payload;
            let t;
            let c = 0;
            for(const key of Object.keys(state.tasks)){
                if(Number(key) === c) {
                    c++;
                } else {
                    break;
                }
            }
            state.tasks[c] = t = {};
            if(p.stage !== undefined) t.stage = p.stage;
            if(p.title !== undefined) t.title = p.title;
            if(p.desc !== undefined) t.desc = p.desc;
            t.tags = [];
            t.comments = [];
        }, */
    /*deleteTicket: (state, action) => {
      const id = parseInt(action.payload);
      delete state.tasks[id];
    },*/
  },
  extraReducers: (builder) => {
    builder.addCase(addTicket.fulfilled, (state, action) => {
      const p = action.payload;
      let t;
      let c = 0;
      for (const key of Object.keys(state.tasks)) {
        if (Number(key) === c) {
          c++;
        } else {
          break;
        }
      }
      state.tasks[c] = t = {} as ITicket;
      if (p.stage !== undefined) t.stage = p.stage;
      if (p.title !== undefined) t.title = p.title;
      if (p.desc !== undefined) t.desc = p.desc;
      t.tags = [];
      t.comments = [];
    });
    builder.addCase(changeCardStage.fulfilled, (state, action) => {
      state.tasks[action.payload.id].stage = action.payload.stage;
    });
    builder.addCase(changeCheckboxStateInEditing.fulfilled, (state, action) => {
      const newTags = action.payload;
      newTags.forEach((newTag: string) => {
        const tagIndex = state.editingTask.tags.indexOf(newTag);
        if (tagIndex !== -1) {
          state.editingTask.tags.splice(tagIndex, 1);
        } else {
          state.editingTask.tags.push(newTag);
        }
      });
    });
    builder.addCase(changeNewTagsInEditing.fulfilled, (state, action) => {
      state.editingTask.tags = action.payload;
    });
    builder.addCase(deleteCom.fulfilled, (state, action) => {
      const payload: { coms: ICom[] } = action.payload as never;
      const newComs = payload.coms;
      newComs.forEach((newCom: ICom) => {
        let tagIndex = -1;
        state.editingTask.comments.forEach((el: ICom, index: number) => {
          //eslint-disable-next-line
          if (el.id == newCom.id) tagIndex = index;
        });
        state.editingTask.comments.splice(tagIndex, 1);
      });
    });
    builder.addCase(addNewCom.fulfilled, (state, action) => {
      const newCom = action.payload.com;
      const task = state.editingTask;
      newCom.id =
        task.comments.length > 0
          ? task.comments[task.comments.length - 1].id + 1
          : 1;
      task.comments.push(newCom);
    });
    builder.addCase(changeNewComsInEditing.fulfilled, (state, action) => {
      state.editingTask.comments = action.payload;
    });
    builder.addCase(changeFilterState.fulfilled, (state, action) => {
      state.filters[action.payload].checked =
        !state.filters[action.payload].checked;
    });
    builder.addCase(updateEditingTicket.fulfilled, (state, action) => {
      const p = action.payload;
      const t = state.editingTask;
      if (p.id !== undefined) t.id = p.id;
      if (p.stage !== undefined) t.stage = p.stage;
      if (p.title !== undefined) t.title = p.title;
      if (p.desc !== undefined) t.desc = p.desc;
      if (p.tags !== undefined) t.tags = p.tags;
      if (p.comments !== undefined) t.comments = p.comments;
    });
    builder.addCase(updateTicket.fulfilled, (state, action) => {
      const p = action.payload;
      let t;
      if (Number(p.id) >= 0) {
        t = state.tasks[p.id];
      } else {
        let c = 0;
        for (const key of Object.keys(state.tasks)) {
          if (Number(key) === c) {
            c++;
          } else {
            break;
          }
        }
        state.tasks[c] = t = {} as ITicket;
        t.comments = [];
      }
      if (p.stage !== undefined) t.stage = p.stage;
      if (p.title !== undefined) t.title = p.title;
      if (p.desc !== undefined) t.desc = p.desc;
      if (p.tags !== undefined) t.tags = p.tags;
      if (p.comments !== undefined) t.comments = p.comments;
    });
    builder.addCase(deleteTicket.fulfilled, (state, action) => {
      const id = parseInt(action.payload);
      delete state.tasks[id];
    });
    builder.addCase(updateEditingTicketText.fulfilled, (state, action) => {
      const t = state.editingTask;
      const p = action.payload;
      if (p.stage !== undefined) t.stage = p.stage;
      if (p.title !== undefined) t.title = p.title;
      if (p.desc !== undefined) t.desc = p.desc;
    });
  },
});

export const {
  //changeCardStage,
  //changeCheckboxStateInEditing,
  //changeFilterState,
  //updateEditingTicketText,
  //deleteCom,
  //addNewCom,
  //updateTicket,
  updateEditingTicketProperly,
  //changeNewTagsInEditing,
  //changeNewComsInEditing,
  //addTicket,
  //deleteTicket,
} = appSlice.actions;

export default appSlice.reducer;
