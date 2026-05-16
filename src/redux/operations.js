import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6a081e6ffa9b27c848faa978.mockapi.io";

export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",
  async (_, thunkApi) => {
    try {
      const response = await axios.get("/tasks");
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

// Add

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (text , thunkApi) => {
    try {
      const response = await axios.post("/tasks" , {text});
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);



// DELETE


export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (taskId, thunkApi) => {
    try {
      const response = await axios.post(`/tasks/${taskId}`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);




// UPDATE


export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async (task, thunkApi) => {
    try {
      const response = await axios.put(`/tasks/${task.id}`, {completed: !task.completed});
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
