import { motion } from 'framer-motion'
import Link from 'next/link'

import { LogoGoogle, MessageIcon, VercelIcon } from './icons'
import { TextGenerateEffect } from '../text-generate-effect'
import { Message } from 'ai'
import { getScenarioDescription } from '@/lib/utils'

export const Overview = (message: Message) => {
  return (
    <motion.div
      key="overview"
      className="mx-4 mt-20 max-w-[500px] md:mx-0"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="flex flex-col gap-4 rounded-2xl border-none bg-muted/50 p-6 text-sm text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
        <p className="flex flex-row items-center justify-center gap-4 text-zinc-900 dark:text-zinc-50">
          {/* <VercelIcon />
          <span>+</span>
          <span className="text-lg">👾</span> */}
          {/* <MessageIcon /> */}
        </p>
        <h3 className="text-lg">Scenario</h3>
        <TextGenerateEffect
          className="text-zinc-900 dark:text-zinc-300"
          duration={2}
          filter={false}
          words={getScenarioDescription(message)}
        />

        <p>
          CyberHacked simulates social engineering scenarios for educational
          purposes only. This app does not engage in real-world hacking or
          phishing activities.
        </p>
      </div>
    </motion.div>
  )
}
