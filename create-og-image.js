import fs from 'fs';
import { createCanvas, loadImage } from 'canvas';

async function createOGImage() {
  // Create canvas with optimal dimensions for social media
  const canvas = createCanvas(1200, 630);
  const ctx = canvas.getContext('2d');

  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
  gradient.addColorStop(0, '#000000');
  gradient.addColorStop(1, '#1a1a1a');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1200, 630);

  try {
    // Load and center the original logo
    const logo = await loadImage('./attached_assets/Recurso 1@4x.png');
    
    // Calculate dimensions to fit the logo with padding
    const maxLogoWidth = 400;
    const maxLogoHeight = 300;
    const logoAspect = logo.width / logo.height;
    
    let logoWidth, logoHeight;
    if (logoAspect > maxLogoWidth / maxLogoHeight) {
      logoWidth = maxLogoWidth;
      logoHeight = maxLogoWidth / logoAspect;
    } else {
      logoHeight = maxLogoHeight;
      logoWidth = maxLogoHeight * logoAspect;
    }
    
    // Center the logo
    const logoX = (1200 - logoWidth) / 2;
    const logoY = (630 - logoHeight) / 2 - 50; // Move up a bit for text
    
    ctx.drawImage(logo, logoX, logoY, logoWidth, logoHeight);
    
    // Add text below the logo
    ctx.fillStyle = '#fec53a';
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('LaurelDev', 600, logoY + logoHeight + 60);
    
    ctx.fillStyle = '#ffffff';
    ctx.font = '28px Arial';
    ctx.fillText('Soluciones Tecnológicas Financieras', 600, logoY + logoHeight + 100);
    
  } catch (error) {
    console.log('Could not load logo, creating text-only version');
    
    // Fallback: text-only version
    ctx.fillStyle = '#fec53a';
    ctx.font = 'bold 72px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('LaurelDev', 600, 280);
    
    ctx.fillStyle = '#ffffff';
    ctx.font = '36px Arial';
    ctx.fillText('Soluciones Tecnológicas Financieras', 600, 350);
  }

  // Save as PNG
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync('./client/public/assets/social/og-image.png', buffer);
  console.log('OG image created successfully!');
}

createOGImage().catch(console.error);