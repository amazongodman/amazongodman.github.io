// ===================================
// 記事詳細データ
// ===================================
const postsContent = {
    1: {
        title: 'Pythonによるデータ分析入門',
        date: '2024-12-16',
        categories: ['Python', 'データ分析'],
        tags: ['pandas', 'numpy', 'matplotlib'],
        content: `
## はじめに

このブログでは、PythonとRを使用したデータ分析と機械学習について説明していきます。

## Pythonでのデータ分析基礎

基本的なデータ分析のコード例：

\`\`\`python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# サンプルデータの作成
df = pd.DataFrame({
    'x': np.random.randn(100),
    'y': np.random.randn(100)
})

# データの可視化
plt.scatter(df['x'], df['y'])
plt.title('散布図の例')
plt.xlabel('X軸')
plt.ylabel('Y軸')
plt.show()
\`\`\`

## pandasを使ったデータ操作

pandasはPythonでデータ分析を行う際の必須ライブラリです。以下は基本的な操作例です：

\`\`\`python
# データの読み込み
df = pd.read_csv('data.csv')

# データの確認
print(df.head())
print(df.info())
print(df.describe())

# データのフィルタリング
filtered_df = df[df['column'] > 100]

# グループ化と集計
grouped = df.groupby('category').agg({
    'value': ['mean', 'sum', 'count']
})
\`\`\`

## データの可視化

データを理解するためには可視化が重要です。matplotlibやseabornを使用して効果的にデータを可視化できます。

\`\`\`python
import seaborn as sns

# 相関行列のヒートマップ
correlation = df.corr()
sns.heatmap(correlation, annot=True, cmap='coolwarm')
plt.show()

# 箱ひげ図
sns.boxplot(data=df, x='category', y='value')
plt.show()
\`\`\`

## 今後の予定

このブログでは以下のようなトピックについて説明していく予定です：

1. Pythonによるデータ前処理
2. pandas基礎からの応用
3. 機械学習モデルの実装
4. Rによる統計分析

データ分析の世界は広大で、学ぶべきことがたくさんあります。一緒に学んでいきましょう！
        `
    },
    2: {
        title: '機械学習モデルの本番運用入門',
        date: '2024-12-10',
        categories: ['機械学習', 'MLOps'],
        tags: ['docker', 'mlops', 'deployment'],
        content: `
## はじめに

機械学習モデルを開発することと、それを本番環境で運用することは全く別のスキルセットが必要です。
この記事では、MLOpsの基礎と実践的なデプロイ方法について解説します。

## MLOpsとは

MLOps（Machine Learning Operations）は、機械学習モデルの開発からデプロイ、運用、監視までを
効率的に行うための実践と原則の集合です。

主な要素：
- バージョン管理
- 自動テスト
- CI/CDパイプライン
- モニタリングとロギング
- モデルの再学習

## Dockerを使ったモデルのコンテナ化

\`\`\`dockerfile
FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
\`\`\`

## FastAPIを使ったAPI作成

\`\`\`python
from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import numpy as np

app = FastAPI()

# モデルの読み込み
model = joblib.load('model.pkl')

class PredictionInput(BaseModel):
    features: list

@app.post("/predict")
def predict(input_data: PredictionInput):
    features = np.array(input_data.features).reshape(1, -1)
    prediction = model.predict(features)
    return {"prediction": prediction.tolist()}
\`\`\`

## モデルのモニタリング

本番環境でのモデルパフォーマンスを継続的に監視することが重要です：

- 予測精度の追跡
- データドリフトの検出
- レイテンシの監視
- エラーレートの追跡

## まとめ

MLOpsは機械学習プロジェクトの成功に不可欠です。適切なツールとプラクティスを
導入することで、モデルの価値を最大化できます。
        `
    },
    3: {
        title: 'React Hooksを使った状態管理',
        date: '2024-12-05',
        categories: ['JavaScript', 'React'],
        tags: ['react', 'hooks', 'frontend'],
        content: `
## React Hooksの基礎

React Hooksは関数コンポーネントで状態管理や副作用を扱うための機能です。

## useState

\`\`\`javascript
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}
\`\`\`

## useEffect

\`\`\`javascript
import React, { useState, useEffect } from 'react';

function DataFetcher() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }, []); // 空の依存配列で初回のみ実行

    if (loading) return <div>Loading...</div>;
    return <div>{JSON.stringify(data)}</div>;
}
\`\`\`

## カスタムHooks

\`\`\`javascript
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const saved = localStorage.getItem(key);
        return saved !== null ? JSON.parse(saved) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

// 使用例
function App() {
    const [name, setName] = useLocalStorage('name', '');

    return (
        <input
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
    );
}
\`\`\`

## まとめ

React Hooksを使うことで、クラスコンポーネントを使わずに
状態管理やライフサイクル機能を実装できます。
        `
    }
};

// ===================================
// 記事詳細の読み込み
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    loadPost();
});

function loadPost() {
    const params = new URLSearchParams(window.location.search);
    const postId = parseInt(params.get('id'));

    if (!postId || !postsContent[postId]) {
        document.getElementById('postContent').innerHTML = `
            <div class="post-header">
                <h1 class="post-title">記事が見つかりません</h1>
            </div>
            <div class="post-body">
                <p>お探しの記事は存在しないか、削除された可能性があります。</p>
                <p><a href="blog.html">ブログ一覧に戻る</a></p>
            </div>
        `;
        return;
    }

    const post = postsContent[postId];

    document.title = `${post.title} | Ringa_hyj Tech Blog`;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', post.title);
    }

    const contentHtml = marked.parse(post.content);

    document.getElementById('postContent').innerHTML = `
        <header class="post-header">
            <h1 class="post-title">${post.title}</h1>
            <div class="post-meta">
                <div class="post-meta-item">
                    <i class="fas fa-calendar"></i>
                    <span>${formatDate(post.date)}</span>
                </div>
                <div class="post-meta-item">
                    <i class="fas fa-folder"></i>
                    <span>${post.categories.join(', ')}</span>
                </div>
            </div>
        </header>
        <div class="post-body">
            ${contentHtml}
        </div>
        <div class="post-tags">
            ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
    `;

    // シンタックスハイライト
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightElement(block);
    });
}

// 簡易Markdownパーサー（marked.jsの代替）
const marked = {
    parse: function(markdown) {
        let html = markdown;

        // コードブロック
        html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
            const language = lang || 'plaintext';
            return `<pre><code class="language-${language}">${escapeHtml(code.trim())}</code></pre>`;
        });

        // インラインコード
        html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

        // 見出し
        html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
        html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
        html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

        // リスト
        html = html.replace(/^\d+\. (.*$)/gim, '<li>$1</li>');
        html = html.replace(/^[\*\-] (.*$)/gim, '<li>$1</li>');
        html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');

        // 段落
        html = html.split('\n\n').map(para => {
            if (!para.match(/^<[h|u|p|o|l]/)) {
                return `<p>${para.trim()}</p>`;
            }
            return para;
        }).join('\n');

        return html;
    }
};

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
