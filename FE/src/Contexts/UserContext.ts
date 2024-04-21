import {createContext} from '@lit/context';
import {User} from './IUserInterface';

export const userContext = createContext<User>('userContext');
