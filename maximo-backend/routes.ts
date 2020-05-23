import { Router } from "https://deno.land/x/oak/mod.ts"
import { getUsers } from './controllers/User/getUsers.ts';
import { createUser } from "./controllers/User/createUser.ts";
 
export const router = new Router();
router
  .get('/', (ctx) => {
    ctx.response.body = 'oi'
  })
  .get("/users", getUsers)
  .post("/newUser", createUser)


