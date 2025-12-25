// ========================================
// Leaderboard Page
// ========================================

async function renderLeaderboardPage() {
    let leaderboardData = [];
    try {
        const { data, error } = await window.supabaseClient
            .from('leaderboard')
            .select('*')
            .order('ranking', { ascending: true })
            .limit(10);

        if (error) throw error;
        leaderboardData = data || [];
    } catch (error) {
        console.error('Error fetching leaderboard:', error);
        showToast(t('error_fetching_leaderboard'), 'error');
    }

    const top3 = leaderboardData.slice(0, 3);
    const others = leaderboardData.slice(3);

    let html = `
        <div class="page-header">
            <h1 class="page-title">${t('leaderboard_title')}</h1>
            <p class="page-subtitle">${t('leaderboard_subtitle')}</p>
        </div>

        <div class="podium-container">
            ${renderPodium(top3)}
        </div>

        <div class="leaderboard-list card">
            <div class="list-header">
                <span>${t('rank_header')}</span>
                <span>${t('user_header')}</span>
                <span>${t('points_header')}</span>
            </div>
            <div class="list-body">
                ${others.map(user => `
                    <div class="list-item">
                        <span class="rank-number">#${user.ranking}</span>
                        <span class="user-name">${user.full_name}</span>
                        <span class="points-value">${user.total_points}</span>
                    </div>
                `).join('')}
                ${leaderboardData.length === 0 ? `<p class="empty-state">${t('no_leaderboard_data')}</p>` : ''}
            </div>
        </div>
    `;

    return html;
}

function renderPodium(topUsers) {
    // Reorder for podium display: [Silver, Gold, Bronze]
    const podiumOrder = [1, 0, 2]; // Index 0 is Gold, 1 Silver, 2 Bronze
    const orderedUsers = podiumOrder.map(idx => topUsers[idx]).filter(Boolean);

    return `
        <div class="podium">
            ${topUsers[1] ? `
            <div class="podium-item silver">
                <div class="avatar-container">
                    <img src="assets/images/silver-medal.png" alt="Silver" class="medal-icon">
                </div>
                <div class="podium-step">
                    <span class="podium-name">${topUsers[1].full_name}</span>
                    <span class="podium-points">${topUsers[1].total_points}</span>
                </div>
            </div>
            ` : ''}

            ${topUsers[0] ? `
            <div class="podium-item gold">
                <div class="avatar-container">
                    <img src="assets/images/gold-medal.png" alt="Gold" class="medal-icon">
                    <div class="crown">👑</div>
                </div>
                <div class="podium-step">
                    <span class="podium-name">${topUsers[0].full_name}</span>
                    <span class="podium-points">${topUsers[0].total_points}</span>
                </div>
            </div>
            ` : ''}

            ${topUsers[2] ? `
            <div class="podium-item bronze">
                <div class="avatar-container">
                    <img src="assets/images/bronze-medal.png" alt="Bronze" class="medal-icon">
                </div>
                <div class="podium-step">
                    <span class="podium-name">${topUsers[2].full_name}</span>
                    <span class="podium-points">${topUsers[2].total_points}</span>
                </div>
            </div>
            ` : ''}
        </div>
    `;
}
