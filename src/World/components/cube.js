import { 
  BoxGeometry, 
  CapsuleGeometry, 
  MathUtils,
  Mesh, 
  MeshBasicMaterial, 
  MeshStandardMaterial, 
  SRGBColorSpace,
  TextureLoader,
  TorusGeometry } from "three"

  import { uvtestbw, uvtestcol } from "../../../assets/assets"

//Helpers
const degreesPerSecond = 30
const radiansPerSecond = MathUtils.degToRad(degreesPerSecond)


function createMaterial() {

  const textureLoader = new TextureLoader()
  const texture = textureLoader.load(uvtestcol)
  const metal = textureLoader.load(uvtestbw)
  texture.colorSpace = SRGBColorSpace
  const materialSpec = {
    map: texture,
  }
  const material = new MeshStandardMaterial(materialSpec)
  return material

}

//Cube
function createCube() {
  const geometry = new BoxGeometry(2, 2, 2)
  
  const material = createMaterial()
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
  const material = createMaterial()
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
  const material = createMaterial()
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

