import { spring } from 'svelte/motion';

export default function springPress(node) {
    const size = spring(1 , {
        delay: 0 ,
    });
    function sizeUp() {
        size.set(1);
    }
    function sizeDown() {
        size.set(0.9);
    }
    
    const unsubscribe = size.subscribe(val => {
        node.style.transform = `scale(${val})`;
    });
    node.addEventListener('mousedown', sizeDown)
    document.addEventListener('mouseup', sizeUp);
    
    return {
        destroy() {
            unsubscribe();
            node.removeEventListener('mousedown', sizeDown);
            document.removeEventListener('mouseup', sizeUp);
        }
    }
}