//Nơi cấu hình api

import axios from "axios";
import type { Student } from "../utils/type";

//API lấy tất cả danh sach sinh viên
export const API_GETALL_STUDENT = "http://localhost:8080/students";
//API thêm sinh viên
export const API_ADD_STUDENT = async (new_student: Student) => {
  const response = await axios.post(
    "http://localhost:8080/students",
    new_student
  );
  return response.data;
};
//API xóa từng sinh viên

//API cập nhập sinh viên

//API Sắp Xếp sinh viên

//API tìm kiếm sinh viên

//API phân trang sinh viên
