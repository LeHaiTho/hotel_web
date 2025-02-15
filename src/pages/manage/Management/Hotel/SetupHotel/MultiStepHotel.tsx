import { Button, Space } from "antd";
import { ReactSVG } from 'react-svg';
import { multistep1, multistep2, multistep3, multistep4 } from "../../../../../assets/svgs/svgMultiStepHotel";
import { useNavigate } from "react-router-dom";
function MultiStepHotel() {
    const navigate = useNavigate();
    // lấy token lên để tránh copy link vào trang 
    const token = localStorage.getItem('token');
    return ( 
        <Space direction="vertical" size={"large"} style={{display:"flex",justifyContent:"center", alignItems:"center",marginTop:-64, height:"100vh"}}>
           <Space style={{width:800, height:90, backgroundColor:"#fff",padding:20,justifyContent:"space-between", alignItems:"center"}}>
                <Space size={"middle"}>
                    <ReactSVG src={multistep1} />
                    <Space direction="vertical" size={1}>
                        <span style={{fontSize:12, color:"#595959"}}>Bước 1</span>
                        <span style={{fontSize:16,fontWeight:"bold"}}>Thông tin chỗ nghỉ</span>
                        <span style={{fontSize:12, color:"#595959"}}>Các thông tin cơ bản. Nhập tên chỗ nghỉ, địa chỉ, tiện nghi và nhiều hơn nữa.</span>
                    </Space>
                </Space>
                <Button onClick={()=>{navigate(`/manage/register-hotel/type?token=${token}`)}}
                 type="link">Chỉnh sửa</Button>
           </Space>
           <Space style={{width:800, height:110, backgroundColor:"#fff",padding:20,justifyContent:"space-between", alignItems:"center"}}>
                <Space size="middle">
                    <ReactSVG src={multistep2} />
                    <Space direction="vertical" size={1}>
                        <span style={{fontSize:12, color:"#595959"}}>Bước 2</span>
                        <span style={{fontSize:16,fontWeight:"bold"}}>Phòng</span>
                        <span style={{fontSize:12, color:"#595959"}}>Hãy cho chúng tôi biết về phòng đầu tiên của Quý vị. Sau khi đã thiết lập xong một căn, Quý vị có thể thêm nhiều căn nữa.</span>
                    </Space>
                </Space>
                <Button onClick={()=>{navigate('/manage/register-hotel/setup-room/room-details')}} type="primary">Thêm phòng</Button>
           </Space>
           <Space style={{width:800, height:90, backgroundColor:"#fff",padding:20,justifyContent:"space-between", alignItems:"center"}}>
                <Space size="middle">
                    <ReactSVG src={multistep3} />
                    <Space direction="vertical" size={1}>
                        <span style={{fontSize:12, color:"#595959"}}>Bước 3</span>
                        <span style={{fontSize:16,fontWeight:"bold"}}>Ảnh</span>
                        <span style={{fontSize:12, color:"#595959"}}>Chia sẻ một số hình ảnh chỗ nghỉ của Quý vị để khách biết mình nên có những kỳ vọng gì.</span>
                    </Space>
                </Space>
                <Button onClick={()=> { navigate('/manage/register-hotel/setup-room/image-room');}}
                 type="default">Thêm ảnh</Button>
           </Space>
           <Space style={{width:800, height:90, backgroundColor:"#fff",padding:20,justifyContent:"space-between", alignItems:"center"}}>
                <Space size="middle">
                    <ReactSVG src={multistep4} />
                    <Space direction="vertical" size={1}>
                        <span style={{fontSize:12, color:"#595959"}}>Bước 4</span>
                        <span style={{fontSize:16,fontWeight:"bold"}}>Những bước cuối cùng</span>
                        <span style={{fontSize:12, color:"#595959"}}>Nhập thông tin thanh toán và hóa đơn trước khi mở để nhận đặt phòng.</span>
                    </Space>
                </Space>
                <Button type="text">Thêm các thông tin cuối cùng</Button>
           </Space>
        </Space>
     );
}

export default MultiStepHotel;