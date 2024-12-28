import React from "react";
import { Form, Input, Checkbox, Button, notification } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";

const ContactForm = () => {
  const [form] = Form.useForm(); // Initialize the form instance

  const onFinish = async (values) => {
    try {
      // Add Web3Forms access key to the form data
      const data = {
        ...values,
        access_key: "0c511151-8204-4f6f-8485-932700f9e589",
      };

      // Send form data to Web3Forms API
      const response = await axios.post("https://api.web3forms.com/submit", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Handle successful submission
      if (response.status === 200) {
        notification.success({
          message: "Success",
          description: "Your form has been submitted successfully!",
        });
        form.resetFields(); // Reset form fields after successful submission
      }
    } catch (error) {
      // Handle errors during submission
      notification.error({
        message: "Error",
        description: "There was an error submitting your form. Please try again later.",
      });
    }
  };

  return (
    <Form
      form={form} // Bind the form instance to the form
      name="contact-form"
      layout="vertical"
      onFinish={onFinish}
      autoComplete="off"
      size="large"
    >
      <Form.Item
        label={<span className="text-white">Name</span>}
        name="name"
        rules={[{ required: true, message: "Please enter your name" }]}
      >
        <Input placeholder="Enter your name" />
      </Form.Item>

      <Form.Item
        label={<span className="text-white">Email</span>}
        name="email"
        rules={[
          { required: true, message: "Please enter your email" },
          { type: "email", message: "Please enter a valid email" },
        ]}
      >
        <Input placeholder="Enter your email" />
      </Form.Item>

      <Form.Item
        label={<span className="text-white">Phone</span>}
        name="phone"
        rules={[
          { required: true, message: "Please enter your phone number" },
        ]}
      >
        <Input placeholder="Enter your phone number" />
      </Form.Item>

      <Form.Item label={<span className="text-white">Note</span>} name="note">
        <Input.TextArea rows={3} placeholder="Enter your message or note" />
      </Form.Item>

      <Form.Item
        name="consent"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(
                    new Error(
                      "You must agree to the terms and conditions"
                    )
                  ),
          },
        ]}
      >
        <Checkbox className="text-white">
          I hereby authorize to send notifications via
          SMS/Messages/Promotional/Informational messages and agree to the{" "}
          <Link to="/termsandcondition">Terms of Service</Link> and{" "}
          <Link to="/privacypolicies">Privacy Policy</Link>.
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="w-100">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
 