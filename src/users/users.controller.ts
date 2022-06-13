import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users') //http://localhost:3000/users
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOkResponse({ type: User, isArray: true })
  @Get()
  getUsers(): User[] {
    return this.usersService.findAll();
  }

  @ApiOkResponse({ type: User, description: 'Individual user' })
  @Get(':id')
  getUserById(@Param('id') id: string): User {
    //http://localhost:3000/users/1
    return this.usersService.findById(Number(id));
  }

  @ApiCreatedResponse({ type: User })
  @Post()
  createUser(@Body() body: CreateUserDto): User {
    return this.usersService.createUser(body);
  }
}
