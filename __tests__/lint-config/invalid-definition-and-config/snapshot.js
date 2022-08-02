// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`E2E lint-config invalid-definition-and-config 1`] = `

[1] .redocly.yaml:6:5 at #/styleguide/rules/context

Property \`context\` is not expected here.

4 | styleguide:
5 |   rules:
6 |     context: null
  |     ^^^^^^^
7 |

Error was generated by the configuration spec rule.


❌ Your config has 1 error.
No configurations were defined in extends -- using built in recommended configuration by default.
Warning! This default behavior is going to be deprecated soon.

validating ../__fixtures__/invalid-openapi.yaml...
[1] ../__fixtures__/invalid-openapi.yaml:4:1 at #/info

The field \`title\` must be present on this level.

2 | servers:
3 |   - url: http://example.xyz
4 | info:
  | ^^^^
5 |   description: Example description
6 |   version: '1.0'

Error was generated by the spec rule.


[2] ../__fixtures__/invalid-openapi.yaml:9:5 at #/paths/~1pet~1findByStatus/get/summary

Operation object should contain \`summary\` field.

 7 | paths:
 8 |   /pet/findByStatus:
 9 |     get:
   |     ^^^
10 |       responses:
11 |

Error was generated by the operation-summary rule.


[3] ../__fixtures__/invalid-openapi.yaml:10:7 at #/paths/~1pet~1findByStatus/get/responses

Expected type \`ResponsesMap\` (object) but got \`null\`

 8 | /pet/findByStatus:
 9 |   get:
10 |     responses:
   |     ^^^^^^^^^^
11 |

Error was generated by the spec rule.


[4] ../__fixtures__/invalid-openapi.yaml:4:1 at #/info

Info object should contain \`license\` field.

2 | servers:
3 |   - url: http://example.xyz
4 | info:
  | ^^^^
5 |   description: Example description
6 |   version: '1.0'

Warning was generated by the info-license rule.


[5] ../__fixtures__/invalid-openapi.yaml:9:5 at #/paths/~1pet~1findByStatus/get/operationId

Operation object should contain \`operationId\` field.

 7 | paths:
 8 |   /pet/findByStatus:
 9 |     get:
   |     ^^^
10 |       responses:
11 |

Warning was generated by the operation-operationId rule.


../__fixtures__/invalid-openapi.yaml: validated in <test>ms

❌ Validation failed with 3 errors and 2 warnings.
run \`openapi lint --generate-ignore-file\` to add all problems to the ignore file.

[WARNING] Unused rules found in .redocly.yaml: context.
Check the spelling and verify the added plugin prefix.

`;
