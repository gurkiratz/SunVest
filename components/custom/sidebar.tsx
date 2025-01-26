import { Button } from '@/components/ui/button'
import { auth, signOut } from '@/app/(auth)/auth'
import Link from 'next/link'

export const Sidebar = async () => {
  let session = await auth()

  return (
    <div className="w-64 bg-white dark:bg-gray-800 shadow-lg h-full">
      <div className="p-4 space-y-4">
        {/* User Profile Section */}
        <div className="flex flex-col items-center pb-6 border-b dark:border-gray-700">
          <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-gray-700 mb-3 overflow-hidden">
            <img
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${
                session?.user?.email?.slice(0, 5) || 'Felix'
              }`}
              alt="User Avatar"
              className="w-full h-full object-cover"
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
