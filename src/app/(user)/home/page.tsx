"use client";

import songs from "__mocks__/songs";
import Song from "@/components/Song";
import SongControl from "@/components/SongControl";
import ISong from "@/components/Song/ISong";
import { ReactNode } from "react";
import ISongEvent from "@/components/Song/ISongEvent";

function getSongItem({
  id,
  title,
  time,
  onClickPlay,
  onClickFavorite,
}: ISong & ISongEvent): ReactNode {
  return (
    <Song
      key={id}
      id={id}
      title={title}
      time={time}
      onClickFavorite={onClickFavorite}
      onClickPlay={onClickPlay}
    />
  );
}

const handleClickFavorite = (id: string | number) => {
  console.log(id);
};

const handleClickPlay = (id: string | number) => {
  console.log(id);
};

const items: ReactNode[] = [
  getSongItem({
    ...songs[0],
    onClickFavorite: handleClickFavorite,
    onClickPlay: handleClickPlay,
  }),
  getSongItem({
    ...songs[1],
    onClickFavorite: handleClickFavorite,
    onClickPlay: handleClickPlay,
  }),
  getSongItem(songs[2]),
  getSongItem(songs[2]),
  getSongItem(songs[2]),
  getSongItem(songs[2]),
  getSongItem(songs[2]),
  getSongItem(songs[2]),
  getSongItem(songs[2]),
  getSongItem(songs[2]),
  getSongItem(songs[2]),
  getSongItem(songs[2]),
  getSongItem(songs[2]),
];

const Home = () => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col gap-2">
        <SongControl items={items} />
      </div>
    </div>
  );
};

export default Home;
