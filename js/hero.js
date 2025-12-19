document.addEventListener('DOMContentLoaded', function() {
            const mathSymbols = document.getElementById('mathSymbols');
            const symbols = ['∑', '∫', 'π', '∞', '√', '±', '≈', '≠', '≤', '≥', 'α', 'β', 'γ', 'δ', 'θ', 'λ', 'μ', 'σ', 'φ', 'ω', 'Δ', '∇', '∂'];
            
            // Create 15 floating symbols
            for (let i = 0; i < 15; i++) {
                const symbol = document.createElement('div');
                symbol.className = 'floating-symbol';
                symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
                
                // Random position
                const left = Math.random() * 100;
                const top = Math.random() * 100;
                
                symbol.style.left = `${left}%`;
                symbol.style.top = `${top}%`;
                
                // Random animation duration and delay
                const duration = 15 + Math.random() * 20;
                const delay = Math.random() * 5;
                
                symbol.style.animationDuration = `${duration}s`;
                symbol.style.animationDelay = `${delay}s`;
                
                // Random color
                const colors = ['#950059', '#6a0080', '#333'];
                symbol.style.color = colors[Math.floor(Math.random() * colors.length)];
                
                mathSymbols.appendChild(symbol);
            }

        });