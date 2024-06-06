const containers = document.querySelectorAll(".read-more-container");
containers.forEach(container => {
    let isExpanded = false; // Variable to track if text is expanded
    container.addEventListener("click", event => {
        const current = event.target;
        const isReadMoreBtn = current.classList.contains("read-more-btn");
        if (!isReadMoreBtn) return;

        const currentText = container.querySelector(".read-more-text");
        isExpanded = !isExpanded; // Toggle the state

        if (isExpanded) {
            currentText.classList.add("read-more-text--show");
            current.textContent = "Read Less...";
            container.querySelector("p").style.webkitLineClamp = "unset"; // Remove line clamp
        } else {
            currentText.classList.remove("read-more-text--show");
            current.textContent = "Read More...";
            container.querySelector("p").style.webkitLineClamp = "4"; // Reset line clamp
        }
    });
});