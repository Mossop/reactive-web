import { MaybeObservable, Observable } from "reactive";
import { ReactiveComponent } from "./ReactiveComponent";
import { ReactiveNode } from "./ReactiveNode";

export type Props = {
  children?: ReactiveChildren;
};

export type ReactiveChild =
  | ReactiveNode
  | boolean
  | string
  | number
  | null
  | undefined;

export type ReactiveChildren =
  | ReactiveChild
  | Observable<ReactiveChild>
  | ReactiveChildren[]
  | Observable<ReactiveChildren[]>;

export type FunctionComponent<P extends Props = Props> = (
  props?: P,
) => ReactiveChildren;
export type ClassComponent<P extends Props = Props> = new (
  props?: P,
) => ReactiveComponent<P>;

export type NodeDescriptor<P extends Props = Props> =
  | string
  | FunctionComponent<P>
  | ClassComponent<P>;

export type ObservableProps<P> = {
  [K in keyof P]: MaybeObservable<P[K]>;
};
