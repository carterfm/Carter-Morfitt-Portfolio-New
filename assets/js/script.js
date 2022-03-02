const projects = document.querySelectorAll(".project-holder");

for (const project of projects) {
    const textHolder = project.children[project.children.length - 1];

    project.addEventListener("click", (event) => {
        const targetClass = event.target.getAttribute("class");
        if (targetClass) {
            if (targetClass.includes("project-holder") || targetClass === "image-holder" || targetClass === "project-title") {
                if (project.getAttribute("data-state") === "textHidden") {
                    textHolder.setAttribute("style", "display: block");
                    project.setAttribute("data-state", "textRevealed");
                    project.setAttribute("style", "border-style: solid");
                    // project.setAttribute("style", "box-shadow: 10px px 5px red");
                } else {
                    textHolder.setAttribute("style", "display: none");
                    project.setAttribute("data-state", "textHidden");
                    project.setAttribute("style", "border-style: none");
                }
            } 
        }
    });
}