import { Space, Button, Typography } from 'antd';
import { useState } from 'react';
import PlayComponent from './PlayComponent';

type HeaderProps = HeaderType;

const Header = (props: HeaderProps) => {
	const [isLogin, setLogin] = useState(props.isLogin ?? true);

	const [isPlayActive, setPlayActive] = useState(props.isPlayActive ?? false);

	return (
		<div className="flex flex-row justify-between items-center h-16 px-4">
			<div className="grow">
				{props.isPlayActive && <PlayComponent />}
			</div>
			<div className="shrink">
				{isLogin ? (
					<Space direction="horizontal" size={32}>
						<Typography className="text-base text-white font-bold">
							Sign Up
						</Typography>
						<Button className="bg-white text-base rounded-full">
							<Typography className="text-base text-black font-semibold">
								Log In
							</Typography>
						</Button>
					</Space>
				) : (
					<Space></Space>
				)}
			</div>
		</div>
	);
};

export default Header;
