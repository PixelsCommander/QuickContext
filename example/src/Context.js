import {createContext} from 'e-context';

const eContext = createContext({
  clicks: 0,
  tenPlus: false,
});

export const Context = eContext.Context;
export const Provider = eContext.Provider;
export const Consumer = eContext.Consumer;
