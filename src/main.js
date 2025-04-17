import "./style.css"

import { World } from "./World/World"



function main() {
  const container = document.querySelector('#scene-container')

  const world = new World(container)
  const renderBtn = document.getElementById('render-button')
  const stopBtn = document.getElementById('stop-button')

  stopBtn.addEventListener('click', world.stop)
  renderBtn.addEventListener('click', world.start)
  world.render()
  setTimeout(world.render(), 1000)
  
  
}

main()
