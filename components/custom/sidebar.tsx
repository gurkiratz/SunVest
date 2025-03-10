import { Button } from '@/components/ui/button'
import { auth, signOut } from '@/app/(auth)/auth'
import Link from 'next/link'

export const Sidebar = async () => {
  let session = await auth()

  return (
    <div className="h-full w-64 bg-white shadow-lg dark:bg-gray-800">
      <div className="space-y-4 p-4">
        {/* User Profile Section */}
        <div className="flex flex-col items-center border-b pb-6 dark:border-gray-700">
          <div className="mb-3 size-20 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
            <img
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${
                session?.user?.email?.slice(0, 4) || 'Felix'
              }`}
              alt="User Avatar"
              className="size-full object-cover"
            />
          </div>
          {/* <h3 className="text-lg font-semibold">
            {session?.user?.name || 'Guest User'}
          </h3> */}
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {session?.user?.email || ''}
          </p>
        </div>
        <h2 className="text-xl font-bold">Account</h2>
        <div className="space-y-2">
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/plans">Plans & Features</Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/support">Support</Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/community">Community</Link>
          </Button>
          <form
            action={async () => {
              'use server'

              await signOut({
                redirectTo: '/',
              })
            }}
          >
            <Button
              type="submit"
              variant="ghost"
              className="w-full justify-start text-red-500"
            >
              Sign Out
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
