"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { sharedData } from "./site-data"
import { CommunityButton } from "./CommunityButton"

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const { navigation } = sharedData
  if (!navigation.visible) return null
  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <Link
          className="brand"
          href="/"
          aria-label={navigation.brandAlt}
        >
          <Image
            alt={navigation.brandAlt}
            height={70}
            priority
            src="/assets/logo.png"
            width={160}
          />
        </Link>

        <nav className={open ? "nav-open" : ""}>
          {navigation.items
            .filter((item) => item.visible)
            .map((item) => {
              const path = item.href.split("#")[0]
              const active = path === "/" ? pathname === "/" : pathname === path
              return (
                <Link
                  className={active ? "active" : ""}
                  href={item.href}
                  key={item.label}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              )
            })}
        </nav>
        <Link
          href={"/sign-up"}
          className="px-6 py-2 rounded-md bg-green-800 text-white hover:bg-green-900 transition-colors font-semibold"
        >
          Signup
        </Link>
        {navigation.communityButtonVisible ? (
          <div className="header-cta">
            <CommunityButton compact />
          </div>
        ) : null}
      </div>
    </header>
  )
}
