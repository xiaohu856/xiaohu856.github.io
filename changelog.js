document.addEventListener('DOMContentLoaded', () => {
    const changelogButton = document.getElementById('changelog-button');
    const changelogModal = document.getElementById('changelog-modal');
    const closeButton = document.getElementById('close-changelog');

    // 打开更新日志窗口
    changelogButton.addEventListener('click', () => {
        changelogModal.classList.add('active');
    });

    // 关闭更新日志窗口
    closeButton.addEventListener('click', () => {
        changelogModal.classList.remove('active');
    });

    // 点击外部关闭窗口
    window.addEventListener('click', (e) => {
        if (e.target === changelogModal) {
            changelogModal.classList.remove('active');
        }
    });
});