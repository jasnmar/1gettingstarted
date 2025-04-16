import { DirectionalLight, PointLight, SpotLight } from "three"

function createLights() {
  const light = new DirectionalLight('white', 2)
  light.position.set(-10, 10, 10)
  return light
}

function createPointLight() {
  const light = new PointLight( 'white', 300, 100 )
  light.position.set(10, -10, 10)
  return light
}

export { createLights, createPointLight }

