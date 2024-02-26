import { ReactiveNode } from "./ReactiveNode";
import type {
  ClassComponent,
  FunctionComponent,
  Props,
  ReactiveChildren,
} from "./types";

const IsReactiveComponentClass = Symbol("IsReactiveComponentClass");

function isClassComponent<P extends Props>(
  fn: FunctionComponent<P> | ClassComponent<P>,
): fn is ClassComponent<P> {
  // @ts-expect-error
  return typeof fn === "function" && fn[IsReactiveComponentClass] === true;
}

export abstract class ReactiveComponent<
  P extends Props = Props,
> extends ReactiveNode {
  public static [IsReactiveComponentClass] = true;

  public static construct<P extends Props = Props>(
    node: FunctionComponent<P> | ClassComponent<P>,
    props: P,
  ): ReactiveComponent<P> {
    if (isClassComponent(node)) {
      // eslint-disable-next-line new-cap
      return new node(props);
    }

    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return new FunctionalComponent(node, props);
  }

  public constructor(public readonly props: P) {
    super();
  }

  public abstract render(): ReactiveChildren;
}

export class FunctionalComponent<
  P extends Props = Props,
> extends ReactiveComponent<P> {
  public constructor(
    protected readonly renderer: FunctionComponent<P>,
    props: P,
  ) {
    super(props);
  }

  public render(): ReactiveChildren {
    return this.renderer(this.props);
  }
}

export class ReactiveFragment extends ReactiveComponent {
  public render(): ReactiveChildren {
    return this.props.children;
  }
}
