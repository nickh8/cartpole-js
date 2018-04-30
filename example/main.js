
const height = 300,
      width = 500,
      frameRate = 60

let action = 0

document.addEventListener('DOMContentLoaded', () => {
    let svgContainer = d3.select("#cartpole-drawing")
        .attr("height", height)
        .attr("width", width)
        .style("background", "grey")
    let c = new Cartpole.Cartpole(svgContainer, {dt: 0.03})
    c.reset()
    setInterval(() => {
        c.step(action)
        c.render(1 / frameRate * 1000)
    }, 1 / frameRate * 1000)
    
    document.getElementById("cartpole-drawing").addEventListener("mousemove", e => {
        let boundingRect = e.target.getBoundingClientRect() 
        const mouseX = e.clientX - boundingRect.left - width / 2
        if(mouseX > 0){
            action = 3
        } else {
            action = -3
        }
    })
})
