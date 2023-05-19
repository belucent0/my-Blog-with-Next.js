'use client'

import useChannelTalk from "../useChannelTalk"

export default async function about() {
  


  if (typeof window !== "undefined") {
    useChannelTalk();
  }


    return (
      <div className="list-bg">
        소개 합니다
      </div>
    );
  } 