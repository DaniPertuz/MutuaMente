const line = document.querySelector(".timeline-innerline");

let i = 0;

const timeline_events = document.querySelectorAll(".timeline ul li");

function showTime(e) {
    e.setAttribute("done", "true");
    e.querySelector("span.timeline-point").style.background = "#6c5cdd";
    // e.querySelector(".date").style.opacity = "100%";
    e.querySelector("p").style.opacity = "100%";
    e.querySelector("p").style.transform = "translateY(-10rem)";
}

function hideTime(e) {
    e.removeAttribute("done");
    e.querySelector("span.timeline-point").style.background = "rgb(228, 228, 228)";
    // e.querySelector(".date").style.opacity = "0%";
    e.querySelector("p").style.opacity = "0%";
    e.querySelector("p").style.transform = "translateY(-10rem)";
}


function timelineProgress(value) {
    let progress = `${(value / timeline_events.length) * 100}%`;
    if (window.matchMedia("(min-width: 728px)").matches) {
        line.style.width = progress;
        line.style.height = "0.5rem";
    } else {
        line.style.height = progress;
        line.style.width = "0.5rem";
    }
}

timeline_events.forEach((li, index) => {
    li.addEventListener("click", () => {
        if (li.getAttribute("done")) {
            timelineProgress(index);

            // hide all timeline events from last upto the point clicked
            timeline_events.forEach((ev, idx) => {
                if (idx >= index) {
                    hideTime(ev);
                }
            });
        } else {
            timelineProgress(index + 1);
            // show all timeline events from first upto the point clicked
            timeline_events.forEach((ev, idx) => {
                if (idx <= index) {
                    showTime(ev);
                }
            });
        }
    });
});