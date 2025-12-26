const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const fm = require('front-matter');

// Markdownの設定
marked.setOptions({
    breaks: true,
    gfm: true
});

async function buildCV() {
    try {
        const cvFile = path.join(__dirname, '../content/cv.md');

        if (!fs.existsSync(cvFile)) {
            console.error('❌ cv.mdが見つかりません:', cvFile);
            return;
        }

        // cv.mdを読み込み
        const fileContent = fs.readFileSync(cvFile, 'utf-8');
        const { attributes, body } = fm(fileContent);

        // MarkdownをHTMLに変換
        const htmlContent = marked.parse(body);

        // CVデータを構築
        const cvData = {
            meta: {
                name: attributes.name || 'Ringa_hyj',
                title: attributes.title || '',
                bio: attributes.bio || '',
                location: attributes.location || '',
                email: attributes.email || '',
                social: attributes.social || {}
            },
            content: htmlContent
        };

        // JSONファイルとして出力
        const outputDir = path.join(__dirname, '../assets/data');
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        const outputFile = path.join(outputDir, 'cv.json');
        fs.writeFileSync(outputFile, JSON.stringify(cvData, null, 2));

        console.log('✅ CVのビルド完了:', outputFile);
    } catch (error) {
        console.error('❌ CVのビルドエラー:', error);
        process.exit(1);
    }
}

buildCV();
