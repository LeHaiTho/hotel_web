import { Button, Form, Space, Upload, UploadFile } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import { useState } from "react";

function ImageRoom() {
    const [fileList, setFileList] = useState<UploadFile<any>[]>([]);
    const handleChange = ({ fileList}:any) => setFileList(fileList);
    const handleSubmit = (values:any) => {
      console.log(values);
    }
    return ( 
        <Space direction="vertical" style={{padding:"60px 200px 60px 200px"}}>
            <h1 style={{fontSize:35}}>Khách sạn của Quý vị trông ra sao?</h1>
            <Form layout="vertical" onFinish={handleSubmit} style={{backgroundColor:"#fff", padding:10, width:500}}>
                <span><span style={{fontWeight:500}}>Đăng tải ít nhất 5 ảnh của chỗ nghỉ.</span> Càng đăng nhiều, Quý vị càng có cơ hội nhận đặt phòng. Quý vị có thể thêm ảnh sau.</span>
              <Form.Item
                name="upload"
                label="Upload File"
                valuePropName="fileList"
                getValueFromEvent={({ fileList }) => fileList}
                rules={[{ required: true, message: 'Please upload a file!' }]}
              >
              <Upload
                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload" // API nhận file
                listType="picture-card"
                fileList={fileList}
                onChange={handleChange}
                beforeUpload={() => false} // Ngừng upload tự động để kiểm soát
              >
                {fileList.length >= 5 ? null : <Button icon={<UploadOutlined />}>Upload</Button>}
              </Upload>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              </Form.Item>
            </Form>
        </Space>
     );
}

export default ImageRoom;