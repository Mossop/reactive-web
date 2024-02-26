/** @jsxImportSource .. */

import { mutable } from "reactive";

test("Transform", () => {
  let value = mutable(5);

  let transformed = <a href="foor">{value}</a>;
});
