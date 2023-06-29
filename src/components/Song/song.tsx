import React, { useState } from "react";
import { Avatar } from "antd";
import ISong from "./ISong";
import IOtherSong from "./IOtherSong";
import ISongEvent from "./ISongEvent";
import ISongStatus from "./ISongStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faActiveHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faInActiveHeart } from "@fortawesome/free-regular-svg-icons";
import classNames from "classnames";

export type SongPropsType = ISong & IOtherSong & ISongEvent & ISongStatus;

const initSong: SongPropsType = {
  id: 0,
  title: "",
  artist: "",
  image: "",
  time: "00:00",
  isFavorite: true,
  isActive: false,
  isHover: true,
};

const Song = (props: SongPropsType): React.ReactNode => {
  const [isActiveFavorite, setActiveFavorite] = useState(
    props.isFavorite ?? initSong.isFavorite
  );

  const [isActivePlay, setActivePlay] = useState(
    props.isActive ?? initSong.isActive
  );

  const handleClickFavorite = (e: any) => {
    setActiveFavorite(!isActiveFavorite);
    props.onClickFavorite?.(props.id ?? initSong.id);
    e.stopPropagation();
  };

  const handleClickPlay = (e: any) => {
    setActivePlay(!isActivePlay);
    props.onClickPlay?.("");
  };

  return (
    <div
      className={classNames(
        "flex flex-row items-center justify-between px-2 py-2 w-full bg-neutral-600 rounded-md",
        { "hover:bg-neutral-700": props.isHover ?? initSong.isHover },
        { "bg-neutral-500": isActivePlay }
      )}
      onClick={handleClickPlay}
    >
      <div className="flex flex-row items-center justify-start shrink">
        {props.pos && <div className="text-base">{props.pos}</div>}
        <Avatar shape="square" size={48} className="ml-2" />
        <div className="flex flex-col ml-1">
          <div className="text-base">{props.title ?? initSong.title}</div>
          <div className="text-base">{props.artist ?? initSong.artist}</div>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <FontAwesomeIcon
          icon={isActiveFavorite ? faInActiveHeart : faActiveHeart}
          className="text-base"
          onClick={handleClickFavorite}
        />
        <div className="text-base ml-2">{props.time ?? initSong.time}</div>
      </div>
    </div>
  );
};

export default Song;
