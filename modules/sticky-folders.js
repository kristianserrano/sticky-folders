const MODULE_ID = 'sticky-folders';

const hookEvents = ['changeSidebarTab', 'renderSidebarTab'];

for (const hookEvent of hookEvents) {
    Hooks.on(hookEvent, (directory, html, data) => {
        let int = 1000;
        const folders = directory.element[0].querySelectorAll('.directory-list .folder');

        for (const folder of folders) {
            int -= 1;
            folder.style.zIndex = int;
            folder.querySelector('.folder-header').style.zIndex = int;
        }
    });
}