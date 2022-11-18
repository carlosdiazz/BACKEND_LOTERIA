import { PartialType, ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsUrl,
  IsMongoId,
} from 'class-validator';

export class CreateSorteoDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Nombre del Sorteo' })
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Abreviatura del Sorteo' })
  readonly abreviatura: string;

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  @ApiProperty({ description: 'Link de imagen del Sorteo' })
  readonly img_url: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Descripcion del Sorteo' })
  readonly descripcion: string;

  @IsString()
  @IsMongoId()
  @IsNotEmpty()
  @ApiProperty({ description: 'Id del juego' })
  readonly id_juego: string;

  @IsString()
  @IsMongoId()
  @IsNotEmpty()
  @ApiProperty({ description: 'Id de la Loteria' })
  readonly id_loteria: string;
}

export class UpdateSorteoDto extends PartialType(CreateSorteoDto) {}
