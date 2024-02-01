import React, { useState, useEffect } from 'react';
let observer = null;
const config = { attributes: true, childList: false, subtree: false };
function useSidebarCollapsed() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    // function startObserving(targetNode, config) {
    //     const callback = function(mutationsList, observer) {
    //         for(let mutation of mutationsList) {
    //             if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
    //                 if(targetNode.classList[2] === 'ant-layout.tsx-sider-collapsed'){
    //                     setIsCollapsed(true)
    //                 }else {
    //                     setIsCollapsed(false)
    //                 }
    //                 console.log('Class changed', isCollapsed);
    //                 console.log( )
    //             }
    //         }
    //     };
    //     observer = new MutationObserver(callback);
    //     observer.observe(targetNode, config);
    // }
    //
    // function stopObserving() {
    //     if (observer) {
    //         observer.disconnect();
    //     }
    // }
    //
    // useEffect(() => {
    //     const targetNode = document.getElementsByTagName('aside')[0]
    //     startObserving(targetNode, config)
    // });

    return isCollapsed;
}
export default useSidebarCollapsed
