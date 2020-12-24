import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class UserWaitlist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 64 })
  address: string;

  @Column('varchar', { length: 32, nullable: true })
  twitter: string;
}
export default UserWaitlist;
