// import {
//   Calendar,
//   Col,
//   ConfigProvider,
//   Form,
//   Row,
//   Divider,
//   Radio,
//   InputNumber,
//   Button,
//   Select,
//   Space,
//   notification,
//   Drawer,
//   Checkbox,
//   DatePicker as AntdDatePicker,
//   Input,
// } from "antd";
// import { StopOutlined } from "@ant-design/icons";
// import viVN from "antd/locale/vi_VN";
// import axios from "axios";
// import dayjs, { Dayjs } from "dayjs";
// import "dayjs/locale/vi";
// import { useEffect, useState } from "react";
// import { baseUrl, formatCurrency } from "../../../../../constants/constants";
// import { useSelector } from "react-redux";
// import { selectHotelMn } from "../../../../../redux/selector";
// import { useForm } from "antd/lib/form/Form";
// const { Option } = Select;

// dayjs.locale("vi");

// function CalendarRoom() {
//   const hotel = useSelector(selectHotelMn);
//   const [form] = useForm();
//   const [api, contextHolder] = notification.useNotification();
//   const token = localStorage.getItem("token");
//   const [createdroom, setCreatedRoom] = useState<any[]>([]);
//   const [selectRoomid, setSelectRoomid] = useState<any>();
//   const [roomtype, setRoomtype] = useState<any[]>([]);
//   const [ngayDacbiet, setNgayDacbiet] = useState<any[]>([]);
//   const [reason, setReason] = useState<string>("");
//   const [priceType, setPriceType] = useState<"FIXED" | "PERCENTAGE">(
//     "PERCENTAGE"
//   );
//   const [priceValue, setPriceValue] = useState<number | null>(null);
//   const [openDrawer, setOpenDrawer] = useState(false);
//   const [weekDays, setWeekDays] = useState<string[]>([
//     "T2",
//     "T3",
//     "T4",
//     "T5",
//     "T6",
//     "T7",
//     "CN",
//   ]);
//   const [selectRoomDrawerId, setSelectRoomDrawerId] = useState<any>();
//   const [rangeDates, setRangeDates] = useState<[Dayjs | null, Dayjs | null]>([
//     dayjs(),
//     dayjs(),
//   ]);

//   const weekdaysOptions = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
//   const weekdayMap: { [key: string]: number } = {
//     CN: 0,
//     T2: 1,
//     T3: 2,
//     T4: 3,
//     T5: 4,
//     T6: 5,
//     T7: 6,
//   };

//   const openNotification = (message: string) => {
//     api.success({
//       message: `Thông báo`,
//       description: message,
//       placement: "top",
//     });
//   };

//   const openNotificationErr = (message: string) => {
//     api.error({
//       message: `Thông báo`,
//       description: message,
//       placement: "top",
//     });
//   };

//   const getAPIRoomcreated = async () => {
//     try {
//       if (token && hotel) {
//         const res = await axios.get(
//           `${baseUrl}hotel-properties/room/get-rooms/${hotel?.id}`,
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );
//         setCreatedRoom(res.data);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const getAPIRoomtype = async () => {
//     try {
//       if (token && hotel) {
//         const res = await axios.get(
//           `${baseUrl}rooms/get-by-typeroom/${hotel?.id}`,
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );
//         setRoomtype(res.data);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const checkNgaydacbit = (data: any[], dateStr: string): any => {
//     const result = data.find(
//       (item: any) => dayjs(item?.ngays).format("YYYY-MM-DD") === dateStr
//     );
//     return result;
//   };

//   // Test selectRoomid && ngayDacbiet
//   // Nên chỉnh sửa là lấy theo loại chỗ nghĩ -> sang ngày tăng giá để lấy giá đặc biệt không thì lấy số tiền theo loại chỗ nghĩ

//   const cellrender = (value: Dayjs, _: any) => {
//     const dateStr = value.format("YYYY-MM-DD");
//     return selectRoomid && ngayDacbiet ? (
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <Space direction="vertical">
//           <span>
//             {checkNgaydacbit(ngayDacbiet, dateStr)?.status === false ? (
//               <span style={{ color: "red", fontWeight: 600 }}>
//                 Đang đóng <StopOutlined />
//               </span>
//             ) : (
//               <span>Mở bán</span>
//             )}
//           </span>
//           <span>
//             VND{" "}
//             {checkNgaydacbit(ngayDacbiet, dateStr)?.price
//               ? formatCurrency(
//                   checkNgaydacbit(ngayDacbiet, dateStr)?.price
//                 ).split("₫")[0]
//               : formatCurrency(JSON.parse(selectRoomid)?.sotien).split("₫")[0]}
//           </span>
//         </Space>
//       </div>
//     ) : null;
//   };

