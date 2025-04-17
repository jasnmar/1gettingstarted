import { PerspectiveCamera } from 'three'

function createCamera() {

  const fov = 35
  const aspect = 1
  const near = 0.1
  const far = 100
  const camera = new PerspectiveCamera(fov, aspect, near, far)

  camera.position.set(0, 0, 15)

  //Camera Minimum Distance = 15
  //Camera Maximum Distance = 25
  const minDistance = 15
  const maxDistance = 25
  let camDistance = minDistance
  let zoomOut = true
  const zoomRate = .1
  
  
  camera.tick = (delta) => {
    if (camDistance > maxDistance) {
      zoomOut = false
    } else if (camDistance < minDistance) {
      zoomOut = true
    }
    zoomOut ? camDistance += zoomRate : camDistance -= zoomRate
    camera.position.z = camDistance
    
  }
  
  return camera
  
}

export { createCamera }
