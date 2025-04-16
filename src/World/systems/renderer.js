import { WebGLRenderer  } from "three"

function createRenderer() {
  const spec = {
    antialias: true
  }

  const renderer = new WebGLRenderer(spec)
  renderer.physicallyCorrectLights = true
  // renderer.shadowMap.enabled = true
  // renderer.shadowMap.type = PCFSoftShadowMap
  return renderer
}

export { createRenderer }

