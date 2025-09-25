//Nơi cấu hình api

import axios from "axios";

//API lấy tất cả danh sach sinh viên
export const API_GETALL_STUDENT = "http://localhost:8080/students";
//API thêm sinh viên
const API_ADD_STUDENT = async (new_student: any) => {
  const response = await axios.post(
    "http://localhost:8080/students",
    new_student
  );
};
//API xóa từng sinh viên

//API cập nhập sinh viên

//API Sắp Xếp sinh viên

//API tìm kiếm sinh viên

//API phân trang sinh viên
