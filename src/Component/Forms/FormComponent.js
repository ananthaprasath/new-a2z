import React from "react";
import { Form, Input, Select, Button, Checkbox, notification } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";

const { Option } = Select;

const FormComponent = ({ title, buttonText }) => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const data = { ...values, access_key: "0c511151-8204-4f6f-8485-932700f9e589" };

      const response = await axios.post("https://api.web3forms.com/submit", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        notification.success({
          message: "Success",
          description: "Your form has been submitted successfully!",
        });
        form.resetFields();
      }
    } catch (error) {
      notification.error({
        message: "Error",
        description: "There was an error submitting your form. Please try again later.",
      });
    }
  };

  return (
    <div className="p-3 border-0 rounded bg2 aos shadow-sm ">
      <h3 className="mb-3 text-center">{title}</h3>
      <p className="text-center">Get started in just a few steps and go live within minutes.</p>
      <Form layout="vertical" form={form} onFinish={onFinish} size="large">
        {/* Name */}
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input placeholder="Enter Your Name" />
        </Form.Item>

        {/* Company */}
        <Form.Item
          label="Company"
          name="company"
          rules={[]}
        >
          <Input placeholder="Enter Your Company Name (Optional)" />
        </Form.Item>

        {/* Email */}
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, type: "email", message: "Please enter a valid email" }]}
        >
          <Input placeholder="Enter Your Email Address" />
        </Form.Item>

        {/* Phone Number */}
        <Form.Item
          label="Phone Number"
          name="phone"
          rules={[
            { required: true, message: "Please enter your phone number" },
            {
              pattern: /^[0-9]{10}$/,
              message: "Phone number must be 10 digits",
            },
          ]}
        >
          <Input addonBefore="+91" placeholder="Enter Your Phone Number" />
        </Form.Item>

        {/* Services Interested */}
        <Form.Item
          label="Services Interested"
          name="services"
          rules={[{ required: true, message: "Please select at least one service" }]}
        >
          <Select mode="multiple" placeholder="Select Services" allowClear>
            <Option value="Waba Service">
              <i className="bi bi-whatsapp me-3 text-success"></i>
              Waba Service
            </Option>
            <Option value="RCS Service">
              <i className="bi bi-envelope-paper me-3 text-warning"></i>
              RCS Service
            </Option>
            <Option value="Bulk SMS Service">
              <i className="bi bi-chat-dots me-3 text-primary"></i>
              Bulk SMS Service
            </Option>
            <Option value="Voice Call Service">
              <i className="bi bi-telephone me-3 text-danger"></i>
              Voice Call Service
            </Option>
            <Option value="OTP Service">
              <i className="bi bi-shield-lock me-3 text-secondary"></i>
              OTP Service
            </Option>
          </Select>
        </Form.Item>

        {/* Industry */}
        <Form.Item
          label="Industry"
          name="industry"
          rules={[]}
        >
          <Select placeholder="Select Industry (Optional)" allowClear>
            <Option value="Real Estate">
              <i className="bi bi-house me-3 text-primary"></i>
              Real Estate
            </Option>
            <Option value="Food & Beverage">
              <i className="bi bi-cup-hot me-3 text-danger"></i>
              Food & Beverage
            </Option>
            <Option value="Healthcare">
              <i className="bi bi-heart-pulse me-3 text-success"></i>
              Healthcare
            </Option>
            <Option value="Tours & Travels">
              <i className="bi bi-geo-alt me-3 text-warning"></i>
              Tours & Travels
            </Option>
            <Option value="Gaming">
              <i className="bi bi-controller me-3 text-info"></i>
              Gaming
            </Option>
            <Option value="Retail & eCommerce">
              <i className="bi bi-bag me-3 text-dark"></i>
              Retail & eCommerce
            </Option>
            <Option value="Media">
              <i className="bi bi-camera-video me-3 text-muted"></i>
              Media
            </Option>
            <Option value="Government">
              <i className="bi bi-bank me-3 text-secondary"></i>
              Government
            </Option>
            <Option value="Education">
              <i className="bi bi-book me-3 text-primary"></i>
              Education
            </Option>
          </Select>
        </Form.Item>

        {/* Terms and Conditions Checkbox */}
        <Form.Item
          name="terms"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("You must accept the terms and conditions")),
            },
          ]}
        >
          <Checkbox>
            I accept the{" "}
            <Link to="/terms" target="_blank">
              terms and conditions
            </Link>{" "}
            and agree to receive communication about services.
          </Checkbox>
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            {buttonText}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormComponent;
