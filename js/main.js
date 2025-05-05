// js/main.js
function copyIP(ip) {
    navigator.clipboard.writeText(ip);
    const msg = document.createElement('div');
    msg.innerText = '已複製到剪貼簿！';
    msg.style.position = 'fixed';
    msg.style.bottom = '24px';
    msg.style.left = '50%';
    msg.style.transform = 'translateX(-50%)';
    msg.style.background = '#00ffe0';
    msg.style.color = '#181a20';
    msg.style.padding = '12px 24px';
    msg.style.borderRadius = '8px';
    msg.style.zIndex = 9999;
    document.body.appendChild(msg);
    setTimeout(() => document.body.removeChild(msg), 1500);
  }
  
