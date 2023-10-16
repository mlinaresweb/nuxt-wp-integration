import { Ref, ref, onMounted, onUnmounted } from 'vue';

export function useOutsideClick(targetRef: Ref<HTMLElement | null>): Ref<boolean> {
    const isOutside = ref(false);

    function checkOutsideClick(event: Event) {
        if (targetRef.value && !targetRef.value.contains(event.target as Node)) {
            isOutside.value = true;
        } else {
            isOutside.value = false;
        }
    }

    onMounted(() => {
        window.addEventListener('click', checkOutsideClick, true); 
        window.addEventListener('scroll', checkOutsideClick, true); 
    });
    
    onUnmounted(() => {
        window.removeEventListener('click', checkOutsideClick, true); 
        window.removeEventListener('scroll', checkOutsideClick, true); 
    });

    return isOutside;
}
