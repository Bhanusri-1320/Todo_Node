import { Entity } from "electrodb"; // ORM(Object relation mapping) // Adapter on adapter

import { client } from "../util/dbconnection.js";

const CompletedTask = new Entity(
  {
    model: {
      entity: "CompletedTask",
      version: "1",
      service: "CompletedTaskService",
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
  { client, table: "CompletedTask" }
);
export { CompletedTask };
