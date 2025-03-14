document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const systemThemeSwitch = document.getElementById('system-theme-switch');
    let currentTheme = localStorage.getItem('theme') || 'dark';
    let isSystemThemeEnabled = localStorage.getItem('systemThemeEnabled') === 'true';

    // 初始化主题
    const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateThemeIcon(theme);
    };

    // 更新按钮图标
    const updateThemeIcon = (theme) => {
        const icon = theme === 'dark' ? '🌙' : '☀️';
        themeToggle.querySelector('.theme-icon').textContent = icon;
    };

    // 切换主题
    themeToggle.addEventListener('click', () => {
        if (!isSystemThemeEnabled) {
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
            currentTheme = newTheme;
        }
    });

    // 跟随系统主题
    const handleSystemThemeChange = (e) => {
        if (e.matches) {
            applyTheme('dark');
        } else {
            applyTheme('light');
        }
    };

    // 初始化系统主题
    if (isSystemThemeEnabled) {
        const systemThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        systemThemeQuery.addEventListener('change', handleSystemThemeChange);
        handleSystemThemeChange(systemThemeQuery);
    }

    // 切换系统主题开关
    systemThemeSwitch.checked = isSystemThemeEnabled;
    systemThemeSwitch.addEventListener('change', (e) => {
        isSystemThemeEnabled = e.target.checked;
        localStorage.setItem('systemThemeEnabled', isSystemThemeEnabled);

        if (isSystemThemeEnabled) {
            const systemThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
            systemThemeQuery.addEventListener('change', handleSystemThemeChange);
            handleSystemThemeChange(systemThemeQuery);
        } else {
            applyTheme(currentTheme);
        }
    });
});