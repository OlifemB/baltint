"use client";

import { store } from "./store";
import { Provider } from "react-redux";
import React, {ReactNode} from "react";
import {ReactEl} from "@/common/types";

export function ReduxProvider({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
