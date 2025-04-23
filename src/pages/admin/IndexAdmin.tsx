import { Col, Row, Space } from "antd";
import {images} from "../../assets/images"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function IndexAdmin() {

    // Dữ liệu giả lập dựa trên biểu đồ bạn cung cấp (doanh thu hàng ngày, đơn vị: triệu đồng)
    const data = [
        { date: '1/3', revenue: 5 },
        { date: '2/3', revenue: 10 },
        { date: '3/3', revenue: 15 },
        { date: '4/3', revenue: 18 },
        { date: '5/3', revenue: 3 },
        { date: '6/3', revenue: 7 },
        { date: '7/3', revenue: 8 },
        { date: '8/3', revenue: 10 },
        { date: '9/3', revenue: 12 },
        { date: '10/3', revenue: 5 },
        { date: '11/3', revenue: 8 },
        { date: '12/3', revenue: 11 },
        { date: '13/3', revenue: 7 },
        { date: '14/3', revenue: 10 },
        { date: '15/3', revenue: 12 },
        { date: '16/3', revenue: 8 },
        { date: '17/3', revenue: 10 },
        { date: '18/3', revenue: 6 },
        { date: '19/3', revenue: 2 },
        { date: '20/3', revenue: 0 },
    ];

    return (
        <div style={{padding:20}}>
            <Row>
                <Col span={11} style={{backgroundColor:"#fff", padding:10}}>
                    <Row>
                        <Col span={12}>
                            <Space>
                                <img style={{backgroundColor:"#e3f5fe"}} src={images.butviet} width={80} height={80} alt="anh" />
                                <Space direction="vertical">
                                    <span style={{fontSize:20, fontWeight:600, color:"gray"}}>Đơn hàng</span>
                                    <span style={{fontWeight:600, fontSize:18}}>680.987</span>
                                </Space> 
                            </Space>
                        </Col>
                        <Col span={12}>
                            <Space>
                                <img style={{backgroundColor:"#e6f2f2"}} src={images.maytinh} width={80} height={80} alt="anh" />
                                <Space direction="vertical">
                                    <span style={{fontSize:20, fontWeight:600, color:"gray"}}>Doanh thu</span>
                                    <span style={{fontWeight:600, fontSize:18}}>5,680,000$</span>
                                </Space> 
                            </Space>
                        </Col>
                    </Row>

                    <Row style={{paddingTop:20}}>
                        <Col span={12}>
                            <Space>
                                <img style={{backgroundColor:"#f6eafe"}} src={images.tien_1} width={80} height={80} alt="anh" />
                                <Space direction="vertical">
                                    <span style={{fontSize:20, fontWeight:600, color:"gray"}}>Tiền mặt</span>
                                    <span style={{fontWeight:600, fontSize:18}}>2,500,000$</span>
                                </Space> 
                            </Space>
                        </Col>
                        <Col span={12}>
                            <Space>
                                <img style={{backgroundColor:"#fce9eb"}} src={images.dongho} width={80} height={80} alt="anh" />
                                <Space direction="vertical">
                                    <span style={{fontSize:20, fontWeight:600, color:"gray"}}>Tài khoản khác</span>
                                    <span style={{fontWeight:600, fontSize:18}}>47.653</span>
                                </Space> 
                            </Space>
                        </Col>
                    </Row>
                </Col>

                <Col span={1}></Col>
                {/* Group 2  */}
                <Col span={12} style={{backgroundColor:"#fff", padding:10}}>
                    <Row>
                        <Col span={12}>
                            <Space>
                                <img style={{backgroundColor:"#fff2ec"}} src={images.phantram} width={80} height={80} alt="anh" />
                                <Space direction="vertical">
                                    <span style={{fontSize:20, fontWeight:600, color:"gray"}}>Chưa thanh toán</span>
                                    <span style={{fontWeight:600, fontSize:18}}>32%</span>
                                </Space> 
                            </Space>
                        </Col>

                        <Col span={12}>
                            <Space>
                                <img style={{backgroundColor:"#f8edf3"}} src={images.giuong} width={80} height={80} alt="anh" />
                                <Space direction="vertical">
                                    <span style={{fontSize:20, fontWeight:600, color:"gray"}}>Giường sử dụng</span>
                                    <span style={{fontWeight:600, fontSize:18}}>32.000/40000</span>
                                </Space> 
                            </Space>
                        </Col>
                    </Row>

                    <Row style={{paddingTop:20}}>
                        <Col span={12}>
                            <Space>
                                <img style={{backgroundColor:"#fff5e2"}} src={images.logodichvu} width={80} height={80} alt="anh" />
                                <Space direction="vertical">
                                    <span style={{fontSize:20, fontWeight:600, color:"gray"}}>Tổng doanh thu</span>
                                    <span style={{fontWeight:600, fontSize:18}}>125,340,000$</span>
                                </Space> 
                            </Space>
                        </Col>
                        
                        <Col span={12}>
                        
                        </Col>
                    </Row>
                </Col>
            </Row>
            
        
            
            

            {/* Biểu đồ  */}
            <div style={{ width: '100%', height: 400 }}>
      <Space style={{display:"flex", justifyContent:"space-between",padding:"0px 20px 0px 20px", alignItems:"center", marginTop:20, marginBottom:20}}>
          <h3 style={{color:"#575bb2"}}>Doanh thu tháng này</h3>
          <p style={{  color: 'gray', fontWeight:"bold" }}>Tổng doanh thu: <span style={{color:"red"}}>300,000,000 đ</span></p>
      </Space>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis label={{ value: 'Triệu đồng', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Bar dataKey="revenue" fill="#00C49F" />
        </BarChart>
      </ResponsiveContainer>
    </div>
        </div>
    );
}
export default IndexAdmin;