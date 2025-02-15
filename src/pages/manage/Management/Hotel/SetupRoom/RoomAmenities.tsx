import { Button, Checkbox, Col, Divider, Form, Row, Space } from "antd";
import {LeftOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

function RoomAmenities() {
    const navigate = useNavigate();
    const tiennghichung = ["Giá treo quần áo", "TV màn hình phẳng", "Điều hòa không khí", 
        "Ra trải giường", "Bàn làm việc", "Dịch vụ báo thức", "Khăn tắm", "Tủ hoặc phòng để quần áo",
        "Hệ thống sưởi", "Quạt máy", "Két an toàn", "Khăn tắm/Bộ khăn trải giường (có thu phí)", 
        "Hoàn toàn nằm ở tầng trệt"
    ]
    const khonggian = ["Ban công", "Sân hiên", "Tầm nhìn ra khung cảnh"]

    const doan = ["Ấm đun nước điện", "Máy pha trà/cà phê", "Khu vực phòng ăn", "Bàn ăn", "Lò vi sóng"]
    const onFinish = (values:any) => {
        console.log("Received values of form:", values);
        navigate('/manage/register-hotel/setup-room/name-room')
    };
    return ( 
        <Space direction="vertical" style={{padding:"60px 200px 60px 200px"}}>
            <h1 style={{fontSize:35}}>Khách có thể sử dụng gì trong phòng này?</h1>
            <Form onFinish={onFinish} layout="vertical" style={{backgroundColor:"#fff", padding:15, width:500}}>
                <Form.Item name={"tiennghichung"} label={<h3>Tiện nghi chung</h3>}>
                    <Checkbox.Group>
                        <Space size={1} direction="vertical">
                        {tiennghichung.map((item:any) => (
                            <Checkbox key={item} value={item}>{item}</Checkbox>
                        ))}
                        </Space>
                    </Checkbox.Group>
                </Form.Item>
                <Divider style={{margin:"10px 0px 10px 0px"}} />
                <Form.Item name={"khonggian"} label={<h3>Không gian ngoài trời và tầm nhìn</h3>}>
                    <Checkbox.Group>
                        <Space size={1} direction="vertical">
                        {khonggian.map((item:any) => (
                            <Checkbox key={item} value={item}>{item}</Checkbox>
                        ))}
                        </Space>
                    </Checkbox.Group>
                </Form.Item>
                <Divider style={{margin:"10px 0px 10px 0px"}} />
                <Form.Item name={"doan"} label={<h3>Đồ ăn thức uống</h3>}>
                    <Checkbox.Group>
                        <Space size={1} direction="vertical">
                        {doan.map((item:any) => (
                            <Checkbox key={item} value={item}>{item}</Checkbox>
                        ))}
                        </Space>
                    </Checkbox.Group>
                </Form.Item>

                <Form.Item>
                    <Row>
                        <Col span={3}><Button onClick={()=>{navigate(-1)}} style={{padding:18}} icon={<LeftOutlined />} block></Button></Col>
                        <Col span={21}><Button
                        type="primary" htmlType="submit" style={{marginLeft:10,padding:18}} block>Tiếp tục</Button></Col>
                    </Row>
                </Form.Item>
            </Form>
        </Space>
     );
}

export default RoomAmenities;