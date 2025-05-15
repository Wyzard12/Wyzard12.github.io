document.addEventListener("DOMContentLoaded", function () {
    const loadingScreen = document.getElementById('loading-screen');
    const quoteContainer = document.getElementById('quote-container');
    const quoteElement = document.getElementById('quote'); // Correct target
    const mainContent = document.querySelector('.intro'); // Assuming '.intro' is the main content
    const body = document.body;

    // List of quotes
    const quotes = [
        "Walking On The Path Of Heaven",
        "Change - Beetle",
        "The Man Who Will Rule Everything",
        "If He's Stronger, Then I Am The Strongest",
        "Now, Let's Count Up Your Sins!",
        "Good To See You Guys",
        "Taking Care All Of You, Is Also A Part Of My Job",
        "The Victory's Formula Has Been Set",
        "Shall We Go For A Little Ride?",
        "Now, It's Showtime!",
        "You - Me. Best Match",
        "This is not Rotterdam, Believe me",
        "Change - Stag Beetle",
        "Make The World Revolve Around You",
        "Change - Dragonfly",
        "Change - Wasp",
        "Spade 10 - Jack - Queen - King - Ace",
        "Spade Heart - Diamond - Club 6 - Spade King",
        "Hyper Clock Up",
        "Hyper Cast Off",
        "You Are The Rabbit And I Am The Tank",
        "We Are The Best",
        "DenLiner - Where Magic Happen",
        "A Jump To The Sky Turns Into A Rider Kick",
        "Spread Your Wings And Prepare For A Force",
        "Fang That Can Chomp Through Concrete",
        "Secret Material - Hidden Material",
        "Explosive Power Of 100 Bombs",
        "Fierce Breath As Cold As Arctic Winds",
        "The Rider Kick Increased The Power By Adding To Brightness",
        "A Rider Kick To The Sky Turns To Take Off Toward A Dream",
        "This Is Not A Drill. It's A Real Thing",
        "Save Th1s Wrld",
        "I'm Just A Kamen Rider Passing Through. Try To Remember That",
        "Because Grandma Said So",
        "A New Memory Core Has Just Unlocked",
        "The Elevation Increases As The Bullet Is Fired",
        "With Mighty Horn-Like Pincers That Flip Others Helpless",
        "He Wields The Very Winds As His Command",
        "Deciding The Fate Of A Battle Like A Valkyrie",
        "Bursting Sparks Fly At Full Force",
        "You Are Cute. Can I Steal Your Heart?",
        "Henshin",
        "As The Arrow Flies, So Does The Spirit",
        "Glad To See You Have Made It This Far",
        "Every Battle Is Won Before It Is Fought",
    ];

     // Function to get a random quote from the list
    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    const quote = getRandomQuote();
    let i = 0;

    function typeWriter() {
        // Scroll to the top immediately when typing starts
        window.scrollTo(0, 0);

        if (i < quote.length) {
            quoteElement.textContent += quote.charAt(i);
            i++;
            setTimeout(typeWriter, 20); // Adjusted delay for natural typing
        } else {
            setTimeout(() => {
                fadeOutLoadingScreen();
            }, 1200); // Wait a moment before fading out the loading screen
        }
    }

    function fadeOutLoadingScreen() {
        loadingScreen.style.transition = "opacity 1s";
        loadingScreen.style.opacity = "0";
        setTimeout(() => {
            loadingScreen.style.display = "none";
            document.body.classList.add("loaded");
            mainContent.style.display = "flex"; // Ensure intro is displayed
            mainContent.classList.add('show'); // Add class to fade in the intro

            // Enable scrolling after loading screen is hidden
            body.style.overflow = "auto";
        }, 1000);
    }

    // Prevent scrolling during loading
    body.style.overflow = "hidden";

    // Start the typing effect after a slight delay
    setTimeout(() => {
        quoteContainer.style.display = "block";
        quoteElement.textContent = ""; // Clear any existing text
        typeWriter();
    }, 200);  // Slight delay before typing starts
    
    // Burger Menu Elements
    const navToggle = document.getElementById("nav-toggle"); // Burger menu toggle button
    const navList = document.getElementById("nav-list");     // Navigation links container

    // Language Menu Elements
    const langToggle = document.getElementById("lang-toggle"); // Language toggle button (Union Jack emoji)
    const languageList = document.getElementById("language-list"); // Language options container

    const toggleNavMenu = (event) => {
        event.stopPropagation(); // Prevent the click event from bubbling up to the document
    
        // If language menu is open, close it
        if (languageList.classList.contains("show")) {
            languageList.classList.remove("show");
        }
    
        // Toggle navigation menu
        navList.classList.toggle("show");       // Toggle 'show' class to display/hide navigation links
        navToggle.classList.toggle("active");   // Toggle 'active' class for burger icon animation
    };
    

    const toggleLanguageMenu = (event) => {
        event.stopPropagation(); // Prevent the click event from bubbling up to the document
    
        // If navigation menu is open, close it
        if (navList.classList.contains("show")) {
            navList.classList.remove("show");
            navToggle.classList.remove("active");
        }
    
        // Toggle language menu
        languageList.classList.toggle("show");  // Toggle 'show' class to display/hide language options
    };
    

    // Event listener for the burger menu toggle button
    navToggle.addEventListener("click", toggleNavMenu);

    // Event listener for the language menu toggle button
    langToggle.addEventListener("click", toggleLanguageMenu);

    const closeMenus = (event) => {
        // Check if the click is outside the navigation menu
        if (!navList.contains(event.target) && !navToggle.contains(event.target)) {
            navList.classList.remove("show");     // Hide navigation links
            navToggle.classList.remove("active"); // Reset burger icon
        }

        // Check if the click is outside the language menu
        if (!languageList.contains(event.target) && !langToggle.contains(event.target)) {
            languageList.classList.remove("show"); // Hide language options
        }
    };

    // Event listener for clicks anywhere in the document
    document.addEventListener("click", closeMenus);

    const handleEscape = (event) => {
        if (event.key === "Escape") {
            // Close navigation menu if it's open
            if (navList.classList.contains("show")) {
                navList.classList.remove("show");
                navToggle.classList.remove("active");
            }

            // Close language menu if it's open
            if (languageList.classList.contains("show")) {
                languageList.classList.remove("show");
            }
        }
    };

    // Event listener for keydown events to handle 'Escape' key
    document.addEventListener("keydown", handleEscape);


    // Modal Elements
    const modal = document.getElementById("projectModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalText = document.getElementById("modalText");
    const textBoxTitle = document.getElementById("textBoxTitle");
    const modalImages = document.getElementById("modalImages");
    const additionalBoxTitle = document.getElementById("additionalBoxTitle");
    const additionalModalText = document.getElementById("additionalModalText");
    const closeModalButton = modal.querySelector(".close");

    // Function to open the modal
    function openModal(projectData) {
        // Set the modal content from projectData
        modalTitle.innerHTML = projectData.title;
        textBoxTitle.innerHTML = projectData.textboxtitle || "General Information";
        modalText.innerHTML = projectData.description || "More information about the project goes here.";
        additionalBoxTitle.innerHTML = projectData.additionalboxtitle || "";
        additionalModalText.innerHTML = projectData.additionaltext || "";

        // Set the banner image
        const bannerImg = modal.querySelector(".banner-img");
        bannerImg.src = projectData.banner || "";

        // Clear previous media content
        modalImages.innerHTML = "";

        // Handle videos
        if (projectData.videos && projectData.videos.length > 0) {
            projectData.videos.forEach(src => {
                if (src.trim() !== "") {
                    const videoElement = document.createElement("video");
                    videoElement.src = src.trim();
                    videoElement.controls = true;
                    videoElement.classList.add("modal-image");
                    modalImages.appendChild(videoElement);
                }
            });
        }

        // Handle images
        if (projectData.images && projectData.images.length > 0) {
            projectData.images.forEach(src => {
                if (src.trim() !== "") {
                    const imgElement = document.createElement("img");
                    imgElement.src = src.trim();
                    imgElement.classList.add("modal-image");
                    imgElement.onclick = () => zoomImage(src.trim());
                    modalImages.appendChild(imgElement);
                }
            });
        }
       
        // Show the modal with animation
        modal.style.display = "flex"; // Ensure display is flex
        setTimeout(() => {
            modal.classList.add("show"); // Add 'show' class to set opacity:1 and slide in
        }, 10); // Slight delay for transition

        // Prevent background scrolling when modal is open
        body.style.overflow = "hidden";
    }

    // Function to close the modal with animation
    function closeModalFunction() {
        modal.classList.remove("show"); // Remove 'show' class to set opacity:0 and slide out
        // After transition ends, hide the modal
        setTimeout(() => {
            modal.style.display = "none";
            // Re-enable background scrolling
            body.style.overflow = "auto";
        }, 800); // Match the duration of the CSS transition
    }

    // Close the modal when the close button is clicked
    closeModalButton.addEventListener("click", closeModalFunction);

    // Close the modal when clicking outside of modal content
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            closeModalFunction();
        }
    });

    // Close the modal when pressing the Escape key
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape" && modal.classList.contains("show")) {
            closeModalFunction();
        }
    });

    // Function to zoom the image
    function zoomImage(src) {
        const zoomModal = document.createElement("div");
        zoomModal.classList.add("zoom-modal");
        const zoomImg = document.createElement("img");
        zoomImg.src = src;
        zoomModal.appendChild(zoomImg);
        document.body.appendChild(zoomModal);
        
        // Prevent background scrolling when zoom modal is open
        body.style.overflow = "hidden";

        // Close zoom image on click
        zoomModal.addEventListener("click", () => {
            document.body.removeChild(zoomModal);
            // Re-enable background scrolling
            body.style.overflow = "auto";
        });
    }

    // Add event listeners to grid items
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(item => {
        item.addEventListener("click", function () {
            // Get data attributes
            const projectData = {
                title: item.getAttribute("data-title"),
                description: item.getAttribute("data-description"),
                banner: item.getAttribute("data-banner"),
                videos: item.getAttribute("data-videos") ? item.getAttribute("data-videos").split(',') : [],
                images: item.getAttribute("data-images") ? item.getAttribute("data-images").split(',') : [],
                additionaltext: item.getAttribute("data-additional-text"),
                additional_images: item.getAttribute("additional-data-images") ? item.getAttribute("data-images").split(',') : [],
                textboxtitle: item.getAttribute("data-textboxtitle"),
                additionalboxtitle: item.getAttribute("data-additionalboxtitle")
            };

            // Open the modal with the project data
            openModal(projectData);
        });
    });
});
