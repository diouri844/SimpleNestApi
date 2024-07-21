import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "@prisma/client";



@Controller("users")
export class UserController {
    constructor(private UserProvider: UserService) { }
    // create new user : 
    @Post()
    async createUser(@Body() UserPayload: Partial<Pick<User, 'id'>> & Omit<User, 'id'>) {
        const userResult: User | null = await this.UserProvider.createUser(UserPayload);
        if (!userResult) {
            return {
                message: "Server can not create new User"
            }
        }
        return {
            message: "New User created Successufully",
            data: userResult
        }
    };
    @Get("/all")
    async getUserList() {
        const userlist: User[] = await this.UserProvider.retriveAllUsers();
        return {
            message: "All users retrived Successufully",
            data: userlist
        }
    };
    @Get("/item/:id")
    async getUserById(@Param() params: { id: string }) {
        const res: User | null = await this.UserProvider.findUser(params.id);
        if (!res) {
            return {
                message: "Server can not find  User with ref : " + params.id
            }
        }
        return {
            message: "User retrived successfully",
            data: res
        };
    }
};