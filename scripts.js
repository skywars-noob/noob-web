document.addEventListener('DOMContentLoaded', function() {
    // Fetch server status
    fetch('https://api.mcsrvstat.us/3/noob.ttfmc.net')
        .then(response => response.json())
        .then(data => {
            const statusElement = document.getElementById('server-status');
            statusElement.textContent = data.online ? '✔在線' : '❌離線';
        })
        .catch(error => {
            console.error('Error fetching server status:', error);
            document.getElementById('server-status').textContent = '⚠無法獲取狀態';
        });

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