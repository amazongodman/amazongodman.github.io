// ===================================
// CVページの機能
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    loadCV();
});

async function loadCV() {
    try {
        const response = await fetch('assets/data/cv.json');
        const cvData = await response.json();

        renderCV(cvData);
    } catch (error) {
        console.error('CVの読み込みエラー:', error);
        // フォールバック表示
        document.getElementById('cvContent').innerHTML = `
            <div style="padding: 2rem; text-align: center;">
                <p>CVの読み込みに失敗しました。</p>
                <p>ビルドを実行してください: <code>yarn build</code></p>
            </div>
        `;
    }
}

function renderCV(cvData) {
    const container = document.getElementById('cvContent');
    const { meta, content } = cvData;

    // ソーシャルリンクの生成
    const socialLinks = [];
    if (meta.social.github) {
        socialLinks.push(`<a href="${meta.social.github}" target="_blank" rel="noopener"><i class="fab fa-github"></i> GitHub</a>`);
    }
    if (meta.social.twitter) {
        socialLinks.push(`<a href="${meta.social.twitter}" target="_blank" rel="noopener"><i class="fab fa-twitter"></i> Twitter</a>`);
    }
    if (meta.social.qiita) {
        socialLinks.push(`<a href="${meta.social.qiita}" target="_blank" rel="noopener"><i class="fas fa-edit"></i> Qiita</a>`);
    }
    if (meta.social.kaggle) {
        socialLinks.push(`<a href="${meta.social.kaggle}" target="_blank" rel="noopener"><i class="fab fa-kaggle"></i> Kaggle</a>`);
    }
    if (meta.social.speakerdeck) {
        socialLinks.push(`<a href="${meta.social.speakerdeck}" target="_blank" rel="noopener"><i class="fas fa-presentation"></i> SpeakerDeck</a>`);
    }

    container.innerHTML = `
        <div class="cv-header" style="margin-bottom: 3rem; padding-bottom: 2rem; border-bottom: 2px solid var(--border-color);">
            <h1 style="margin-bottom: 0.5rem;">${meta.name}</h1>
            ${meta.title ? `<p style="font-size: 1.2rem; color: var(--primary-color); margin-bottom: 1rem;">${meta.title}</p>` : ''}
            ${meta.bio ? `<p style="color: var(--text-muted); margin-bottom: 1rem;">${meta.bio}</p>` : ''}
            ${meta.location ? `<p style="color: var(--text-muted);"><i class="fas fa-map-marker-alt"></i> ${meta.location}</p>` : ''}
        </div>

        <div class="cv-content simple-content">
            ${content}
        </div>

        ${socialLinks.length > 0 ? `
            <div class="cv-social" style="margin-top: 3rem; padding-top: 2rem; border-top: 2px solid var(--border-color);">
                <h2><i class="fas fa-link"></i> リンク</h2>
                <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1rem;">
                    ${socialLinks.join('')}
                </div>
            </div>
        ` : ''}
    `;
}
