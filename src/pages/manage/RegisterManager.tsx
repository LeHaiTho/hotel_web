import { Button, Divider, Input, Space } from "antd";
import { APP1, COLORS } from "../../constants/constants";
import { useNavigate } from "react-router-dom";

function RegisterManager() {
    const navigate = useNavigate();
    return ( 
        <div style={{display:"flex", justifyContent:"center", backgroundColor:"#fff", paddingTop:40}}>
                <Space direction="vertical" style={{width:350}}>
                    <h2>Tạo tài khoản đối tác</h2>
                    <span>Tạo tài khoản để đăng ký và quản lý chỗ nghỉ.</span>
                    <span style={{fontWeight:600}}>Địa chỉ email</span>
                    <Input placeholder="nhập địa chỉ email..."></Input>
                    <Button type="primary" style={{width:"100%", padding:18}} 
                    onClick={()=>navigate("/manage/contact-info")}
                    >Tiếp tục</Button>
                    <Divider style={{margin:"10px 0px 10px 0px"}} />
                    <span style={{fontSize:13, textAlign:"center", display:"block"}}
                    >Quý vị có thắc mắc về chỗ nghỉ của mình hay extranet? Hãy ghé thăm <span style={{color:COLORS.BACKGROUND, cursor:"pointer"}}>Trung tâm Trợ giúp Đối tác</span> để tìm hiểu thêm</span>
                    <Button type="default" style={{width:"100%",padding:18}} >Đăng nhập</Button>
                    <Divider style={{margin:"10px 0px 10px 0px"}} />
                    <span style={{fontSize:13, textAlign:"center", display:"block"}}
                    >Qua việc đăng nhập hoặc tạo tài khoản bạn đồng ý với các <span style={{color:COLORS.BACKGROUND, cursor:"pointer"}}>Điều khoản và Điều kiện</span> cũng như <span style={{color:COLORS.BACKGROUND, cursor:"pointer"}}>Chính sách An toàn và Bảo mật</span> của chúng tôi.</span>
                    <Divider style={{margin:"10px 0px 10px 0px"}} />
                    <span style={{fontSize:13, textAlign:"center",display:"block"}} >Bảo lưu mọi quyền</span>
                    <span style={{fontSize:13, textAlign:"center",display:"block"}} >Bản quyền (2006-2025)- {APP1.name}</span>
                </Space>
        </div>
     );
}

export default RegisterManager;