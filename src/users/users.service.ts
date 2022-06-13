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
    {
      id: 1,
      name: 'abcd',
    },
    {
      id: 2,
      name: 'efgh',
    },
    {
      id: 3,
      name: 'ijklmno',
    },
    {
      id: 4,
      name: 'pqrst',
    },
    {
      id: 5,
      name: 'Prii',
    },
  ];

  findAll(name?: string): User[] {
    if (name) {
      return this.users.filter((user) => user.name === name);
    }
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
