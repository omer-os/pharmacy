"use client";
import React from "react";
import CartCard from "./CartCard";
import { useClient } from "../layout/ClientWrapper";

export default function CartPage() {
  const { setCartData, CartData } = useClient();

  return (
    <div className="flex md:flex-row gap-10">
      <div className="bg-white p-3 rounded border w-[50em]">
        <div className="flex justify-between items-center">
          <p className="font-bold text-xl">مراجعة العناصر</p>
        </div>

        <div className="flex flex-col gap-3">
          {CartData.map((item) => (
            <CartCard item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
