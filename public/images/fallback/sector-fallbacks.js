// Simple script to create sector fallback images
// Note: This script demonstrates the approach but doesn't actually run in the browser
// In a production environment, you'd use a tool like Sharp or another image processing library

const fs = require('fs');
const path = require('path');

const sectors = [
  { name: 'transport', color: '#3B82F6' },  // Blue
  { name: 'aviation', color: '#0EA5E9' },   // Sky blue
  { name: 'banking-finance', color: '#10B981' },  // Emerald
  { name: 'industrial', color: '#F59E0B' },  // Amber
  { name: 'restaurants', color: '#EF4444' },  // Red
  { name: 'retail', color: '#8B5CF6' }   // Purple
];

// Create a simple text fallback for each sector
sectors.forEach(sector => {
  const text = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${sector.name} Sector</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 800px;
      height: 600px;
      background: ${sector.color};
      background: linear-gradient(135deg, ${sector.color} 0%, #1E3A8A 100%);
      color: white;
      font-family: Arial, sans-serif;
      text-align: center;
    }
    .container {
      padding: 20px;
    }
    h2 {
      margin: 0 0 10px 0;
      font-size: 32px;
      text-transform: capitalize;
    }
    p {
      margin: 0;
      opacity: 0.8;
      font-size: 18px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>${sector.name.replace('-', ' ')} Sector</h2>
    <p>Image coming soon</p>
  </div>
</body>
</html>
  `.trim();

  // Write HTML files - in a real implementation, you would convert these to JPG
  fs.writeFileSync(path.join(__dirname, `${sector.name}.html`), text);
  fs.writeFileSync(path.join(__dirname, `${sector.name}.jpg`), text);
});

console.log('Fallback files created successfully'); 