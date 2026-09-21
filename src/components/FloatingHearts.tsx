import { useState, useEffect } from 'react';

export function FloatingHearts() {
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; top: number; isActive: boolean }>>([]);

  useEffect(() => {
    const newHearts = [];
    let idCounter = 0;

    // 15 Corações na esquerda (mais denso)
    for (let i = 0; i < 15; i++) {
      newHearts.push({
        id: idCounter++,
        left: 2 + Math.random() * 30, // 2% a 32%
        top: (i * 100) / 15 + (Math.random() * 4 - 2), // distribuídos verticalmente
        isActive: false
      });
    }

    // 10 Corações no centro (médio)
    for (let i = 0; i < 10; i++) {
      newHearts.push({
        id: idCounter++,
        left: 36 + Math.random() * 28, // 36% a 64%
        top: (i * 100) / 10 + (Math.random() * 6 - 3),
        isActive: false
      });
    }

    // 5 Corações na direita (menos denso)
    for (let i = 0; i < 5; i++) {
      newHearts.push({
        id: idCounter++,
        left: 70 + Math.random() * 25, // 70% a 95%
        top: (i * 100) / 5 + (Math.random() * 10 - 5),
        isActive: false
      });
    }

    // Embaralhar a ordem do array
    setHearts(newHearts.sort(() => Math.random() - 0.5));
  }, []);

  const triggerHeart = (id: number) => {
    setHearts(prev => {
      const heart = prev.find(h => h.id === id);
      if (heart?.isActive) return prev; // já está animando
      
      return prev.map(h => h.id === id ? { ...h, isActive: true } : h);
    });

    // Resetar para o estado normal (cinza) após 1 segundo
    setTimeout(() => {
      setHearts(prev => prev.map(h => h.id === id ? { ...h, isActive: false } : h));
    }, 1000);
  };

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" style={{ minHeight: '100%' }}>
      {hearts.map(heart => (
        <div
          key={heart.id}
          className={`absolute twitter-heart pointer-events-auto ${heart.isActive ? 'active' : ''}`}
          style={{ left: `${heart.left}%`, top: `${heart.top}%` }}
          onClick={() => triggerHeart(heart.id)}
          onMouseEnter={() => triggerHeart(heart.id)}
        />
      ))}
    </div>
  );
}
