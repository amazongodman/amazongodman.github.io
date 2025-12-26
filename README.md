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

## 🚀 セットアップ

### 前提条件

以下のソフトウェアをインストールしてください：

- **Node.js** 18以上 ([ダウンロード](https://nodejs.org/))
- **Yarn** ([インストール方法](https://yarnpkg.com/getting-started/install): `npm install -g yarn`)
- **Git**

### 初回セットアップ（新規クローン）

```bash
# 1. リポジトリをクローン
git clone https://github.com/amazongodman/amazongodman.github.io.git
cd amazongodman.github.io

# 2. 依存パッケージをインストール
# node_modules/ フォルダが自動生成されます
yarn install

# 3. 記事をビルド（Markdown → JSON）
# assets/data/ に posts.json と posts-content.json が生成されます
yarn build

# 4. 開発サーバーを起動
yarn dev

# ブラウザで http://localhost:8080 を開く
```

### 既存プロジェクトを別の環境で開く場合

GitHubからクローンした直後や、別のPCで開く場合：

```bash
# リポジトリに移動
cd amazongodman.github.io

# 依存パッケージをインストール（node_modules/を再生成）
yarn install

# 記事をビルド（必要に応じて）
yarn build

# 開発サーバーを起動
yarn dev
```

**重要な注意点:**
- `node_modules/` フォルダは `.gitignore` で除外されているため、GitHubには保存されていません
- そのため、各環境で `yarn install` を実行して依存パッケージをインストールする必要があります
- `assets/data/` はビルド結果ですが、GitHub Pagesで必要なのでGitHubに含まれています

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

## 📁 ディレクトリ構造

```
.
├── index.html              # ホームページ
├── blog.html              # ブログ一覧（検索・フィルター機能付き）
├── cv.html                # プロフィール（Profile）
├── post.html              # 記事詳細ページ
├── content/               # 📝 記事コンテンツ（GitHubに含まれる）
│   ├── posts/            #    Markdown記事ファイル
│   │   ├── 2024-12-26-ai-future.md
│   │   └── 2024-12-16-python-data-analysis.md
│   └── images/           #    記事用画像
├── assets/
│   ├── css/
│   │   ├── style.css     # メインスタイル
│   │   └── post.css      # 記事ページスタイル
│   ├── js/
│   │   ├── main.js       # メインJavaScript
│   │   ├── blog.js       # ブログページ機能
│   │   └── post.js       # 記事詳細機能
│   ├── data/             # 🔧 ビルド生成データ（GitHubに含まれる）
│   │   ├── posts.json           # 記事メタデータ
│   │   └── posts-content.json   # 記事HTML
│   └── img/              # サイト用画像ファイル
├── scripts/              # 🛠️ ビルドツール（GitHubに含まれる）
│   ├── build.js          # ビルドスクリプト
│   ├── dev-server.js     # 開発サーバー
│   ├── preview.js        # プレビューサーバー
│   └── new-post.js       # 新規記事作成
├── node_modules/         # ❌ 依存パッケージ（.gitignoreで除外）
├── package.json          # 依存関係定義
├── yarn.lock             # Yarnロックファイル
└── README.md
```

### GitHubに含まれるもの/除外されるもの

**✅ GitHubに含まれる（コミット対象）:**
- `content/` - 記事のMarkdownと画像（最も重要）
- `assets/data/` - ビルド結果（GitHub Pagesで必要）
- `scripts/` - ビルドスクリプト
- `package.json`, `yarn.lock` - 依存関係定義
- HTML/CSS/JSファイル

**❌ GitHubから除外される（`.gitignore`）:**
- `node_modules/` - 各環境で `yarn install` により再生成
- ログファイル、一時ファイル
- OS/IDE固有ファイル

詳細は `.gitignore` を参照してください。

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

---

## 📄 プロフィール（CV）の編集方法

CVもMarkdownで管理できます。HTMLを直接編集する必要はありません。

### ステップ1: cv.mdを編集

`content/cv.md` をエディタで開いて編集：

```markdown
---
name: "あなたの名前"
title: "職種・肩書き"
bio: "自己紹介文"
location: "所在地"
social:
  github: "https://github.com/username"
  twitter: "https://twitter.com/username"
  # 不要なSNSは削除してOK
---

## 職務経歴

### 会社名またはポジション
**在籍期間**: YYYY年 - YYYY年

#### 主要プロジェクト

**プロジェクト名**
- **概要**: プロジェクトの説明
- **成果**: 達成した成果
- **技術**: 使用した技術スタック

---

## スキル

### プログラミング言語
- Python: 経験年数（詳細）
- JavaScript: 経験年数（詳細）

---

## 資格・認定

- 資格名1
- 資格名2

---

## 学歴

### 大学名 学部 学科
**卒業**: YYYY年MM月
```

### ステップ2: ビルド

```bash
# CVをビルド（Markdown → JSON）
yarn build

# または、CVのみビルド
yarn build:cv
```

### ステップ3: プレビュー

```bash
yarn dev
```

ブラウザで http://localhost:8080/cv.html を開いて確認します。

### ステップ4: 公開

```bash
git add content/cv.md assets/data/cv.json
git commit -m "Update CV"
git push origin master
```

**編集のポイント:**
- front-matter（`---`で囲まれた部分）でメタ情報を管理
- 本文は通常のMarkdown形式で記述
- `##`（h2）でセクションを分ける
- `###`（h3）で会社名やカテゴリを分ける
- 不要なSNSリンクは削除してOK

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

- **プロフィール（CV）**: `content/cv.md` を編集後、`yarn build` でビルド
- **ソーシャルリンク**: `content/cv.md` のfront-matterで管理
- **フッター**: 各HTMLファイルのフッターセクション

## 🚢 デプロイ

### GitHub Pagesへのデプロイ手順

```bash
# 1. 記事をビルド（Markdown → JSON）
yarn build

# 2. 変更をステージング
git add .

# 3. コミット
git commit -m "Add new post: 記事タイトル"

# 4. GitHubにプッシュ
git push origin master
```

**デプロイの仕組み:**
1. `yarn build` が `content/posts/*.md` を読み込み
2. `assets/data/posts.json` と `posts-content.json` を生成
3. これらのJSONファイルをGitHubにコミット
4. GitHub PagesがHTMLファイルとJSONを配信
5. ブラウザでJavaScriptがJSONを読み込んで記事を表示

数分後、https://amazongodman.github.io に記事が公開されます。

### トラブルシューティング

#### 記事が表示されない

1. `yarn build` を実行したか確認
2. `assets/data/posts.json` が存在するか確認
3. ブラウザのキャッシュをクリア（Ctrl + Shift + R）
4. GitHub Pagesの設定を確認（Settings > Pages）

#### 画像が表示されない

- パスが `/content/images/ファイル名` になっているか確認
- 画像ファイルがGitHubにプッシュされているか確認

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
