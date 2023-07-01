"use client";
import Counter from "@/components/blocks/counter/Counter";
import React, { useEffect, useState } from "react";
import Button from "@/components/elements/button/Button";
import Link from "next/link";
import { Item } from "@/db";
import { useClient } from "../layout/ClientWrapper";

export default function CartCard({ item }: { item: Item }) {
  const [count, setCount] = useState(1);
  const { setCartData, CartData } = useClient();

  return (
    <div className="flex gap-4 items-center w-full">
      <div className="img w-[10em] h-[10em] rounded-lg">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={item.img}
          alt={item.name}
        />
      </div>

      <div className="flex flex-col w-full">
        <div className="font-bold text-2xl">{item.name}</div>
        <div className="mt-2">
          <Counter State={count} setState={setCount} />
        </div>

        <div className="flex justify-between items-center mt-3">
          <Link passHref href="/">
            <Button size={"sm"} outlined>
              تفاصيل المنتج
            </Button>
          </Link>
          <div className="font-bold text-2xl">1000 IQD</div>
        </div>
      </div>
    </div>
  );
}
