import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ControlType } from './types';
import { Space } from 'antd';
import { useState } from 'react';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';
import { useInView } from 'react-intersection-observer';
type ControlProps = ControlType;

const Control = (props: ControlProps) => {
	const [isPlay, setPlay] = useState<boolean>(false);

	const [isFavorite, setFavorite] = useState<boolean>(true);

	const handleClickPlay = () => {
		setPlay(!isPlay);
	};

	const handleClickFavorite = () => {
		setFavorite(!isFavorite);
	};

	const { ref, inView } = useInView({
		threshold: 0.5,
	});

	useEffect(() => {
		props.onView?.(inView);
	}, [inView]);

	return (
		<Space direction="horizontal" size={16} ref={ref}>
			<div className="h-14 w-14 rounded-full bg-green-500 flex items-center justify-around">
				<FontAwesomeIcon
					icon={isPlay ? faPlay : faPause}
					onClick={handleClickPlay}
					className="text-2xl"
				/>
			</div>
			<FontAwesomeIcon
				icon={isFavorite ? faSolidHeart : faRegularHeart}
				className="text-white text-2xl"
				onClick={handleClickFavorite}
			/>
		</Space>
	);
};

export default Control;
