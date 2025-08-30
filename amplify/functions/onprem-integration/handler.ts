import type { APIGatewayProxyHandler } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (event) => {
  try {
    const { action, studentData } = JSON.parse(event.body || '{}');
    
    switch (action) {
      case 'validateStudent':
        return await validateStudentInOnPrem(studentData);
      case 'submitApplication':
        return await submitApplicationToOnPrem(studentData);
      case 'checkStatus':
        return await checkApplicationStatus(studentData.applicationId);
      default:
        return {
          statusCode: 400,
          body: JSON.stringify({ error: 'Invalid action' })
        };
    }
  } catch (error) {
    console.error('Error in onprem integration:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
};

async function validateStudentInOnPrem(studentData: any) {
  // TODO: Implement actual OnPrem WS call
  // This would connect to the OnPrem system via TGW
  const mockResponse = {
    isValid: true,
    studentExists: false,
    eligiblePrograms: ['BA', 'MA']
  };
  
  return {
    statusCode: 200,
    body: JSON.stringify(mockResponse)
  };
}

async function submitApplicationToOnPrem(studentData: any) {
  // TODO: Implement actual OnPrem WS call
  const mockResponse = {
    applicationId: `APP-${Date.now()}`,
    status: 'submitted',
    message: 'Application submitted successfully'
  };
  
  return {
    statusCode: 200,
    body: JSON.stringify(mockResponse)
  };
}

async function checkApplicationStatus(applicationId: string) {
  // TODO: Implement actual OnPrem WS call
  const mockResponse = {
    applicationId,
    status: 'under_review',
    lastUpdated: new Date().toISOString()
  };
  
  return {
    statusCode: 200,
    body: JSON.stringify(mockResponse)
  };
}