document.addEventListener("DOMContentLoaded", function() {
    var visitorCountElem = document.getElementById('visitorCount');
    var currentCount = localStorage.getItem('visitorCount');
    if (!currentCount) {
        currentCount = 0;
    }
    currentCount++;
    visitorCountElem.textContent = currentCount;
    localStorage.setItem('visitorCount', currentCount);
});