import { PartialType, ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsUrl } from 'class-validator';

export class CreateLoteriaDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Nombre de la Loteria' })
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Abreviatura de la Loteria' })
  readonly abreviatura: string;

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  @ApiProperty({ description: 'Link imagen de la Loteria' })
  readonly img_url: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Descripcion de la Loteria' })
  readonly descripcion: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Prueba Leni de la Loteria' })
  readonly prueba_leni: string;
}

export class UpdateLoteriaDto extends PartialType(CreateLoteriaDto) {}
