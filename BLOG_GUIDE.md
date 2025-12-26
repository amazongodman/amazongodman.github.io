# ブログ投稿ガイド

このドキュメントでは、Ringa_hyj Tech Blogに記事を投稿する方法を説明します。

## 📋 目次

1. [環境セットアップ](#環境セットアップ)
2. [新しい記事の作成](#新しい記事の作成)
3. [記事の書き方](#記事の書き方)
4. [画像の追加](#画像の追加)
5. [ビルドとプレビュー](#ビルドとプレビュー)
6. [デプロイ](#デプロイ)
7. [トラブルシューティング](#トラブルシューティング)

---

## 環境セットアップ

### 1. 必要なツールのインストール

#### Node.jsのインストール（Windows）

1. [Node.js公式サイト](https://nodejs.org/)にアクセス
2. LTS版（推奨版）をダウンロード
3. インストーラーを実行
4. インストール完了後、PowerShellまたはコマンドプロンプトで確認：

```bash
node --version
npm --version
```

#### Yarnのインストール

```bash
npm install -g yarn
```

確認：

```bash
yarn --version
```

### 2. プロジェクトのセットアップ

```bash
# リポジトリのディレクトリに移動
cd C:\Users\creat\Desktop\amazongodman.github.io

# 依存パッケージのインストール
yarn install
```

---

## 新しい記事の作成

### 方法1: コマンドで作成（推奨）

```bash
yarn new:post
```

対話形式で以下を入力：
- 記事のタイトル
- カテゴリー（カンマ区切り）
- タグ（カンマ区切り）
- 記事の要約

自動的に `content/posts/YYYY-MM-DD-slug.md` が作成されます。

### 方法2: 手動で作成

`content/posts/` ディレクトリに新しいMarkdownファイルを作成：

```bash
# ファイル名の形式: YYYY-MM-DD-記事のslug.md
content/posts/2024-12-26-my-new-post.md
```

---

## 記事の書き方

### Front-matter（メタデータ）

記事の先頭に以下のYAML形式でメタデータを記述：

```yaml
---
title: "記事のタイトル"
date: 2024-12-26
categories: ["AI", "機械学習"]
tags: ["Python", "TensorFlow", "ディープラーニング"]
excerpt: "記事の要約（150文字程度）"
icon: "fa-robot"
image: null
---
```

#### Front-matterの項目

| 項目 | 必須 | 説明 | 例 |
|------|------|------|-----|
| `title` | ✅ | 記事のタイトル | `"AI技術入門"` |
| `date` | ✅ | 公開日（YYYY-MM-DD） | `2024-12-26` |
| `categories` | ✅ | カテゴリー（配列） | `["AI", "機械学習"]` |
| `tags` | ✅ | タグ（配列） | `["Python", "深層学習"]` |
| `excerpt` | ✅ | 要約文 | `"AIの基礎を解説"` |
| `icon` | ⭕ | Font Awesomeアイコン | `"fa-robot"` |
| `image` | ⭕ | アイキャッチ画像 | `"/content/images/2024-12-26-hero.jpg"` |

### Markdownの書き方

#### 見出し

```markdown
## 大見出し
### 中見出し
#### 小見出し
```

#### 段落と強調

```markdown
これは通常の段落です。

**太字のテキスト**

*イタリック体のテキスト*

~~取り消し線~~
```

#### リスト

```markdown
### 番号なしリスト
- 項目1
- 項目2
  - サブ項目2-1
  - サブ項目2-2

### 番号付きリスト
1. 最初の項目
2. 2番目の項目
3. 3番目の項目
```

#### リンク

```markdown
[リンクテキスト](https://example.com)

[内部リンク](/blog.html)
```

#### コードブロック

~~~markdown
```python
import numpy as np
import pandas as pd

# データの読み込み
df = pd.read_csv('data.csv')
print(df.head())
```
~~~

対応言語：
- `python`
- `javascript` / `js`
- `typescript` / `ts`
- `bash` / `shell`
- `html`
- `css`
- `json`
- `yaml`
- `sql`
など（highlight.jsの全言語に対応）

#### インラインコード

```markdown
`変数名`や`関数名()`のようにコードを文中に含めます。
```

#### 引用

```markdown
> これは引用文です。
> 複数行にわたって記述できます。
```

#### テーブル

```markdown
| ヘッダー1 | ヘッダー2 | ヘッダー3 |
|-----------|-----------|-----------|
| データ1   | データ2   | データ3   |
| データ4   | データ5   | データ6   |
```

---

## 画像の追加

### 1. 画像ファイルの配置

画像を `content/images/` ディレクトリに配置：

```
content/images/
├── 2024-12-26-architecture.png
├── 2024-12-26-chart.jpg
└── 2024-12-26-screenshot.png
```

**命名規則**: `YYYY-MM-DD-説明.拡張子`

### 2. 記事内で画像を参照

```markdown
![画像の説明](/content/images/2024-12-26-architecture.png)
```

### 3. 画像サイズの指定（HTML使用）

```markdown
<img src="/content/images/2024-12-26-chart.jpg" alt="チャート" width="600">
```

### 4. 推奨画像仕様

| 用途 | サイズ | フォーマット |
|------|--------|--------------|
| アイキャッチ | 1200×630px | JPG/PNG |
| 本文画像 | 最大1000px幅 | JPG/PNG/SVG |
| スクリーンショット | 実寸 | PNG |
| アイコン | 512×512px | PNG/SVG |

---

## ビルドとプレビュー

### 開発サーバーの起動（推奨）

```bash
yarn dev
```

機能：
- ローカルサーバー起動（http://localhost:8080）
- Markdownファイルの変更を自動検出
- 変更時に自動ビルド
- ブラウザで即座にプレビュー

### 手動ビルド

```bash
yarn build
```

- `content/posts/*.md` → `assets/data/posts.json`に変換
- HTMLでの表示用データを生成

### プレビューのみ

```bash
yarn preview
```

- ビルド済みサイトをプレビュー
- 変更の自動検出なし

---

## デプロイ

### GitHub Pagesへのデプロイ

#### 1. 記事のビルド

```bash
yarn build
```

#### 2. Gitコミット

```bash
git add .
git commit -m "Add new post: 記事タイトル"
```

#### 3. GitHubにプッシュ

```bash
git push origin master
```

#### 4. 自動デプロイ

GitHub Pagesが自動的にデプロイ（数分で反映）

サイトURL: https://amazongodman.github.io

### デプロイ前のチェックリスト

- [ ] `yarn build` が正常に完了
- [ ] ローカルでプレビュー確認
- [ ] 画像が正しく表示される
- [ ] コードブロックのシンタックスハイライトが適用されている
- [ ] リンクが正しく動作する
- [ ] タイトルとメタデータが正確

---

## トラブルシューティング

### Q1: `yarn dev` でエラーが出る

**解決策**:

```bash
# node_modulesを削除して再インストール
rm -rf node_modules
yarn install
```

### Q2: 記事がビルドされない

**確認項目**:

1. Front-matterの形式が正しいか
2. YAMLの構文エラーがないか
3. 日付の形式が `YYYY-MM-DD` か
4. クォートが正しく閉じられているか

```yaml
# ❌ 間違い
title: 記事のタイトル"

# ✅ 正しい
title: "記事のタイトル"
```

### Q3: 画像が表示されない

**確認項目**:

1. 画像パスが `/content/images/` で始まっているか
2. ファイル名のスペルが正確か
3. 画像ファイルが実際に存在するか

```markdown
# ❌ 間違い
![画像](content/images/image.png)

# ✅ 正しい
![画像](/content/images/image.png)
```

### Q4: コードブロックのハイライトが効かない

**解決策**:

言語名を正しく指定：

~~~markdown
# ❌ 間違い
```py
code here
```

# ✅ 正しい
```python
code here
```
~~~

### Q5: ビルドは成功するがページに反映されない

**解決策**:

ブラウザのキャッシュをクリア：

- **Chrome/Edge**: `Ctrl + Shift + R`
- **Firefox**: `Ctrl + F5`

または、開発ツールを開いて「キャッシュの無効化」を有効に。

---

## ベストプラクティス

### ✅ DO

- 記事ごとに明確な目的を持つ
- コードには必ずコメントを付ける
- 画像に適切なalt属性を設定
- 見出しの階層を正しく使う（H2→H3→H4）
- 定期的にコミット・プッシュ

### ❌ DON'T

- 巨大な画像（>1MB）を使用しない
- コピーライトのある画像を無断使用しない
- 見出しをスキップしない（H2→H4など）
- ビルドせずにプッシュしない

---

## 記事テンプレート

```markdown
---
title: "記事のタイトル"
date: 2024-12-26
categories: ["カテゴリー1", "カテゴリー2"]
tags: ["タグ1", "タグ2", "タグ3"]
excerpt: "記事の要約を150文字程度で記述"
icon: "fa-robot"
image: null
---

## はじめに

記事の導入部分。読者を引き込む内容を書きます。

## セクション1: 背景・問題提起

### サブセクション

詳細な説明。

```python
# コード例
def example():
    print("Hello, World!")
```

## セクション2: 解決策・実装

### ステップ1

説明とコード。

### ステップ2

説明とコード。

## まとめ

記事の要点をまとめます。

## 参考リンク

- [リンク1](https://example.com)
- [リンク2](https://example.com)
```

---

## サポート

質問や問題がある場合：

- **GitHub Issues**: https://github.com/amazongodman/amazongodman.github.io/issues
- **Twitter**: [@Ringa_hyj](https://twitter.com/Ringa_hyj)

Happy Blogging! 🚀
