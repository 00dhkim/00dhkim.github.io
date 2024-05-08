document.addEventListener('DOMContentLoaded', function() {
    const startDate = new Date('2023-06-01');
    const endDate = new Date('2026-05-31');
    const today = new Date();

    const totalServiceDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
    const daysServed = (today - startDate) / (1000 * 60 * 60 * 24);
    const percentComplete = Math.min((daysServed / totalServiceDays * 100), 100).toFixed(2);

    updateProgressBar(percentComplete);
    updateCircleProgress(percentComplete);
    document.getElementById('percentageDisplay').innerText = `군 복무 진행률: ${percentComplete}%`;
});

function updateProgressBar(percent) {
    document.getElementById('progressBar').style.width = percent + '%';
}

function updateCircleProgress(percent) {
    const svg = document.getElementById('circleProgress');
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    const radius = 90;
    const circumference = 2 * Math.PI * radius;

    circle.setAttribute("cx", "100");
    circle.setAttribute("cy", "100");
    circle.setAttribute("r", radius);
    circle.setAttribute("stroke", "deepskyblue");
    circle.setAttribute("stroke-dasharray", `${circumference}`);
    circle.setAttribute("stroke-dashoffset", `${circumference - percent / 100 * circumference}`);
    svg.appendChild(circle);
}
