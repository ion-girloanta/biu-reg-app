import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'biuRegStorage',
  access: (allow) => ({
    'student-documents/*': [
      allow.guest.to(['read', 'write', 'delete'])
    ],
    'public/*': [
      allow.guest.to(['read', 'write', 'delete'])
    ]
  })
});