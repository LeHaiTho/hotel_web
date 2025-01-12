import { Button, Divider, Input, Space } from "antd";
import { APP1 } from "../../constants/constants";
import { useNavigate } from "react-router-dom";

function CreatePasswordManager() {
    const navigate = useNavigate();
    return ( 
        <div style={{display:"flex", justifyContent:"center", backgroundColor:"#fff", paddingTop:40}}>
                <Space direction="vertical" style={{width:350}}>
                    <h2>Tạo mật khẩu</h2>
                    <span>Dùng ít nhất 10 ký tự trong đó có chữ hoa, chữ thường và số</span>
                    <span style={{fontWeight:600}}>Mật khẩu</span>
                    <Input.Password />
                    <span style={{fontWeight:600}}>Xác nhận mật khẩu</span>
                    <Input.Password />
                    <Button type="primary" style={{width:"100%", padding:18}} 
                    onClick={()=>navigate('/manage/verify-account')}>Tạo tài khoản</Button>
                    <Divider style={{margin:"10px 0px 10px 0px"}} />
                    <span style={{fontSize:13, textAlign:"center", display:"block"}}
                    >Qua việc đăng nhập hoặc tạo tài khoản bạn đồng ý với các Điều khoản và Điều kiện cũng như Chính sách An toàn và Bảo mật của chúng tôi.</span>
                    <Divider style={{margin:"10px 0px 10px 0px"}} />
                    <span style={{fontSize:13, textAlign:"center",display:"block"}} >Bảo lưu mọi quyền</span>
                    <span style={{fontSize:13, textAlign:"center",display:"block"}} >Bản quyền (2006-2025)- {APP1.name}</span>
                </Space>
        </div>
     );
}

export default CreatePasswordManager;