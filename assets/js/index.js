const modeCheckbox = document.querySelector ("#checkbox");

    modeCheckbox.addEventListener("change", (e) => {
        e.target.checked ? console.log("on") : console.log("off");
        const root = document.querySelector(":root");
            root.classList.toggle("light");
    });