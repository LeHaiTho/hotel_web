import { Button, Divider, Input, Space } from "antd";
import { APP1 } from "../../constants/constants";
import 'react-phone-number-input/style.css'
import PhoneNumberInput from 'react-phone-number-input';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ContactInfoManager() {
    const [value, setValue] = useState('+84');
    const handleChange = (phone:any) => {
        console.log(phone)
        setValue(phone);
    };
    const navigate = useNavigate();
    return (  
        <div style={{display:"flex", justifyContent:"center", backgroundColor:"#fff", paddingTop:40}}>
                <Space direction="vertical" style={{width:350}}>
                    <h2>Thông tin liên lạc</h2>
                    <span>Để tài khoản {APP1.name} của bạn được bảo mật chúng tôi cần biết họ tên đầy đủ và số điện thoại của bạn</span>
                    <span style={{fontWeight:600}}>Tên</span>
                    <Input placeholder={"Nhập tên của bạn..."}></Input>
                    <span style={{fontWeight:600}}>Họ</span>
                    <Input placeholder={"Nhập họ của bạn..."}></Input>
                    <span style={{fontWeight:600}}>Số điện thoại</span>
                    {/* Chọn mã vùng quốc tế  */}
                    <PhoneNumberInput
                        international
                        defaultCountry="VN" // Mã vùng mặc định cho Việt Nam
                        value={value}
                        onChange={handleChange}
                    />
                    <Space.Compact>
                        <Input style={{ width: '20%' }} value={value} defaultValue="+84" />
                        <Input style={{ width: '80%' }} placeholder="Nhập số điện thoại ..." />
                    </Space.Compact>
                    <span style={{fontSize:13}}>Chúng tôi sẽ gửi mã xác thực 2 yếu tố đến số này khi Quý vị đăng nhập.</span>
                    <Button type="primary" style={{width:"100%", padding:18}} 
                    onClick={()=>navigate('/manage/create-password')} >Tiếp theo</Button>
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

export default ContactInfoManager;