import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 0,
      name: 'Prii',
    },
  ];

  findAll(): User[] {
    return this.users;
  }

  findById(userId: number): User {
    return this.users.find((users) => users.id === userId);
  }

  createUser(createUserDto: CreateUserDto): User {
    const newUser = { id: Date.now(), ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }
}
