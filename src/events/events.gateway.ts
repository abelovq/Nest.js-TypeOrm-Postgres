import { Req } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Request } from 'express';
import { Server } from 'socket.io';

@WebSocketGateway()
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  // @SubscribeMessage('events')
  // findAll(@MessageBody() data: any): Observable<WsResponse<number>> {
  //   return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: item })));
  // }

  @SubscribeMessage('connection')
  onConnect(@MessageBody() msg: unknown): void {
    console.log('[server] connected');

    // return 'a user connected 45';
  }

  @SubscribeMessage('disconnect')
  onDisconnect(@MessageBody() msg: unknown): void {
    console.log('[server] disconnected');

    // return 'a user connected 45';
  }

  @SubscribeMessage('chat message')
  onReceiveMsg(@Req() request: Request, @MessageBody() msg: unknown): void {
    console.log('request', msg);
    this.server.emit('chat message', msg);
    // return 'a user connected 45';
  }
}
