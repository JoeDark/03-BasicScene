//scene
const scene = new THREE.Scene()

//red cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)
//Sizes
const sizes = {
    width: 800,
    height: 600
}

//camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

const canvas = document.querySelector('canvas.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)

console.log(THREE)


/*
NOTE: Put ./script.js last so we can have things render and pull in

Scene: container for all objects and more
Object: geomitres, models, particles lights and more
Mesh: combination of geometry and a material

We put our threejs on a canvas...
We use a renderer to renter the scene and the camera 

*/ 