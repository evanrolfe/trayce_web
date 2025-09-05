document.addEventListener('DOMContentLoaded', function() {
    const data = [
        { name: 'Trayce', time: 1.2 },
        { name: 'Bruno', time: 3.5 },
        { name: 'Postman', time: 8.0 }
    ];
    
    createBarChart('startupChart', data, {
        valueKey: 'time',
        labelKey: 'name',
        unit: 's',
        maxValue: 10
    });
});
