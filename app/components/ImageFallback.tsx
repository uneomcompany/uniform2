import React from 'react';

interface ImageFallbackProps {
  text: string;
  width?: number;
  height?: number;
  bgColor?: string;
  textColor?: string;
}

export default function ImageFallback({
  text,
  width = 600,
  height = 400,
  bgColor = "#3B82F6",
  textColor = "#FFFFFF"
}: ImageFallbackProps) {
  const html = `
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
      color: ${textColor};
      font-family: Arial, sans-serif;
      text-align: center;
    }
    .container {
      padding: 20px;
    }
    h2 {
      margin: 0 0 10px 0;
      font-size: ${Math.max(Math.floor(width / 20), 16)}px;
    }
    p {
      margin: 0;
      opacity: 0.8;
      font-size: ${Math.max(Math.floor(width / 30), 12)}px;
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

  // Create a Blob from the HTML string
  const blob = new Blob([html], { type: 'text/html' });
  
  // Create a URL for the Blob
  const dataUrl = URL.createObjectURL(blob);
  
  return dataUrl;
} 