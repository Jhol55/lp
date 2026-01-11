'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export function Bg() {
  const [numberOfRepetitions, setNumberOfRepetitions] = useState(13);
  const [blockHeight, setBlockHeight] = useState(0);
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);
  const lastRepsRef = useRef(13);

  useEffect(() => {
    const calculateRepetitions = () => {
      if (typeof window !== 'undefined') {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        
        timeoutRef.current = setTimeout(() => {
          requestAnimationFrame(() => {
            const parent = containerRef.current?.parentElement;
            if (!parent) return;
            
            const height = parent.offsetHeight;
            const vh50 = window.innerHeight / 2;
            
            // Cada repetição ocupa 50vh (vh50 pixels)
            const reps = Math.ceil(height / vh50);
            
            // Só atualiza se a diferença for maior que 1 ou se reps mudou e for muito diferente
            // No mobile, pequenas variações de vh não devem triggerar re-render
            if (Math.abs(reps - lastRepsRef.current) >= 1 || blockHeight === 0) {
              setNumberOfRepetitions(reps);
              setBlockHeight(vh50);
              lastRepsRef.current = reps;
            }
          });
        }, 150); // Debounce de 150ms
      }
    };

    // Inicializa o Observer
    const parent = containerRef.current?.parentElement;
    let resizeObserver;
    
    if (parent) {
      resizeObserver = new ResizeObserver(calculateRepetitions);
      resizeObserver.observe(parent);
    }

    // Recalcula quando a janela muda de tamanho (muda o valor de vh)
    window.addEventListener('resize', calculateRepetitions);
    
    // Chamada inicial
    calculateRepetitions();

    return () => {
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener('resize', calculateRepetitions);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [blockHeight]);

  return (
    <div 
      ref={containerRef}
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden"
    >
      {Array.from({ length: numberOfRepetitions }).map((_, index) => {
        const isEven = index % 2 === 0;
        const topPosition = index * blockHeight;
        
        return (
          <div
            key={index}
            className="absolute left-0 w-full overflow-hidden"
            style={{ 
              top: `${topPosition}px`,
              height: `${blockHeight}px`
            }}
          >
            <Image
              src="/bg.png"
              alt=""
              fill
              className={`object-cover object-bottom ${
                isEven ? '' : '[transform:rotate(180deg)scaleX(-1)]'
              }`}
              priority={index < 2} // Prioridade apenas para as primeiras 2 imagens
              loading={index < 4 ? 'eager' : 'lazy'} // Lazy loading para as demais
            />
          </div>
        );
      })}
    </div>
  );
}
