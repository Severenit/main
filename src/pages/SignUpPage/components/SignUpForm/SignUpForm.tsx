import React from "react";
import { Button, Form, Input } from "antd";

interface UserSignUpCredentials {
  email: string;
  password: string;
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

interface SignUpFormProps {
  onSubmit: (userSignUpCredentials: UserSignUpCredentials) => void;
}

export const SignUpForm = ({ onSubmit }: SignUpFormProps): JSX.Element => {
  const [form] = Form.useForm<UserSignUpCredentials>();

  return (
    <Form
      {...formItemLayout}
      form={form}
      onFinish={onSubmit}
      style={{ maxWidth: "600px", width: "100%" }}
    >
      <Form.Item
        name="email"
        label="Почта"
        rules={[
          {
            type: "email",
            message: "Невалидная почта!",
          },
          {
            required: true,
            message: "Пожалуйста, укажите почту!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Пароль"
        rules={[
          {
            required: true,
            message: "Пожалуйста, введите пароль!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Подтвердите пароль"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Пожалуйста, подтвердите пароль!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Пароли не совпадают!"));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Зарегистрироваться
        </Button>
      </Form.Item>
    </Form>
  );
};
