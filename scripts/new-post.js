const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function question(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function createNewPost() {
    console.log('\n📝 新しいブログ記事を作成します\n');

    const title = await question('記事のタイトル: ');
    const categories = await question('カテゴリー (カンマ区切り): ');
    const tags = await question('タグ (カンマ区切り): ');
    const excerpt = await question('記事の要約: ');

    const date = new Date().toISOString().split('T')[0];
    const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf]+/g, '-')
        .replace(/^-+|-+$/g, '');

    const fileName = `${date}-${slug}.md`;
    const filePath = path.join(__dirname, '../content/posts', fileName);

    const categoriesArray = categories.split(',').map(c => c.trim()).filter(Boolean);
    const tagsArray = tags.split(',').map(t => t.trim()).filter(Boolean);

    const template = `---
title: "${title}"
date: ${date}
categories: [${categoriesArray.map(c => `"${c}"`).join(', ')}]
tags: [${tagsArray.map(t => `"${t}"`).join(', ')}]
excerpt: "${excerpt}"
icon: "fa-robot"
image: null
---

## はじめに

ここに記事の内容を書きます。

## セクション1

### サブセクション

コード例：

\`\`\`python
import numpy as np
import pandas as pd

# サンプルコード
data = pd.DataFrame({'A': [1, 2, 3]})
print(data)
\`\`\`

## セクション2

画像を挿入する場合：

![画像の説明](/content/images/${date}-example.png)

## まとめ

記事のまとめを書きます。
`;

    fs.writeFileSync(filePath, template);

    console.log('\n✅ 新しい記事を作成しました！');
    console.log(`📄 ファイル: ${fileName}`);
    console.log(`📍 パス: ${filePath}`);
    console.log('\n次のステップ:');
    console.log('1. エディタで記事を編集');
    console.log('2. yarn build で記事をビルド');
    console.log('3. yarn dev でプレビュー確認');

    rl.close();
}

createNewPost().catch(error => {
    console.error('エラー:', error);
    rl.close();
    process.exit(1);
});
