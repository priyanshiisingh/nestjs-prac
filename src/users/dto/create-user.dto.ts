import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty() // it will let the user know on the ui what type of data and how we are expecting it
  name: string;

  @ApiProperty({ required: false }) // it will let the user know on the ui what type of data and how we are expecting it and whether it is required or not
  age?: number;
}

//dto are data transfer object, schema rep of whatever object we want ot use
