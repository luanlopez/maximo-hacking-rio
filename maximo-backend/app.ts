import { Application } from "https://deno.land/x/oak/mod.ts";
import { router } from './routes.ts'
const port = 8000

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: port });
console.log(`server listening on http://localhost:${port}`);