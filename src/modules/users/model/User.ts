import { v4 as uuidV4 } from "uuid";

class User {
  id: string;

  name: string;

  admin?: boolean;

  email: string;

  created_at: Date;

  updated_at: Date;

  constructor() {
    // eslint-disable-next-line no-unused-expressions
    if (!this.id) this.id = uuidV4();
    this.admin = false;
  }
}

export { User };
