import { ReactiveNode } from "./ReactiveNode";
import { Props } from "./types";

export class ReactiveElement<P extends Props = Props> extends ReactiveNode {
  public constructor(
    public readonly tagName: string,
    public readonly props: P,
  ) {
    super();
  }
}
