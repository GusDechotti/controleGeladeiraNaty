let drawerOpen = false;

function toggleDrawer() {
    const drawer = document.getElementById("myDrawer");
    const content = document.getElementById("mainContent");
    const btn = document.getElementById("drawer-toggle-btn");

    if (drawerOpen) {
        drawer.style.width = "0";
        content.style.marginLeft = "0";
        btn.innerHTML = "☰";
    } else {
        drawer.style.width = "250px";
        content.style.marginLeft = "250px";
        btn.innerHTML = "&times;";
    }
    drawerOpen = !drawerOpen;
  }

  function updateClock() {
    const now = new Date();
    document.getElementById('clock').textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();