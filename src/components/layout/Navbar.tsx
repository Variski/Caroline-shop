"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, Search, User } from "lucide-react";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="w-full border-b bg-black sticky top-0 z-50 text-white">
      {/* TOP NAV */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* LOGO */}
        <h1 className="text-xl font-bold cursor-pointer">
          <span className="text-red-600">Caroline</span> Shop
        </h1>

        {/* MENU */}
        <nav className="hidden md:flex gap-8 font-medium">
          {/* SHOES */}
          <div
            onMouseEnter={() => setActiveMenu("shoes")}
            onMouseLeave={() => setActiveMenu(null)}
            className="relative"
          >
            <span className="cursor-pointer">Shoes</span>

            {activeMenu === "shoes" && (
              <div className="absolute left-0 top-full mt-4 w-100 bg-black shadow-lg border p-6 grid grid-cols-2 gap-4">
                <Link href="/category/shoes/men">Men</Link>
                <Link href="/category/shoes/women">Women</Link>
                <Link href="/category/shoes/kids">Kids</Link>
              </div>
            )}
          </div>

          {/* BRANDS */}
          <div
            onMouseEnter={() => setActiveMenu("brands")}
            onMouseLeave={() => setActiveMenu(null)}
            className="relative"
          >
            <span className="cursor-pointer">Brands</span>

            {activeMenu === "brands" && (
              <div className="absolute left-0 top-full mt-4 w-125 bg-black shadow-lg border p-6 grid grid-cols-3 gap-4">
                <Link href="/brand/nike">Nike</Link>
                <Link href="/brand/adidas">Adidas</Link>
                <Link href="/brand/newbalance">New Balance</Link>
                <Link href="/brand/puma">Puma</Link>
                <Link href="/brand/stussy">Stussy</Link>
                <Link href="/brand/supreme">Supreme</Link>
              </div>
            )}
          </div>

          {/* CLOTHING */}
          <div
            onMouseEnter={() => setActiveMenu("clothing")}
            onMouseLeave={() => setActiveMenu(null)}
            className="relative"
          >
            <span className="cursor-pointer">Clothing</span>

            {activeMenu === "clothing" && (
              <div className="absolute left-0 top-full mt-4 w-100 bg-black shadow-lg border p-6 grid grid-cols-2 gap-4">
                <Link href="/category/clothing/hoodie">Hoodie</Link>
                <Link href="/category/clothing/tshirt">T-Shirt</Link>
                <Link href="/category/clothing/jacket">Jacket</Link>
                <Link href="/category/clothing/pants">Pants</Link>
              </div>
            )}
          </div>

          {/* STATIC */}
          <Link href="/new">New</Link>
          <Link href="/sale">Sale</Link>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          {/* SEARCH */}
          <Search className="w-5 h-5 cursor-pointer" />

          {/* CART */}
          <div className="relative cursor-pointer">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 text-xs bg-black text-white px-1 rounded-full">
              0
            </span>
          </div>

          {/* USER */}
          <User className="w-5 h-5 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
