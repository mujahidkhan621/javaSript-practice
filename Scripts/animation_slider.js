
    // animation for slider in display 

    let bobbles = document.querySelectorAll(".bubbles");
    let panels = document.querySelectorAll(".content-panel");
    let currentIndex = 0; //for starting animation from first card
    let toclear = currentIndex;// this will stor the record of previuos index

    function showPanels(index) {
        panels[toclear].classList.remove("active")
        bobbles[toclear].classList.remove("checked")
        panels[index].classList.add("active")
        bobbles[index].classList.add("checked")
        toclear = index;
    }

    // to manually switching data
    bobbles.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            // console.log("is it working ")
            currentIndex = index;
            showPanels(index);
        })
    })

    let time = setInterval(() => {
        showPanels(currentIndex)
        currentIndex++

        if (currentIndex === panels.length) {
            currentIndex = 0;
        }

    }, 5000);

