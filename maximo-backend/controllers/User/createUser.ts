  import connectionDatabase from "../../database/connection.ts";
  import { ErrorHandler } from "../../utils/errorHandler.ts";
  
  const database = connectionDatabase.findDatabase;
  const user = database.collection("users");
  
  export async function createUser(ctx: any) {
    try {
      if (ctx.request.headers.get("content-type") !== "application/json") {
        throw new ErrorHandler("Body invalido", 422);
      }
      const body = await (ctx.request.body());
  
      console.log('body :>> ', body); 

      if (!Object.keys(body).length) {
        throw new ErrorHandler("O body não pode estar vazio!!", 400);
      }
      const { name, lastName, email, password } = body;
  
      await user.insertOne({
        name,
        lastName,
        email,
        password,
      });
  
      return ctx.response.body = 'Usuário cadastrado com sucesso';
    } catch (error) {
      throw new ErrorHandler(error.message, error.status || 500);
    }
  };