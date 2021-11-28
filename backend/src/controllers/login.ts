import { Request, Response } from 'express';

class LoginController {
  readonly PATH = '/login';

  post(req: Request, res: Response) {
    const { body } = req;

    if (body?.email === 'teste@testes.com.br' && body?.password === 'teste123') {
      res.status(200).send();
      return;
    }

    res.status(401).send();
  }
}

export default new LoginController();
