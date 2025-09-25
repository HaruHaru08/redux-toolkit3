import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { Student } from "../../utils/type";
import { API_GETALL_STUDENT } from "../../apis/apis";
//Hàm lấy tất cả user
export const getAllStudent = createAsyncThunk("getAllStudent", async () => {
  try {
    const res = await axios.get(API_GETALL_STUDENT);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
const studentSlice = createSlice({
  name: "student",
  initialState: {
    student: [] as Student[],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllStudent.pending, () => {
      console.log("Đang xử lý dữ liệu");
    });
    builder.addCase(getAllStudent.fulfilled, (state, action) => {
      (state.loading = true), (state.student = action.payload);
    });
  },
});
export default studentSlice.reducer;
