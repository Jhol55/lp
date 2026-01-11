'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export function Bg() {
  const [numberOfRepetitions, setNumberOfRepetitions] = useState(6);
  const [blockHeight, setBlockHeight] = useState(0);
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);
  const lastHeightRef = useRef(0);
  const lastRepsRef = useRef(6);

  useEffect(() => {
    const calculateRepetitions = (immediate = false) => {
      if (typeof window !== 'undefined') {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        
        const run = () => {
          requestAnimationFrame(() => {
            const parent = containerRef.current?.parentElement;
            if (!parent) return;
            
            const currentHeight = parent.offsetHeight;
            const currentVh50 = window.innerHeight / 2;
            
            // Diferença significativa para evitar flicker (mais de 200px ou primeira carga)
            const heightDiff = Math.abs(currentHeight - lastHeightRef.current);
            const isFirstLoad = lastHeightRef.current === 0;

            if (isFirstLoad || heightDiff > 200) {
              // Calcula blockHeight primeiro e usa o mesmo valor para calcular reps
              // Isso garante consistência durante o redimensionamento
              const newBlockHeight = Math.floor(currentVh50);
              const reps = Math.ceil(currentHeight / newBlockHeight);
              
              // Atualiza sempre que necessário para garantir valores consistentes durante resize
              if (reps !== lastRepsRef.current || isFirstLoad) {
                setNumberOfRepetitions(reps);
                lastRepsRef.current = reps;
              }
              // Sempre atualiza blockHeight para manter valores sincronizados durante resize
              setBlockHeight(newBlockHeight);
              lastHeightRef.current = currentHeight;
            }
          });
        };

        if (immediate) {
          run();
        } else {
          timeoutRef.current = setTimeout(run, 300); // Debounce maior para estabilidade
        }
      }
    };

    const parent = containerRef.current?.parentElement;
    let resizeObserver;
    
    if (parent) {
      resizeObserver = new ResizeObserver(() => calculateRepetitions(false));
      resizeObserver.observe(parent);
    }

    window.addEventListener('resize', () => calculateRepetitions(false));
    
    // Chamada inicial imediata
    calculateRepetitions(true);

    return () => {
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener('resize', () => calculateRepetitions(false));
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []); // Removida dependência de blockHeight para evitar loop de efeito

  return (
    <div 
      ref={containerRef}
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden"
    >
      {Array.from({ length: numberOfRepetitions }).map((_, index) => {
        const isEven = index % 2 === 0;
        
        // Se ainda não calculamos o blockHeight em pixels, usamos svh como fallback inicial (mais estável no mobile)
        // Cada elemento (exceto o primeiro) começa 1px antes do anterior para eliminar gaps
        // A sobreposição é acumulativa: elemento 1 sobrepõe 1px, elemento 2 sobrepõe 2px, etc.
        const topPosition = blockHeight 
          ? `${index === 0 ? 0 : index * blockHeight - index}px` 
          : `${index * 50}svh`;
        const heightValue = blockHeight ? `${blockHeight}px` : `50svh`;
        
        return (
          <div
            key={index}
            className="absolute left-0 w-full overflow-hidden"
            style={{ 
              top: topPosition,
              height: heightValue
            }}
          >
            <Image
              src="/bg.png"
              alt=""
              fill
              sizes="100vw"
              className={`object-cover object-bottom ${
                isEven ? '' : '[transform:rotate(180deg)scaleX(-1)]'
              }`}
              priority={index < 4} // Prioridade para as primeiras 4 imagens (200vh)
              loading={index < 6 ? 'eager' : 'lazy'} // Carregamento rápido para o topo (300vh)
            />
          </div>
        );
      })}
    </div>
  );
}
