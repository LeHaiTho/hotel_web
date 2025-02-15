import { RootState } from "./store"
//Lấy ra user
export const selectAuth = (state:RootState) => state.auth.user;
//Lấy form đăng ký Quản lý khách sạn
export const selectFormRegisterMn = (state:RootState) => state.formRegisterMn.form
//Lấy form login Quản lý khách sạn
export const selectFormLoginMn = (state: RootState) => state.formLoginMn.form