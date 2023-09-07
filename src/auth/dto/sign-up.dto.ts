import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class SignUpDto {
  @ApiProperty({example: 'user@mail.ru', description: 'Email'})
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @ApiProperty({example: '12345', description: 'Password'})
  @IsNotEmpty()
  @IsString()
  @Length(4, 16)
  readonly password: string;

  @ApiProperty({example: 'Nick', description: 'First name'})
  @IsNotEmpty()
  @IsString()
  readonly first_name: string;

  @ApiProperty({example: 'Anikin', description: 'Last name'})
  @IsNotEmpty()
  @IsString()
  readonly last_name: string;
}
