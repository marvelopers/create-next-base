import { rest } from 'msw';

const API_HOST = 'https://localhost:8000';

type MswRes = {
  message: string;
};

const getMswInit = () =>
  rest.get<MswRes>(`${API_HOST}/msw/init`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        message: 'init',
      }),
    ),
  );

export const handlers = [getMswInit()];
