
const height = 300,
      width = 500,
      frameRate = 30

let action = 0

document.addEventListener('DOMContentLoaded', () => {
    let svgContainer = d3.select("#cartpole-drawing")
        .attr("height", height)
        .attr("width", width)
    let c = new Cartpole.Cartpole(svgContainer, {dt: 0.03, forceMult: 3})
    c.reset()
    setInterval(() => {
        const {state, reward, done} = c.step(action)
        document.getElementById("rewardP").innerHTML = "Reward: " + reward
        document.getElementById("doneP").innerHTML = "Done: " + done
        c.render(1 / frameRate * 1000)
    }, 1 / frameRate * 1000)
    document.getElementById("reset-button").addEventListener("click", e => {
        c.reset()
    })
    document.getElementById("cartpole-drawing").addEventListener("click", e => {
        c.reset()
    })

    document.getElementById("cartpole-drawing").addEventListener("mousemove", e => {
        let boundingRect = e.target.getBoundingClientRect() 
        const mouseX = e.clientX - boundingRect.left - width / 2
        if(mouseX > 0){
            action = 1
        } else {
            action = 0
        }
    })
})
