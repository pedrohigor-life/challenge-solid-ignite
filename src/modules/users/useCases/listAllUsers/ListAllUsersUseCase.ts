import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userExists = this.usersRepository.findById(user_id);

    if (!userExists || !userExists.admin) {
      throw new Error("Non existing user or not admin");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
