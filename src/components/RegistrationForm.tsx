import React, { useState } from 'react';
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../amplify/data/resource";
import { FileUpload } from './FileUpload';
import { useTranslation } from '../hooks/useTranslation';

const client = generateClient<Schema>();

interface RegistrationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  idNumber: string;
  learningPath: 'BA' | 'MA' | 'PhD' | 'Certificate';
  previousEducation: string;
}

export const RegistrationForm: React.FC = () => {
  const { t, isRTL } = useTranslation();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<RegistrationFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    idNumber: '',
    learningPath: 'BA',
    previousEducation: ''
  });
  const [studentId] = useState(`STU-${Date.now()}`);
  const [uploadedDocuments, setUploadedDocuments] = useState<{ [key: string]: { fileName: string; fileUrl: string } }>({});

  const totalSteps = 5;

  const updateFormData = (field: keyof RegistrationFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleDocumentUpload = (documentType: string, fileName: string, fileUrl: string) => {
    setUploadedDocuments(prev => ({
      ...prev,
      [documentType]: { fileName, fileUrl }
    }));
  };

  const submitForm = async () => {
    try {
      await client.models.Student.create({
        studentId,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        dateOfBirth: formData.dateOfBirth,
        idNumber: formData.idNumber,
        learningPath: formData.learningPath,
        previousEducation: formData.previousEducation,
        status: 'submitted',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
      
      await client.models.RegistrationSession.create({
        sessionId: `SESSION-${Date.now()}`,
        studentId,
        currentStep: totalSteps,
        totalSteps,
        sessionData: JSON.stringify({ formData, uploadedDocuments }),
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
        completed: true
      });
      
      alert(t('registration.messages.submitSuccess'));
    } catch (error) {
      console.error('Error submitting registration:', error);
      alert(t('registration.messages.submitError'));
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-biu-green">{t('registration.steps.personal')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('registration.fields.firstName')}</label>
                <input
                  type="text"
                  className="biu-input"
                  placeholder={t('registration.placeholders.firstName')}
                  value={formData.firstName}
                  onChange={(e) => updateFormData('firstName', e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('registration.fields.lastName')}</label>
                <input
                  type="text"
                  className="biu-input"
                  placeholder={t('registration.placeholders.lastName')}
                  value={formData.lastName}
                  onChange={(e) => updateFormData('lastName', e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t('registration.fields.email')}</label>
              <input
                type="email"
                className="biu-input"
                placeholder={t('registration.placeholders.email')}
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                required
                dir="ltr"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t('registration.fields.phone')}</label>
              <input
                type="tel"
                className="biu-input"
                placeholder={t('registration.placeholders.phone')}
                value={formData.phone}
                onChange={(e) => updateFormData('phone', e.target.value)}
                dir="ltr"
              />
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-biu-blue">Identity Information</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
              <input
                type="date"
                className="biu-input"
                value={formData.dateOfBirth}
                onChange={(e) => updateFormData('dateOfBirth', e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">ID Number</label>
              <input
                type="text"
                className="biu-input"
                value={formData.idNumber}
                onChange={(e) => updateFormData('idNumber', e.target.value)}
                required
              />
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-biu-blue">Academic Information</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Learning Path</label>
              <select
                className="biu-input"
                value={formData.learningPath}
                onChange={(e) => updateFormData('learningPath', e.target.value as RegistrationFormData['learningPath'])}
                required
              >
                <option value="BA">Bachelor's Degree (BA)</option>
                <option value="MA">Master's Degree (MA)</option>
                <option value="PhD">Doctorate (PhD)</option>
                <option value="Certificate">Certificate Program</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Previous Education</label>
              <textarea
                className="biu-input min-h-[100px]"
                value={formData.previousEducation}
                onChange={(e) => updateFormData('previousEducation', e.target.value)}
                placeholder="Describe your previous educational background..."
              />
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-biu-blue">Document Upload</h2>
            <FileUpload 
              studentId={studentId}
              onUploadComplete={handleDocumentUpload}
            />
          </div>
        );
      
      case 5:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-biu-blue">Review & Submit</h2>
            <div className="biu-card space-y-3">
              <h3 className="font-semibold">Personal Information</h3>
              <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Phone:</strong> {formData.phone}</p>
              <p><strong>Date of Birth:</strong> {formData.dateOfBirth}</p>
              <p><strong>ID Number:</strong> {formData.idNumber}</p>
              <p><strong>Learning Path:</strong> {formData.learningPath}</p>
              <p><strong>Previous Education:</strong> {formData.previousEducation}</p>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <div className={`flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} justify-between items-center mb-6`}>
          <div>
            <h1 className="text-3xl font-bold text-biu-green mb-2">{t('registration.title')}</h1>
            <p className="text-lg text-gray-600">{t('registration.subtitle')}</p>
          </div>
          <div className="text-sm text-gray-600 bg-gray-100 px-4 py-2 rounded-lg">
            {t('registration.stepOf').replace('{current}', currentStep.toString()).replace('{total}', totalSteps.toString())}
          </div>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
          <div 
            className="biu-progress h-3 shadow-sm"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
        <div className="text-xs text-gray-500 text-center">
          {Math.round((currentStep / totalSteps) * 100)}% {t('registration.completed')}
        </div>
      </div>

      <div className="biu-card mb-6">
        {renderStep()}
      </div>

      <div className={`flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} justify-between`}>
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
            currentStep === 1
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'biu-button-secondary'
          }`}
        >
          {t('registration.buttons.previous')}
        </button>
        
        {currentStep === totalSteps ? (
          <button
            onClick={submitForm}
            className="biu-button px-12 py-3 text-lg font-semibold"
          >
            {t('registration.buttons.submit')}
          </button>
        ) : (
          <button
            onClick={nextStep}
            className="biu-button px-12 py-3 text-lg font-semibold"
          >
            {t('registration.buttons.next')}
          </button>
        )}
      </div>
    </div>
  );
};