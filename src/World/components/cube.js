import { 
  BoxGeometry, 
  CapsuleGeometry, 
  MathUtils,
  Mesh, 
  MeshBasicMaterial, 
  MeshStandardMaterial, 
  TorusGeometry } from "three"

//Helpers
const degreesPerSecond = 30
const radiansPerSecond = MathUtils.degToRad(degreesPerSecond)


//Cube
function createCube() {
  const geometry = new BoxGeometry(2, 2, 2)
  
  const spec = {
    color: 'purple'
  }
  const material = new MeshStandardMaterial(spec)
  const cube = new Mesh(geometry, material)

  cube.rotation.set(-0.5, -0.1, 0.8)
  const capsule = createCapsule()
  cube.add(capsule)

  cube.tick = (delta) => {
    cube.rotation.x += radiansPerSecond * delta
    cube.rotation.y += radiansPerSecond * delta
    cube.rotation.z += radiansPerSecond * delta
    capsule.tick(delta)
  }
  
  return cube
}


//Capsule
function createCapsule() {
  const geometry = new CapsuleGeometry(1, 2, 16, 8)
  const spec = {
    color: 'green'
  }
  const material = new MeshStandardMaterial(spec)
  const capsule = new Mesh(geometry, material)
  capsule.position.set(1, 1, 2)

  capsule.tick = (delta) => {
    // capsule.rotation.x += 0.01
    capsule.rotation.y += radiansPerSecond * delta
    capsule.rotation.z += radiansPerSecond * delta
  }

  return capsule
}

function createTorus() {
  const geometry = new TorusGeometry(1, .25, 16, 100)

  const spec = {
    color: 'pink'
  }
  const material = new MeshStandardMaterial(spec)
  const torus = new Mesh(geometry, material)
  torus.position.set(1, 1, 2)
  torus.scale.set(1, 1, 1)
  torus.rotation.set(1, 0, 0)
  torus.tick = (delta) => {

    torus.rotation.x += radiansPerSecond * delta
  }

  return torus
}



export { createCube, createTorus, createCapsule }

