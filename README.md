# Mortgage Loan Simulator

A full-stack application for simulating mortgage loan approvals with automated decision-making based on financial criteria.

## 🏗️ Architecture

This project follows a full-stack architecture with clear separation of concerns:

- **Frontend**: React 19 + TypeScript + Vite + Tailwind CSS + Zustand
- **Backend**: Node.js + Express + TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Containerization**: Docker & Docker Compose

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/hugomendoza/mortgage-loan-simulator.git
   cd mortgage-loan-simulator
   ```

2. **Set up environment variables**

   For the API:

   ```bash
   cd api
   cp .env.template .env
   # Edit .env with your database credentials
    PORT=3000

    POSTGRES_URL=postgresql://root:root@db-mortgage:5432/mortage
    POSTGRES_USER=root
    POSTGRES_PASSWORD=root
    POSTGRES_DB=mortage
   ```

> [!IMPORTANT]
> For docker the POSTGRES_URL must include the name of the container in the `docker-compose.yml`

```bash
  POSTGRES_URL=postgresql://root:root@db-mortgage:5432/mortage
```

> [!IMPORTANT]
> For local development include `localhost` instead of the name of the container in the `docker-compose.yml`

```bash
  POSTGRES_URL=postgresql://root:root@localhost:5432/mortage
```

For the Frontend:

```bash
cd simulator
cp .env.template .env
# Edit .env with your API URL
VITE_API_URL=http://localhost:3000/api/v1
```

3. **Start with Docker (Recommended)**

   ```bash
   # Start the database and API
   docker-compose up -d

   # Start the frontend separately
   cd simulator
   npm install
   npm run dev
   ```

4. **Or start manually**

   ```bash
   # Start PostgreSQL database
   # Configure your database connection

   # Start the API
   cd api
   npm install
   npm run dev

   # Start the frontend (in another terminal)
   cd simulator
   npm install
   npm run dev
   ```

### Database Setup

The API automatically runs database migrations on startup when using Docker. For manual setup:

```bash
cd api
npx prisma migrate dev
npx prisma generate
```

## 🎯 API Endpoints

### Mortgage Simulation

- `POST /api/v1/mortgage` - Submit a new mortgage simulation

**Request Body:**

```json
{
  "monthlyIncome": 5000,
  "monthlyDebts": 1500,
  "loanAmount": 250000,
  "propertyValue": 300000,
  "creditScore": 720,
  "occupancyType": "primary"
}
```

**Response:**

```json
{
  "id": "uuid",
  "status": "APPROVED",
  "debtToIncome": 0.3,
  "loanToValue": 0.83,
  "reasons": ["The request meets all automatic approval criteria."],
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

- `GET /api/v1/mortgage` - Get all mortgages saved in database

**Response:**

```json
[
  {
    "id": "uuid",
    "status": "APPROVED",
    "debtToIncome": 0.3,
    "loanToValue": 0.83,
    "reasons": ["The request meets all automatic approval criteria."],
    "createdAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": "uuid",
    "status": "REFER",
    "debtToIncome": 0.3,
    "loanToValue": 0.83,
    "reasons": ["The request meets all automatic approval criteria."],
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
]
```

### Running Tests

```bash
# Frontend tests
cd simulator
npm run test
```

## 📚 Learnings

## 🎢 Challenges
