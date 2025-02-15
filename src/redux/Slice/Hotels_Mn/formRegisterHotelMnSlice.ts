import { createSlice} from "@reduxjs/toolkit";

// Định nghĩa kiểu dữ liệu cho form
interface FormData {
  // Cho phép thêm thuộc tính mới
  [key: string]: any; 
}

const initialState: {form: FormData} = {
    form: {}
}

 //Tạo slice auth
 const formRegisterHotelMnSlice = createSlice({
    name: 'formRegisterHotelManager',
    initialState,
    reducers: {
      updateForm(state, action) {
        const data = action.payload;
        // thêm trường mới vào giá trị hiện tại
        state.form = {...state.form, ...data}
      },
      resetForm(state){
        //reset form về trạng thái rỗng
        state.form = {};
      }
    },
})


 // Tự động tạo action creators
export const { updateForm, resetForm } = formRegisterHotelMnSlice.actions;

// Xuất reducer
export default formRegisterHotelMnSlice.reducer;