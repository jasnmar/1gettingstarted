import { Clock } from "three"

const clock = new Clock()

class Loop {
  constructor(camera, scene, renderer) {
    this.camera = camera
    this.scene = scene
    this.renderer = renderer
    this.updatables = []
  }

  add(updatables) {
    this.updatables.push(updatables)
  }

  start() {  
    this.renderer.setAnimationLoop(() => {
      this.tick()
      this.renderer.render(this.scene, this.camera)
    })
  }

  stop() {
    this.renderer.setAnimationLoop(null)
  }

  tick() {
    const delta = clock.getDelta()
    // console.log(this.updatables)
    for (const object of this.updatables) {
      // console.log(object)
      object.tick(delta)
    }
  }
}

export { Loop }

