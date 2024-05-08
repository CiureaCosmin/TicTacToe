import {io, Socket} from 'socket.io-client';
import {
  ClientToServerEvents,
  ServerToClientEvents,
} from '../../../Common/WebSocketEvents';

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  'ws://localhost:5000',
  {}
);
