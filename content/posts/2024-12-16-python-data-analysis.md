---
title: "Pythonによるデータ分析入門"
date: 2024-12-16
categories: ["Python", "データ分析"]
tags: ["pandas", "numpy", "matplotlib"]
excerpt: "PythonとRを使用したデータ分析と機械学習について説明します。基本的なデータ分析のコード例から、実践的な応用まで幅広くカバーします。"
icon: "fa-python"
image: null
---

## はじめに

このブログでは、PythonとRを使用したデータ分析と機械学習について説明していきます。

データサイエンスの世界は日々進化しており、新しいツールやテクニックが次々と登場しています。
この記事では、その基礎となるPythonでのデータ分析について解説します。

## Pythonでのデータ分析基礎

基本的なデータ分析のコード例：

```python
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
```

## pandasを使ったデータ操作

pandasはPythonでデータ分析を行う際の必須ライブラリです。以下は基本的な操作例です：

```python
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
```

### データクリーニング

実際のデータは必ずしもきれいではありません。欠損値や異常値への対処が必要です：

```python
# 欠損値の確認
print(df.isnull().sum())

# 欠損値の削除
df_cleaned = df.dropna()

# 欠損値の補完
df['column'] = df['column'].fillna(df['column'].mean())
```

## データの可視化

データを理解するためには可視化が重要です。matplotlibやseabornを使用して効果的にデータを可視化できます。

```python
import seaborn as sns

# 相関行列のヒートマップ
correlation = df.corr()
sns.heatmap(correlation, annot=True, cmap='coolwarm')
plt.show()

# 箱ひげ図
sns.boxplot(data=df, x='category', y='value')
plt.show()

# ペアプロット
sns.pairplot(df, hue='category')
plt.show()
```

## 統計的分析

基本的な統計分析も簡単に実行できます：

```python
from scipy import stats

# t検定
statistic, pvalue = stats.ttest_ind(group1, group2)
print(f'T-statistic: {statistic}, P-value: {pvalue}')

# カイ二乗検定
chi2, pvalue, dof, expected = stats.chi2_contingency(contingency_table)
print(f'Chi-square: {chi2}, P-value: {pvalue}')
```

## 今後の予定

このブログでは以下のようなトピックについて説明していく予定です：

1. Pythonによるデータ前処理
2. pandas基礎からの応用
3. 機械学習モデルの実装
4. Rによる統計分析
5. ディープラーニング入門

データ分析の世界は広大で、学ぶべきことがたくさんあります。一緒に学んでいきましょう！

## 参考リンク

- [pandas公式ドキュメント](https://pandas.pydata.org/docs/)
- [NumPy公式ドキュメント](https://numpy.org/doc/)
- [Matplotlib公式ドキュメント](https://matplotlib.org/)
