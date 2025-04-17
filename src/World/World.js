import { createCamera } from './components/camera.js'
import { createCube, createTorus, createCapsule } from './components/cube.js'
import { createScene } from './components/scene.js'
import { createLights, createPointLight } from './components/lights.js'


import { createRenderer } from './systems/renderer.js'
import { Resizer } from './systems/Resizer.js'
import { Loop } from './systems/loop.js'

// These variables are module-scoped: we cannot access them
// from outside the module
let camera
let renderer
let scene
let loop

class World {
  constructor(container) {
    camera = createCamera()
    scene = createScene()
    renderer = createRenderer()
    container.append(renderer.domElement)
    loop = new Loop(camera, scene, renderer)

    const cube = createCube()
    const torus = createTorus()
    // const capsule = createCapsule()

    const light = createLights()
    const pLight = createPointLight()

    loop.updatables.push(cube)
    loop.updatables.push(torus)
    loop.updatables.push(camera)
    // loop.updatables.push(capsule)

    scene.add(cube)
    scene.add(torus)
    scene.add(light)
    scene.add(pLight)
    // scene.add(capsule)


    const resizer = new Resizer(container, camera, renderer)
    resizer.onResize = () => {
      this.render()
    }
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }
  start() {
    loop.start()
  }
  stop() {
    loop.stop()
  }
}

export { World };