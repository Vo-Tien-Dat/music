"use client";
import Sider from "@/components/Sider/Sider";
import SongDisplay from "@/components/SongDisplay";

const rootStyle: React.CSSProperties = {
  gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
  gridTemplateRows: "repeat(16, minmax(0, 1fr))",
};

const siderStyle: React.CSSProperties = {
  gridColumn: "span 3/ span 3",
  gridRow: "span 14/ span 14",
};

const contentStyle: React.CSSProperties = {
  gridColumn: "span 9/ span 9",
  gridRow: "span 14/ span 14",
};

const songDisplayStyle: React.CSSProperties = {
  gridRow: "span 2/ span 2",
  gridColumn: "span 12/ span 12",
};

export default function RootHome({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="grid h-screen w-screen bg-neutral-950 gap-2 px-1 py-3"
      style={rootStyle}
    >
      <div className="col-span-3 " style={siderStyle}>
        <div className="flex flex-col gap-2 w-full h-full">
          <Sider />
          <div className="bg-neutral-800 h-3 rounded-lg grow"></div>
        </div>
      </div>
      <div
        className="col-span-9  bg-neutral-800 rounded-lg overflow-y-auto"
        style={contentStyle}
      >
        {children}
      </div>
      <div className="bg-neutral-800 rounded-lg" style={songDisplayStyle}>
        <SongDisplay />
      </div>
    </div>
  );
}
