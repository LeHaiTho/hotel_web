import { Space } from "antd";

function VerifyAccountManager() {
    return ( 
        <div style={{display:"flex", justifyContent:"flex-start", backgroundColor:"#cecece",width:"auto" ,height:"100vh", marginTop:-64,padding:80}}>
                <Space direction="vertical" style={{width:600}}>
                    <h1>Xác minh tài khoản</h1>
                    <Space direction="vertical" style={{
                        backgroundColor:"#fff", padding:"15px 30px 15px 30px", lineHeight:"1.5", textAlign:"justify",
                        fontSize:20
                        }}>
                        <span >Chúng tôi đã gửi email có đường dẫn xác minh đến <span style={{fontWeight:500}}>thien@gmail.com</span></span>
                        <span>Để xác minh tài khoản vui lòng nhấn đường dẫn trong email chúng tôi vừa gửi</span>
                    </Space>
                </Space>
        </div>
     );
}

export default VerifyAccountManager;