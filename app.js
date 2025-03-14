document.addEventListener('DOMContentLoaded', () => {
    // 卡片点击跳转
    document.querySelectorAll('.web-card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault(); // 阻止默认行为
            const url = card.dataset.url; // 获取 data-url 的值

            if (url) {
                // 添加点击动画
                gsap.to(card, {
                    scale: 0.95,
                    opacity: 0.8,
                    duration: 0.3,
                    onComplete: () => {
                        window.location.href = url; // 跳转到指定 URL
                    }
                });
            } else {
                console.error('未找到有效的 URL');
            }
        });
    });

    // 分类筛选功能
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.dataset.filter;
            document.querySelectorAll('.web-card').forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 搜索功能
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        document.querySelectorAll('.web-card').forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            if (title.includes(query) || description.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});