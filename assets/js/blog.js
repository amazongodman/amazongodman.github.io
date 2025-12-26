// ===================================
// ブログページの機能
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    initBlogPage();
});

async function initBlogPage() {
    await loadBlogData();
    loadBlogPosts();
    setupFilters();
    setupSearch();
    loadSidebar();
}

// ===================================
// ブログ記事の読み込み
// ===================================
function loadBlogPosts(filterCategory = 'all', searchQuery = '') {
    const container = document.getElementById('postsList');
    const noResults = document.getElementById('noResults');
    if (!container) return;

    // フィルタリング
    let filtered = blogPosts;

    if (filterCategory !== 'all') {
        filtered = filtered.filter(post =>
            post.categories.includes(filterCategory)
        );
    }

    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(post =>
            post.title.toLowerCase().includes(query) ||
            post.excerpt.toLowerCase().includes(query) ||
            post.tags.some(tag => tag.toLowerCase().includes(query))
        );
    }

    // 結果の表示
    if (filtered.length === 0) {
        container.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';
    container.innerHTML = filtered.map(post => `
        <article class="post-item">
            <h2 class="post-item-title">
                <a href="post.html?id=${post.id}">${post.title}</a>
            </h2>
            <div class="post-item-meta">
                <span><i class="fas fa-calendar"></i> ${formatDate(post.date)}</span>
                <span><i class="fas fa-folder"></i> ${post.categories.join(', ')}</span>
            </div>
            <p class="post-item-excerpt">${post.excerpt}</p>
            <div class="post-card-tags">
                ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </article>
    `).join('');
}

// ===================================
// フィルターボタンの設定
// ===================================
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // アクティブ状態の切り替え
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // フィルター適用
            const category = this.getAttribute('data-category');
            const searchQuery = document.getElementById('searchInput')?.value || '';
            loadBlogPosts(category, searchQuery);
        });
    });
}

// ===================================
// 検索機能の設定
// ===================================
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    let debounceTimer;
    searchInput.addEventListener('input', function() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            const activeFilter = document.querySelector('.filter-btn.active');
            const category = activeFilter ? activeFilter.getAttribute('data-category') : 'all';
            loadBlogPosts(category, this.value);
        }, 300);
    });
}

// ===================================
// サイドバーの読み込み
// ===================================
function loadSidebar() {
    loadTagCloud();
    loadCategoryList();
    loadArchiveList();
}

function loadTagCloud() {
    const container = document.getElementById('tagCloud');
    if (!container) return;

    const tags = extractTags(blogPosts);

    container.innerHTML = Object.entries(tags)
        .sort((a, b) => b[1] - a[1])
        .map(([tag, count]) => `<span class="tag">${tag}</span>`)
        .join('');

    // タグクリックでフィルター
    container.querySelectorAll('.tag').forEach(tagEl => {
        tagEl.addEventListener('click', function() {
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.value = this.textContent;
                loadBlogPosts('all', this.textContent);
            }
        });
    });
}

function loadCategoryList() {
    const container = document.getElementById('categoryList');
    if (!container) return;

    const categories = extractCategories(blogPosts);

    container.innerHTML = Object.entries(categories)
        .sort((a, b) => b[1] - a[1])
        .map(([cat, count]) => `
            <li>
                <a href="#" data-category="${cat}">
                    <span>${cat}</span>
                    <span class="count">${count}</span>
                </a>
            </li>
        `).join('');

    // カテゴリークリックでフィルター
    container.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');

            // フィルターボタンを探してクリック
            const filterBtn = document.querySelector(`.filter-btn[data-category="${category}"]`);
            if (filterBtn) {
                filterBtn.click();
            } else {
                // カスタムカテゴリの場合
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                loadBlogPosts(category, '');
            }
        });
    });
}

function loadArchiveList() {
    const container = document.getElementById('archiveList');
    if (!container) return;

    const archives = extractArchives(blogPosts);

    container.innerHTML = Object.entries(archives)
        .sort((a, b) => b[0].localeCompare(a[0]))
        .map(([month, count]) => `
            <li>
                <a href="#">
                    <span>${month}</span>
                    <span class="count">${count}</span>
                </a>
            </li>
        `).join('');
}
