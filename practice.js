// Use the value below whenever you need the value //of Pi
const PI = 3.14159 ;
const sphereVolume = function (radius) {
    let s = (4/3) * Math.PI * Math.pow(radius, 3);
    return s
}
console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
    let c = (1/3) * Math.PI * Math.pow(radius,2) * height;
    return c
}
console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);
const prismVolume = function (height, width, depth) {
  let p = height * width * depth;
  return p
}
console.log(prismVolume(3, 4, 5) === 60);