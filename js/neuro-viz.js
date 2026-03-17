/* ═══════════════════════════════════════════════════════════════════════════
   NEUROMORPHIC VISUAL SYSTEM — Phase 1
   Spike-driven, deterministic animations for SFSVC/NEPA
   ═══════════════════════════════════════════════════════════════════════════ */

/**
 * 1. HOMEPAGE HERO SPIKE ANIMATION
 * Sparse, event-driven particle system that mimics neuromorphic spike encoding
 */
function initHeroSpikeAnimation() {
    const canvas = document.getElementById('hero-spike-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let W, H;

    // Spike neurons - sparse grid
    const neurons = [];
    const NEURON_GRID_X = 12;
    const NEURON_GRID_Y = 8;
    const spikes = [];
    const connections = [];

    function resize() {
        W = canvas.width = canvas.parentElement.offsetWidth;
        H = canvas.height = canvas.parentElement.offsetHeight || 400;
        initNeurons();
    }

    function initNeurons() {
        neurons.length = 0;
        connections.length = 0;

        const cellW = W / (NEURON_GRID_X + 1);
        const cellH = H / (NEURON_GRID_Y + 1);

        // Create sparse neuron grid
        for (let y = 1; y <= NEURON_GRID_Y; y++) {
            for (let x = 1; x <= NEURON_GRID_X; x++) {
                // Sparse - only 60% density
                if (Math.random() > 0.6) continue;

                neurons.push({
                    x: x * cellW + (Math.random() - 0.5) * cellW * 0.3,
                    y: y * cellH + (Math.random() - 0.5) * cellH * 0.3,
                    potential: Math.random(),
                    threshold: 0.85 + Math.random() * 0.15,
                    refractory: 0,
                    lastSpike: 0,
                    baseRate: 0.001 + Math.random() * 0.003
                });
            }
        }

        // Create lateral connections (sparse)
        for (let i = 0; i < neurons.length; i++) {
            for (let j = i + 1; j < neurons.length; j++) {
                const dx = neurons[i].x - neurons[j].x;
                const dy = neurons[i].y - neurons[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Only connect nearby neurons
                if (dist < Math.min(W, H) * 0.25 && Math.random() > 0.7) {
                    connections.push({
                        from: i,
                        to: j,
                        weight: 0.3 + Math.random() * 0.4,
                        active: 0
                    });
                }
            }
        }
    }

    let frame = 0;
    function animate() {
        frame++;

        // Dark background with slight fade for spike trails
        ctx.fillStyle = 'rgba(6, 6, 10, 0.15)';
        ctx.fillRect(0, 0, W, H);

        // Update neurons - deterministic spike generation
        neurons.forEach((n, idx) => {
            // Refractory period
            if (n.refractory > 0) {
                n.refractory--;
                n.potential *= 0.9;
                return;
            }

            // Accumulate potential (deterministic baseline)
            n.potential += n.baseRate;

            // Poisson-like spike generation (but deterministic)
            const spikeProb = Math.sin(frame * 0.01 + idx * 0.5) * 0.5 + 0.5;
            if (spikeProb > 0.98) {
                n.potential += 0.1;
            }

            // Check threshold
            if (n.potential >= n.threshold) {
                // SPIKE!
                spikes.push({
                    x: n.x,
                    y: n.y,
                    age: 0,
                    maxAge: 20 + Math.random() * 15,
                    size: 2 + Math.random() * 2,
                    neuron: idx
                });

                n.potential = 0;
                n.refractory = 10 + Math.floor(Math.random() * 10);
                n.lastSpike = frame;

                // Activate outgoing connections
                connections.forEach(conn => {
                    if (conn.from === idx) {
                        conn.active = 15;
                        // Propagate to target neuron
                        if (neurons[conn.to].refractory === 0) {
                            neurons[conn.to].potential += conn.weight * 0.2;
                        }
                    }
                });
            }

            // Leak
            n.potential *= 0.995;
        });

        // Draw active connections (spike propagation)
        ctx.strokeStyle = 'rgba(0, 200, 240, 0.3)';
        ctx.lineWidth = 1;
        connections.forEach(conn => {
            if (conn.active > 0) {
                const alpha = conn.active / 15;
                ctx.strokeStyle = `rgba(0, 200, 240, ${alpha * 0.4})`;
                ctx.beginPath();
                ctx.moveTo(neurons[conn.from].x, neurons[conn.from].y);
                ctx.lineTo(neurons[conn.to].x, neurons[conn.to].y);
                ctx.stroke();

                conn.active--;
            }
        });

        // Draw neurons
        neurons.forEach((n, idx) => {
            // Neuron state visualization
            const timeSinceSpike = frame - n.lastSpike;
            const brightness = Math.max(0, 1 - timeSinceSpike / 30);

            // Core
            ctx.fillStyle = n.refractory > 0
                ? `rgba(108, 47, 232, ${0.3 + brightness * 0.7})`  // violet during refractory
                : `rgba(90, 90, 120, ${0.2 + n.potential * 0.3})`;

            ctx.beginPath();
            ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
            ctx.fill();

            // Glow when near threshold
            if (n.potential > n.threshold * 0.7) {
                const glowSize = 2 + (n.potential / n.threshold) * 4;
                ctx.fillStyle = `rgba(0, 200, 240, ${(n.potential / n.threshold) * 0.15})`;
                ctx.beginPath();
                ctx.arc(n.x, n.y, glowSize, 0, Math.PI * 2);
                ctx.fill();
            }
        });

        // Draw and update spikes
        spikes.forEach((s, idx) => {
            s.age++;
            const life = 1 - (s.age / s.maxAge);
            const alpha = life * 0.9;
            const size = s.size * (0.5 + life * 0.5);

            // Cyan spike with glow
            ctx.shadowColor = 'rgba(0, 200, 240, 0.8)';
            ctx.shadowBlur = 8 * life;
            ctx.fillStyle = `rgba(0, 200, 240, ${alpha})`;
            ctx.beginPath();
            ctx.arc(s.x, s.y, size, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;

            // Yellow core for emphasis
            if (life > 0.7) {
                ctx.fillStyle = `rgba(255, 255, 100, ${(life - 0.7) * 3})`;
                ctx.beginPath();
                ctx.arc(s.x, s.y, size * 0.5, 0, Math.PI * 2);
                ctx.fill();
            }
        });

        // Remove old spikes
        for (let i = spikes.length - 1; i >= 0; i--) {
            if (spikes[i].age >= spikes[i].maxAge) {
                spikes.splice(i, 1);
            }
        }

        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
    resize();
    animate();
}

/**
 * 2. TECHNOLOGY PAGE ARCHITECTURE VISUALIZATION
 * Shows the 4-layer NEPA architecture with data flow
 */
function initArchitectureViz() {
    const canvas = document.getElementById('arch-viz-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let W, H;

    const layers = [
        { name: 'Spike Encoding', y: 0.15, color: '#00C8F0', nodes: 8 },
        { name: 'Parallel Lanes', y: 0.40, color: '#6C2FE8', nodes: 6 },
        { name: 'Fusion', y: 0.65, color: '#00C8F0', nodes: 4 },
        { name: 'Output', y: 0.85, color: '#10b981', nodes: 3 }
    ];

    const dataPackets = [];
    const layerNodes = [];

    function resize() {
        W = canvas.width = canvas.parentElement.offsetWidth;
        H = canvas.height = canvas.parentElement.offsetHeight || 500;
        initNodes();
    }

    function initNodes() {
        layerNodes.length = 0;

        layers.forEach((layer, layerIdx) => {
            const nodes = [];
            const spacing = W / (layer.nodes + 1);

            for (let i = 1; i <= layer.nodes; i++) {
                nodes.push({
                    x: i * spacing,
                    y: layer.y * H,
                    active: 0,
                    processing: 0
                });
            }

            layerNodes.push(nodes);
        });
    }

    let frame = 0;
    function animate() {
        frame++;

        ctx.fillStyle = 'rgba(12, 12, 20, 1)';
        ctx.fillRect(0, 0, W, H);

        // Spawn new data packets periodically
        if (frame % 30 === 0 && Math.random() > 0.3) {
            const sourceNode = Math.floor(Math.random() * layerNodes[0].length);
            dataPackets.push({
                layer: 0,
                node: sourceNode,
                progress: 0,
                x: layerNodes[0][sourceNode].x,
                y: layerNodes[0][sourceNode].y,
                targetNode: -1,
                speed: 0.02 + Math.random() * 0.02
            });
        }

        // Update data packets
        dataPackets.forEach(p => {
            if (p.layer >= layers.length - 1) {
                p.progress += p.speed * 2; // Speed up at output
                return;
            }

            // Select target node in next layer if needed
            if (p.targetNode === -1) {
                p.targetNode = Math.floor(Math.random() * layerNodes[p.layer + 1].length);
            }

            const current = layerNodes[p.layer][p.node];
            const target = layerNodes[p.layer + 1][p.targetNode];

            p.progress += p.speed;

            if (p.progress >= 1) {
                // Move to next layer
                p.layer++;
                p.node = p.targetNode;
                p.progress = 0;
                p.targetNode = -1;

                // Activate target node
                if (p.layer < layerNodes.length) {
                    layerNodes[p.layer][p.node].active = 30;
                    layerNodes[p.layer][p.node].processing = 15;
                }
            } else {
                // Interpolate position
                p.x = current.x + (target.x - current.x) * p.progress;
                p.y = current.y + (target.y - current.y) * p.progress;
            }
        });

        // Remove completed packets
        for (let i = dataPackets.length - 1; i >= 0; i--) {
            if (dataPackets[i].layer >= layers.length && dataPackets[i].progress > 1) {
                dataPackets.splice(i, 1);
            }
        }

        // Draw layer labels and nodes
        ctx.font = '600 13px "Space Grotesk", sans-serif';

        layers.forEach((layer, layerIdx) => {
            const nodes = layerNodes[layerIdx];

            // Layer label
            ctx.fillStyle = layer.color;
            ctx.textAlign = 'left';
            ctx.fillText(layer.name, 20, layer.y * H - 15);

            // Layer line
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(0, layer.y * H);
            ctx.lineTo(W, layer.y * H);
            ctx.stroke();

            // Nodes
            nodes.forEach((node, nodeIdx) => {
                // Connection to next layer
                if (layerIdx < layers.length - 1) {
                    layerNodes[layerIdx + 1].forEach(nextNode => {
                        ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(nextNode.x, nextNode.y);
                        ctx.stroke();
                    });
                }

                // Node circle
                const baseSize = 4;
                const activeGlow = node.active > 0 ? node.active / 30 : 0;

                if (activeGlow > 0) {
                    ctx.fillStyle = `rgba(0, 200, 240, ${activeGlow * 0.2})`;
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, baseSize + activeGlow * 8, 0, Math.PI * 2);
                    ctx.fill();
                }

                ctx.fillStyle = node.processing > 0
                    ? `rgba(108, 47, 232, ${0.6 + node.processing / 15 * 0.4})`
                    : 'rgba(90, 90, 120, 0.4)';
                ctx.beginPath();
                ctx.arc(node.x, node.y, baseSize, 0, Math.PI * 2);
                ctx.fill();

                node.active = Math.max(0, node.active - 1);
                node.processing = Math.max(0, node.processing - 1);
            });
        });

        // Draw data packets
        dataPackets.forEach(p => {
            const size = 3;

            // Glow
            ctx.shadowColor = 'rgba(0, 200, 240, 0.8)';
            ctx.shadowBlur = 6;
            ctx.fillStyle = 'rgba(0, 200, 240, 0.9)';
            ctx.beginPath();
            ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;

            // Core
            ctx.fillStyle = 'rgba(255, 255, 200, 0.9)';
            ctx.beginPath();
            ctx.arc(p.x, p.y, size * 0.4, 0, Math.PI * 2);
            ctx.fill();
        });

        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
    resize();
    animate();
}

/**
 * 3. BENCHMARK PAGE LATENCY VISUALIZATION
 * Real-time latency distribution with P50/P95/P99 markers
 */
function initLatencyViz() {
    const canvas = document.getElementById('latency-viz-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let W, H;

    // Latency data buffer (rolling window)
    const latencyBuffer = [];
    const BUFFER_SIZE = 300;
    const histogram = new Array(50).fill(0);

    // Target latencies (from benchmark data)
    const P50 = 1.52;
    const P95 = 7.87;
    const P99 = 13.04;
    const MAX_LATENCY = 20;

    function resize() {
        W = canvas.width = canvas.parentElement.offsetWidth;
        H = canvas.height = canvas.parentElement.offsetHeight || 300;
    }

    function generateLatency() {
        // Simulate realistic latency distribution
        // Most values near P50, some outliers near P95/P99
        const rand = Math.random();
        if (rand < 0.5) {
            // Around P50
            return P50 + (Math.random() - 0.5) * 2;
        } else if (rand < 0.95) {
            // Between P50 and P95
            return P50 + Math.random() * (P95 - P50);
        } else if (rand < 0.99) {
            // Between P95 and P99
            return P95 + Math.random() * (P99 - P95);
        } else {
            // Outliers beyond P99
            return P99 + Math.random() * (MAX_LATENCY - P99);
        }
    }

    let frame = 0;
    function animate() {
        frame++;

        // Add new latency sample every few frames
        if (frame % 3 === 0) {
            const latency = Math.max(0, generateLatency());
            latencyBuffer.push(latency);

            if (latencyBuffer.length > BUFFER_SIZE) {
                latencyBuffer.shift();
            }

            // Update histogram
            const bin = Math.floor((latency / MAX_LATENCY) * histogram.length);
            if (bin < histogram.length) {
                histogram[bin]++;
            }
        }

        // Decay histogram
        for (let i = 0; i < histogram.length; i++) {
            histogram[i] *= 0.98;
        }

        // Clear
        ctx.fillStyle = '#0C0C14';
        ctx.fillRect(0, 0, W, H);

        // Draw histogram
        const barWidth = W / histogram.length;
        const maxCount = Math.max(...histogram, 1);

        histogram.forEach((count, i) => {
            const barHeight = (count / maxCount) * H * 0.7;
            const x = i * barWidth;
            const y = H - barHeight;

            // Gradient fill
            const gradient = ctx.createLinearGradient(x, y, x, H);
            gradient.addColorStop(0, 'rgba(0, 200, 240, 0.6)');
            gradient.addColorStop(1, 'rgba(0, 200, 240, 0.1)');

            ctx.fillStyle = gradient;
            ctx.fillRect(x, y, barWidth - 1, barHeight);
        });

        // Draw P50, P95, P99 markers
        const markers = [
            { value: P50, label: 'P50', color: '#10b981' },
            { value: P95, label: 'P95', color: '#f59e0b' },
            { value: P99, label: 'P99', color: '#ef4444' }
        ];

        markers.forEach(m => {
            const x = (m.value / MAX_LATENCY) * W;

            // Vertical line
            ctx.strokeStyle = m.color;
            ctx.lineWidth = 2;
            ctx.setLineDash([4, 4]);
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, H);
            ctx.stroke();
            ctx.setLineDash([]);

            // Label
            ctx.fillStyle = m.color;
            ctx.font = '600 11px "JetBrains Mono", monospace';
            ctx.textAlign = 'center';
            ctx.fillText(`${m.label}: ${m.value}ms`, x, 15);
        });

        // Draw latest values stream (sparkline at top)
        const sparklineY = 30;
        const sparklineH = 40;
        const recentCount = Math.min(100, latencyBuffer.length);
        const sparkStep = W / recentCount;

        ctx.strokeStyle = 'rgba(0, 200, 240, 0.5)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();

        for (let i = 0; i < recentCount; i++) {
            const idx = latencyBuffer.length - recentCount + i;
            const val = latencyBuffer[idx];
            const x = i * sparkStep;
            const y = sparklineY + sparklineH - (val / MAX_LATENCY) * sparklineH;

            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.stroke();

        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
    resize();
    animate();
}

/**
 * 4. FAÇADE SOLUTION VISUAL TOUCH
 * Crack detection sweep animation
 */
function initFacadeSweep() {
    const canvas = document.getElementById('facade-viz-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let W, H;

    const cracks = [];
    let sweepY = 0;
    const CRACK_COUNT = 8;

    function resize() {
        W = canvas.width = canvas.parentElement.offsetWidth;
        H = canvas.height = canvas.parentElement.offsetHeight || 250;
        initCracks();
    }

    function initCracks() {
        cracks.length = 0;

        for (let i = 0; i < CRACK_COUNT; i++) {
            cracks.push({
                x: 50 + Math.random() * (W - 100),
                y: 40 + Math.random() * (H - 80),
                w: 30 + Math.random() * 60,
                h: 15 + Math.random() * 30,
                detected: false,
                severity: ['Low', 'Medium', 'High'][Math.floor(Math.random() * 3)],
                angle: (Math.random() - 0.5) * 0.3
            });
        }
    }

    let frame = 0;
    function animate() {
        frame++;

        // Background
        ctx.fillStyle = '#0e0a18';
        ctx.fillRect(0, 0, W, H);

        // Facade texture
        ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
        for (let i = 0; i < 100; i++) {
            const x = Math.random() * W;
            const y = Math.random() * H;
            ctx.fillRect(x, y, 1, 1);
        }

        // Scan sweep
        sweepY = (frame * 2) % (H + 50);

        // Sweep beam
        const gradient = ctx.createLinearGradient(0, sweepY - 20, 0, sweepY + 20);
        gradient.addColorStop(0, 'rgba(236, 72, 153, 0)');
        gradient.addColorStop(0.5, 'rgba(236, 72, 153, 0.3)');
        gradient.addColorStop(1, 'rgba(236, 72, 153, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, sweepY - 20, W, 40);

        // Draw cracks
        cracks.forEach(crack => {
            // Check if sweep has passed
            if (sweepY > crack.y && !crack.detected) {
                crack.detected = true;
            }

            // Draw crack
            ctx.save();
            ctx.translate(crack.x + crack.w / 2, crack.y + crack.h / 2);
            ctx.rotate(crack.angle);

            if (crack.detected) {
                // Detection box
                const color = crack.severity === 'High' ? '#ef4444' :
                             crack.severity === 'Medium' ? '#f59e0b' : '#10b981';

                ctx.strokeStyle = color;
                ctx.lineWidth = 2;
                ctx.shadowColor = color;
                ctx.shadowBlur = 8;
                ctx.strokeRect(-crack.w / 2, -crack.h / 2, crack.w, crack.h);
                ctx.shadowBlur = 0;

                // Label
                ctx.fillStyle = color;
                ctx.font = '600 9px "Inter", sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText(crack.severity, 0, -crack.h / 2 - 6);
            } else {
                // Undetected - subtle outline
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
                ctx.lineWidth = 1;
                ctx.strokeRect(-crack.w / 2, -crack.h / 2, crack.w, crack.h);
            }

            ctx.restore();
        });

        // Reset detection when sweep completes
        if (sweepY > H + 40) {
            cracks.forEach(c => c.detected = false);
        }

        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
    resize();
    animate();
}

// Initialize all visualizations when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNeuromorphicViz);
} else {
    initNeuromorphicViz();
}

function initNeuromorphicViz() {
    initHeroSpikeAnimation();
    initArchitectureViz();
    initLatencyViz();
    initFacadeSweep();
}
