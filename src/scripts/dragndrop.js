const DragDropManager = Object.create(null, {
    init: {
        value: () => {
            const stages = document.querySelectorAll(".stage")

            stages.forEach(stage => {
                // Gain reference of item being dragged
                stage.ondragstart = e => {
                    e.dataTransfer.setData("text", e.target.classList)
                }
            })


            const targets = document.querySelectorAll(".target")

            targets.forEach(target => {
                // Dragover not supported by default. Turn that off.
                target.ondragover = e => e.preventDefault()

                target.ondrop = e => {
                    // Enabled dropping on targets
                    e.preventDefault()

                    // Determine what's being dropped
                    const data = e.dataTransfer.getData("text")
                    console.log("card is", data)

                    // Append card to target component as child
                    // This should only happen if the target has no children nodes (the cards) or is the the original placement of the cards.
                    if (e.target.classList.contains('target') && (e.target.childNodes.length < 1 || e.target.classList.contains('origin'))) {
                        e.target.appendChild(document.querySelector(`.${data.split(" ")[1]}`))
                    } else if (e.target.parentNode.classList.contains('origin')) {
                        e.target.parentNode.appendChild(document.querySelector(`.${data.split(" ")[1]}`))
                    }
                }
            })
        }
    }
})

DragDropManager.init()