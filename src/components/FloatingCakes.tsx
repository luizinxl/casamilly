import { useState, useEffect } from 'react';

export function FloatingCakes() {
  const [cakes, setCakes] = useState<Array<{ id: number; left: number; top: number; delay: number }>>([]);

  useEffect(() => {
    const newCakes = [];
    let idCounter = 0;

    // Distributing cakes randomly but keeping a balanced spread
    // Left side
    for (let i = 0; i < 8; i++) {
      newCakes.push({
        id: idCounter++,
        left: 2 + Math.random() * 25, 
        top: 5 + (i * 90) / 8 + (Math.random() * 10 - 5),
        delay: Math.random() * 3
      });
    }

    // Center/Right spread
    for (let i = 0; i < 12; i++) {
      newCakes.push({
        id: idCounter++,
        left: 60 + Math.random() * 35, 
        top: 5 + (i * 90) / 12 + (Math.random() * 10 - 5),
        delay: Math.random() * 3
      });
    }

    setCakes(newCakes.sort(() => Math.random() - 0.5));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30 text-berry-light" style={{ minHeight: '100%' }}>
      {cakes.map(cake => (
        <div
          key={cake.id}
          className="absolute pointer-events-none"
          style={{ 
            left: `${cake.left}%`, 
            top: `${cake.top}%`,
          }}
        >
          <svg 
            width="48" 
            height="48" 
            viewBox="0 0 48 48" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="transform scale-75 md:scale-100"
          >
            {/* Plate */}
            <path d="M10 38h28" />
            <path d="M12 38l2 2h20l2-2" />
            
            {/* Bottom Tier */}
            <path d="M14 38V26c0-1 1-1 2-1h16c1 0 2 0 2 1v12" />
            
            {/* Top Tier */}
            <path d="M18 25V17c0-1 1-1 2-1h8c1 0 2 0 2 1v8" />

            {/* Frosting / Wavy Icing Bottom */}
            <path d="M14 30c2.5 2.5 4-1 6.5 0 2.5 1 4-1 6.5 0 2.5 1 4-1.5 6.5 0" />


          </svg>
        </div>
      ))}
    </div>
  );
}