//   const onFinish = async () => {
//     try {
//       if (!selectRoomDrawerId) {
//         openNotificationErr("Vui lòng chọn loại chỗ nghỉ cần chỉnh sửa");
//         return;
//       }
//       if (!rangeDates[0] || !rangeDates[1]) {
//         openNotificationErr("Vui lòng chọn khoảng ngày");
//         return;
//       }
//       if (priceValue === null) {
//         openNotificationErr("Vui lòng nhập giá trị điều chỉnh");
//         return;
//       }

//       const roomType = JSON.parse(selectRoomDrawerId);
//       const roomIds = roomType.ids; // Extract array of room IDs

//       const payload = {
//         hotelId: hotel?.id,
//         roomIds, // Use the array of room IDs
//         startDate: rangeDates[0].format("YYYY-MM-DD"),
//         endDate: rangeDates[1].format("YYYY-MM-DD"),
//         applyToDays: weekDays.map((day) => weekdayMap[day]),
//         adjustmentType: priceType,
//         adjustmentValue: priceValue,
//         reason,
//       };

//       const res = await axios.post(
//         `http://localhost:5000/room-price-adjustment`,
//         payload,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       if (res.status === 201) {
//         openNotification("Tạo điều chỉnh giá thành công");
//         setOpenDrawer(false);
//         // Reset form
//         setPriceValue(null);
//         setPriceType("FIXED");
//         setWeekDays(weekdaysOptions);
//         setSelectRoomDrawerId(null);
//         setRangeDates([dayjs(), dayjs()]);
//         setReason("");
//       }
//     } catch (err: any) {
//       console.log(err);
//       openNotificationErr(
//         err.response?.data?.message || "Có lỗi xảy ra khi lưu dữ liệu"
//       );
//     }
//   };

//   useEffect(() => {
//     const run = async () => {
//       if (selectRoomid) {
//         // Assuming you want to fetch special dates for the selected room
//         // You may need to adjust this to handle room types
//         // await getAPINgaydacbiet(JSON.parse(selectRoomid)?.loaichonghi);
//       }
//     };
//     run();
//   }, [selectRoomid]);

//   useEffect(() => {
//     getAPIRoomcreated();
//     getAPIRoomtype();
//   }, [hotel]);

