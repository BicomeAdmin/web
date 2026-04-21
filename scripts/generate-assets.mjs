// One-off asset generator: favicons + webmanifest + OG image.
// Run with `node scripts/generate-assets.mjs`.
import sharp from 'sharp';
import { writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pub = join(root, 'public');
const src = join(pub, 'icon.png');

// Brand tokens (kept in sync with tailwind.config.ts)
const BRAND = {
  ink: '#020617',
  inkSoft: '#0a1f1a',
  emerald: '#10b981',
  teal: '#14b8a6',
  gold: '#f59e0b',
};

async function squareLogo(size) {
  // Render logo as white on brand.ink, centered, with breathing room.
  const logoSize = Math.round(size * 0.62);
  const logo = await sharp(src)
    .resize(logoSize, logoSize, { fit: 'contain', background: 'transparent' })
    .tint('#ffffff')
    .toBuffer();

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: BRAND.ink,
    },
  })
    .composite([{ input: logo, gravity: 'center' }])
    .png()
    .toBuffer();
}

async function ogImage() {
  const W = 1200;
  const H = 630;
  // Background: brand.ink with a subtle emerald radial highlight.
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <radialGradient id="glow" cx="30%" cy="25%" r="80%">
      <stop offset="0%" stop-color="${BRAND.emerald}" stop-opacity="0.22"/>
      <stop offset="45%" stop-color="${BRAND.teal}" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="${BRAND.ink}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="accent" x1="0%" x2="100%" y1="0%" y2="0%">
      <stop offset="0%" stop-color="${BRAND.emerald}"/>
      <stop offset="100%" stop-color="${BRAND.teal}"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="${BRAND.ink}"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <!-- Left accent bar -->
  <rect x="80" y="100" width="6" height="430" fill="url(#accent)" rx="3"/>
  <!-- Wordmark area; logo composited separately -->
  <text x="220" y="215" font-family="Manrope, Inter, system-ui, sans-serif" font-size="108" font-weight="900" fill="#ffffff" letter-spacing="-4">Bicome</text>
  <text x="222" y="300" font-family="Inter, 'Noto Sans TC', system-ui, sans-serif" font-size="38" font-weight="600" fill="${BRAND.emerald}">用戶忠誠營運 × AI 數據賦能</text>
  <text x="222" y="370" font-family="Inter, 'Noto Sans TC', system-ui, sans-serif" font-size="30" font-weight="500" fill="#ffffffa0">打造深度用戶關係，孵化品牌 KOC</text>
  <text x="222" y="520" font-family="Inter, system-ui, sans-serif" font-size="22" font-weight="700" fill="#ffffff60" letter-spacing="4">BICOME.CC</text>
</svg>`;

  const base = sharp(Buffer.from(svg)).png();
  // Composite the icon on the left
  const logo = await sharp(src)
    .resize(120, 120, { fit: 'contain', background: 'transparent' })
    .tint('#ffffff')
    .toBuffer();
  return base
    .composite([{ input: logo, left: 80, top: 110 }])
    .toBuffer();
}

async function main() {
  await mkdir(pub, { recursive: true });

  // Favicons (plain PNG squares with brand bg)
  const sizes = [
    { name: 'favicon-16.png', size: 16 },
    { name: 'favicon-32.png', size: 32 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'android-chrome-192.png', size: 192 },
    { name: 'android-chrome-512.png', size: 512 },
  ];

  for (const { name, size } of sizes) {
    const buf = await squareLogo(size);
    await writeFile(join(pub, name), buf);
    console.log(`✓ ${name} (${size}×${size})`);
  }

  // favicon.ico — use 32px PNG renamed. Modern browsers accept PNG-encoded .ico.
  const ico = await squareLogo(32);
  await writeFile(join(pub, 'favicon.ico'), ico);
  console.log('✓ favicon.ico (32×32 PNG)');

  // OG image
  const og = await ogImage();
  await writeFile(join(pub, 'og-image.png'), og);
  console.log('✓ og-image.png (1200×630)');

  // webmanifest
  const manifest = {
    name: 'Bicome - 用戶忠誠營運專家',
    short_name: 'Bicome',
    description: 'AI 數據賦能的用戶忠誠營運顧問',
    start_url: '/',
    display: 'standalone',
    background_color: BRAND.ink,
    theme_color: BRAND.emerald,
    icons: [
      { src: '/android-chrome-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/android-chrome-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/android-chrome-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
  await writeFile(join(pub, 'site.webmanifest'), JSON.stringify(manifest, null, 2));
  console.log('✓ site.webmanifest');

  console.log('\nDone. Generated assets in public/.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
