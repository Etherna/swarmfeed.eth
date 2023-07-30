/*
 *  Copyright 2021-present Etherna Sagl
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

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
