import { PartialType, ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsUrl,
  IsPositive,
} from 'class-validator';

export class CreateSorteoDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Nombre del Juego' })
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Abreviatura del Juego' })
  readonly abreviatura: string;

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  @ApiProperty({ description: 'Link de imagen del Juego' })
  readonly img_url: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Descripcion del Juego' })
  readonly descripcion: string;
}

export class UpdateSorteoDto extends PartialType(CreateSorteoDto) {}
