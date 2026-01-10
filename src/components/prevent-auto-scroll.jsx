'use client';

import { useEffect } from 'react';

export function PreventAutoScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const hasHash = window.location.hash;
    
    // Se não há hash na URL, previne scroll automático
    if (!hasHash) {
      // Força scroll para o topo imediatamente
      window.scrollTo(0, 0);
      
      // Previne scroll causado por autofocus após renderização
      let scrollPrevented = false;
      
      const preventAutoScroll = (e) => {
        if (scrollPrevented) return;
        
        const focusedElement = document.activeElement;
        if (focusedElement && (focusedElement.tagName === 'INPUT' || focusedElement.tagName === 'TEXTAREA')) {
          // Bloqueia o scroll automático
          e.preventDefault?.();
          
          // Mantém o scroll no topo
          requestAnimationFrame(() => {
            window.scrollTo({ top: 0, behavior: 'instant' });
          });
          
          scrollPrevented = true;
          
          // Remove o listener após prevenir uma vez
          setTimeout(() => {
            document.removeEventListener('focusin', preventAutoScroll);
            scrollPrevented = false;
          }, 1000);
        }
      };
      
      // Adiciona listener para prevenir scroll no foco
      document.addEventListener('focusin', preventAutoScroll, true);
      
      // Também previne scroll após um pequeno delay (para autofocus que acontece depois)
      const timeoutId = setTimeout(() => {
        if (window.scrollY > 0 && !hasHash) {
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      }, 100);
      
      return () => {
        document.removeEventListener('focusin', preventAutoScroll, true);
        clearTimeout(timeoutId);
      };
    }
  }, []);

  return null;
}
