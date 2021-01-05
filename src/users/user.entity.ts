import { Entity, Column, PrimaryGeneratedColumn, Generated } from 'typeorm';
export enum UserStatus {
  WAIT = 'waitlist',
  WHITE = 'whitelist',
}
@Entity()
class User {
  @PrimaryGeneratedColumn()
  id: string;

  @PrimaryGeneratedColumn("uuid")
  myeth_id: string;

  @Column({ type: 'varchar', length: 64 })
  address: string;

  @Column({ type: 'varchar', length: 32, nullable: true })
  name: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  pic: string;

  @Column({ type: 'varchar', length: 32, nullable: true })
  twitter: string;

  @Column({ type: 'varchar', length: 32, nullable: true })
  telegram: string;

  @Column({ type: 'varchar', length: 8, nullable: true })
  color: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  background: string;

  @Column({
    type: 'enum',
    enum: UserStatus,
    default: UserStatus.WAIT,
  })
  status: UserStatus;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  create_date: string;
}

export default User;
