'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useActionState, useEffect, useState } from 'react'
import { toast } from 'sonner'

import { AuthForm } from '@/components/custom/auth-form'
import { SubmitButton } from '@/components/custom/submit-button'

import { login, LoginActionState } from '../actions'
import { Hero } from '@/components/Hero'

export default function Page() {
  const router = useRouter()

  const [email, setEmail] = useState('')

  const [state, formAction] = useActionState<LoginActionState, FormData>(
    login,
    {
      status: 'idle',
    }
  )

  useEffect(() => {
    if (state.status === 'failed') {
      toast.error('Invalid credentials!')
    } else if (state.status === 'invalid_data') {
      toast.error('Failed validating your submission!')
    } else if (state.status === 'success') {
      router.refresh()
    }
  }, [state.status, router])

  const handleSubmit = (formData: FormData) => {
    setEmail(formData.get('email') as string)
    formAction(formData)
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-20 bg-background sm:flex-row">
      <div className="flex w-full max-w-md flex-col gap-12 rounded-2xl">
        <div className="flex flex-col items-center justify-center gap-2 px-4 text-center sm:px-16">
          <h3 className="text-xl font-semibold dark:text-zinc-50">Sign In</h3>
          <p className="text-sm text-gray-500 dark:text-zinc-400">
            Use your email and password to sign in
          </p>
        </div>
        <AuthForm action={handleSubmit} defaultEmail={email}>
          <SubmitButton>Sign in</SubmitButton>
          <p className="mt-4 text-center text-sm text-gray-600 dark:text-zinc-400">
            {"Don't have an account? "}
            <Link
              href="/register"
              className="font-semibold text-gray-800 hover:underline dark:text-zinc-200"
            >
              Sign up
            </Link>
            {' for free.'}
          </p>
        </AuthForm>
      </div>
      <div className="flex w-full max-w-md flex-col gap-12 overflow-hidden rounded-2xl">
        <div className="flex flex-col items-center justify-center gap-2 px-4 text-center sm:px-16">
          <h3 className="text-xl font-semibold dark:text-zinc-50">Sign Up</h3>
          <p className="text-sm text-gray-500 dark:text-zinc-400">
            Create an account with your email and password
          </p>
        </div>
        <AuthForm action={handleSubmit} defaultEmail={email}>
          <SubmitButton>Sign Up</SubmitButton>
          <p className="mt-4 text-center text-sm text-gray-600 dark:text-zinc-400">
            {'Already have an account? '}
            <Link
              href="/login"
              className="font-semibold text-gray-800 hover:underline dark:text-zinc-200"
            >
              Sign in
            </Link>
            {' instead.'}
          </p>
        </AuthForm>
      </div>
    </div>
  )
}
