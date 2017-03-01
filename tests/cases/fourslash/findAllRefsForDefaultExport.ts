/// <reference path="fourslash.ts" />

// @Filename: a.ts
////export default function /*def*/[|{| "isWriteAccess": true, "isDefinition": true |}f|]() {}

// @Filename: b.ts
////import [|{| "isWriteAccess": true, "isDefinition": true |}g|] from "./a";
/////*ref*/[|g|]();

// @Filename: c.ts
////import { f } from "./a";

verify.singleReferenceGroup("function f(): void");
verify.goToDefinition("ref", "def");
