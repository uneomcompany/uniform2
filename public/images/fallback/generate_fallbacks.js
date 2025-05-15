// Script to generate fallback images
const fs = require('fs');
const path = require('path');

// Ensure fallback directory exists
const fallbackDir = path.join(__dirname);
if (!fs.existsSync(fallbackDir)) {
  fs.mkdirSync(fallbackDir, { recursive: true });
}

// Function to generate an HTML placeholder
const generatePlaceholderHTML = (text, width = 800, height = 600, bgColor = '#3B82F6') => {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${text} Placeholder</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: ${width}px;
      height: ${height}px;
      background: ${bgColor};
      background: linear-gradient(135deg, ${bgColor} 0%, #1E3A8A 100%);
      color: white;
      font-family: Arial, sans-serif;
      text-align: center;
    }
    .container {
      padding: 20px;
    }
    h2 {
      margin: 0 0 10px 0;
      font-size: ${Math.max(Math.floor(width / 20), 24)}px;
    }
    p {
      margin: 0;
      opacity: 0.8;
      font-size: ${Math.max(Math.floor(width / 30), 16)}px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>${text}</h2>
    <p>Placeholder Image</p>
  </div>
</body>
</html>
  `.trim();
};

// Define fallback images to create for each sector
const sectors = [
  { name: 'transport', color: '#3B82F6' },  // Blue
  { name: 'aviation', color: '#0EA5E9' },   // Sky blue
  { name: 'banking-finance', color: '#10B981' },  // Emerald
  { name: 'industrial', color: '#F59E0B' },  // Amber
  { name: 'restaurants', color: '#EF4444' },  // Red
  { name: 'retail', color: '#8B5CF6' }   // Purple
];

// Create fallback images for each sector
sectors.forEach(sector => {
  // Main hero image
  const heroHTML = generatePlaceholderHTML(`${sector.name.charAt(0).toUpperCase() + sector.name.slice(1)} Sector Hero`, 1200, 600, sector.color);
  fs.writeFileSync(path.join(fallbackDir, `${sector.name}_hero.html`), heroHTML);
  
  // Thumbnail image
  const thumbnailHTML = generatePlaceholderHTML(`${sector.name.charAt(0).toUpperCase() + sector.name.slice(1)} Sector Thumbnail`, 400, 300, sector.color);
  fs.writeFileSync(path.join(fallbackDir, `${sector.name}_thumbnail.html`), thumbnailHTML);
  
  // Product images (4 per sector)
  for (let i = 1; i <= 4; i++) {
    const productHTML = generatePlaceholderHTML(`${sector.name.charAt(0).toUpperCase() + sector.name.slice(1)} Product ${i}`, 800, 600, sector.color);
    fs.writeFileSync(path.join(fallbackDir, `${sector.name}_product_${i}.html`), productHTML);
  }
});

// Create a generic fallback for any missing image
const genericHTML = generatePlaceholderHTML("Image Unavailable", 800, 600, '#64748B');
fs.writeFileSync(path.join(fallbackDir, 'generic.html'), genericHTML);

console.log('Fallback image HTML files created successfully in:', fallbackDir);
console.log('Note: To convert to actual images, open these HTML files in a browser and save as images or use a conversion tool.'); 