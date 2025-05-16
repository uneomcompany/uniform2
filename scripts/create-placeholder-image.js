const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Function to create a placeholder image
async function createPlaceholderImage(filePath, width, height, bgColor, text, textColor) {
  const canvas = createCanvas(width, height);
  const context = canvas.getContext('2d');

  // Fill background
  context.fillStyle = bgColor;
  context.fillRect(0, 0, width, height);

  // Add text
  context.fillStyle = textColor;
  context.font = 'bold 40px Arial';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  
  // Wrap text if needed
  const words = text.split(' ');
  const lines = [];
  let currentLine = words[0];

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const width = context.measureText(`${currentLine} ${word}`).width;
    if (width < canvas.width - 60) {
      currentLine += ` ${word}`;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  lines.push(currentLine);

  // Draw text lines
  const lineHeight = 50;
  const totalTextHeight = lineHeight * lines.length;
  let y = (height - totalTextHeight) / 2 + lineHeight / 2;

  lines.forEach(line => {
    context.fillText(line, width / 2, y);
    y += lineHeight;
  });

  // Create directories if they don't exist
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(filePath, buffer);

  console.log(`Created placeholder image: ${filePath}`);
}

// Create sustainability placeholder image
createPlaceholderImage(
  './public/images/sustainability/eco_friendly_uniforms.jpg',
  1200,
  800,
  '#4CAF50',  // Green background
  'Sustainable Uniform Practices in Saudi Arabia',
  '#FFFFFF'   // White text
); 