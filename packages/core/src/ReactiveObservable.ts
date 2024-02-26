import { Observable } from "reactive";
import { ReactiveNode } from "./ReactiveNode";

export class ReactiveObservable<T> extends ReactiveNode {
  public constructor(public readonly observable: Observable<T>) {
    super();
  }
}
