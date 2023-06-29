"use client";
import { ReactNode } from "react";
import ISongControl from "./ISongControl";
import ISongControlEvent from "./ISongControlEvent";

export type SongControlType = ISongControl & ISongControlEvent;

const SongControl = (props: SongControlType) => {
  return (
    <div className="flex flex-col w-full h-full gap-2">
      {props.items?.map((item: ReactNode, index: number) => {
        return <div className="flex">{item}</div>;
      })}
    </div>
  );
};

export default SongControl;
