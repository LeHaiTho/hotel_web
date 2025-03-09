import { Badge, Button, Divider, Layout, Space } from "antd";
import { APP1, COLORS } from "../constants/constants";
import {svg_1, svg_10, svg_11, svg_12, svg_13, svg_14, svg_2, svg_3, svg_4, svg_5, svg_6, svg_7, svg_8, svg_9} from "../assets/svgs";
import './index.css'
import { DownOutlined } from '@ant-design/icons';
import { ReactSVG } from 'react-svg';
import {Input} from "antd";
import { UserActionsPopup } from "./components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { CalendarPopupMenu } from "../pages/component/PopupMenu";
interface Props{
    children: React.ReactNode;  
}
function HomeLayout(prop: Props) {
    const navigate = useNavigate();
    const { children } = prop;
    // lấy token lên để tránh copy link vào trang 
    const token = localStorage.getItem('token');
    useEffect(()=>{
        // kiểm tra link hiện tại có phải đúng token không 
        const urlParams = new URLSearchParams(window.location.search);
        const urlToken = urlParams.get("token"); // Lấy token từ URL
        const storedToken = localStorage.getItem("token"); // Lấy token đã lưu

        if (!urlToken || urlToken !== storedToken) {
            navigate("/manage/sigin-manage"); // Nếu token không hợp lệ, chuyển về login
        }
    },[navigate])
    return (
        <Layout>
            <Layout.Header style={{
                backgroundColor: COLORS.BACKGROUND, position:"fixed", top:0, left:0, right:0, zIndex:10, color:"#fff",
                height: 144,
                width: "100%", // Đảm bảo phủ kín chiều ngang
            }}>
                    {/* part 1 */}
                    <Space style={{display:"flex", justifyContent:"space-between"}}>
                        <Space style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                            <h1>{APP1.name}</h1>
                            <Space className="group-hover" direction="horizontal" style={{
                                padding:"0px 3px 0px 3px", alignItems:"center", justifyContent:"center"
                            }}>
                                <span>Việt Anh</span>
                                <span style={{border:"0.5px solid #fff", padding:3, fontWeight:600}}>12348769</span>
                                <ReactSVG  src={svg_1} />
                            </Space>
                            <ReactSVG src={svg_2} />
                        </Space>
                        <Space size={"large"} style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <Input.Search size="large" placeholder="Tìm trang và đơn đặt phòng" allowClear style={{ width: 300}} />
                            </div>
                            <Space size={"large"}>
                                <ReactSVG src={svg_13} />
                                <UserActionsPopup>
                                    <ReactSVG style={{cursor:"pointer"}} src={svg_14} />
                                </UserActionsPopup>
                            </Space>
                        </Space>
                    </Space>
                    {/* part 2  */}
                    <Space direction="horizontal" size={"small"} style={{padding:0, margin:0, display:"flex", justifyContent:"space-around"}}>
                        <div className="group-hover-home" onClick={()=>{navigate(`/manage/home?token=${token}`)}} style={{display:"flex", flexDirection:"column", alignItems:"center",padding:"0px 5px 15px 5px", margin:0}}>
                            <div style={{height:30, padding:0, margin:0}}><Badge color="#cc0000" size={"small"} count={5}><ReactSVG src={svg_3}/></Badge> </div>
                            <div style={{height:30, padding:0, margin:0}}><span>Trang chủ</span></div>
                        </div>
                        
                        <div className="group-hover-home calendar-menu" style={{display:"flex", flexDirection:"column", alignItems:"center",padding:"0px 5px 15px 5px", margin:0, position:"relative"}}>
                            <div style={{height:30, padding:0, margin:0}}><Badge color="#cc0000" size={"small"} count={5}><ReactSVG src={svg_4}/></Badge> </div>
                            <div style={{height:30, padding:0, margin:0}}><span>Giá & Tình trạng phòng trống <DownOutlined style={{fontSize:10}} /></span></div>
                            <CalendarPopupMenu />
                        </div>
                        <div className="group-hover-home" style={{display:"flex", flexDirection:"column", alignItems:"center",padding:"0px 5px 15px 5px", margin:0}}>
                            <div style={{height:30, padding:0, margin:0}}><Badge color="#cc0000" size={"small"} count={5}><ReactSVG src={svg_5}/></Badge> </div>
                            <div style={{height:30, padding:0, margin:0}}><span>Chương trình khuyến mãi <DownOutlined style={{fontSize:10}} /></span></div>
                        </div>
                        <div className="group-hover-home" style={{display:"flex", flexDirection:"column", alignItems:"center",padding:"0px 5px 15px 5px", margin:0}}>
                            <div style={{height:30, padding:0, margin:0}}><Badge color="#cc0000" size={"small"} count={5}><ReactSVG src={svg_6}/></Badge> </div>
                            <div style={{height:30, padding:0, margin:0}}><span>Đặt phòng</span></div>
                        </div>
                        <div className="group-hover-home" style={{display:"flex", flexDirection:"column", alignItems:"center",padding:"0px 5px 15px 5px", margin:0}}>
                            <div style={{height:30, padding:0, margin:0}}><Badge color="#cc0000" size={"small"} count={5}><ReactSVG src={svg_7}/></Badge> </div>
                            <div style={{height:30, padding:0, margin:0}}><span>Chỗ nghỉ <DownOutlined style={{fontSize:10}} /></span></div>
                        </div>
                        <div className="group-hover-home" style={{display:"flex", flexDirection:"column", alignItems:"center",padding:"0px 5px 15px 5px", margin:0}}>
                            <div style={{height:30, padding:0, margin:0}}><Badge color="#cc0000" size={"small"} count={5}><ReactSVG src={svg_8}/></Badge> </div>
                            <div style={{height:30, padding:0, margin:0}}><span>Thúc đẩy hiệu suất <DownOutlined style={{fontSize:10}} /></span></div>
                        </div>
                        <div className="group-hover-home" style={{display:"flex", flexDirection:"column", alignItems:"center",padding:"0px 5px 15px 5px", margin:0}}>
                            <div style={{height:30, padding:0, margin:0}}><Badge color="#cc0000" size={"small"} count={5}><ReactSVG src={svg_9}/></Badge> </div>
                            <div style={{height:30, padding:0, margin:0}}><span>Thúc đẩy hiệu suất <DownOutlined style={{fontSize:10}} /></span></div>
                        </div>
                        <div className="group-hover-home" style={{display:"flex", flexDirection:"column", alignItems:"center",padding:"0px 5px 15px 5px", margin:0}}>
                            <div style={{height:30, padding:0, margin:0}}><Badge color="#cc0000" size={"small"} count={5}><ReactSVG src={svg_10}/></Badge> </div>
                            <div style={{height:30, padding:0, margin:0}}><span>Thúc đẩy hiệu suất <DownOutlined style={{fontSize:10}} /></span></div>
                        </div>
                        <div className="group-hover-home" style={{display:"flex", flexDirection:"column", alignItems:"center",padding:"0px 5px 15px 5px", margin:0}}>
                            <div style={{height:30, padding:0, margin:0}}><Badge color="#cc0000" size={"small"} count={5}><ReactSVG src={svg_11}/></Badge> </div>
                            <div style={{height:30, padding:0, margin:0}}><span>Tài chính <DownOutlined style={{fontSize:10}} /></span></div>
                        </div>
                        <div className="group-hover-home" style={{display:"flex", flexDirection:"column", alignItems:"center",padding:"0px 5px 15px 5px", margin:0}}>
                            <div style={{height:30, padding:0, margin:0}}><Badge color="#cc0000" size={"small"} count={5}><ReactSVG src={svg_12}/></Badge> </div>
                            <div style={{height:30, padding:0, margin:0}}><span>Phân tích <DownOutlined style={{fontSize:10}} /></span></div>
                        </div>
                    </Space>
            </Layout.Header>
            <Layout.Content style={{marginTop:144}}>
                {children}
            </Layout.Content>
            <Layout.Footer style={{backgroundColor:COLORS.BACKGROUND}}>
                    <Space direction="vertical" style={{display:"flex"}}>
                        <Space style={{display:"flex", justifyContent:"space-between"}}>
                            <Space size={"large"}>
                                <a href="#" style={{color:"#fff"}} >Giới thiệu về chúng tôi</a>
                                <a href="#" style={{color:"#fff"}} >Chính sách Bảo mật và Cookie</a>
                                <a href="#" style={{color:"#fff"}} >Các Câu Hỏi Thường Gặp</a>
                            </Space>
                            <Space size={"large"}>
                                <Button type="primary" style={{backgroundColor:COLORS.BUTTON, padding:16}} onClick={()=>{
                                    navigate(`/manage/register-hotel/type?token=${token}`)
                                }}>Thêm chỗ nghỉ mới</Button>
                                <Button type="primary" style={{backgroundColor:COLORS.BUTTON, padding:16}}>Chia sẻ góp ý của Quý vị</Button>
                            </Space>
                        </Space>
                        <Divider />
                        <span style={{color:"#fff"}}>© Bản quyền {APP1.name} 2025</span>
                    </Space>
            </Layout.Footer>
        </Layout>
    );
}
export default HomeLayout;