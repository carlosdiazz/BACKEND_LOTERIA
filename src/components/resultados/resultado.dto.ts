import { PartialType, ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsDate,
  IsMongoId,
  IsArray,
    ArrayMinSize,
    IsNumber,
} from 'class-validator';

export class CreateResultadoDto {
  @IsDate()
  @IsNotEmpty()
  @ApiProperty({ description: 'Fecha de los numeros' })
  date: Date;

  @IsMongoId()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'Id del sorteo' })
  id_sorteo: string;

  @IsMongoId()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'Id de la loteria' })
  id_loteria: string;

  @IsArray()
  @IsNotEmpty()
  @ArrayMinSize(1)
  @IsNumber({}, { each: true })
  @ApiProperty({ description: 'Array con los numeros ganadores' })
  numeros_ganadores: number[];
}

export class UpdateResultadoDto extends PartialType(CreateResultadoDto) {}
