import {
  IsString,
  IsUrl,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  Min,
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

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty({ description: 'Cuantas posiciones tendra el Juego' })
  readonly posiciones: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @ApiProperty({
    description: 'Cual es el rango Minimo de numeros por posiciones',
  })
  readonly rango_minimo: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty({
    description: 'Cual es el rango Maximo de numeros por posiciones',
  })
  readonly rango_maximo: number;
}

export class UpdateJuegoDto extends PartialType(CreateJuegoDto) {}
