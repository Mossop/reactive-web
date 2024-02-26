import { ReactiveComponent } from "./ReactiveComponent";
import { ReactiveElement } from "./ReactiveElement";
import { ReactiveNode } from "./ReactiveNode";
import { NodeDescriptor, Props } from "./types";

export { ReactiveNode, NodeDescriptor, Props };
export { ObservableProps } from "./types";

export function construct<P extends Props = Props>(
  node: NodeDescriptor<P>,
  props: P,
): ReactiveNode {
  if (typeof node == "string") {
    return new ReactiveElement(node, props);
  }

  return ReactiveComponent.construct(node, props);
}

// function* walkChildren(
//   children: ReactiveChildren,
// ): Generator<Exclude<ReactiveChild, null | undefined>> {
//   if (Array.isArray(children)) {
//     for (let child of children) {
//       yield* walkChildren(child);
//     }

//     return;
//   }

//   if (children !== null && children !== undefined) {
//     if (isObservable(children)) {
//       yield new ReactiveObservable(children);
//     } else if (children instanceof ReactiveNode) {
//       yield children;
//     } else {
//       yield new ReactiveText(children);
//     }
//   }
// }
