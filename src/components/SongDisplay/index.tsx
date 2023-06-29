"use client";
import React, { useState } from "react";
import { Avatar } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faBars,
  faForward,
  faPause,
  faPlay,
  faHeart as faSolidHeart,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import ISong from "./ISong";
import Volume from "./Volume";
import ISongDisplayEvent from "./ISongDisplayEvent";

export type SongDisplayPropsType = ISong & ISongDisplayEvent;

const initialSongDisplayProps: SongDisplayPropsType = {
  id: "",
  title: "hello tat ca moi nguoi",
  artist: "Ameee",
  image: "",
  time: "",
  isFavorite: false,
};

const SongDisplay = (props: SongDisplayPropsType) => {
  const [isFavorite, setFavorite] = useState<boolean>(
    props.isFavorite ?? false
  );

  const [isPlay, setPlay] = useState<boolean>(false);

  const handleClickBackward = () => {};

  const handleClickPlay = () => {
    setPlay(!isPlay);
  };

  const handleClickForward = () => {};

  const handleClickFavorite = () => {
    setFavorite(!isFavorite);
  };

  const handleClickQueue = () => {};

  return (
    <div className="flex justify-between items-center h-full w-full px-2 py-1">
      <div className="flex flex-row justify-start items-center gap-4">
        <Avatar shape="square" size={54} />
        <div className="flex flex-col">
          <div className="text-base text-white">
            {props.title ?? initialSongDisplayProps.title}
          </div>
          <div className="text-xs text-white">
            {props.artist ?? initialSongDisplayProps.artist}
          </div>
        </div>
        <FontAwesomeIcon
          icon={isFavorite ? faSolidHeart : faRegularHeart}
          onClick={handleClickFavorite}
          className="text-white"
        />
      </div>
      <div className="flex flex-col  gap-2">
        <div className="flex flex-row justify-center items-center gap-4">
          <FontAwesomeIcon
            icon={faBackward}
            onClick={handleClickForward}
            className="text-white"
          />
          <div className="h-8 w-8 flex flex-row justify-around items-center bg-white rounded-full">
            <FontAwesomeIcon
              icon={isPlay ? faPause : faPlay}
              onClick={handleClickPlay}
            />
          </div>
          <FontAwesomeIcon
            icon={faForward}
            onClick={handleClickBackward}
            className="text-white"
          />
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="text-xs text-white">00:00</div>
          <progress
            style={{
              height: 4,
              borderRadius: 2,
            }}
          ></progress>
          <div className="text-xs text-white">01:01</div>
        </div>
      </div>
      <div className="flex flex-row items-center gap-4 h-full">
        <FontAwesomeIcon icon={faBars} onClick={handleClickQueue} />
        <Volume />
      </div>
    </div>
  );
};

export default SongDisplay;
