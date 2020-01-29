var neptune, neptuneCenter, neptuneBigSphere,neptuneBigGlow;

function initNeptune() {

    var size = planet_parameters.neptune.size;

    var distance = planet_parameters.neptune.distance;

    //Center for rotation
    var geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    var material = new THREE.MeshBasicMaterial();
    neptuneCenter = new THREE.Mesh(geometry, material);
    mainScene.add(neptuneCenter);

    //Neptune
     geometry = new THREE.SphereGeometry(size, 60, 60);
    var loader = new THREE.TextureLoader();

    var diffuse = loader.load('textures/neptune/diff.jpg');

     material = new THREE.MeshPhongMaterial({
        map: diffuse,
        bumpmap: diffuse,
        bumpScale: size/100,
        shininess: 0.4
    });
    neptune = new THREE.Mesh(geometry, material);
    neptune.position.set(distance, 0, 0);
    neptuneCenter.add(neptune);

    //Glow
       material = new THREE.SpriteMaterial({
        map: loader.load("textures/lava/glow.png"),
        color:0x1c528b,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });
    neptuneBigGlow = new THREE.Sprite(material);
    neptuneBigGlow.scale.set(200,200,200);

    //Big sphere
     var bigSphereGeometry = new THREE.SphereGeometry(15, 30, 30);
     material = new THREE.MeshBasicMaterial({
      color: 0x1c528b
    });
  neptuneBigSphere = new THREE.Mesh(bigSphereGeometry, material);
    neptune.add(neptuneBigSphere);
}
