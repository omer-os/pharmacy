"use client";
import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Button from "@components/elements/button/Button";

interface CounterProps {
  State: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
  minValue?: number;
  maxValue?: number;
}

export default function Counter({
  State,
  setState,
  minValue = 0,
  maxValue,
}: CounterProps) {
  const decrementDisabled = State <= minValue;
  const incrementDisabled = maxValue !== undefined && State >= maxValue;

  return (
    <div className="flex items-center gap-2">
      <Button
        onClick={() => !decrementDisabled && setState((prev) => prev - 1)}
        size="icon"
        disabled={decrementDisabled}
      >
        <AiOutlineMinus />
      </Button>

      <div className="text-md font-bold">{State}</div>

      <Button
        onClick={() => !incrementDisabled && setState((prev) => prev + 1)}
        size="icon"
        disabled={incrementDisabled}
      >
        <AiOutlinePlus />
      </Button>
    </div>
  );
}
