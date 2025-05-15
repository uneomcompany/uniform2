const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');

// Create a sectors hero image
async function createSectorsHeroImage() {
  try {
    // Create a canvas with dimensions suitable for a hero image
    const width = 1920;
    const height = 800;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // Fill the background with a gradient
    const gradient = ctx.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0, '#0F3460');  // Dark blue
    gradient.addColorStop(1, '#16213E');  // Even darker blue
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Add a grid pattern
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    
    // Horizontal lines
    for (let i = 0; i < height; i += 50) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(width, i);
      ctx.stroke();
    }
    
    // Vertical lines
    for (let i = 0; i < width; i += 50) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, height);
      ctx.stroke();
    }

    // Add a subtle overlay pattern
    ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const size = Math.random() * 5 + 2;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }

    // Add text
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.font = 'bold 120px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('SECTORS', width / 2, height / 2);

    // Save the image to a file
    const buffer = canvas.toBuffer('image/jpeg');
    fs.writeFileSync(path.join(__dirname, 'sectors', 'sectors_hero.jpg'), buffer);
    console.log('Sectors hero image created successfully!');

    // Also create a copy in the fallback directory
    fs.writeFileSync(path.join(__dirname, 'fallback', 'sectors.jpg'), buffer);
    console.log('Sectors fallback image created successfully!');
  } catch (error) {
    console.error('Error creating sectors hero image:', error);
  }
}

createSectorsHeroImage(); 