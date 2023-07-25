'use client';
import Album from '@/components/Album';
import Filter from '@/components/Filter';
import Search from '@/components/Search';
import Sider from '@/components/Sider/Sider';
import SongDisplay from '@/components/SongDisplay';
import { SongProvider } from '@/components/SongDisplay/SongContext';
import { Space } from 'antd';
import { usePlay } from '@/hooks/usePlay';

const rootStyle: React.CSSProperties = {
	gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
	gridTemplateRows: 'repeat(16, minmax(0, 1fr))',
};

const siderStyle: React.CSSProperties = {
	gridColumn: 'span 3/ span 3',
	gridRow: 'span 14/ span 14',
};

const contentStyle: React.CSSProperties = {
	gridColumn: 'span 9/ span 9',
	gridRow: 'span 14/ span 14',
};

const songDisplayStyle: React.CSSProperties = {
	gridRow: 'span 2/ span 2',
	gridColumn: 'span 12/ span 12',
};

export default function RootHome({ children }: { children: React.ReactNode }) {
	return (
		<SongProvider>
			<div
				className="grid h-screen w-screen bg-neutral-950 gap-2 px-1 py-3"
				style={rootStyle}
			>
				<div className="col-span-3" style={siderStyle}>
					<div className="flex flex-col gap-2 w-full h-full">
						<Space direction="vertical">
							<Sider />
							<Space
								direction="vertical"
								style={{
									height: '100%',
									width: '100%',
								}}
								size={8}
								className="bg-neutral-900 rounded-lg px-2 py-2"
							>
								<Filter />
								<Search />
							</Space>
						</Space>
					</div>
				</div>

				<div
					className="col-span-9  bg-neutral-900 rounded-lg overflow-y-auto"
					style={contentStyle}
				>
					{children}
				</div>

				<div
					className="bg-neutral-900 rounded-lg"
					style={songDisplayStyle}
				>
					<SongDisplay />
				</div>
			</div>
		</SongProvider>
	);
}
