// 核心逻辑：拦截 Ctrl+S / Cmd+S
function blockBrowserSave(e) {
    // 1. 判断是否是 JupyterLab 页面 (双重保险)
    const isJupyter = location.href.indexOf('/lab') > -1 || document.title.indexOf('JupyterLab') > -1;
    if (!isJupyter) return;

    // 2. 判断按键组合
    // e.key === 's' (现代浏览器)
    // e.keyCode === 83 (旧浏览器兼容，虽然现在很少用了)
    // e.ctrlKey (Windows Ctrl / Mac Cmd)
    const isSaveShortcut = (e.key === 's' || e.key === 'S' || e.keyCode === 83) && (e.ctrlKey || e.metaKey);
    if (isSaveShortcut) {
        console.log('🛑 拦截到 Ctrl+S，阻止浏览器默认行为');
        // 核心：阻止浏览器弹出“保存网页”对话框
        e.preventDefault();

        // 注意：这里不需要手动触发 Jupyter 的保存命令。
        // 因为 Jupyter Lab 也在监听这个快捷键。
        // 我们只要不把浏览器的默认行为触发出来，Jupyter 就能正常收到这个事件并保存。
    }
}

// 使用捕获模式 (true)，确保在浏览器处理之前先拦截
document.addEventListener('keydown', blockBrowserSave, true);

console.log('✅ Jupyter Ctrl+S 拦截器已启动');