import { Avatar, Space, Typography } from 'antd';
import { PersonAvatar } from './types';

interface NormalAvatar extends PersonAvatar {}

const Normal = () => {
	return;
	<Space direction="horizontal">
		<Avatar shape="circle"></Avatar>
		<Space direction="vertical">
			<Typography className=""></Typography>
			<Typography className=""></Typography>
		</Space>
	</Space>;
};

export default Normal;
