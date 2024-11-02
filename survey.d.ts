import React, { GetStartedProps } from "react";
declare module "react" {
  interface GetStartedProps {}
  interface GetStartedState {
    next: boolean;
    profession: string;
    interest: string;
    source: string;
    submitted: boolean;
  }
}

// You can also the component's functional type if necessary
declare const GetStarted: React.FC<GetStartedProps>;
