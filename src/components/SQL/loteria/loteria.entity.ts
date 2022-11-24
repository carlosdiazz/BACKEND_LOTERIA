import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  OneToMany,
} from 'typeorm';

import { Juego } from '../juego/juego.entity';
@Entity({ name: 'loterias' })
export class Loteria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, type: 'varchar' })
  name: string;

  @Column({ unique: true, type: 'varchar' })
  abreviatura: string;

  @Column({ type: 'varchar' })
  img_url: string;

  @Column({ type: 'varchar' })
  descripcion: string;

  @Column({ type: 'varchar', nullable: true })
  prueba_leni!: string | null;

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

  @OneToMany(() => Juego, (juego) => juego.loteria_id)
  juegos: Juego[];
}
