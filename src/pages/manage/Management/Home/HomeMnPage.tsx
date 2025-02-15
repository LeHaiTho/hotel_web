import { Button, Col, Divider, Row, Space } from "antd";
import { APP1, COLORS } from "../../../../constants/constants";
import { ArrowDownOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

function HomeMnPage() {
    const navigate = useNavigate();
    // lấy token lên để tránh copy link vào trang 
    const token = localStorage.getItem('token');
    return ( 
        <Space direction="vertical" style={{display:"flex", backgroundColor:"#f2f2f2", padding:"50px 100px 100px 100px"}}>
            <Space style={{display:"flex",justifyContent:"space-between"}}>
                <h1>Trang chủ Nhóm chỗ nghỉ</h1>
                <Button onClick={()=>{navigate(`/manage/register-hotel/type?token=${token}`)}}
                style={{backgroundColor:COLORS.BUTTON, padding:18}} type="primary">Thêm chỗ nghỉ mới</Button>
            </Space>
            <h2 style={{marginTop:40}}>Chỗ nghỉ chưa có trên {APP1.name} (1)</h2>
            <span>Phát triển kinh doanh bằng cách thêm các chỗ nghỉ này vào nền tảng du lịch trực tuyến lớn nhất thế giới, {APP1.name}.</span>
            <Space direction="vertical" size={1} style={{backgroundColor:"#fff",marginTop:10, display:"flex"}}>
                <Row gutter={10} style={{ padding:"5px 10px 5px 10px"}}>
                    <Col style={{fontWeight:600}} span={6}>Tên <ArrowDownOutlined /></Col>
                    <Col style={{fontWeight:600}} span={4}>Vị trí</Col>
                    <Col style={{fontWeight:600}} span={6}>Tiến trình đăng ký</Col>
                    <Col style={{fontWeight:600}} span={8}>Hành động</Col>
                    <Divider style={{margin:"5px 0px 0px 0px"}} />
                </Row>
                <Row gutter={10} style={{ padding:10}}>
                    <Col style={{fontWeight:600}} span={6}>top 1 đa cấp</Col>
                    <Col style={{fontWeight:600}} span={4}>Việt Nam</Col>
                    <Col style={{fontWeight:600}} span={6}>Tiến trình đăng ký</Col>
                    <Col style={{fontWeight:600}} span={8}>Hành động</Col>
                </Row>
            </Space>
        </Space>
     );
}

export default HomeMnPage;