const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');

// Create a quote request hero image
async function createQuoteHeroImage() {
  try {
    // Create a canvas with dimensions suitable for a hero image
    const width = 1920;
    const height = 600;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // Fill the background with a gradient
    const gradient = ctx.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0, '#0A2647');  // Dark blue
    gradient.addColorStop(1, '#144272');  // Medium blue
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Add a subtle grid pattern
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    
    // Horizontal lines
    for (let i = 0; i < height; i += 30) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(width, i);
      ctx.stroke();
    }
    
    // Vertical lines
    for (let i = 0; i < width; i += 30) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, height);
      ctx.stroke();
    }

    // Add floating document icons to represent quotes/forms
    const iconPositions = [
      { x: width * 0.15, y: height * 0.3, size: 60, rotation: -15 },
      { x: width * 0.25, y: height * 0.6, size: 80, rotation: 10 },
      { x: width * 0.75, y: height * 0.4, size: 70, rotation: -5 },
      { x: width * 0.85, y: height * 0.7, size: 50, rotation: 20 },
      { x: width * 0.5, y: height * 0.2, size: 90, rotation: 0 }
    ];

    // Draw document icons
    iconPositions.forEach(icon => {
      ctx.save();
      ctx.translate(icon.x, icon.y);
      ctx.rotate((icon.rotation * Math.PI) / 180);
      
      // Document base
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(-icon.size/2, -icon.size/2, icon.size, icon.size * 1.3);
      
      // Document fold
      ctx.beginPath();
      ctx.moveTo(-icon.size/2, -icon.size/2);
      ctx.lineTo(-icon.size/2 + icon.size * 0.3, -icon.size/2);
      ctx.lineTo(-icon.size/2, -icon.size/2 + icon.size * 0.3);
      ctx.closePath();
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.fill();
      
      // Document lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.moveTo(-icon.size/2 + icon.size * 0.2, -icon.size/2 + icon.size * 0.4 + i * icon.size * 0.2);
        ctx.lineTo(-icon.size/2 + icon.size * 0.8, -icon.size/2 + icon.size * 0.4 + i * icon.size * 0.2);
        ctx.stroke();
      }
      
      ctx.restore();
    });

    // Add subtle particles
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    for (let i = 0; i < 200; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const size = Math.random() * 3 + 1;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }

    // Add Arabic text for "Request a Quote"
    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.font = 'bold 140px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('طلب عرض سعر', width / 2, height / 2);

    // Save the image to the file
    const buffer = canvas.toBuffer('image/jpeg');
    fs.writeFileSync(path.join(__dirname, 'request-quote', 'quote_hero.jpg'), buffer);
    console.log('Quote hero image created successfully!');

    // Also create a fallback copy
    fs.writeFileSync(path.join(__dirname, 'fallback', 'quote_hero.jpg'), buffer);
    console.log('Quote fallback image created successfully!');
  } catch (error) {
    console.error('Error creating quote hero image:', error);
  }
}

createQuoteHeroImage(); 