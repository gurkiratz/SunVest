'use client'

import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import cx from 'classnames'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { User } from 'next-auth'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import useSWR from 'swr'

import { Chat } from '@/lib/db/schema'
import { fetcher, getTitleFromChat } from '@/lib/utils'

import {
  InfoIcon,
  MenuIcon,
  MoreHorizontalIcon,
  PencilEditIcon,
  TrashIcon,
} from './icons'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../ui/alert-dialog'
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '../ui/sheet'
import { Shuffle } from 'lucide-react'

export const History = ({ user }: { user: User | undefined }) => {
  const { id } = useParams()
  const pathname = usePathname()

  const [isHistoryVisible, setIsHistoryVisible] = useState(false)
  const {
    data: history,
    isLoading,
    mutate,
  } = useSWR<Array<Chat>>(user ? '/api/history' : null, fetcher, {
    fallbackData: [],
  })

  useEffect(() => {
    mutate()
  }, [pathname, mutate])

  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)

  const handleDelete = async () => {
    const deletePromise = fetch(`/api/chat?id=${deleteId}`, {
      method: 'DELETE',
    })

    toast.promise(deletePromise, {
      loading: 'Deleting chat...',
      success: () => {
        mutate((history) => {
          if (history) {
            return history.filter((h) => h.id !== id)
          }
        })
        return 'Chat deleted successfully'
      },
      error: 'Failed to delete chat',
    })

    setShowDeleteDialog(false)
  }

  return (
    <>
      <Button
        variant="outline"
        className="h-fit p-1.5"
        onClick={() => {
          setIsHistoryVisible(true)
        }}
      >
        <MenuIcon />
      </Button>

      <Sheet
        open={isHistoryVisible}
        onOpenChange={(state) => {
          setIsHistoryVisible(state)
        }}
      >
        <SheetContent side="left" className="w-80 bg-muted p-3">
          <SheetHeader>
            <VisuallyHidden.Root>
              <SheetTitle className="text-left">Scenarios</SheetTitle>
              {/* <SheetDescription className="text-left">
                {history === undefined ? 'loading' : history.length} chats
              </SheetDescription> */}
            </VisuallyHidden.Root>
          </SheetHeader>

          <div className="flex flex-row items-center justify-between text-sm">
            <div className="flex flex-row gap-2">
              <div className="dark:text-zinc-300">Scenarios</div>

              {/* <div className="dark:text-zinc-400 text-zinc-500">
                {history === undefined ? 'loading' : history.length} chats
              </div> */}
            </div>
          </div>

          <div className="mt-10 flex flex-col">
            <div className="flex h-[calc(100dvh-124px)] flex-col overflow-y-scroll p-1">
              {!user ? (
                <div className="flex h-dvh w-full flex-row items-center justify-center gap-2 text-sm text-zinc-500">
                  <InfoIcon />
                  <div>Login to save and practice real-world scenarios!</div>
                </div>
              ) : null}

              {!isLoading && history?.length === 0 && user ? (
                <div className="flex h-dvh w-full flex-row items-center justify-center gap-2 text-sm text-zinc-500">
                  <InfoIcon />
                  <div>No chats found</div>
                </div>
              ) : null}

              {isLoading && user ? (
                <div className="flex flex-col">
                  {[44, 32, 28, 52].map((item) => (
                    <div key={item} className="my-[2px] p-2">
                      <div
                        className={`w-${item} h-[20px] animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-600`}
                      />
                    </div>
                  ))}
                </div>
              ) : null}

              {history &&
                history.map((chat) => (
                  <div
                    key={chat.id}
                    className={cx(
                      'flex flex-row items-center gap-6 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-md pr-2',
                      { 'bg-zinc-200 dark:bg-zinc-700': chat.id === id }
                    )}
                  >
                    <Button
                      variant="ghost"
                      className={cx(
                        'hover:bg-zinc-200 dark:hover:bg-zinc-700 justify-between p-0 text-sm font-normal flex flex-row items-center gap-2 pr-2 w-full transition-none'
                      )}
                      asChild
                    >
                      <Link
                        href={`/chat/${chat.id}`}
                        className="overflow-hidden text-ellipsis rounded-lg py-2 pl-2 text-left outline-zinc-900"
                      >
                        {getTitleFromChat(chat)}
                      </Link>
                    </Button>

                    <DropdownMenu modal={true}>
                      <DropdownMenuTrigger asChild>
                        <Button
                          className="h-fit p-0 font-normal text-zinc-500 transition-none hover:bg-zinc-200 dark:hover:bg-zinc-700"
                          variant="ghost"
                        >
                          <MoreHorizontalIcon />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent side="left" className="z-[60]">
                        <DropdownMenuItem asChild>
                          <Button
                            className="flex h-fit w-full flex-row items-center justify-start gap-2 rounded-sm p-1.5 font-normal"
                            variant="ghost"
                            onClick={() => {
                              setDeleteId(chat.id)
                              setShowDeleteDialog(true)
                            }}
                          >
                            <TrashIcon />
                            <div>Delete</div>
                          </Button>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                ))}
            </div>
            {user && (
              <Button
                className="flex flex-row justify-between text-sm font-normal text-white"
                asChild
              >
                <Link href="/">
                  <div>Random (experimental)</div>
                  <Shuffle size={14} />
                </Link>
              </Button>
            )}
          </div>
        </SheetContent>
      </Sheet>

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              chat and remove it from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
