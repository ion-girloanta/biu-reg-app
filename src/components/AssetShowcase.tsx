import React from 'react';
import figmaAssets from '../utils/figmaAssets';

export const AssetShowcase: React.FC = () => {
  const allAssets = figmaAssets.getAllAssets();

  return (
    <div style={{ padding: '2rem', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#005136' }}>
        Downloaded Figma Assets
      </h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {allAssets.map((asset, index) => {
          const imageUrl = figmaAssets.getAssetByFilename(asset.filename);
          
          return (
            <div key={index} style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '1.5rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{
                width: '100%',
                height: '200px',
                backgroundColor: '#f3f4f6',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                overflow: 'hidden'
              }}>
                {imageUrl ? (
                  <img 
                    src={imageUrl} 
                    alt={asset.name}
                    style={{ 
                      maxWidth: '100%', 
                      maxHeight: '100%', 
                      objectFit: 'contain',
                      borderRadius: '4px'
                    }}
                  />
                ) : (
                  <div style={{ color: '#6b7280', textAlign: 'center' }}>
                    No image available
                  </div>
                )}
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ 
                  margin: '0 0 0.5rem 0', 
                  fontSize: '1.2rem', 
                  color: '#005136',
                  fontWeight: 600 
                }}>
                  {asset.name}
                </h3>
                
                <p style={{ 
                  margin: '0 0 0.5rem 0', 
                  fontSize: '0.9rem', 
                  color: '#6b7280',
                  lineHeight: '1.4'
                }}>
                  <strong>Path:</strong> {asset.path}
                </p>
                
                <div style={{ 
                  fontSize: '0.8rem', 
                  color: '#9ca3af',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.5rem',
                  textAlign: 'left',
                  marginTop: '1rem',
                  padding: '0.75rem',
                  backgroundColor: '#f9fafb',
                  borderRadius: '6px'
                }}>
                  <div><strong>Type:</strong> {asset.nodeType}</div>
                  <div><strong>Scale:</strong> {asset.scaleMode}</div>
                  <div style={{ gridColumn: '1 / -1' }}>
                    <strong>File:</strong> {asset.filename}
                  </div>
                  <div style={{ gridColumn: '1 / -1' }}>
                    <strong>Ref:</strong> <code style={{ fontSize: '0.7rem' }}>{asset.ref}</code>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div style={{ 
        textAlign: 'center', 
        marginTop: '3rem',
        padding: '1.5rem',
        backgroundColor: 'white',
        borderRadius: '12px',
        maxWidth: '600px',
        margin: '3rem auto 0',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
      }}>
        <h3 style={{ color: '#005136', marginBottom: '1rem' }}>Asset Manifest Info</h3>
        <div style={{ fontSize: '0.9rem', color: '#6b7280', textAlign: 'left' }}>
          <div><strong>Downloaded:</strong> {new Date(figmaAssets.manifest.downloadedAt).toLocaleString()}</div>
          <div><strong>Figma File ID:</strong> {figmaAssets.manifest.figmaFileId}</div>
          <div><strong>Target Node:</strong> {figmaAssets.manifest.targetNodeName} ({figmaAssets.manifest.targetNodeId})</div>
          <div><strong>Method:</strong> {figmaAssets.manifest.method}</div>
          <div><strong>Total Assets:</strong> {figmaAssets.manifest.totalAssets}</div>
        </div>
      </div>
    </div>
  );
};