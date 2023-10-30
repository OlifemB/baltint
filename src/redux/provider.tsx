"use client";

import { store } from "./store";
import { Provider } from "react-redux";
import React from "react";
import {ReactEl} from "@/common/types";

export function ReduxProvider({ children }: { children: ReactEl }) {
  return <Provider store={store}>{children}</Provider>;
}
