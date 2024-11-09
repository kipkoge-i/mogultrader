document.addEventListener('DOMContentLoaded', () => {
    // Modal logic
    const modal = document.getElementById('login-modal');
    const loginButton = document.getElementById('login-button');
    const closeButton = document.getElementsByClassName('close')[0];

    loginButton.onclick = function() {
        modal.style.display = "block";
    }

    closeButton.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Time display logic
    function updateTime() {
        const now = new Date();
        const kenyanTime = new Date(now.toLocaleString("en-US", { timeZone: "Africa/Nairobi" }));
        const timeString = kenyanTime.toLocaleTimeString();
        document.getElementById('currentTime').textContent = timeString;
    }

    setInterval(updateTime, 1000); // Update time every second
    updateTime(); // Initial call to display the time immediately on load
});
