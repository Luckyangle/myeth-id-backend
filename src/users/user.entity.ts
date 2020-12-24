import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 64 })
  address: string;

  @Column('varchar', { length: 32 })
  name: string;

  @Column('varchar', { length: 64, nullable: true })
  pic: string;

  @Column('varchar', { length: 32, nullable: true })
  twitter: string;

  @Column('varchar', { length: 32, nullable: true })
  telegram: string;

  @Column('varchar', { length: 8, nullable: true })
  color: string;

  @Column('varchar', { length: 64, nullable: true })
  background: string;
}

export default User;
