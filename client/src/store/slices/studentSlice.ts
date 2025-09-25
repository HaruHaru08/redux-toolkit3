import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { Student } from "../../utils/type";
import { API_ADD_STUDENT, API_GETALL_STUDENT } from "../../apis/apis";
//Hàm lấy tất cả user
export const getAllStudent = createAsyncThunk("getAllStudent", async () => {
  try {
    const res = await axios.get(API_GETALL_STUDENT);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
//Hàm Thêm mới student
export const addStudent = createAsyncThunk(
  "addStudent",
  async (new_student: Student) => {
    try {
      return API_ADD_STUDENT(new_student);
    } catch (error) {
      console.log(error);
    }
  }
);
export const deleteStudent = createAsyncThunk(
  "deleteStudent",
  async (id: number | string) => {
    try {
      await axios.delete(` http://localhost:8080/students/${id}`);
      return id;
    } catch (error) {
      console.log(error);
    }
  }
);
const studentSlice = createSlice({
  name: "student",
  initialState: {
    student: [] as Student[],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllStudent.pending, () => {
        console.log("Đang xử lý dữ liệu");
      })
      .addCase(getAllStudent.fulfilled, (state, action) => {
        (state.loading = true), (state.student = action.payload);
      })
      .addCase(addStudent.fulfilled, (state: any, action) => {
        state.student = [...state.student, action.payload];
      })
      .addCase(deleteStudent.fulfilled, (state: any, action) => {
        state.student = state.student.filter(
          (item: Student) => item.id != action.payload
        );
      });
  },
});
export default studentSlice.reducer;
