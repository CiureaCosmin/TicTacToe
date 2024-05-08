import {createContext} from '@lit/context';
import {User} from './UserManager';

export const userContext = createContext<User>('userContext');
