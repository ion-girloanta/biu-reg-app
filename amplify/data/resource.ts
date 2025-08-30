import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Student: a
    .model({
      studentId: a.string().required(),
      firstName: a.string().required(),
      lastName: a.string().required(),
      email: a.email().required(),
      phone: a.phone(),
      dateOfBirth: a.date(),
      idNumber: a.string().required(),
      learningPath: a.enum(['BA', 'MA', 'PhD', 'Certificate']),
      previousEducation: a.string(),
      status: a.enum(['draft', 'submitted', 'under_review', 'approved', 'rejected']),
      createdAt: a.datetime(),
      updatedAt: a.datetime(),
    })
    .authorization((allow) => [
      allow.publicApiKey()
    ]),

  StudentDocument: a
    .model({
      studentId: a.string().required(),
      documentType: a.enum(['id_card', 'passport', 'diploma', 'transcript', 'photo', 'other']),
      fileName: a.string().required(),
      fileUrl: a.url(),
      uploadedAt: a.datetime(),
      verified: a.boolean(),
    })
    .authorization((allow) => [
      allow.publicApiKey()
    ]),

  RegistrationSession: a
    .model({
      sessionId: a.string().required(),
      studentId: a.string(),
      currentStep: a.integer(),
      totalSteps: a.integer(),
      sessionData: a.json(),
      expiresAt: a.datetime(),
      completed: a.boolean(),
    })
    .authorization((allow) => [
      allow.publicApiKey()
    ]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 365,
    },
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
