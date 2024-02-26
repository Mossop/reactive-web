import { Elements } from "./elements";
import { ElementDef } from "./types";

export { Elements } from "./elements";

export type AttributesFor<K extends keyof Elements> =
  Elements[K] extends ElementDef<infer A, unknown> ? A : never;
export type ElementFor<K extends keyof Elements> =
  Elements[K] extends ElementDef<unknown, infer E> ? E : never;
