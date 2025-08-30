import { defineFunction } from '@aws-amplify/backend';

export const onpremIntegration = defineFunction({
  name: 'onprem-integration',
  entry: './handler.ts',
  environment: {
    ONPREM_API_ENDPOINT: 'https://onprem-api.biu-reg.local',
    VPC_ENDPOINT: '10.200.10.0/24'
  },
  runtime: 20,
  timeoutInSeconds: 30,
});