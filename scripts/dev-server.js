const http = require('http');
const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');
const { execSync } = require('child_process');

const PORT = 8080;

// MIMEタイプのマッピング
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
};

// 簡易HTTPサーバー
const server = http.createServer((req, res) => {
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html';
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 Not Found</h1>', 'utf-8');
            } else {
                res.writeHead(500);
                res.end('Sorry, check with the site admin for error: ' + error.code);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

// ファイル監視とホットリロード
const watcher = chokidar.watch('content/posts/**/*.md', {
    ignored: /(^|[\/\\])\../,
    persistent: true
});

watcher.on('change', (path) => {
    console.log(`\n📝 変更を検出: ${path}`);
    console.log('🔄 記事を再ビルド中...');
    try {
        execSync('node scripts/build.js', { stdio: 'inherit' });
        console.log('✅ ビルド完了\n');
    } catch (error) {
        console.error('❌ ビルドエラー\n');
    }
});

// 初回ビルド
console.log('🔨 初回ビルドを実行中...');
try {
    execSync('node scripts/build.js', { stdio: 'inherit' });
} catch (error) {
    console.error('❌ 初回ビルドに失敗しました');
}

server.listen(PORT, () => {
    console.log('\n🚀 開発サーバーが起動しました！');
    console.log(`📍 URL: http://localhost:${PORT}`);
    console.log('👀 Markdownファイルの変更を監視中...');
    console.log('\n終了するには Ctrl+C を押してください\n');
});
