document.addEventListener('DOMContentLoaded', function() {
    const data = [
        { name: 'Trayce', space: 25 },
        { name: 'Bruno', space: 150 },
        { name: 'Postman', space: 500 }
    ];
    
    createBarChart('spaceChart', data, {
        valueKey: 'space',
        labelKey: 'name',
        unit: 'MB',
        maxValue: 600
    });
});
