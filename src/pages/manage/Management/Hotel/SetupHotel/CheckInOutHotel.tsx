import { Button, Col, Divider, Form, Radio, Row, Select, Space } from "antd";
import {LeftOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { COLORS } from "../../../../../constants/constants";
const { Option } = Select;


function Check_In_Out_Hotel() {
    // lấy token lên để tránh copy link vào trang 
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    // Tạo danh sách giờ từ 00:00 đến 24:00
    const hours = Array.from({ length: 24 }, (_, i) => {
        const hour = i.toString().padStart(2, "0") + ":00";
        return hour;
    });
    const onFinish = (values:any) => {
        console.log("Form submitted:", values);
        navigate(`/manage/register-hotel/setup-hotel/multi-step-hotel?token=${token}`)
    }
    return ( 
        <Space direction="vertical" style={{padding:"60px 200px 60px 200px"}}>
            {/* Thanh tiến trình  */}
                                          <Row style={{position:"fixed", top:64, right:0, left:0, display:"flex", zIndex:2}}>
                                                    <Col span={3}>
                                                        <div style={{height:8, backgroundColor:COLORS.BUTTON, width:"98%"}}></div>
                                                    </Col>
                                                    <Col span={3}>
                                                        <div style={{height:8, backgroundColor:COLORS.BUTTON, width:"98%"}}></div>
                                                    </Col>
                                                    <Col span={3}>
                                                        <div style={{height:8, backgroundColor:COLORS.BUTTON, width:"98%"}}></div>
                                                    </Col>
                                                    <Col span={3}>
                                                        <div style={{height:8, backgroundColor:COLORS.BUTTON, width:"98%"}}></div>
                                                    </Col>
                                                    <Col span={3}>
                                                        <div style={{height:8, backgroundColor:COLORS.BUTTON, width:"98%"}}></div>
                                                    </Col>
                                                    <Col span={3}>
                                                        <div style={{height:8, backgroundColor:COLORS.BUTTON, width:"98%"}}></div>
                                                    </Col>
                                                    <Col span={3}>
                                                        <div style={{height:8, backgroundColor:COLORS.BUTTON, width:"98%"}}></div>
                                                    </Col>
                                                    <Col span={3}>
                                                        <div style={{height:8, backgroundColor:COLORS.BUTTON, width:"100%"}}></div>
                                                    </Col>
                                                </Row>
            <h1 style={{fontSize:35}}>Quy định chung</h1>

            <Space direction="vertical" style={{backgroundColor:"#fff", width:500, padding:20}}>
                <h3 style={{margin:"10px 0px 10px 0px"}}>Giờ nhận/trả phòng của Quý vị là khi nào?</h3>
                <Form layout="vertical" onFinish={onFinish}>
                    <h3 style={{margin:"10px 0px 10px 0px"}}>Nhận phòng</h3>
                    <Space style={{display:"flex", justifyContent:"space-between"}}>
                        <Form.Item initialValue={"12:00"} name={"checkinfrom"} label={<span style={{fontWeight:500}}>Từ</span>}>
                            <Select  style={{ width: 220 }}>
                                {hours.map((hour) => (
                                <Option key={hour} value={hour}>
                                    {hour}
                                </Option>
                                ))}
                            </Select>
                        </Form.Item>

                        <Form.Item initialValue={"12:00"} name={"checkinto"} label={<span style={{fontWeight:500}}>Đến</span>}>
                            <Select style={{ width: 220 }}>
                                {hours.map((hour) => (
                                <Option key={hour} value={hour}>
                                    {hour}
                                </Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Space>

                    <h3>Trả phòng</h3>
                    <Space style={{display:"flex", justifyContent:"space-between"}}>
                        <Form.Item initialValue={"12:00"} name={"checkoutfrom"} label={<span style={{fontWeight:500}}>Từ</span>}>
                            <Select  style={{ width: 220 }}>
                                {hours.map((hour) => (
                                <Option key={hour} value={hour}>
                                    {hour}
                                </Option>
                                ))}
                            </Select>
                        </Form.Item>

                        <Form.Item initialValue={"12:00"} name={"checkoutto"} label={<span style={{fontWeight:500}}>Đến</span>}>
                            <Select style={{ width: 220 }}>
                                {hours.map((hour) => (
                                <Option key={hour} value={hour}>
                                    {hour}
                                </Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Space>
                    <Divider style={{margin:"20px 0px 20px 0px"}} />

                    <Form.Item initialValue={true} name={"ischildren"} label={<span style={{fontWeight:500}}>Quý vị có tiếp đón trẻ em không?</span>}>
                        <Radio.Group>
                            <Space direction="vertical">
                                <Radio value={true}>Có</Radio>
                                <Radio value={false}>Không</Radio>
                            </Space>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item initialValue={true} name={"isAnimal"} label={<span style={{fontWeight:500}}>Quý vị có cho phép vật nuôi không?</span>}>
                        <Radio.Group>
                            <Space direction="vertical">
                                <Radio value={true}>Có</Radio>
                                <Radio value={false}>Không</Radio>
                            </Space>
                        </Radio.Group>
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
        </Space>
     );
}

export default Check_In_Out_Hotel;