//   return (
//     <div style={{ zIndex: 2 }}>
//       {contextHolder}
//       <div
//         style={{
//           backgroundColor: "#fff",
//           padding: 20,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <span style={{ fontSize: 15, fontWeight: 500 }}>Loại chỗ nghỉ:</span>
//         <Select
//           placeholder="Vui lòng chọn phòng"
//           onChange={(value: any) => {
//             setSelectRoomid(value);
//           }}
//           style={{ width: 600, marginTop: 10, marginLeft: 10 }}
//         >
//           {createdroom &&
//             createdroom.map((item: any) => (
//               <Option key={item?.id} value={JSON.stringify(item)}>
//                 {item?.loaichonghi}
//               </Option>
//             ))}
//         </Select>
//       </div>
//       <ConfigProvider locale={viVN}>
//         <Row>
//           <Col span={19}>
//             <div style={{ padding: 20 }}>
//               <Calendar
//                 cellRender={cellrender}
//                 style={{ zIndex: 1 }}
//                 mode="month"
//               />
//             </div>
//           </Col>
//           <Col span={5}>
//             <div style={{ paddingTop: 20 }}>
//               <Button
//                 type="primary"
//                 style={{ marginLeft: 20 }}
//                 onClick={() => setOpenDrawer(true)}
//               >
//                 Chỉnh sửa nhiều mục
//               </Button>
//             </div>
//             <div style={{ paddingTop: 20 }}>
//               <Button
//                 type="primary"
//                 style={{ marginLeft: 20 }}
//                 onClick={() => setOpenDrawer(true)}
//               >
//                 Giá đặc biệt
//               </Button>
//             </div>
//           </Col>
//         </Row>
//       </ConfigProvider>
//       <Drawer
//         title="Chỉnh sửa nhiều mục"
//         width={400}
//         onClose={() => setOpenDrawer(false)}
//         open={openDrawer}
//       >
//         <Form layout="vertical" onFinish={onFinish} form={form}>
//           <Form.Item
//             label="Từ ngày - Đến ngày"
//             required={true}
//             rules={[{ required: true, message: "Vui lòng chọn khoảng ngày" }]}
//           >
//             <AntdDatePicker.RangePicker
//               value={rangeDates}
//               onChange={(dates) => setRangeDates(dates as [Dayjs, Dayjs])}
//               style={{ width: "100%" }}
//             />
//           </Form.Item>
//           <Form.Item
//             label="Áp dụng cho các ngày trong tuần"
//             required={true}
//             rules={[{ required: true, message: "Vui lòng chọn ngày" }]}
//           >
//             <Checkbox.Group
//               options={weekdaysOptions}
//               value={weekDays}
//               onChange={(checkedValues) =>
//                 setWeekDays(checkedValues as string[])
//               }
//             />
//           </Form.Item>
//           {/* mô tả / tên mục lý do tăng (lễ, tết, ...) */}
//           <Form.Item
//             label="Tên mục (Ngày lễ, tết, ...)"
//             required={true}
//             rules={[{ required: true, message: "Vui lòng nhập tên mục" }]}
//           >
//             <Input
//               placeholder="Nhập tên mục"
//               maxLength={100}
//               value={reason}
//               onChange={(e) => setReason(e.target.value)}
//               style={{ width: "100%" }}
//             />
//           </Form.Item>
//           <Divider />
//           <Form.Item
//             label="Chọn loại chỗ nghỉ"
//             required={true}
//             rules={[{ required: true, message: "Vui lòng chọn phòng" }]}
//           >
//             <Select
//               placeholder="Vui lòng chọn phòng"
//               onChange={(value: any) => {
//                 setSelectRoomDrawerId(value);
//               }}
//               style={{ width: "100%" }}
//               value={selectRoomDrawerId}
//             >
//               {roomtype &&
//                 roomtype.map((item: any) => (
//                   <Option key={item?.loaichonghi} value={JSON.stringify(item)}>
//                     {item?.loaichonghi}
//                   </Option>
//                 ))}
//             </Select>
//           </Form.Item>
//           <Form.Item
//             label="Kiểu giá áp dụng"
//             required={true}
//             rules={[{ required: true, message: "Vui lòng chọn kiểu giá" }]}
//           >
//             <Radio.Group
//               value={priceType}
//               onChange={(e) => setPriceType(e.target.value)}
//               style={{ marginBottom: 12 }}
//             >
//               <Radio value="PERCENTAGE">Tăng giá (%)</Radio>
//               <Radio value="FIXED">Tăng giá (VND)</Radio>
//             </Radio.Group>
//           </Form.Item>
//           <Form.Item
//             label={
//               priceType === "PERCENTAGE" ? "Tăng giá (%)" : "Tăng giá (VND)"
//             }
//           >
//             <InputNumber
//               min={priceType === "PERCENTAGE" ? -100 : 0}
//               max={priceType === "PERCENTAGE" ? 100 : undefined}
//               step={priceType === "PERCENTAGE" ? 1 : 1000}
//               value={priceValue}
//               onChange={(value) => setPriceValue(value)}
//               style={{ width: "100%" }}
//             />
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary" htmlType="submit" block>
//               Lưu thay đổi
//             </Button>
//           </Form.Item>
//         </Form>
//       </Drawer>
//     </div>
//   );
// }

// export default CalendarRoom;

import {
  Calendar,
  Col,
  ConfigProvider,
  Form,
  Row,
  Divider,
  Radio,
  InputNumber,
  Button,
  Select,
  Space,
  notification,
  Drawer,
  Checkbox,
  DatePicker as AntdDatePicker,
  Input,
  Modal,
  Table,
  Tag,
} from "antd";
import { StopOutlined } from "@ant-design/icons";
import viVN from "antd/locale/vi_VN";
import axios from "axios";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/vi";
import { useEffect, useState } from "react";
import { baseUrl, formatCurrency } from "../../../../../constants/constants";
import { useSelector } from "react-redux";
import { selectHotelMn } from "../../../../../redux/selector";
import { useForm } from "antd/lib/form/Form";
const { Option } = Select;

dayjs.locale("vi");

