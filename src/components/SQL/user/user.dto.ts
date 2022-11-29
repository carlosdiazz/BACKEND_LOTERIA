import { IsString, IsNotEmpty, IsEmail, IsEnum, IsArray, ArrayMinSize, isString } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';
import {Role} from '../../../auth/models/roles.model'

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'El firstName' })
  readonly firstName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'El lastName' })
  readonly lastName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'El NickName' })
  readonly nickName: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ description: 'El Email' })
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'El Password' })
  readonly password: string;

  @IsString()
  @IsEnum(Role, { each: true })
  @ApiProperty({ description: 'Los Roles' })
  readonly role: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
