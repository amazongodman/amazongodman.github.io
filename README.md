# 🤖 Ringa_hyj Tech Blog

AI技術・データサイエンス・機械学習に関する情報発信ブログ

[![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-red)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green)](https://nodejs.org/)
[![Yarn](https://img.shields.io/badge/Yarn-1.22+-blue)](https://yarnpkg.com/)

## 🎯 概要

AI技術の最新トレンド、機械学習の実装、データサイエンスの実践について発信する技術ブログです。
Markdownベースの投稿システムで、エンジニアが快適に記事を執筆・公開できます。

## ✨ 主な機能

- 📝 **Markdownベースの記事作成** - シンプルで書きやすい
- 🎨 **モダンなUIデザイン** - AIをテーマにしたかっこいいデザイン
- 🌊 **ニューラルネットワークアニメーション** - Canvas APIによる動的背景
- ⌨️ **タイピングエフェクト** - 印象的なヒーローセクション
- 🔍 **記事検索・フィルター機能** - カテゴリー・タグで素早く検索
- 📱 **完全レスポンシブ** - モバイル・タブレット・デスクトップ対応
- 🖼️ **画像対応** - 記事内に簡単に画像を埋め込み可能
- 🚀 **自動ビルドシステム** - Markdownから自動生成
- 🔄 **ホットリロード** - 開発中の変更を即座にプレビュー

## 🛠️ 技術スタック

### フロントエンド
- HTML5
- CSS3（カスタムプロパティ、Grid、Flexbox、Animations）
- JavaScript ES6+（Vanilla JS）
- Canvas API

### ビルドツール
- Node.js
- Yarn
- Marked（Markdownパーサー）
- Highlight.js（シンタックスハイライト）
- Front-matter（メタデータ解析）

### ホスティング
- GitHub Pages

## 特徴

- 📱 レスポンシブデザイン
- 🌙 ダークテーマ
- 🔍 記事検索機能
- 🏷️ カテゴリー・タグフィルター
- 💨 高速な静的サイト
- ♿ アクセシビリティ対応

## 🚀 クイックスタート

### 前提条件

- **Node.js** 18以上 ([ダウンロード](https://nodejs.org/))
- **Yarn** ([インストール](https://yarnpkg.com/getting-started/install))
- **Git**

### セットアップ（Windows）

```bash
# 1. リポジトリをクローン
git clone https://github.com/amazongodman/amazongodman.github.io.git
cd amazongodman.github.io

# 2. 依存パッケージをインストール
yarn install

# 3. 開発サーバーを起動
yarn dev

# ブラウザで http://localhost:8080 を開く
```

開発サーバーはMarkdownファイルの変更を自動検出し、リアルタイムでビルド・更新します。

### 利用可能なコマンド

```bash
# 開発サーバー起動（ホットリロード付き）
yarn dev

# 記事のビルド（Markdown → JSON）
yarn build

# プレビューサーバー起動（ビルド済みサイト）
yarn preview

# 新しい記事を対話形式で作成
yarn new:post
```

## ディレクトリ構造

```
.
├── index.html          # ホームページ
├── blog.html          # ブログ一覧
├── cv.html            # プロフィール（Profile）
├── post.html          # 記事詳細ページ
├── content/
│   ├── posts/         # Markdown記事ファイル
│   └── images/        # 記事用画像
├── assets/
│   ├── css/
│   │   ├── style.css  # メインスタイル
│   │   └── post.css   # 記事ページスタイル
│   ├── js/
│   │   ├── main.js    # メインJavaScript
│   │   ├── blog.js    # ブログページ機能
│   │   └── post.js    # 記事詳細機能
│   ├── data/          # ビルド生成データ
│   │   ├── posts.json
│   │   └── posts-content.json
│   └── img/           # サイト用画像ファイル
├── scripts/
│   ├── build.js       # ビルドスクリプト
│   ├── dev-server.js  # 開発サーバー
│   ├── preview.js     # プレビューサーバー
│   └── new-post.js    # 新規記事作成
└── README.md
```

## 📝 記事の投稿方法

### ステップ1: 新しい記事を作成

#### 方法1: コマンドで作成（推奨）

```bash
yarn new:post
```

対話形式で以下の情報を入力：
- 記事のタイトル
- カテゴリー（カンマ区切り）例: `AI,機械学習`
- タグ（カンマ区切り）例: `Python,TensorFlow`
- 記事の要約（150文字程度）

`content/posts/YYYY-MM-DD-slug.md` が自動生成されます。

#### 方法2: 手動で作成

`content/posts/YYYY-MM-DD-slug.md` を作成：

```markdown
---
title: "記事のタイトル"
date: 2024-12-26
categories: ["AI", "機械学習"]
tags: ["Python", "TensorFlow"]
excerpt: "記事の要約（150文字程度）"
icon: "fa-robot"
image: null
---

## はじめに

記事の内容をMarkdownで記述...

\```python
# コード例
import tensorflow as tf
\```

## まとめ

記事のまとめ...
```

### ステップ2: 記事を編集

生成されたMarkdownファイルを任意のエディタで開いて編集します。

### ステップ3: 画像の追加（オプション）

1. `content/images/` に画像を配置
2. 記事内で参照：

```markdown
![画像の説明](/content/images/2024-12-26-example.png)
```

### ステップ4: ビルドとプレビュー

```bash
# 記事をビルド（Markdown → JSON）
yarn build

# 開発サーバーでプレビュー（ホットリロード付き）
yarn dev
```

ブラウザで http://localhost:8080 を開いて確認します。

### ステップ5: 公開

```bash
# 変更をコミット
git add .
git commit -m "Add new post: 記事タイトル"

# GitHubにプッシュ
git push origin master
```

数分後、https://amazongodman.github.io に記事が公開されます。

📚 **詳細なMarkdown記法**: [BLOG_GUIDE.md](BLOG_GUIDE.md) を参照

## カスタマイズ

### 色の変更

`assets/css/style.css`の`:root`セクションでカラーテーマを変更できます：

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #ec4899;
    --bg-color: #0f172a;
    /* ... */
}
```

### コンテンツの編集

- プロフィール: `cv.html`
- ソーシャルリンク: 各HTMLファイルのフッターセクション

## 🚢 デプロイ

### GitHub Pagesへのデプロイ

```bash
# 1. 記事をビルド
yarn build

# 2. 変更をコミット
git add .
git commit -m "Add new post: 記事タイトル"

# 3. GitHubにプッシュ
git push origin master
```

GitHub Pagesが自動的にデプロイ（数分で反映）

**公開URL**: https://amazongodman.github.io

## ライセンス

Copyright (c) 2024-2025 Ringa_hyj. All rights reserved.

本サイトのすべてのコンテンツ（ソースコード、記事、画像など）の著作権は Ringa_hyj に帰属します。

## 連絡先

- GitHub: [@amazongodman](https://github.com/amazongodman)
- Twitter: [@Ringa_hyj](https://twitter.com/Ringa_hyj)
- Qiita: [@Ringa_hyj](https://qiita.com/Ringa_hyj)

## 更新履歴

- 2024-12-26: 完全リニューアル（モダンなデザイン、フルスクラッチで再構築）
- 2024-12-16: 初回リリース
