import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User, { UserStatus } from './user.entity';

@Injectable()
class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  /**
   * Get users of myeth.id
   * @returns {User[]}
   */
  async getUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  /**
   * Get user by status
   * @param {UserStatus} status
   * @returns {User[]}
   */
  async getUsersBystatus(status: UserStatus): Promise<User[]> {
    return await this.usersRepository.find({
      where: [{ status: status }],
    });
  }

  /**
   * Get user by ID
   * @param {number} id
   * @returns {User}
   */
  async getUserById(id: number): Promise<User> {
    return await this.usersRepository.findOne(id);
  }

  /**
   * Get user by myeth_id
   * @param {string} myeth_id
   * @returns {User}
   */
  async getUserByMyethID(myeth_id: string): Promise<User> {
    const users = await this.usersRepository.find({
      where: [{ myeth_id: myeth_id }],
    });
    return users.length > 0 ? users[0] : null;
  }

  /**
   * Save user
   * @param {User} user
   */
  async saveUser(user: User) {
    this.usersRepository.save(user);
  }

  /**
   * Update user
   * @param {User} user
   */
  async updateUser(user: User) {
    var userId = {"id":user.id, "myeth_id":user.myeth_id};
    this.usersRepository.update(userId, user);
  }

  /**
   * Delete user
   * @param {User} user
   */
  async deleteUser(user: User) {
    this.usersRepository.delete(user);
  }
}
export default UsersService;
