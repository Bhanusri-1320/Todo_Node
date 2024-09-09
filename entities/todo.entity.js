// import { Entity } from "electrodb"; // ORM(Object relation mapping) // Adapter on adapter

// import { client } from "../util/dbconnection.js";

// const Todo = new Entity(
//   {
//     model: {
//       entity: "Todo",
//       version: "1",
//       service: "TodoService",
//     },
//     attributes: {
//       todoId: {
//         type: "string",
//         required: true,
//       },
//       task: {
//         type: "string",
//       },
//     },
//     indexes: {
//       primary: {
//         pk: {
//           // highlight-next-line
//           field: "pk",
//           facets: ["todoId"],
//         },
//         sk: {
//           // highlight-next-line
//           field: "sk",
//           facets: [],
//         },
//       },
//     },
//   },
//   { client, table: "Todo" }
// );
// export { Todo };

import { Entity } from "electrodb"; // ORM(Object relation mapping) // Adapter on adapter

import { client } from "../util/dbconnection.js";

const Todo = new Entity(
  {
    model: {
      entity: "Todo",
      version: "2",
      service: "TodoService",
    },
    attributes: {
      todoId: {
        type: "string",
        required: true,
      },
      task: {
        type: "string",
      },
    },
    indexes: {
      primary: {
        pk: {
          // highlight-next-line
          field: "pk",
          facets: ["todoId"],
        },
        sk: {
          // highlight-next-line
          field: "sk",
          facets: [],
        },
      },
    },
  },
  { client, table: "Todo" }
);
export { Todo };
