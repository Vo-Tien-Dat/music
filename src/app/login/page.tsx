'use client';
import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { theme } from 'antd';
import {
	Button,
	Checkbox,
	Form,
	Input,
	Divider,
	ConfigProvider,
	ThemeConfig,
} from 'antd';

const submitButton: ThemeConfig = {};

const { useToken } = theme;

const Login = () => {
	const onFinish = (values: any) => {
		console.log('Success:', values);
	};

	return (
		<div className="bg-neutral-700 rounded-lg p-8">
			<Form
				name="normal_login"
				className="login-form"
				initialValues={{ remember: true }}
				onFinish={onFinish}
			>
				<Form.Item
					name="username"
					rules={[
						{
							required: true,
							message: 'Please input your Username!',
						},
					]}
				>
					<Input
						size="large"
						prefix={
							<UserOutlined className="site-form-item-icon" />
						}
						placeholder="Username"
					/>
				</Form.Item>
				<Form.Item
					name="password"
					rules={[
						{
							required: true,
							message: 'Please input your Password!',
						},
					]}
				>
					<Input
						size="large"
						prefix={
							<LockOutlined className="site-form-item-icon" />
						}
						type="password"
						placeholder="Password"
					/>
				</Form.Item>
				<Form.Item>
					<Form.Item name="remember" valuePropName="checked" noStyle>
						<Checkbox className="text-neutral-200">
							Remember me
						</Checkbox>
					</Form.Item>
				</Form.Item>

				<Form.Item>
					<ConfigProvider
						theme={
							{
								//   token: { colorPrimary: "#00b96b" },
							}
						}
					>
						<Button
							htmlType="submit"
							className="w-full text-base font-bold"
							size="large"
						>
							Log in
						</Button>
					</ConfigProvider>
				</Form.Item>
				<Form.Item>
					<div className="flex flex-row items-center">
						<span className="text-base whitespace-nowrap text-neutral-200">
							Don't have an account?
						</span>
						<Button type="link" className="w-full">
							Sign up for Music
						</Button>
					</div>
					<Divider className="text-neutral-600 before:bg-neutral-400 after:bg-neutral-400">
						<div className="text-base text-neutral-400">Or</div>
					</Divider>
				</Form.Item>
			</Form>
		</div>
	);
};

export default Login;
