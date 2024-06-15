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
