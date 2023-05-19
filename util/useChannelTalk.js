"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import ChannelService from "./ChannelService";

const useChannelTalk = () => {
  const router = useRouter();
  useEffect(() => {
    ChannelService.boot({
      pluginKey: process.env.NEXT_PUBLIC_CHANNEL_TALK_KEY,
    });
  }, [router]);
  }

export default useChannelTalk;
