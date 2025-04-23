import { Avatar, Layout, Menu, Space } from "antd";
import { APP1 } from "../../constants/constants";
interface Prop {
    children?: React.ReactNode; // Nội dung hiển thị trong layout
}
import {DownOutlined, HomeOutlined, PhoneOutlined, QuestionCircleOutlined, UserOutlined} from '@ant-design/icons'
import { useNavigate } from "react-router-dom";

function AdminLayout(prop:Prop) {
    const navigate = useNavigate();
    const {children} = prop;
    const itemMenu = [
        {key: '0', label: 'Trang chủ', icon:<HomeOutlined />},
        {key: '1', label: 'Tài khoản', icon:<UserOutlined />, children: [
            {key: '1_0', label:'Người dùng', onclick: () => navigate('/admin/home/home-index')},
            {key: '1_1', label:'Quản lý'},
        ]},
        {key: '2', label: 'Kinh doanh'},
        {key: '3', label: 'Lễ tân'},
        {key: '4', label: 'Buồng phòng'},
        {key: '5', label: 'Báo cáo'},
        {key: '6', label: 'Cấu hình hệ thống'},
        {key: '7', label: 'Chanel Manager'},
        {key: '8', label: 'Danh mục'},
        {key: '9', label: 'Kho hàng'},
        {key: '10', label: 'Quản lý quý'},
        {key: '11', label: 'MNQQ'},
    ]
    return ( 
        <Layout style={{minHeight:"100vh"}}>
            <Layout.Sider style={{position:"fixed", left:0, top:0, bottom:0}}>
                <div style={{height:64,display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <h1 style={{color:"#fff"}}>{APP1.name}</h1>
                </div>
                <Menu theme="dark" items={itemMenu} mode="inline">
                    {/* Menu điều hướng */}
                </Menu>
            </Layout.Sider>
            <Layout>
                <Layout.Header style={{marginLeft:200,backgroundColor:"#fff", position:"fixed", top:0, left:0, right:0, zIndex:10}}>
                    <Space style={{display:"flex", justifyContent:"space-between"}}>
                        <span style={{fontWeight:600, color:"gray"}}>{`${APP1.name} - Hệ thống quản trị khách sạn`}</span>
                        <Space size={"large"}>
                            <span style={{fontWeight:600, color:"gray"}}><PhoneOutlined style={{fontSize:16, color:"#000"}} /> Hỗ trợ 24/7: 012 34 56789</span>
                            <span style={{fontWeight:600, color:"gray"}}><QuestionCircleOutlined style={{fontSize:16, color:"#000"}} /> Trợ giúp</span>
                            <Space style={{fontWeight:600, color:"gray"}}>
                                <Avatar size={"small"} icon={<UserOutlined />} alt="hihi" />
                                <span>Bùi Chí Thiện</span>
                                <DownOutlined style={{fontSize:13}} />
                            </Space>
                        </Space>
                    </Space>
                </Layout.Header>
                <Layout.Content style={{marginLeft:200, marginTop:64}}>{children}</Layout.Content>
                <Layout.Footer></Layout.Footer>
            </Layout>
        </Layout>
     );
}

export default AdminLayout;