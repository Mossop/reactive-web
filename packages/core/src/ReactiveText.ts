import { ReactiveNode } from "./ReactiveNode";

export class ReactiveText extends ReactiveNode {
  public constructor(public readonly value: string | number | boolean) {
    super();
  }
}
