import "./style.css"

import { World } from "./World/World"



function main() {
  const container = document.querySelector('#scene-container')

  const world = new World(container)
  const renderBtn = document.getElementById('render-button')
  renderBtn.addEventListener('click', world.start)
  world.render()
  
  
}

main()
