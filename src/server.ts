import { app } from "./app.js";

const DEFAULT_PORT = 3000;

function startServer(): void {
  const port = Number(process.env.PORT ?? DEFAULT_PORT);

  app.listen(port, () => {
    console.log(`API Produtos running on port ${port}`);
  });
}

export { startServer };
