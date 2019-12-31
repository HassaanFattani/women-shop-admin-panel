import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox, Row, Col } from "antd";
import "./style.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { stringText: "" };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const pStyle = {
      fontSize: "15px",
      background:
        "-webkit-linear-gradient(right, #00dbde, #fc00ff, #00dbde, #fc00ff)"
    };
    return (
      <div className="body-background">
        <Row>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 2 }}></Col>
          <Col xs={{ span: 24, offset: 0 }} lg={{ span: 6, offset: 2 }}>
            <div className="parent">
              <h1 className="login-heading">Login Form</h1>
              <div className="form-parent">
                <Form
                  onSubmit={this.handleSubmit}
                  className="login-form form_login"
                >
                  <Form.Item>
                    {getFieldDecorator("username", {
                      rules: [
                        {
                          required: true,
                          message: "Please input your username!"
                        }
                      ]
                    })(
                      <Input
                        prefix={
                          <Icon
                            type="user"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        placeholder="Username"
                      />
                    )}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator("password", {
                      rules: [
                        {
                          required: true,
                          message: "Please input your Password!"
                        }
                      ]
                    })(
                      <Input
                        prefix={
                          <Icon
                            type="lock"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        type="password"
                        placeholder="Password"
                      />
                    )}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator("remember", {
                      valuePropName: "checked",
                      initialValue: true
                    })(<Checkbox>Remember me</Checkbox>)}
                    <a className="login-form-forgot" href="/#">
                      Forgot password
                    </a>
                    <Button
                      type="default"
                      htmlType="submit"
                      className="login-form-button"
                      style={pStyle}
                    >
                      Log in
                    </Button>
                    Or <a href="/#">register now!</a>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </Col>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 2 }}></Col>
        </Row>
      </div>
    );
  }
}
const LoginForm = Form.create({ name: "login" })(Login);
export default LoginForm;
