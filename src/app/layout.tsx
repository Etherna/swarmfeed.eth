import { Link, Outlet } from "@tanstack/router"

import "./globals.css"

import { ReactComponent as Logo } from "@/assets/logo.svg"

export default function Layout() {
  return (
    <div className="relative flex h-screen w-full flex-col">
      <div className="mx-auto inline-flex flex-col py-8">
        <h1 className="text-center text-2xl font-black tracking-tight">
          <Link to="/">Swarm Feed Resolver</Link>
        </h1>
        <div className="ml-auto">
          <a
            className="flex items-center text-xs"
            href="https://etherna.io"
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-muted-foreground">Powered by</span>
            <Logo className="ml-2 h-4" />
          </a>
        </div>
      </div>
      <main className="container flex flex-grow flex-col">
        <Outlet />
      </main>
    </div>
  )
}
