import { construct, NodeDescriptor, Props } from "@reactive-web/core";
import * as JSX from "./types";

export { JSX };

export const Fragment = {};

export function jsxs<P extends Props>(
  node: NodeDescriptor,
  props: P,
): JSX.Element {
  return construct(node, props);
}

export const jsx = jsxs;
