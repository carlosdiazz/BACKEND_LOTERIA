import {
  IsString,
  IsUrl,
  IsNotEmpty,
  IsNumber,
  IsPositive,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateJuegoDto {
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

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty({ description: 'Clave foreana de la loteria' })
  readonly loteriaId: number;
}

export class UpdateJuegoDto extends PartialType(CreateJuegoDto) {}