import connectionDatabase from "../../database/connection.ts";
import { ErrorHandler } from "../../utils/errorHandler.ts";

const database = connectionDatabase.findDatabase;
const user = database.collection("users");

export async function getUsers(ctx: any) {
    try {
        const existUser = await user.find();
 
        if (existUser.length) {
            const list =  existUser.map((item: any) => {
                    const { _id: { $oid }, name, lastName, email, password } = item;

                    console.log('item :>> ', item);
                    return { id: $oid, name, lastName, email, password };
                }) 

            return ctx.response.body = list;
        }
    } catch (error) {
        throw new ErrorHandler(error.message, error.status || 500);
    }
};

