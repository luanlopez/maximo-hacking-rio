import { Router } from "https://deno.land/x/oak/mod.ts"
import { getUsers } from './controllers/User/getUsers.ts'
 
export const router = new Router();
router
  .get("/user", getUsers)



