import { defineBackend } from '@aws-amplify/backend';
import { data } from './data/resource';
import { storage } from './storage/resource';
import { onpremIntegration } from './functions/onprem-integration/resource';

const backend = defineBackend({
  data,
  storage,
  onpremIntegration,
});

// Configure VPC for Lambda functions
backend.onpremIntegration.resources.lambda.addToRolePolicy({
  Effect: 'Allow',
  Action: [
    'ec2:CreateNetworkInterface',
    'ec2:DescribeNetworkInterfaces',
    'ec2:DeleteNetworkInterface'
  ],
  Resource: '*'
});

// Add custom VPC configuration
backend.addOutput({
  custom: {
    vpc: {
      cidr: '10.200.0.0/20',
      subnets: {
        private: ['10.200.1.0/24', '10.200.2.0/24'],
        public: ['10.200.3.0/24', '10.200.4.0/24']
      },
      tgwCidr: '10.200.10.0/24'
    }
  }
});
