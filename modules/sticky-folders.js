const MODULE_ID = 'sticky-folders';

Hooks.on('renderSidebarTab', (directory, html, data) => {
    const list = directory.element[0].querySelectorAll('.directory-list .folder');
    let int = 10000000;

    for (const item of list) {
        int -= 1;
        item.style.zIndex = int;
        item.querySelector('.folder-header').style.zIndex = int;
    }
});