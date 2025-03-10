'use client'

import { Attachment, Message } from 'ai'
import { useChat } from 'ai/react'
import { useEffect, useState } from 'react'

import { Message as PreviewMessage } from '@/components/custom/message'
import { useScrollToBottom } from '@/components/custom/use-scroll-to-bottom'

import { MultimodalInput } from './multimodal-input'
import { Overview } from './overview'
import { getScenarioDescription } from '../../lib/utils'
import { Button } from '../ui/button'

export function Chat({
  id,
  initialMessages: initialData,
}: {
  id: string
  initialMessages: Array<Message>
}) {
  const [initialMessages] = useState(initialData)
  const [disabled, setDisabled] = useState(false)

  const handleSummary = () => {
    setDisabled(true)
  }

  const { messages, handleSubmit, input, setInput, append, isLoading, stop } =
    useChat({
      id,
      body: { id },
      initialMessages,
      maxSteps: 10,
      onFinish: () => {
        window.history.replaceState({}, '', `/chat/${id}`)
      },
    })

  const [messagesContainerRef, messagesEndRef] =
    useScrollToBottom<HTMLDivElement>()

  const [attachments, setAttachments] = useState<Array<Attachment>>([])
  return (
    <div className="flex h-dvh flex-row justify-center bg-background pb-4 md:pb-8">
      <div className="flex flex-col items-center justify-between gap-4">
        <div
          ref={messagesContainerRef}
          className="flex h-full w-dvw flex-col items-center gap-4 overflow-y-scroll"
        >
          {/* <Overview {...messages[0]} /> */}
          {messages.length <= 1 ? (
            <>
              <Overview {...messages[0]} />
              <Button
                onClick={() => {
                  append({
                    role: 'user',
                    content: 'Hey',
                  })
                }}
              >
                Start Interactive Simulation
              </Button>
            </>
          ) : (
            <div className="mx-4 mt-20 max-w-[500px] rounded bg-zinc-200/30 p-4 dark:bg-zinc-500/10 md:mx-0">
              <h3 className="text-lg">Scenario</h3>
              <p className=" text-xl font-semibold">
                {getScenarioDescription(messages[0])}
              </p>
              {/* <TextGenerateEffect
                className="italic"
                words={getScenarioDescription(messages[0])}
                duration={0.2}
                filter={false}
              /> */}
            </div>
          )}
          {messages.slice(2).map((message) => (
            <PreviewMessage
              key={message.id}
              chatId={id}
              role={message.role}
              content={message.content}
              attachments={message.experimental_attachments}
              toolInvocations={message.toolInvocations}
              handleSummary={handleSummary}
            />
          ))}

          <div
            ref={messagesEndRef}
            className="min-h-[24px] min-w-[24px] shrink-0"
          />
        </div>

        <form className="max-w-[calc(100dvw-32px) relative flex w-full flex-row items-end gap-2 px-4 md:max-w-[500px] md:px-0">
          <MultimodalInput
            disabled={disabled}
            input={input}
            setInput={setInput}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            stop={stop}
            attachments={attachments}
            setAttachments={setAttachments}
            messages={messages}
            append={append}
          />
        </form>
      </div>
    </div>
  )
}
