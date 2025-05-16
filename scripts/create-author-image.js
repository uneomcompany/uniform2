const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Function to create a placeholder image for author profile
async function createAuthorPlaceholderImage(filePath, width, height, bgColor, initials, textColor) {
  const canvas = createCanvas(width, height);
  const context = canvas.getContext('2d');
  
  // Make it a circle by drawing a filled circle
  context.beginPath();
  context.arc(width / 2, height / 2, width / 2, 0, Math.PI * 2);
  context.fillStyle = bgColor;
  context.fill();
  
  // Add initials
  context.fillStyle = textColor;
  context.font = 'bold 30px Arial';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(initials, width / 2, height / 2);
  
  // Create directories if they don't exist
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(filePath, buffer);
  
  console.log(`Created author profile image: ${filePath}`);
}

// Create Noura's profile image
createAuthorPlaceholderImage(
  './public/images/author/noura-alkhalidi.jpg',
  200,
  200,
  '#1E88E5', // Blue background
  'NA',      // Noura Al-Khalidi initials
  '#FFFFFF'  // White text
); 