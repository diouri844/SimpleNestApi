import { Injectable } from "@nestjs/common";
import { PrismaClient, User } from "@prisma/client";


@Injectable()
export class UserService {
    // setup a prisma client : 
    private MyPrismaClient: PrismaClient = new PrismaClient();
    // get all users 
    async retriveAllUsers(): Promise<User[]> {
        return await this.MyPrismaClient.user.findMany() as User[];
    };
    // get user by id :
    async findUser(id: string): Promise<User | null> {
        const userTarget: User | null = await this.MyPrismaClient.user.findUnique({
            where: {
                id
            }
        });
        return userTarget;
    };
    // remove user by id : 
    async removeUser(id: string): Promise<boolean> {
        return await this.MyPrismaClient.user.delete({ where: { id } }) != null;
    };
    // create new user :
    async createUser(userPayload: Partial<Pick<User, 'id'>> & Omit<User, 'id'>): Promise<User | null> {
        const newAddedUser: User = await this.MyPrismaClient.user.create({ data: userPayload });
        return newAddedUser;
    }
}