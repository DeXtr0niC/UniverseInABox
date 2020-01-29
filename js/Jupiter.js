var jupiter, jupiterCenter, jupiterBigSphere, jupiterBigGlow;

function initJupiter() {

    var size = planet_parameters.jupiter.size;
    var distance = planet_parameters.jupiter.distance;

    //Center for rotation
    var geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    var material = new THREE.MeshBasicMaterial();
    jupiterCenter = new THREE.Mesh(geometry, material);
    mainScene.add(jupiterCenter);

    //Mars
     geometry = new THREE.SphereGeometry(size, 60, 60);
    var loader = new THREE.TextureLoader();

    var diffuse = loader.load('textures/jupiter/diff.jpg');

     material = new THREE.MeshPhongMaterial({
        map: diffuse,
        bumpMap: diffuse,
        bumpScale: size/100,
        shininess: 0.4
    });
    jupiter = new THREE.Mesh(geometry, material);
    jupiter.position.set(distance, 0, 0);
    jupiterCenter.add(jupiter);

    //Glow
       material = new THREE.SpriteMaterial({
        map: loader.load("textures/lava/glow.png"),
        color: 0xb1968a,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });
     jupiterBigGlow = new THREE.Sprite(material);
    jupiterBigGlow.scale.set(200,200,200);

    //Big sphere
     var bigSphereGeometry = new THREE.SphereGeometry(15, 22, 22);
     material = new THREE.MeshBasicMaterial({
      color: 0xb1968a
    });
  jupiterBigSphere = new THREE.Mesh(bigSphereGeometry, material);
    jupiter.add(jupiterBigSphere);
}
