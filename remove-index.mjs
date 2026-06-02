import fs from 'fs';
import path from 'path';

const dirs = ['dist/client', '.output/public'];

dirs.forEach((dir) => {
  const indexPath = path.join(process.cwd(), dir, 'index.html');
  if (fs.existsSync(indexPath)) {
    fs.rmSync(indexPath, { force: true });
    console.log(`[build-fix] Successfully removed ${indexPath} so Cloudflare does not intercept the root route.`);
  } else {
    console.log(`[build-fix] ${indexPath} does not exist, skipping.`);
  }
});
