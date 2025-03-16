import { Tag } from "antd";

function FinancePopupMenu() {
    return ( 
        <div className="financepopupmenu" style={{marginTop:5,position:"absolute", top:"100%", right:0, color:"#000",
           backgroundColor:"#fff", display:"none"
        }}>
           <ul style={{ padding: 0, margin: "0px 0px 5px 0px", listStyle: "none", width:250, 
               boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)"
           }}>
               <li style={{ padding: "10px 10px", lineHeight: "1.4", fontSize: "14px" }}>Hóa đơn</li>
               <li style={{ padding: "10px 10px", lineHeight: "1.4", fontSize: "14px" }}>Sao kê đặt phòng <Tag color="#008009">Mới</Tag></li>
               <li style={{ padding: "10px 10px", lineHeight: "1.4", fontSize: "14px" }}>Tổng quan tài chính</li>
               <li style={{ padding: "10px 10px", lineHeight: "1.4", fontSize: "14px" }}>Cài đặt tài chính</li>
           </ul>
        </div>
    );
}

export default FinancePopupMenu;