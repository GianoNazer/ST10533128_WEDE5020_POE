console.log("JavaScript is connected!");
document.addEventListener("DOMContentLoaded", function() {
    
    // ==========================================
    // 1. LIVE SEARCH BAR
    // ==========================================
    const searchInput = document.getElementById("productSearch");
    
    if (searchInput) {
        searchInput.addEventListener("input", function() {
            const filter = searchInput.value.toLowerCase();
            
            // Get all H3 tags (product titles)
            const titles = document.querySelectorAll("h3");
            
            titles.forEach(function(title) {
                const text = title.innerText.toLowerCase();
                // Find the image right before the H3
                const img = title.previousElementSibling;
                
                if (text.includes(filter)) {
                    title.style.display = "block";
                    if (img && img.tagName === "IMG") img.style.display = "block";
                } else {
                    title.style.display = "none";
                    if (img && img.tagName === "IMG") img.style.display = "none";
                }
            });
        });
    }

    // ==========================================
    // 2. LIGHTBOX FOR IMAGES
    // ==========================================
    const images = document.querySelectorAll(".product-image");
    
    if (images.length > 0) {
        // Create the lightbox container
        const lightbox = document.createElement("div");
        lightbox.id = "lightbox";
        lightbox.style.display = "none";
        lightbox.style.position = "fixed";
        lightbox.style.top = "0";
        lightbox.style.left = "0";
        lightbox.style.width = "100%";
        lightbox.style.height = "100%";
        lightbox.style.backgroundColor = "rgba(0,0,0,0.9)";
        lightbox.style.zIndex = "1000";
        lightbox.style.justifyContent = "center";
        lightbox.style.alignItems = "center";

        const closeBtn = document.createElement("span");
        closeBtn.innerHTML = "&times;";
        closeBtn.style.position = "absolute";
        closeBtn.style.top = "20px";
        closeBtn.style.right = "40px";
        closeBtn.style.color = "white";
        closeBtn.style.fontSize = "50px";
        closeBtn.style.cursor = "pointer";
        
        const lightboxImg = document.createElement("img");
        lightboxImg.style.maxWidth = "80%";
        lightboxImg.style.maxHeight = "80%";

        lightbox.appendChild(closeBtn);
        lightbox.appendChild(lightboxImg);
        document.body.appendChild(lightbox);

        // Click image to open
        images.forEach(function(img) {
            img.style.cursor = "pointer";
            img.addEventListener("click", function() {
                lightbox.style.display = "flex";
                lightboxImg.src = this.src;
            });
        });

        // Click X to close
        closeBtn.addEventListener("click", function() {
            lightbox.style.display = "none";
        });
    }
});