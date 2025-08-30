import React, { useState } from 'react';
import { uploadData } from 'aws-amplify/storage';
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../amplify/data/resource";
import { useTranslation } from '../hooks/useTranslation';

const client = generateClient<Schema>();

interface FileUploadProps {
  studentId: string;
  onUploadComplete: (documentType: string, fileName: string, fileUrl: string) => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({ studentId, onUploadComplete }) => {
  const { t } = useTranslation();
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<{ [key: string]: number }>({});

  const documentTypes = [
    { key: 'id_card', label: t('registration.documents.types.id_card'), required: true },
    { key: 'passport', label: t('registration.documents.types.passport'), required: false },
    { key: 'diploma', label: t('registration.documents.types.diploma'), required: true },
    { key: 'transcript', label: t('registration.documents.types.transcript'), required: true },
    { key: 'photo', label: t('registration.documents.types.photo'), required: true },
    { key: 'other', label: t('registration.documents.types.other'), required: false }
  ];

  const handleFileUpload = async (file: File, documentType: string) => {
    try {
      setUploading(true);
      const fileKey = `student-documents/${studentId}/${documentType}-${Date.now()}-${file.name}`;
      
      const uploadResult = await uploadData({
        key: fileKey,
        data: file,
        options: {
          onProgress: ({ transferredBytes, totalBytes }) => {
            if (totalBytes) {
              const progress = Math.round((transferredBytes / totalBytes) * 100);
              setUploadProgress(prev => ({ ...prev, [documentType]: progress }));
            }
          }
        }
      }).result;

      // Save document metadata to database
      await client.models.StudentDocument.create({
        studentId,
        documentType: documentType as any,
        fileName: file.name,
        fileUrl: uploadResult.key,
        uploadedAt: new Date().toISOString(),
        verified: false
      });

      onUploadComplete(documentType, file.name, uploadResult.key);
      setUploadProgress(prev => ({ ...prev, [documentType]: 100 }));
      
    } catch (error) {
      console.error('Error uploading file:', error);
      alert(t('registration.messages.uploadError'));
    } finally {
      setUploading(false);
    }
  };

  const renderUploadSection = (docType: { key: string; label: string; required: boolean }) => (
    <div key={docType.key} className="border rounded-lg p-4">
      <div className="flex justify-between items-center mb-3">
        <label className="block text-sm font-medium text-gray-700">
          {docType.label}
          {docType.required && <span className="text-red-500 ml-1">*</span>}
        </label>
        {uploadProgress[docType.key] && uploadProgress[docType.key] < 100 && (
          <span className="text-sm text-blue-600">{uploadProgress[docType.key]}%</span>
        )}
        {uploadProgress[docType.key] === 100 && (
          <span className="text-sm text-green-600">✓ Uploaded</span>
        )}
      </div>
      
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
        <input
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              handleFileUpload(file, docType.key);
            }
          }}
          disabled={uploading}
          className="hidden"
          id={`file-${docType.key}`}
        />
        <label
          htmlFor={`file-${docType.key}`}
          className={`cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white ${
            uploading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-biu-blue hover:bg-opacity-90'
          }`}
        >
          {uploading ? 'Uploading...' : 'Choose File'}
        </label>
        
        {uploadProgress[docType.key] && uploadProgress[docType.key] < 100 && (
          <div className="mt-3">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${uploadProgress[docType.key]}%` }}
              ></div>
            </div>
          </div>
        )}
        
        <p className="text-xs text-gray-500 mt-2">
          Supported formats: PDF, JPG, JPEG, PNG (Max 10MB)
        </p>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="text-sm text-gray-600 bg-blue-50 p-4 rounded-lg">
        <strong>Upload Requirements:</strong>
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li>All documents must be clear and legible</li>
          <li>Photos must be in color and show the full document</li>
          <li>File size should not exceed 10MB per file</li>
          <li>Supported formats: PDF, JPG, JPEG, PNG</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {documentTypes.map(renderUploadSection)}
      </div>
    </div>
  );
};