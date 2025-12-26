# 🚀 セットアップガイド（Windows向け）

このドキュメントでは、Windows環境でブログシステムをセットアップする手順を説明します。

## 📋 前提条件の確認

以下のソフトウェアがインストールされている必要があります：

- ✅ Node.js 18以上
- ✅ Yarn
- ✅ Git

## 🔧 ステップ1: Node.jsのインストール

### 1-1. Node.jsのダウンロード

1. [Node.js公式サイト](https://nodejs.org/)にアクセス
2. **LTS版（推奨版）** をダウンロード
   - 例: `Node.js 20.x.x LTS`

### 1-2. インストール

1. ダウンロードした `.msi` ファイルを実行
2. インストーラーの指示に従う
3. **「Add to PATH」にチェック** を入れる

### 1-3. 確認

PowerShellまたはコマンドプロンプトを開いて確認：

```powershell
node --version
# 出力例: v20.10.0

npm --version
# 出力例: 10.2.3
```

## 📦 ステップ2: Yarnのインストール

### 2-1. Yarnをグローバルインストール

```powershell
npm install -g yarn
```

### 2-2. 確認

```powershell
yarn --version
# 出力例: 1.22.21
```

## 📁 ステップ3: プロジェクトのセットアップ

### 3-1. リポジトリのクローン（既にある場合はスキップ）

```powershell
cd C:\Users\YourName\Desktop
git clone https://github.com/amazongodman/amazongodman.github.io.git
```

### 3-2. プロジェクトディレクトリに移動

```powershell
cd amazongodman.github.io
```

### 3-3. 依存パッケージのインストール

```powershell
yarn install
```

**処理内容**:
- `package.json` に記載されたパッケージをダウンロード
- `node_modules/` ディレクトリが作成される

## ✍️ ステップ4: 初回ビルド

```powershell
yarn build
```

**処理内容**:
- `content/posts/*.md` を読み込み
- `assets/data/posts.json` を生成
- `assets/data/posts-content.json` を生成

## 🌐 ステップ5: 開発サーバーの起動

```powershell
yarn dev
```

**起動内容**:
- ローカルサーバー起動: http://localhost:8080
- Markdownファイルの変更を監視
- 変更時に自動ビルド

ブラウザで http://localhost:8080 を開いて確認！

## 📝 ステップ6: 初めての記事作成

### 6-1. 新しい記事を作成

```powershell
yarn new:post
```

対話形式で入力：

```
記事のタイトル: AI技術入門
カテゴリー (カンマ区切り): AI,機械学習
タグ (カンマ区切り): Python,TensorFlow
記事の要約: AIの基礎について解説します
```

### 6-2. 記事の編集

生成されたファイルをエディタで開く：

```
content/posts/2024-12-26-ai-gishu-rumen.md
```

### 6-3. 自動ビルド確認

`yarn dev` が起動している状態で、ファイルを保存すると自動的にビルドされます。

```
📝 変更を検出: content/posts/2024-12-26-ai-gishu-rumen.md
🔄 記事を再ビルド中...
✅ ビルド完了: 1件の記事を処理しました
```

ブラウザをリロードして確認！

## 🖼️ 画像の追加

### 画像ファイルの配置

```powershell
# 画像を content/images/ に配置
copy C:\path\to\image.png content\images\2024-12-26-example.png
```

### 記事内で参照

```markdown
![画像の説明](/content/images/2024-12-26-example.png)
```

## 🚢 デプロイ

### デプロイ前の確認

```powershell
# ビルド
yarn build

# プレビュー
yarn preview
```

ブラウザで http://localhost:8080 を開いて最終確認。

### GitHubへプッシュ

```powershell
git add .
git commit -m "Add new post: 記事タイトル"
git push origin master
```

数分後、https://amazongodman.github.io に反映されます。

## 🛠️ トラブルシューティング

### エラー: `yarn: コマンドが見つかりません`

**原因**: Yarnがインストールされていない

**解決策**:

```powershell
npm install -g yarn
```

### エラー: `Cannot find module 'marked'`

**原因**: 依存パッケージがインストールされていない

**解決策**:

```powershell
rm -r node_modules
yarn install
```

### エラー: ポート8080が使用中

**原因**: 別のプロセスがポート8080を使用している

**解決策**:

```powershell
# 使用中のプロセスを確認
netstat -ano | findstr :8080

# プロセスを終了（タスクマネージャーから）
# または別のポートを使用
```

### 記事が表示されない

**確認項目**:

1. `yarn build` を実行したか
2. `assets/data/posts.json` が存在するか
3. ブラウザのキャッシュをクリア（Ctrl + Shift + R）

### 画像が表示されない

**確認項目**:

1. パスが `/content/images/` で始まっているか
2. ファイル名が正確か（大文字小文字も区別）
3. ファイルが実際に存在するか

```powershell
dir content\images
```

## 📚 次のステップ

- [BLOG_GUIDE.md](BLOG_GUIDE.md) - 詳細な執筆ガイド
- [README.md](README.md) - プロジェクト概要

## 🆘 サポート

問題が解決しない場合：

- GitHub Issues: https://github.com/amazongodman/amazongodman.github.io/issues
- Twitter: [@Ringa_hyj](https://twitter.com/Ringa_hyj)

Happy Coding! 🎉
