import { Button, Col, Divider, Form, Row, Select, Space } from "antd";
import { CurrencyInput } from "../../../../component";
import { useForm } from "antd/es/form/Form";
import {CheckOutlined, LeftOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { APP1 } from "../../../../../constants/constants";

const {Option} = Select;

function NameRoom() {
    const [form] = useForm();
    const navigate = useNavigate();
    const nameroom = ["Phòng Giường Đôi", "Phòng Giường Đôi Có Phòng Tắm Riêng", "Phòng Business 1 Giường Đôi với Quyền sử dụng Phòng tập thể dục.",
        "Phòng Có Giường Cỡ Queen Nhìn Ra Hồ Bơi ", "Phòng Deluxe Giường Đôi" , "Phòng Tiêu Chuẩn Có Giường Cỡ King",
        "Phòng Có Giường Cỡ King - Phù Hợp Cho Khách Khuyết Tật", "Phòng Có Giường Cỡ King", "Phòng Có Giường Cỡ King Nhìn Ra Biển",
        "Phòng Có Giường Cỡ King Nhìn Ra Hồ Bơi", "Phòng Có Giường Cỡ King Nhìn Ra Hồ Nước", "Phòng Có Giường Cỡ King Nhìn Ra Vườn",
        "Phòng Có Giường Cỡ King Với Ban Công","Phòng Có Giường Cỡ King Với Phòng Tắm Phù Hợp Cho Người Đi Xe Lăn - Phù Hợp Cho Khách Khuyết Tật",
        "Phòng Có Giường Cỡ Queen", "Phòng Có Giường Cỡ Queen - Phù Hợp Cho Khách Khuyết Tật", "Phòng Có Giường Cỡ Queen Nhìn Ra Biển",
        "Phòng Có Giường Cỡ Queen Nhìn Ra Vườn", "Phòng Có Giường Cỡ Queen Và Bồn Tắm Spa", "Phòng Có Giường Cỡ Queen Với Ban Công",
        "Phòng Có Giường Cỡ Queen Với Phòng Tắm Chung", "Phòng Deluxe", "Phòng Deluxe (1) Người lớn + 1 Trẻ em)",
        "Phòng Deluxe (1 người lớn + 2 trẻ em)", "Phòng Deluxe (2 Người lớn + 1 Trẻ em)", "Phòng Deluxe Có Giường Cỡ Queen",
        "Phòng Deluxe Có Giường Cỡ King", "Phòng Deluxe Giường Đôi (1 người lớn + 1 trẻ em)", "Phòng Deluxe Giường Đôi Có Vòi Sen",
        "Phòng Deluxe Giường Đôi Có Ban Công", "Phòng Deluxe Giường Đôi Có Bồn Tắm", "Phòng Deluxe Giường Đôi Kèm Giường Phụ",
        "Phòng Deluxe Giường Đôi Nhìn Ra Biển","Phòng Deluxe Giường Đôi Nhìn Ra Biển Từ Phía Bên Cạnh", "Phòng Deluxe Giường Đôi Với Ban Công và Tầm Nhìn Ra Biển",
        "Phòng Deluxe Giường Đôi/2 Giường Đơn","Phòng Deluxe Giường đôi (1 người lớn + 2 trẻ em)","Phòng Deluxe Đôi Nhìn ra Lâu đài",
        "Phòng Giường Đôi (1 Người lớn + 1 Trẻ em)","Phòng Giường Đôi - Có thiết kế cho Khách khuyết tật","Phòng Giường Đôi Có Ban Công",
        "Phòng Giường Đôi Có Ban Công (2) Người Lớn + 1 Trẻ Em)","Phòng Giường Đôi Có Ban Công (3 Người Lớn)","Phòng Giường Đôi Có Bồn Tắm Spa",
        "Phòng Giường Đôi Có Giường Phụ","Phòng Giường Đôi Có Sân Hiên","Phòng Giường Đôi Có Sân Trong","Phòng Giường Đôi Hạng Bình Dân",
        "Phòng Giường Đôi Hạng Tiết Kiệm","Phòng Giường Đôi Lớn", "Phòng Giường Đôi Nhìn Ra Biển","Phòng Giường Đôi Nhìn Ra Hồ Bơi",
        "Phòng Giường Đôi Nhìn Ra Hồ Nước", "Phòng Giường Đôi Nhìn Ra Núi", "Phòng Giường Đôi Nhìn Ra Vườn", "Phòng Giường Đôi Nhỏ",
        "Phòng Giường Đôi Với Phòng Tắm Chung","Phòng Giường Đôi Với Phòng Tắm Riêng Bên Ngoài","Phòng Giường Đôi có Ban công và Nhìn ra Biển",
        "Phòng Giường Đôi với Nhà vệ sinh Chung","Phòng Giường đôi Deluxe (2 Người lớn + 1 Trẻ em)","Phòng Superior Có Giường Cỡ King",
        "Phòng Superior Có Giường Cỡ Queen","Phòng Superior Giường Đôi","Phòng Tiêu Chuẩn Có Giường Cỡ Queen","Phòng Tiêu Chuẩn Giường Đôi",
        "Phòng Tiêu Chuẩn Giường Đôi Có Quạt Máy","Phòng Tiêu Chuẩn Giường Đôi Với Phòng Tắm Chung","Phòng có giường cỡ King với Bồn tắm Spa",
        "Phòng có giường cỡ King nhìn ra cảnh núi non"
    ]
    const onFinish = () => {
       
    }
    return ( 
        <Space direction="vertical" style={{padding:"60px 200px 60px 200px"}}>
            <h1 style={{fontSize:35}}>Tên của phòng này là gì?</h1>
            <Space direction="vertical" style={{width:750, backgroundColor:"#fff", padding:15}}>
                <span>Đây là tên mà khách sẽ thấy trên trang chỗ nghỉ của Quý vị. Hãy chọn tên miêu tả phòng này chính xác nhất.</span>
                <Form onFinish={onFinish} form={form} layout="vertical">
                    <Form.Item initialValue={"Phòng giường đôi"} name={"nameroom"} label={<span style={{fontWeight:500}}>Tên phòng</span>}>
                        <Select  style={{ width: "100%" }}>
                            {nameroom.map((item) => (
                            <Option key={item} value={item}>
                                {item}
                            </Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <h3 style={{marginBottom:10}}>Thiết lập giá mỗi đêm cho phòng này</h3>
                    <span style={{fontWeight:600, marginBottom:10}}>Quý vị muốn thu bao nhiêu tiền mỗi đêm?</span>
                    <Form.Item name={"sotien"} label={<span>Số tiền khách trả</span>}>
                            <CurrencyInput styleprop={{width:"100%"}}  value={form.getFieldValue("sotien")} // Lấy giá trị từ Form
                                onchange={(value) => form.setFieldsValue({ sotien: value })} />
                    </Form.Item>
                    <Space style={{margin:"0px 10px 10px 10px"}} size={1} direction="vertical">
                            <span>Bao gồm các loại thuế, phí và hoa hồng</span>
                            <span>15,00% <span style={{fontWeight:500}}>Hoa hồng cho {APP1.name}</span></span>
                            <span style={{marginLeft:30}}><CheckOutlined style={{color:"#008234"}} /> Trợ giúp 24/7 bằng ngôn ngữ của Quý vị</span>
                            <span style={{marginLeft:30}}><CheckOutlined style={{color:"#008234"}} /> Tiết kiệm thời gian với đặt phòng được xác nhận tự động</span>
                            <span style={{marginLeft:30}}><CheckOutlined style={{color:"#008234"}} /> Chúng tôi sẽ quảng bá chỗ nghỉ của Quý vị trên Google</span>
                            <Divider style={{margin:"10px 0px 10px 0px"}} />
                            <span>VND <span style={{fontWeight:500}}>{form.getFieldValue("sotien")}</span> Doanh thu của Quý vị (bao gồm thuế)</span>
                    </Space>
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

export default NameRoom;