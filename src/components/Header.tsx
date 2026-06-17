"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const nav = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/contact", label: "Contact" },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="py-4 border-b border-slate-800 sticky top-0 z-30 backdrop-blur-sm bg-black/30">
      <div className="site-container flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          Marwan Ali Mohamed
        </Link>

        <nav>
          <ul className="flex gap-6 items-center">
            {nav.map((n) => {
              const isActive =
                pathname === n.href ||
                (n.href === "/#services" && pathname === "/")

              return (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    scroll={true}
                    className={`text-slate-300 hover:text-white ${
                      isActive ? "text-white underline" : ""
                    }`}
                  >
                    {n.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}