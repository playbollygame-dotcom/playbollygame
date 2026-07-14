"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const games = [
  {
    name: "Rummy",
    tag: "Popular",
  },
  {
    name: "Dragon vs Tiger",
    tag: "Hot",
  },
  {
    name: "Aviator",
    tag: "Trending",
  },
  {
    name: "7 Up Down",
    tag: "New",
  },
  {
    name: "Mines",
    tag: "Popular",
  },
  {
    name: "Ludo",
    tag: "Classic",
  },
];

export default function Games() {
  return (
    <section className="bg-[#081018] py-24 text-white">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <h2 className="text-5xl font-black">
            Featured Games
          </h2>

          <p className="mt-5 text-gray-400">
            Play your favourite games anytime.
          </p>

        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={25}
          autoplay={{
            delay: 2500,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          modules={[Autoplay]}
          className="mt-16"
        >

          {games.map((game) => (

            <SwiperSlide key={game.name}>

              <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition hover:border-red-600">

                <div className="flex h-56 items-center justify-center bg-gradient-to-br from-green-500 to-emerald-700">

                  <div className="text-7xl">

                    🎮

                  </div>

                </div>

                <div className="p-6">

                  <span className="rounded-full bg-red-600/20 px-3 py-1 text-sm text-red-500">
                    {game.tag}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold">
                    {game.name}
                  </h3>

                  <button className="mt-6 w-full rounded-xl bg-red-600 py-3 hover:bg-red-700">
                    Play Now
                  </button>

                </div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
}