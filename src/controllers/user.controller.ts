import { Controller, Get, Route, Tags } from 'tsoa';

@Route('users')
@Tags('User')
export class UserController extends Controller {
  @Get()
  public async getUser(): Promise<String> {
    return 'Hello World';
  }
}