function CalendarRoom() {
  const hotel = useSelector(selectHotelMn);
  const [form] = useForm();
  const [api, contextHolder] = notification.useNotification();
  const token = localStorage.getItem("token");
  const [createdroom, setCreatedRoom] = useState<any[]>([]);
  const [selectRoomid, setSelectRoomid] = useState<any>();
  const [roomtype, setRoomtype] = useState<any[]>([]);
  const [ngayDacbiet, setNgayDacbiet] = useState<any[]>([]);
  const [reason, setReason] = useState<string>("");
  const [priceType, setPriceType] = useState<"FIXED" | "PERCENTAGE">(
    "PERCENTAGE"
  );
  const [priceValue, setPriceValue] = useState<number | null>(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [weekDays, setWeekDays] = useState<string[]>([
    "T2",
    "T3",
    "T4",
    "T5",
    "T6",
    "T7",
    "CN",
  ]);
  const [selectRoomDrawerId, setSelectRoomDrawerId] = useState<any>();
  const [rangeDates, setRangeDates] = useState<[Dayjs | null, Dayjs | null]>([
    dayjs(),
    dayjs(),
  ]);
  // New states for the adjustments list modal
  const [isAdjustmentModalVisible, setIsAdjustmentModalVisible] =
    useState(false);
  const [adjustmentsList, setAdjustmentsList] = useState<any[]>([]);
  const [isLoadingAdjustments, setIsLoadingAdjustments] = useState(false);

  const weekdaysOptions = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
  const weekdayMap: { [key: string]: number } = {
    CN: 0,
    T2: 1,
    T3: 2,
    T4: 3,
    T5: 4,
    T6: 5,
    T7: 6,
  };

  // Mapping for displaying days in Vietnamese
  const reverseWeekdayMap: { [key: number]: string } = {
    0: "Chủ nhật",
    1: "Thứ 2",
    2: "Thứ 3",
    3: "Thứ 4",
    4: "Thứ 5",
    5: "Thứ 6",
    6: "Thứ 7",
  };

  const openNotification = (message: string) => {
    api.success({
      message: "Thông báo",
      description: message,
      placement: "top",
    });
  };

  const openNotificationErr = (message: string) => {
    api.error({
      message: "Thông báo",
      description: message,
      placement: "top",
    });
  };

  const getAPIRoomcreated = async () => {
    try {
      if (token && hotel) {
        const res = await axios.get(
          `${baseUrl}hotel-properties/room/get-rooms/${hotel?.id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setCreatedRoom(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getAPIRoomtype = async () => {
    try {
      if (token && hotel) {
        const res = await axios.get(
          `${baseUrl}rooms/get-by-typeroom/${hotel?.id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setRoomtype(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // New function to fetch price adjustments
  const getAPIPriceAdjustments = async () => {
    if (!hotel?.id || !token) return;

    setIsLoadingAdjustments(true);
    try {
      const res = await axios.get(
        `http://localhost:5000/room-price-adjustment/${hotel?.id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setAdjustmentsList(res.data);
    } catch (err: any) {
      console.log(err);
      openNotificationErr(
        err.response?.data?.message || "Lỗi khi tải danh sách điều chỉnh giá"
      );
    } finally {
      setIsLoadingAdjustments(false);
    }
  };

  const checkNgaydacbit = (data: any[], dateStr: string): any => {
    const result = data.find(
      (item: any) => dayjs(item?.ngays).format("YYYY-MM-DD") === dateStr
    );
    return result;
  };

  const cellrender = (value: Dayjs, _: any) => {
    const dateStr = value.format("YYYY-MM-DD");
    return selectRoomid && ngayDacbiet ? (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Space direction="vertical">
          <span>
            {checkNgaydacbit(ngayDacbiet, dateStr)?.status === false ? (
              <span style={{ color: "red", fontWeight: 600 }}>
                Đang đóng <StopOutlined />
              </span>
            ) : (
              <span>Mở bán</span>
            )}
          </span>
          <span>
            VND{" "}
            {checkNgaydacbit(ngayDacbiet, dateStr)?.price
              ? formatCurrency(
                  checkNgaydacbit(ngayDacbiet, dateStr)?.price
                ).split("₫")[0]
              : formatCurrency(JSON.parse(selectRoomid)?.sotien).split("₫")[0]}
          </span>
        </Space>
      </div>
    ) : null;
  };

  const onFinish = async () => {
    try {
      if (!selectRoomDrawerId) {
        openNotificationErr("Vui lòng chọn loại chỗ nghỉ cần chỉnh sửa");
        return;
      }
      if (!rangeDates[0] || !rangeDates[1]) {
        openNotificationErr("Vui lòng chọn khoảng ngày");
        return;
      }
      if (priceValue === null) {
        openNotificationErr("Vui lòng nhập giá trị điều chỉnh");
        return;
      }

      const roomType = JSON.parse(selectRoomDrawerId);
      const roomIds = roomType.ids; // Extract array of room IDs

      const payload = {
        hotelId: hotel?.id,
        roomIds, // Use the array of room IDs
        startDate: rangeDates[0].format("YYYY-MM-DD"),
        endDate: rangeDates[1].format("YYYY-MM-DD"),
        applyToDays: weekDays.map((day) => weekdayMap[day]),
        adjustmentType: priceType,
        adjustmentValue: priceValue,
        reason,
      };

      const res = await axios.post(
        "http://localhost:5000/room-price-adjustment",
        payload,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (res.status === 201) {
        openNotification("Tạo điều chỉnh giá thành công");
        setOpenDrawer(false);
        // Reset form
        setPriceValue(null);
        setPriceType("FIXED");
        setWeekDays(weekdaysOptions);
        setSelectRoomDrawerId(null);
        setRangeDates([dayjs(), dayjs()]);
        setReason("");
        // Refresh adjustments list
        getAPIPriceAdjustments();
      }
    } catch (err: any) {
      console.log(err);
      openNotificationErr(
        err.response?.data?.message || "Có lỗi xảy ra khi lưu dữ liệu"
      );
    }
  };

  // Open modal and fetch adjustments
  const handleOpenAdjustmentsModal = () => {
    setIsAdjustmentModalVisible(true);
    getAPIPriceAdjustments();
  };

  useEffect(() => {
    const run = async () => {
      if (selectRoomid) {
        // Assuming you want to fetch special dates for the selected room
        // You may need to adjust this to handle room types
        // await getAPINgaydacbiet(JSON.parse(selectRoomid)?.loaichonghi);
      }
    };
    run();
  }, [selectRoomid]);

  useEffect(() => {
    getAPIRoomcreated();
    getAPIRoomtype();
  }, [hotel]);

  // Columns for the adjustments table
  const adjustmentsColumns = [
    {
      title: "Loại chỗ nghỉ",
      dataIndex: "room_type",
      key: "room_type",
      width: 150,
    },
    {
      title: "Lý do",
      dataIndex: "reason",
      key: "reason",
      width: 150,
    },
    {
      title: "Từ ngày",
      dataIndex: "start_date",
      key: "start_date",
      width: 120,
    },
    {
      title: "Đến ngày",
      dataIndex: "end_date",
      key: "end_date",
      width: 120,
    },
    {
      title: "Áp dụng ngày",
      dataIndex: "apply_to_days",
      key: "apply_to_days",
      width: 200,
      render: (days: number[]) => (
        <div>
          {days.map((day) => (
            <Tag key={day} color="blue">
              {reverseWeekdayMap[day]}
            </Tag>
          ))}
        </div>
      ),
    },
    {
      title: "Kiểu điều chỉnh",
      dataIndex: "adjustment_type",
      key: "adjustment_type",
      width: 120,
      render: (type: string) => (
        <Tag color={type === "PERCENTAGE" ? "green" : "volcano"}>
          {type === "PERCENTAGE" ? "Phần trăm (%)" : "Cố định (VND)"}
        </Tag>
      ),
    },
    {
      title: "Giá trị",
      dataIndex: "adjustment_value",
      key: "adjustment_value",
      width: 100,
      render: (value: number, record: any) => (
        <span
          style={{ color: value >= 0 ? "green" : "red", fontWeight: "bold" }}
        >
          {record.adjustment_type === "PERCENTAGE"
            ? `${value >= 0 ? "+" : ""}${value}%`
            : `${value >= 0 ? "+" : ""}${
                formatCurrency(value).split("₫")[0]
              } VND`}
        </span>
      ),
    },
    {
      title: "Ngày tạo",
      dataIndex: "created_at",
      key: "created_at",
      width: 150,
    },
  ];

  return (
    <div style={{ zIndex: 2 }}>
      {contextHolder}
      <div
        style={{
          backgroundColor: "#fff",
          padding: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontSize: 15, fontWeight: 500 }}>Loại chỗ nghỉ:</span>
        <Select
          placeholder="Vui lòng chọn phòng"
          onChange={(value: any) => {
            setSelectRoomid(value);
          }}
          style={{ width: 600, marginTop: 10, marginLeft: 10 }}
        >
          {createdroom &&
            createdroom.map((item: any) => (
              <Option key={item?.id} value={JSON.stringify(item)}>
                {item?.loaichonghi}
              </Option>
            ))}
        </Select>
      </div>
      <ConfigProvider locale={viVN}>
        <Row>
          <Col span={19}>
            <div style={{ padding: 20 }}>
              <Calendar
                cellRender={cellrender}
                style={{ zIndex: 1 }}
                mode="month"
              />
            </div>
          </Col>
          <Col span={5}>
            <div style={{ paddingTop: 20 }}>
              <Button
                type="primary"
                style={{ marginLeft: 20 }}
                onClick={() => setOpenDrawer(true)}
              >
                Chỉnh sửa nhiều mục
              </Button>
            </div>

            {/* New button for viewing adjustment list */}
            <div style={{ paddingTop: 20 }}>
              <Button
                type="primary"
                style={{ marginLeft: 20 }}
                onClick={handleOpenAdjustmentsModal}
              >
                Danh sách điều chỉnh giá
              </Button>
            </div>
          </Col>
        </Row>
      </ConfigProvider>

      {/* Drawer for editing multiple items */}
      <Drawer
        title="Chỉnh sửa nhiều mục"
        width={400}
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
      >
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <Form.Item
            label="Từ ngày - Đến ngày"
            required={true}
            rules={[{ required: true, message: "Vui lòng chọn khoảng ngày" }]}
          >
            <AntdDatePicker.RangePicker
              value={rangeDates}
              onChange={(dates) => setRangeDates(dates as [Dayjs, Dayjs])}
              style={{ width: "100%" }}
            />
          </Form.Item>
          <Form.Item
            label="Áp dụng cho các ngày trong tuần"
            required={true}
            rules={[{ required: true, message: "Vui lòng chọn ngày" }]}
          >
            <Checkbox.Group
              options={weekdaysOptions}
              value={weekDays}
              onChange={(checkedValues) =>
                setWeekDays(checkedValues as string[])
              }
            />
          </Form.Item>
          {/* mô tả / tên mục lý do tăng (lễ, tết, ...) */}
          <Form.Item
            label="Tên mục (Ngày lễ, tết, ...)"
            required={true}
            rules={[{ required: true, message: "Vui lòng nhập tên mục" }]}
          >
            <Input
              placeholder="Nhập tên mục"
              maxLength={100}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              style={{ width: "100%" }}
            />
          </Form.Item>
          <Divider />
          <Form.Item
            label="Chọn loại chỗ nghỉ"
            required={true}
            rules={[{ required: true, message: "Vui lòng chọn phòng" }]}
          >
            <Select
              placeholder="Vui lòng chọn phòng"
              onChange={(value: any) => {
                setSelectRoomDrawerId(value);
              }}
              style={{ width: "100%" }}
              value={selectRoomDrawerId}
            >
              {roomtype &&
                roomtype.map((item: any) => (
                  <Option key={item?.loaichonghi} value={JSON.stringify(item)}>
                    {item?.loaichonghi}
                  </Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Kiểu giá áp dụng"
            required={true}
            rules={[{ required: true, message: "Vui lòng chọn kiểu giá" }]}
          >
            <Radio.Group
              value={priceType}
              onChange={(e) => setPriceType(e.target.value)}
              style={{ marginBottom: 12 }}
            >
              <Radio value="PERCENTAGE">Tăng giá (%)</Radio>
              <Radio value="FIXED">Tăng giá (VND)</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label={
              priceType === "PERCENTAGE" ? "Tăng giá (%)" : "Tăng giá (VND)"
            }
          >
            <InputNumber
              min={priceType === "PERCENTAGE" ? -100 : 0}
              max={priceType === "PERCENTAGE" ? 100 : undefined}
              step={priceType === "PERCENTAGE" ? 1 : 1000}
              value={priceValue}
              onChange={(value) => setPriceValue(value)}
              style={{ width: "100%" }}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Lưu thay đổi
            </Button>
          </Form.Item>
        </Form>
      </Drawer>

      {/* New Modal for displaying adjustments list */}
      <Modal
        title="Danh sách điều chỉnh giá"
        open={isAdjustmentModalVisible}
        onCancel={() => setIsAdjustmentModalVisible(false)}
        width={1000}
        footer={[
          <Button key="back" onClick={() => setIsAdjustmentModalVisible(false)}>
            Đóng
          </Button>,
        ]}
      >
        <Table
          dataSource={adjustmentsList}
          columns={adjustmentsColumns}
          rowKey="adjustment_id"
          loading={isLoadingAdjustments}
          scroll={{ x: 1000, y: 400 }}
          pagination={{ pageSize: 10 }}
        />
      </Modal>
    </div>
  );
}

export default CalendarRoom;
