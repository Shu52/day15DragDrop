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
            console.log(data)
            console.log("target",target)
  
            // Append card to target component as child
            
            // TODO: This should only happen if the target has no children nodes
            if(target.childNodes.length === 0){
              e.preventDefault();
              e.target.appendChild(document.querySelector(`.${data.split(" ")[1]}`))
            }
            else if(target === document.querySelector("article")){
              e.preventDefault();
              e.target.appendChild(document.querySelector(`.${data.split(" ")[1]}`))
              console.log("back to orgin")
            }
            else{
              console.log("denied")
            }
              
              
            
            // TODO: This should not happen if the target is another stage card
            }
          }
        )
      }
    }
  })
  DragDropManager.init()