import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { Loteria } from './loteria.entity';
import { Juego } from './../juego/juego.entity';

import { LoteriaController } from './loteria.controller';
import { LoteriaModuleSql } from './loteria.module';
import { LoteriaService } from './loteria.service';

describe('LoteriaController SQL', () => {
  let loteriaController: LoteriaController;
  let loteriaService: LoteriaService;

  const mockLoteria: Loteria = {
    abreviatura: 'TEST',
    createAt: new Date(),
    descripcion: 'TEST',
    id: 1,
    img_url: '',
    name: 'TEST',
    updateAt: new Date(),
    juegos: undefined,
  };
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [LoteriaModuleSql],
      //controllers: [LoteriasController],
      //providers: [LoteriasService],
    })
      .overrideProvider(getRepositoryToken(Loteria))
      .useValue(jest.fn())
      .overrideProvider(getRepositoryToken(Juego))
      .useValue(jest.fn())
      .compile();

    loteriaController = app.get<LoteriaController>(LoteriaController);
    loteriaService = app.get<LoteriaService>(LoteriaService);
  });

  it('should be defined', async () => {
    expect(loteriaController).toBeDefined();
  });
  describe('Metodos Loteria', () => {
    it('getAll', async () => {
      //jest.spyOn(loteriaService, 'findAll');
    });
  });
});
