// Common chart utility functions
function createBarChart(canvasId, data, options = {}) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Default options
    const defaultOptions = {
        chartWidth: 250,
        chartHeight: 150,
        margin: { top: 20, right: 20, bottom: 40, left: 80 },
        barHeight: 30,
        barSpacing: 10,
        maxValue: 10,
        valueKey: 'value',
        labelKey: 'name',
        unit: '',
        colors: ['#6CB4AD', '#FB8C00', '#4DADEE']
    };
    
    // Merge options
    const config = { ...defaultOptions, ...options };
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Set up font to match page styling
    ctx.font = '14px Arial';
    ctx.fillStyle = '#D4D4D4';
    
    // Draw Y-axis labels and bars
    data.forEach((item, index) => {
        const y = config.margin.top + index * (config.barHeight + config.barSpacing);
        
        // Draw Y-axis label
        ctx.font = '16px Arial';
        ctx.fillStyle = '#D4D4D4';
        ctx.fillText(item[config.labelKey], 10, y + config.barHeight / 2 + 4);
        
        // Draw bar
        const barWidth = (item[config.valueKey] / config.maxValue) * config.chartWidth;
        ctx.fillStyle = config.colors[index % config.colors.length];
        ctx.fillRect(config.margin.left, y, barWidth, config.barHeight);
        
        // Draw value on bar
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 14px Arial';
        ctx.fillText(item[config.valueKey] + config.unit, config.margin.left + barWidth + 5, y + config.barHeight / 2 + 4);
    });
    
    // Draw X-axis
    ctx.strokeStyle = '#D4D4D4';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(config.margin.left, config.margin.top + data.length * (config.barHeight + config.barSpacing));
    ctx.lineTo(config.margin.left + config.chartWidth, config.margin.top + data.length * (config.barHeight + config.barSpacing));
    ctx.stroke();
    
    // Draw X-axis labels
    ctx.font = '14px Arial';
    ctx.fillStyle = '#D4D4D4';
    const step = config.maxValue / 5; // 5 labels
    for (let i = 0; i <= config.maxValue; i += step) {
        const x = config.margin.left + (i / config.maxValue) * config.chartWidth;
        ctx.fillText(i.toString(), x - 10, config.margin.top + data.length * (config.barHeight + config.barSpacing) + 15);
    }
}
