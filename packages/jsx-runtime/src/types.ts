import { ReactiveNode, ObservableProps } from "@reactive-web/core";
import { AttributesFor, Elements } from "./dom";

export type Element = ReactiveNode;

export type IntrinsicElementsProps<T extends keyof Elements> = ObservableProps<
  AttributesFor<T>
>;

export type IntrinsicElements = {
  [K in keyof Elements]: IntrinsicElementsProps<K>;
};
