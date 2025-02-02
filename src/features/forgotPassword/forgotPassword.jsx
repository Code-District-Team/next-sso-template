import { ArrowLeftOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Divider, Form, Input, message } from "antd";
import { Link } from "react-router-dom";
import Logo from "~/assets/images/logo.svg";
import User from "~/models/user";
import { setFieldErrorsFromServer } from "~/utilities/generalUtility";

export default function ForgotPassword() {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      await User.forgotPassword(values.email);
      message.success(`An email has been sent to ${values.email}`);
    } catch (error) {
      setFieldErrorsFromServer(error, form, values);
    }
  };

  return (
    <div className="login-container">
      <div className="lc-logo">
        <img src={Logo} alt="logo" />
      </div>
      <Card bordered={false} className="login-card">
        <h4>Forgot Password</h4>
        <Form
          form={form}
          name="forgot-password-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input
              prefix={
                <UserOutlined className="site-form-item-icon text-primary" />
              }
              placeholder="Email"
              size="large"
            />
          </Form.Item>
          <Form.Item>
            <Button block size="large" type="primary" htmlType="submit">
              Reset
            </Button>
          </Form.Item>
          <Divider plain>OR</Divider>
          <Form.Item className="mb-0 text-center">
            <Link to="/login">
              <ArrowLeftOutlined /> Back to Login
            </Link>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
