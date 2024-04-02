import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../../utils/cn";
import { DirectionAwareHover } from "./direction-aware-hover";

interface DirectionAwareHoverBoxProps {
  title: string;
  description: string;
  img: string;
}

export const DirectionAwareHoverBox: React.FC<DirectionAwareHoverBoxProps> = ({
  title,
  description,
  img,
}) => {
  return (
    <div className="relative flex items-center justify-center">
      <DirectionAwareHover imageUrl={img}>
        <p className="font-bold text-xl">{title}</p>
        <p className="font-normal text-sm">{description}</p>
      </DirectionAwareHover>
    </div>
  );
};
