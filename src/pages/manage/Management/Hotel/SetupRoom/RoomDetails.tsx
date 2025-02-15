import { Button, Col, Form, Input, Radio, Row, Select, Space } from "antd";
import { IncreaseDecrease } from "../../../../component";
import { ReactSVG } from 'react-svg';
import {LeftOutlined } from '@ant-design/icons';
import { bedhotel1, bedhotel2, bedhotel3, bedhotel4 } from "../../../../../assets/svgs/svgBedHotel";
import { useNavigate } from "react-router-dom";
const {Option} = Select;
function RoomDetails() {
    const navigate = useNavigate();
    const onFinish = (values:any) => {
        console.log(values)
    }
    const TypeRoom = ["Phòng đơn", "Phòng giường đôi", "Phòng 2 giường đơn", "Phòng giường đôi/2 giường đơn",
        "Phòng 3 người", "Phòng 4 người", "Suite", "Phòng gia đình", "Studio", "Căn hộ", "Phòng tập thể",
        "Giường trong phòng tập thể"
    ]
    return (
        <Space direction="vertical" style={{padding:"60px 200px 60px 200px"}}>
            <h1 style={{fontSize:35}}>Chi tiết phòng</h1>
            <Form onFinish={onFinish} layout="vertical">
                <Space direction="vertical" size={"middle"} style={{width:595}}>
                    <Space direction="vertical" size={1} style={{backgroundColor:"#fff", display:"flex", padding:15}}>
                        <Form.Item initialValue={"Phòng giường đôi"} name={"loaichonghi"} label={<h3>Đây là loại chỗ nghỉ gì?</h3>}>
                            <Select  style={{ width: "100%" }}>
                                {TypeRoom.map((item) => (
                                <Option key={item} value={item}>
                                    {item}
                                </Option>
                                ))}
                            </Select>
                        </Form.Item>
                        <Form.Item rules={[
                            { required: true, message: "Vui lòng nhập số phòng của Quý vị!" }
                        ]} initialValue={1} name={"sophong"} label={<h3>Quý vị có bao nhiêu phòng loại này?</h3>}>
                            <Input min={1} style={{width:100}} type="number" />
                        </Form.Item>
                    </Space>

                    <Space direction="vertical" style={{padding:15, backgroundColor:"#fff"}}>
                        <h3>Có loại giường nào trong phòng này?</h3>
                        <Space style={{display:"flex",width:566,height:70,
                            justifyContent:"space-between",alignItems:"center"}}>
                            <Space>
                                <ReactSVG src={bedhotel1} />
                                <div style={{display:"flex", flexDirection:"column"}}>
                                    <span style={{fontSize:14}}>Giường đơn</span>
                                    <span style={{fontSize:12,color:"#595959"}}>Rộng 90 - 130 cm</span>
                                </div>
                            </Space>
                            <Space>
                                <Form.Item style={{marginTop:20}} name="giuongdon" label={null} initialValue={0}>
                                    <IncreaseDecrease />
                                </Form.Item>
                            </Space> 
                        </Space>
    
                        <Space style={{display:"flex",width:566,height:70,
                            justifyContent:"space-between",alignItems:"center"}}>
                            <Space>
                                <ReactSVG src={bedhotel2} />
                                <div style={{display:"flex", flexDirection:"column"}}>
                                    <span style={{fontSize:14}}>Giường đôi</span>
                                    <span style={{fontSize:12,color:"#595959"}}>Rộng 131 - 150 cm</span>
                                </div>
                            </Space>
                            <Space>
                                <Form.Item style={{marginTop:20}} name="giuongdoi" label={null} initialValue={0}>
                                    <IncreaseDecrease />
                                </Form.Item>
                            </Space> 
                        </Space>
    
                        <Space style={{display:"flex",width:566,height:70,
                            justifyContent:"space-between",alignItems:"center"}}>
                            <Space>
                                <ReactSVG src={bedhotel2} />
                                <div style={{display:"flex", flexDirection:"column"}}>
                                    <span style={{fontSize:14}}>Giường lớn (cỡ King)</span>
                                    <span style={{fontSize:12,color:"#595959"}}>Rộng 151 - 180 cm</span>
                                </div>
                            </Space>
                            <Space>
                                <Form.Item style={{marginTop:20}} name="giuonglon" label={null} initialValue={0}>
                                    <IncreaseDecrease />
                                </Form.Item>
                            </Space> 
                        </Space>
    
                        <Space style={{display:"flex",width:566,height:70,
                            justifyContent:"space-between",alignItems:"center"}}>
                            <Space>
                                <ReactSVG src={bedhotel2} />
                                <div style={{display:"flex", flexDirection:"column"}}>
                                    <span style={{fontSize:14}}>Giường cực lớn (cỡ Super-king)</span>
                                    <span style={{fontSize:12,color:"#595959"}}>Rộng 181 - 210 cm</span>
                                </div>
                            </Space>
                            <Space>
                                <Form.Item style={{marginTop:20}} name="giuongcuclon" label={null} initialValue={0}>
                                    <IncreaseDecrease />
                                </Form.Item>
                            </Space> 
                        </Space>
    
                        <Space style={{display:"flex",width:566,height:70,
                            justifyContent:"space-between",alignItems:"center"}}>
                            <Space>
                                <ReactSVG src={bedhotel3} />
                                <div style={{display:"flex", flexDirection:"column"}}>
                                    <span style={{fontSize:14}}>Giường tầng</span>
                                    <span style={{fontSize:12,color:"#595959"}}>Nhiều kích cỡ</span>
                                </div>
                            </Space>
                            <Space>
                                <Form.Item style={{marginTop:20}} name="giuongtang" label={null} initialValue={0}>
                                    <IncreaseDecrease />
                                </Form.Item>
                            </Space> 
                        </Space>
    
                        <Space style={{display:"flex",width:566,height:70,
                            justifyContent:"space-between",alignItems:"center"}}>
                            <Space>
                                <ReactSVG src={bedhotel4} />
                                <div style={{display:"flex", flexDirection:"column"}}>
                                    <span style={{fontSize:14}}>Giường sofa</span>
                                    <span style={{fontSize:12,color:"#595959"}}>Nhiều kích cỡ</span>
                                </div>
                            </Space>
                            <Space>
                                <Form.Item style={{marginTop:20}} name="giuongsofa" label={null} initialValue={0}>
                                    <IncreaseDecrease />
                                </Form.Item>
                            </Space> 
                        </Space>
    
                        <Space style={{display:"flex",width:566,height:70,
                            justifyContent:"space-between",alignItems:"center"}}>
                            <Space>
                                <ReactSVG src={bedhotel2} />
                                <div style={{display:"flex", flexDirection:"column"}}>
                                    <span style={{fontSize:14}}>Nệm Futon</span>
                                    <span style={{fontSize:12,color:"#595959"}}>Nhiều kích cỡ</span>
                                </div>
                            </Space>
                            <Space>
                                <Form.Item style={{marginTop:20}} name="giuongfuton" label={null} initialValue={0}>
                                    <IncreaseDecrease />
                                </Form.Item>
                            </Space> 
                        </Space>
                    </Space>

                    <Space direction="vertical" size={1} style={{backgroundColor:"#fff", display:"flex", padding:15}}>
                            <Form.Item initialValue={1} name={"soluongkhach"} label={<h3>Bao nhiêu khách có thể nghỉ ở phòng này?</h3>}>
                                <IncreaseDecrease />
                            </Form.Item>
                    </Space>

                    <Space direction="vertical" size={1} style={{backgroundColor:"#fff", display:"flex", padding:15}}>
                            <h3 style={{marginBottom:10}}>Phòng này rộng bao nhiêu?</h3>
                            <span style={{fontWeight:500}}>Diện tích phòng - không bắt buộc</span>
                            <Space style={{marginTop:10}}>
                                <Form.Item rules={[
                                    { required: false, message: "Vui lòng điền diện tích phòng của Quý vị!" }
                                ]} name={"dientichphong"} label={""}>
                                    <Input min={1} style={{width:200}} type="number" />
                                </Form.Item>
                                <Form.Item initialValue={"met"} name={"donvido"} label="">
                                    <Select style={{width:150}}>
                                        <Option value="met" >mét vuông</Option>
                                        <Option value="feet" >feet vuông</Option>
                                    </Select>
                                </Form.Item>
                            </Space>
                            <Form.Item initialValue={"no"} name="issmoking" label={<h3>Có được hút thuốc trong phòng này không?</h3>}>
                                <Radio.Group>
                                    <Radio value="yes">Có</Radio>
                                    <Radio value="no">Không</Radio>
                                </Radio.Group>
                            </Form.Item>
                    </Space>

                    <Form.Item style={{width:585}}>
                        <Row>
                            <Col span={3}><Button onClick={()=>{navigate(-1)}} style={{padding:18}} icon={<LeftOutlined />} block></Button></Col>
                            <Col span={21}><Button onClick={()=>{navigate('/manage/register-hotel/setup-room/bath-room')}}
                            type="primary" htmlType="submit" style={{marginLeft:10,padding:18}} block>Tiếp tục</Button></Col>
                        </Row>
                    </Form.Item>
                </Space>
            </Form>
        </Space>
      );
}

export default RoomDetails;