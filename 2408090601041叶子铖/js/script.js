// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    console.log('2408090601041叶子铖的第一个网页已加载完成！');

    // 平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 添加页面加载动画
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';

        setTimeout(() => {
            section.style.transition = 'all 0.6s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // 动态显示当前时间
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleString('zh-CN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });

        // 在页脚显示时间
        const footer = document.querySelector('.footer');
        let timeElement = document.getElementById('current-time');
        if (!timeElement) {
            timeElement = document.createElement('p');
            timeElement.id = 'current-time';
            timeElement.style.marginTop = '10px';
            timeElement.style.opacity = '0.8';
            footer.appendChild(timeElement);
        }
        timeElement.textContent = '当前时间：' + timeString;
    }

    updateTime();
    setInterval(updateTime, 1000);
});
