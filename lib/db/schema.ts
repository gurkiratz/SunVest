import { Message } from 'ai'
import { InferSelectModel } from 'drizzle-orm'
import {
  pgTable,
  varchar,
  timestamp,
  json,
  uuid,
  boolean,
  decimal,
  text,
} from 'drizzle-orm/pg-core'

export const user = pgTable('User', {
  id: uuid('id').primaryKey().notNull().defaultRandom(),
  email: varchar('email', { length: 64 }).notNull(),
  password: varchar('password', { length: 64 }),
})

export type User = InferSelectModel<typeof user>

export const portfolio = pgTable('Portfolio', {
  id: uuid('id').primaryKey().notNull().defaultRandom(),
  userId: uuid('userId')
    .notNull()
    .references(() => user.id),
  currentBalance: decimal('currentBalance', {
    precision: 12,
    scale: 2,
  }).notNull(),
  buyingPower: decimal('buyingPower', { precision: 12, scale: 2 }).notNull(),
  lastUpdated: timestamp('lastUpdated').notNull(),
})

export type Portfolio = InferSelectModel<typeof portfolio>

export const portfolioTimeframe = pgTable('PortfolioTimeframe', {
  id: uuid('id').primaryKey().notNull().defaultRandom(),
  portfolioId: uuid('portfolioId')
    .notNull()
    .references(() => portfolio.id),
  timeframe: varchar('timeframe', { length: 10 }).notNull(), // 1D, 1M, 1Y, All
  labels: json('labels').notNull(), // Array of time labels
  data: json('data').notNull(), // Array of corresponding values
  lastUpdated: timestamp('lastUpdated').notNull(),
})

export type PortfolioTimeframe = InferSelectModel<typeof portfolioTimeframe>

export const holding = pgTable('Holding', {
  id: uuid('id').primaryKey().notNull().defaultRandom(),
  portfolioId: uuid('portfolioId')
    .notNull()
    .references(() => portfolio.id),
  symbol: varchar('symbol', { length: 10 }).notNull(),
  quantity: decimal('quantity', { precision: 10, scale: 4 }).notNull(),
  averagePrice: decimal('averagePrice', { precision: 10, scale: 2 }).notNull(),
  currentPrice: decimal('currentPrice', { precision: 10, scale: 2 }).notNull(),
  lastUpdated: timestamp('lastUpdated').notNull(),
})

export type Holding = InferSelectModel<typeof holding>

export const transaction = pgTable('Transaction', {
  id: uuid('id').primaryKey().notNull().defaultRandom(),
  portfolioId: uuid('portfolioId')
    .notNull()
    .references(() => portfolio.id),
  type: varchar('type', { length: 4 }).notNull(), // BUY or SELL
  symbol: varchar('symbol', { length: 10 }).notNull(),
  quantity: decimal('quantity', { precision: 10, scale: 4 }).notNull(),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  timestamp: timestamp('timestamp').notNull(),
  status: varchar('status', { length: 10 }).notNull(), // PENDING, COMPLETED, FAILED
  notes: text('notes'),
})

export type Transaction = InferSelectModel<typeof transaction>

export const chat = pgTable('Chat', {
  id: uuid('id').primaryKey().notNull().defaultRandom(),
  createdAt: timestamp('createdAt').notNull(),
  messages: json('messages').notNull(),
  userId: uuid('userId')
    .notNull()
    .references(() => user.id),
})

export type Chat = Omit<InferSelectModel<typeof chat>, 'messages'> & {
  messages: Array<Message>
}

export const orders = pgTable('orders', {
  id: uuid('id').primaryKey().notNull().defaultRandom(),
  asset: varchar('asset', { length: 10 }).notNull(),
  orderType: varchar('order_type', { length: 4 }).notNull(),
  quantity: decimal('quantity', { precision: 10, scale: 4 }).notNull(),
  source: varchar('source', { length: 10 }).notNull(),
  submittedAt: timestamp('submitted_at').notNull().defaultNow(),
  expiresAt: timestamp('expires_at').notNull(),
  userId: uuid('userId')
    .notNull()
    .references(() => user.id),
})

export type Order = InferSelectModel<typeof orders>

export const reservation = pgTable('Reservation', {
  id: uuid('id').primaryKey().notNull().defaultRandom(),
  createdAt: timestamp('createdAt').notNull(),
  details: json('details').notNull(),
  hasCompletedPayment: boolean('hasCompletedPayment').notNull().default(false),
  userId: uuid('userId')
    .notNull()
    .references(() => user.id),
})

export type Reservation = InferSelectModel<typeof reservation>
