# Express TypeScript API Server

This is a minimal and fast Express server written in **TypeScript**, using **pnpm** as the package manager.

## 🚀 Getting Started

### 1. Install dependencies

> Make sure you have [pnpm](https://pnpm.io/installation) installed globally:

```bash
npm install -g pnpm
```

Then install dependencies:

```bash
pnpm install
```

### 2. Start the server in development mode

```bash
pnpm dev
```

You should see something like:

```
Server is running at http://localhost:3000
```

### 3. Test it

Open your browser or use `curl`:

- [http://localhost:3000/api/v1/hello](http://localhost:3000/api/v1/hello)

You should get a JSON response like:

```json
{
  "message": "Hello from TypeScript Express!"
}
```

---

## 📁 Project Structure

```
server/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── app.ts
│   └── server.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 💡 Scripts

| Script       | Description                                  |
| ------------ | -------------------------------------------- |
| `pnpm dev`   | Start dev server with hot reload (`nodemon`) |
| `pnpm build` | Compile TypeScript to JavaScript (`dist/`)   |
| `pnpm start` | Run the compiled server (production)         |

---

## 🛠️ Requirements

- Node.js 18+
- [pnpm](https://pnpm.io)
