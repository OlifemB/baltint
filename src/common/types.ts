import {ReactElement, ReactNode, ReactPortal} from "react";

type ReactText = string | number;
type ReactChild = ReactElement | ReactText;

interface ReactNodeArray extends Array<ReactNode> {}
type ReactFragment = {} | ReactNodeArray;
export type ReactEl = ReactChild | ReactNode| ReactFragment | ReactPortal | boolean | null | undefined | {};