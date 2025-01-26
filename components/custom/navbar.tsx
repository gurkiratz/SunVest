import Image from 'next/image'
import Link from 'next/link'

import { auth, signOut } from '@/app/(auth)/auth'

import { History } from './history'
import { SlashIcon } from './icons'
import { ThemeToggle } from './theme-toggle'
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { CircleUserRound, ShieldCheck, User } from 'lucide-react'

export const Navbar = async () => {
  let session = await auth()

  return (
    <>
      <div className="bg-background absolute top-0 left-0 w-dvw py-2 px-3 justify-between flex flex-row items-center z-30">
        <div className="flex flex-row gap-3 items-center">
          <History user={session?.user} />
          <Link href={'/'} className="flex flex-row gap-2 items-center">
            <Image
              src="/logo.png"
              height={20}
              width={20}
              alt="CyberHacked logo"
            />
            {/* <span className="text-xl">👾</span> */}
            {/* <div className="text-zinc-500">
              <SlashIcon size={16} />
            </div> */}
            <span className="text-lg dark:text-zinc-300 w-28 md:w-fit">
              cyberhacked.co
            </span>
          </Link>
        </div>

        {session ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="py-1.5 px-2 h-fit font-normal flex gap-1"
                variant="secondary"
              >
                <CircleUserRound size={15} /> {session.user?.email}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <ThemeToggle />
              </DropdownMenuItem>
              <DropdownMenuItem className="p-1 z-50">
                <form
                  className="w-full"
                  action={async () => {
                    'use server'

                    await signOut({
                      redirectTo: '/',
                    })
                  }}
                >
                  <button
                    type="submit"
                    className="w-full text-left px-1 py-0.5 text-red-500"
                  >
                    Sign out
                  </button>
                </form>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <></>
        )}
      </div>
    </>
  )
}
