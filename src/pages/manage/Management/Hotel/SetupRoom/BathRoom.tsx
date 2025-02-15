import { Button, Checkbox, Col, Divider, Form, Radio, Row, Space } from "antd";
import {LeftOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

function BathRoom() {
    const navigate = useNavigate();
    const vatdung = ["Giấy vệ sinh", "Vòi sen", "Nhà vệ sinh", "Máy sấy tóc", "Bồn tắm", 
        "Đồ vệ sinh cá nhân miễn phí", "Chậu rửa vệ sinh (bidet)", "Dép", "Áo choàng tắm",
        "Bồn tắm spa"
    ]
    const onFinish = (values:any) => {
        console.log("Received values of form:", values);
        navigate('/manage/register-hotel/setup-room/room-amenities')
    };
    return ( 
        <Space direction="vertical" style={{padding:"40px 200px 0px 200px"}}>
            <h1 style={{fontSize:35}}>Thông tin phòng tắm</h1>
            <Form layout="vertical" onFinish={onFinish} >
                <Space direction="vertical" style={{backgroundColor:"#fff", padding:15, width:600}}>
                    <Form.Item initialValue={"yes"} name="phongtamrieng" label={<h3>Đây có phải phòng tắm riêng không?</h3>}>
                        <Radio.Group>
                            <Space direction="vertical">
                                <Radio value="yes">Đúng</Radio>
                                <Radio value="no">Không phải, đây là phòng tắm chung</Radio>
                            </Space>
                        </Radio.Group>
                    </Form.Item>
                    <Divider style={{margin:"10px 0px 10px 0px"}} />
                    <Form.Item name={"vatdungbathroom"} label={<h3>Phòng tắm trong phòng này có vật dụng gì?</h3>}>
                        <Checkbox.Group>
                            <Space size={1} direction="vertical">
                            {vatdung.map((item) => (
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
                </Space>
            </Form>
        </Space>
     );
}

export default BathRoom;