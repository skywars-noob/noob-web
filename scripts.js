document.addEventListener('DOMContentLoaded', function() {
    // Observe sections for smooth sliding in effect
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const copyIpBtn = document.getElementById('copy-ip-btn');
    const serverIp = document.getElementById('server-ip').textContent;

    copyIpBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(serverIp).then(() => {
            alert('IP地址已複製到剪貼板！');
        }).catch(err => {
            console.error('複製失敗:', err);
        });
    });
});
