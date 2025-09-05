document.addEventListener('DOMContentLoaded', function() {
    const data = [
        { name: 'Trayce', memory: 45 },
        { name: 'Bruno', memory: 120 },
        { name: 'Postman', memory: 350 }
    ];
    
    createBarChart('memoryChart', data, {
        valueKey: 'memory',
        labelKey: 'name',
        unit: 'MB',
        maxValue: 400
    });
});
