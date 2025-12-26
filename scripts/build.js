const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const fm = require('front-matter');
const hljs = require('highlight.js');

// Markedの設定
marked.setOptions({
    highlight: function(code, lang) {
        if (lang && hljs.getLanguage(lang)) {
            return hljs.highlight(code, { language: lang }).value;
        }
        return hljs.highlightAuto(code).value;
    },
    breaks: true,
    gfm: true
});

const POSTS_DIR = path.join(__dirname, '../content/posts');
const OUTPUT_DIR = path.join(__dirname, '../assets/data');

// 出力ディレクトリを作成
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Markdownファイルを読み込んで処理
function buildPosts() {
    const posts = [];
    const postsContent = {};

    // postsディレクトリ内のすべての.mdファイルを取得
    const files = fs.readdirSync(POSTS_DIR).filter(file => file.endsWith('.md'));

    files.forEach((file, index) => {
        const filePath = path.join(POSTS_DIR, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');

        // Front-matterをパース
        const { attributes, body } = fm(fileContent);

        // IDを生成（ファイル名から）
        const id = path.basename(file, '.md');

        // 記事リスト用のデータ
        posts.push({
            id: id,
            title: attributes.title || 'Untitled',
            date: attributes.date || new Date().toISOString().split('T')[0],
            categories: attributes.categories || [],
            tags: attributes.tags || [],
            excerpt: attributes.excerpt || body.substring(0, 150).replace(/[#*`]/g, '') + '...',
            icon: attributes.icon || 'fa-file-alt',
            image: attributes.image || null
        });

        // 記事本文データ
        postsContent[id] = {
            title: attributes.title || 'Untitled',
            date: attributes.date || new Date().toISOString().split('T')[0],
            categories: attributes.categories || [],
            tags: attributes.tags || [],
            content: marked.parse(body),
            image: attributes.image || null
        };
    });

    // 日付順にソート（新しい順）
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    // JSONファイルとして出力
    fs.writeFileSync(
        path.join(OUTPUT_DIR, 'posts.json'),
        JSON.stringify(posts, null, 2)
    );

    fs.writeFileSync(
        path.join(OUTPUT_DIR, 'posts-content.json'),
        JSON.stringify(postsContent, null, 2)
    );

    console.log(`✅ ビルド完了: ${posts.length}件の記事を処理しました`);
    posts.forEach(post => {
        console.log(`   - ${post.title} (${post.date})`);
    });
}

// ビルド実行
try {
    buildPosts();
} catch (error) {
    console.error('❌ ビルドエラー:', error);
    process.exit(1);
}
