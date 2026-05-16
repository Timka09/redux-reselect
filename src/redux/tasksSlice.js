import { createSlice, isAnyOf } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";
import { fetchTasks, addTask, deleteTask, updateTask } from "./operations";

const actions = [
  fetchTasks,
  addTask,
  deleteTask,
  updateTask,
];

const handleFetchTasks = (state, action) => {
  state.items = action.payload;
};

const handleAddTask = (state, action) => {
  state.items.push(action.payload);
};

const handleDeleteTask = (state, action) => {
  const itemIndex = state.items.findIndex(
    (item) => item.id === action.payload.id,
  );
  state.items.splice(itemIndex, 1);
};

const handleUpdateTask = (state, action) => {
  const itemIndex = state.items.findIndex(
    (item) => item.id === action.payload.id,
  );
  state.items.splice(itemIndex, 1, action.payload);
};


export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, handleFetchTasks)
      .addCase(addTask.fulfilled, handleAddTask)
      .addCase(deleteTask.fulfilled, handleDeleteTask)
      .addCase(updateTask.fulfilled, handleUpdateTask)
      .addMatcher(
        isAnyOf(...actions.map((action) => action.fulfilled)),
        (state) => {
          ((state.isLoading = false), (state.error = null));
        },
      )
      .addMatcher(
        isAnyOf(...actions.map((action) => action.pending)),
        (state) => {
          ((state.isLoading = true), (state.error = null));
        },
      )
      .addMatcher(
        isAnyOf(...actions.map((action) => action.rejected)),
        (state, action) => {
          ((state.isLoading = false), (state.error = action.payload));
        },
      );
  },
});


console.log(tasksSlice);











// SLice

// const tasksInitialState = [
//   { id: 0, text: "Learn HTML and CSS", completed: true },
//   { id: 1, text: "Get good at JavaScript", completed: true },
//   { id: 2, text: "Master React", completed: false },
//   { id: 3, text: "Discover Redux", completed: false },
//   { id: 4, text: "Build amazing apps", completed: false },
// ];

// export const tasksSlice = createSlice({
//   name: "tasks",
//   initialState: tasksInitialState,
//   reducers: {
//     addTask: {
//       reducer(state, action) {
//         state.push(action.payload);
//       },
//       prepare(text) {
//         return {
//           payload: {
//             id: nanoid(),
//             text,
//             completed: false,
//           },
//         };
//       },
//     },
//     deleteTask(state, action) {
//       return state.filter((task) => task.id !== action.payload);
//     },
//     toggleCompleted(state, action) {
//       for (const task of state) {
//         if (task.id === action.payload) {
//           task.completed = !task.completed;
//           break;
//         }
//       }
//     },
//     toggleAllCompleted(state, action) {
//       for (const task of state) {
//         if (!task.completed) task.completed = true;
//       }
//     },

//     deleteAllCompleted(state) {
//       return state.filter((task) => !task.completed);
//     },
//   },
// });

// export const { addTask, deleteTask, deleteAllCompleted, toggleAllCompleted, toggleCompleted } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
