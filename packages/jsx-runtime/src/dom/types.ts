import { SVGAttributes } from "./attributes";

export interface ElementDef<A, E> {
  attributes: A;
  element: E;
}

export type SVGElementDef<E extends SVGElement> = ElementDef<
  SVGAttributes<E>,
  E
>;
