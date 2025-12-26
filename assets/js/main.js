// ===================================
// 初期化
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initNeuralNetwork();
    initTypingEffect();

    // トップページの記事読み込み
    if (document.getElementById('featuredPosts')) {
        loadFeaturedPosts();
    }
});

// ===================================
// ナビゲーションメニュー
// ===================================
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // メニュー外をクリックしたら閉じる
    document.addEventListener('click', function(event) {
        if (navMenu && navToggle) {
            if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
                navMenu.classList.remove('active');
            }
        }
    });

    // スムーズスクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// ===================================
// ニューラルネットワークアニメーション
// ===================================
function initNeuralNetwork() {
    const canvas = document.getElementById('neural-network');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const nodes = [];
    const nodeCount = 50;
    const maxDistance = 150;

    // ノードの作成
    for (let i = 0; i < nodeCount; i++) {
        nodes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            radius: Math.random() * 2 + 1
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // ノードの更新と描画
        nodes.forEach((node, i) => {
            // 位置更新
            node.x += node.vx;
            node.y += node.vy;

            // 画面端で反転
            if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
            if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

            // ノード描画
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(129, 140, 248, 0.8)';
            ctx.fill();

            // 接続線の描画
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[j].x - node.x;
                const dy = nodes[j].y - node.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxDistance) {
                    ctx.beginPath();
                    ctx.moveTo(node.x, node.y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    const opacity = (1 - distance / maxDistance) * 0.3;
                    ctx.strokeStyle = `rgba(129, 140, 248, ${opacity})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        });

        requestAnimationFrame(animate);
    }

    animate();

    // リサイズ対応
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ===================================
// タイピングエフェクト
// ===================================
function initTypingEffect() {
    const typingText = document.getElementById('typingText');
    if (!typingText) return;

    const texts = [
        'AI Technology Blog',
        'AIテクノロジーブログ',
        'Machine Learning',
        'Deep Learning',
        'Data Science'
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;

    function type() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 150;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 2000; // 完成後の待機時間
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500; // 次のテキストまでの待機時間
        }

        setTimeout(type, typingSpeed);
    }

    type();
}


// ===================================
// ブログ記事データ（JSONから読み込み）
// ===================================
let blogPosts = [];

// JSONデータの読み込み
async function loadBlogData() {
    try {
        const response = await fetch('assets/data/posts.json');
        blogPosts = await response.json();
        return blogPosts;
    } catch (error) {
        console.log('記事データの読み込みはビルド後に可能です');
        // フォールバックデータ
        blogPosts = [
            {
                id: '2024-12-26-ai-future',
                title: 'AI技術の最前線：2025年に注目すべきトレンド',
                date: '2024-12-26',
                categories: ['AI', '機械学習'],
                tags: ['LLM', '生成AI', 'トレンド'],
                excerpt: '2025年のAI業界で注目すべき技術トレンドと、エンジニアが押さえておくべきポイントを解説します。',
                icon: 'fa-brain'
            },
            {
                id: '2024-12-16-python-data-analysis',
                title: 'Pythonによるデータ分析入門',
                date: '2024-12-16',
                categories: ['Python', 'データ分析'],
                tags: ['pandas', 'numpy', 'matplotlib'],
                excerpt: 'PythonとRを使用したデータ分析と機械学習について説明します。基本的なデータ分析のコード例から、実践的な応用まで幅広くカバーします。',
                icon: 'fa-python'
            }
        ];
        return blogPosts;
    }
}

// ===================================
// トップページの最新記事表示（全件を新しい順）
// ===================================
async function loadFeaturedPosts() {
    const container = document.getElementById('featuredPosts');
    if (!container) return;

    await loadBlogData();

    // 全記事を新しい順に表示（既にbuild.jsでソート済み）
    container.innerHTML = blogPosts.map(post => `
        <article class="post-card">
            <div class="post-card-header">
                <i class="fas ${post.icon} post-card-icon"></i>
            </div>
            <div class="post-card-body">
                <h3 class="post-card-title">
                    <a href="post.html?id=${post.id}">${post.title}</a>
                </h3>
                <div class="post-card-date">
                    <i class="fas fa-calendar"></i>
                    ${formatDate(post.date)}
                </div>
                <p class="post-card-excerpt">${post.excerpt}</p>
                <div class="post-card-tags">
                    ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </article>
    `).join('');
}

// ===================================
// 日付フォーマット
// ===================================
function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}年${month}月${day}日`;
}

// ===================================
// カテゴリーとタグの抽出
// ===================================
function extractCategories(posts) {
    const categories = {};
    posts.forEach(post => {
        post.categories.forEach(cat => {
            categories[cat] = (categories[cat] || 0) + 1;
        });
    });
    return categories;
}

function extractTags(posts) {
    const tags = {};
    posts.forEach(post => {
        post.tags.forEach(tag => {
            tags[tag] = (tags[tag] || 0) + 1;
        });
    });
    return tags;
}

function extractArchives(posts) {
    const archives = {};
    posts.forEach(post => {
        const date = new Date(post.date);
        const yearMonth = `${date.getFullYear()}年${String(date.getMonth() + 1).padStart(2, '0')}月`;
        archives[yearMonth] = (archives[yearMonth] || 0) + 1;
    });
    return archives;
}
