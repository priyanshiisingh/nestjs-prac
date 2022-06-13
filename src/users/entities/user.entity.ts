//class that will represent the shape of our user object
import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string; //doing ?: makes it optional
}
