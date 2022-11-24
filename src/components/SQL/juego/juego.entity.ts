import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  ManyToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import { Loteria } from '../loteria/loteria.entity';
@Entity({ name: 'juegos' })
export class Juego {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  abreviatura: string;

  @Column({ type: 'varchar' })
  img_url: string;

  @Column({ type: 'varchar' })
  descripcion: string;

  @CreateDateColumn({
    name: 'create_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date;

  @UpdateDateColumn({
    name: 'update_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateAt: Date;

  @ManyToOne(() => Loteria, (loteria) => loteria.juegos)
  @JoinColumn({ name: 'loteria_id' })
  loteria_id: Loteria;

  @Column({ type: 'int' })
  posiciones: number;

  @Column({ type: 'int' })
  rango_minimo: number;

  @Column({ type: 'int' })
  rango_maximo: number;
}
