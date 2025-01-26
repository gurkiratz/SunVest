# SunVest 🌅

> Financial education meets investment action. A Next.js-powered platform helping young Canadians learn and invest.

## 🚀 Features

### 📊 Market Data Integration

- Real-time market data from Yahoo Finance API
- Optimized API calls with Redis caching
- Configurable refresh rates for different data types
- Fallback to Alpaca API for redundancy

### 🤖 AI Financial Assistant

- GPT-powered chatbot for financial education
- Contextual learning based on user portfolio
- Real-time market explanations
- Custom-trained on financial concepts
- Conversation history tracking

### 💡 Interactive Learning

- Step-by-step investment guides
- Contextual tooltips and popups
- Progress tracking
- Gamified learning modules
- Real-world scenario simulations

### 🛠 Technical Stack

- **Frontend**: Next.js 14 with TypeScript
- **Backend**: Node.js/Express with TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Caching**: Redis
- **Authentication**: NextAuth.js
- **API**: RESTful + GraphQL
- **Testing**: Jest + Cypress
- **Deployment**: Vercel + AWS

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/yourusername/sunvest.git

# Install dependencies
cd sunvest
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

## 🔧 Configuration

Create a `.env.local` file with:

```env
# Database
DATABASE_URL="postgresql://..."

# Redis
REDIS_URL="redis://..."

# Authentication
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret"

# APIs
YAHOO_FINANCE_API_KEY="your-key"
ALPACA_API_KEY="your-key"
ALPACA_SECRET_KEY="your-secret"
OPENAI_API_KEY="your-key"
```

## 📚 API Documentation

### Market Data

```typescript
GET /api/market/stock/:symbol
GET /api/market/etf/:symbol
GET /api/market/search?q=:query
```

### User Data

```typescript
GET / api / user / portfolio
POST / api / user / transaction
GET / api / user / history
```

### AI Assistant

```typescript
POST / api / chat
GET / api / chat / history
```

## 🔒 Security Features

- JWT authentication
- Rate limiting
- Input validation
- SQL injection prevention
- XSS protection
- CSRF tokens

## 💾 Database Schema

```sql
// Key tables
Users (
  id, email, name, created_at, ...
)

Portfolios (
  id, user_id, balance, created_at, ...
)

Transactions (
  id, portfolio_id, symbol, amount, type, ...
)

ChatHistory (
  id, user_id, message, response, created_at, ...
)
```

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run integration tests
npm run test:integration

# Run E2E tests
npm run test:e2e
```

## 📈 Performance

- API Response Time: <100ms
- Cache Hit Ratio: >90%
- Uptime: 99.9%
- Max Concurrent Users: 10,000

## 🛣 Roadmap

- [ ] Advanced portfolio analytics
- [ ] Social features
- [ ] Mobile app
- [ ] Automated tax reporting
- [ ] International markets

## 👥 Contributing

Pull requests are welcome. For major changes, please open an issue first.

## 📄 License

[MIT](https://choosealicense.com/licenses/mit/)

## 🙏 Acknowledgments

- SunLife for support
- Yahoo Finance for market data
- OpenAI for AI capabilities
