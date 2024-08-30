import React from 'react';

export type IToolbar = {
  show: boolean;
  setShow: React.Dispatch<boolean>;
};

export const initalToolbarState: IToolbar = {
  show: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setShow: (_value: boolean) => undefined,
};

export const ToolbarContext = React.createContext<IToolbar>(initalToolbarState);

type IToolbarProvider = {
  children: any;
};

export const ToolbarProvider: React.FunctionComponent<IToolbarProvider> = ({ children }) => {
  const [show, setShow] = React.useState<boolean>(false);

  return <ToolbarContext.Provider value={{ show, setShow }}>{children}</ToolbarContext.Provider>;
};
