"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Reviews() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] items-center justify-center relative overflow-hidden">
        <h1 className="text-white text-4xl">What Our User says</h1>
      <InfiniteMovingCards items={reviews} direction="right" speed="slow" />
    </div>
  );
}

const reviews = [
  {
    quote:
      "Spotify has completely revolutionized my music listening experience. The curated playlists and personalized recommendations are spot on.",
    name: "Alice Johnson",
    title: "Music Enthusiast",
  },
  {
    quote:
      "Wynk Music offers a great variety of songs in multiple languages. The interface is user-friendly, and I love the offline listening feature.",
    name: "Rahul Sharma",
    title: "Music Lover",
  },
  {
    quote:
      "Hungama Music is fantastic for discovering new artists. The app is smooth, and the audio quality is excellent.",
    name: "Emily Davis",
    title: "Audiophile",
  },
  {
    quote:
      "Spotify's seamless integration with other devices and platforms makes it a go-to choice for streaming music on the go.",
    name: "James Wilson",
    title: "Tech Savvy",
  },
  {
    quote:
      "Wynk's exclusive content and live radio feature set it apart from other streaming services. Highly recommended!",
    name: "Priya Verma",
    title: "Radio Fanatic",
  },
];
