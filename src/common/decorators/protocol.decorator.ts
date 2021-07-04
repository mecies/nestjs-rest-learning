import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export const Protocol = createParamDecorator(
  (defaultValue: string, ctx: ExecutionContext) => {
    console.log({ defaultValue });
    const request = ctx.switchToHttp().getRequest<Request>();
    return request.protocol;
  },
);
