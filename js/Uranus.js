var uranus, uranusCenter, uranusBigSphere, uranusBigGlow;

function initUranus() {

    var size = planet_parameters.uranus.size;
    var distance = planet_parameters.uranus.distance;

    //Center for rotation
    var geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    var material = new THREE.MeshBasicMaterial();
    uranusCenter = new THREE.Mesh(geometry, material);
    mainScene.add(uranusCenter);

    //Uranus
     geometry = new THREE.SphereGeometry(size, 60, 60);
    var loader = new THREE.TextureLoader();

    var diffuse = loader.load('textures/uranus/diff.jpg');

     material = new THREE.MeshPhongMaterial({
        map: diffuse,
        bumpMap: diffuse,
        bumpScale: size/100,
        shininess: 0.4
    });
    uranus = new THREE.Mesh(geometry, material);
    uranus.position.set(distance, 0, 0);
    uranusCenter.add(uranus);

    //Glow
       material = new THREE.SpriteMaterial({
        map: loader.load("textures/lava/glow.png"),
        color: 0x67d4e7,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });
    uranusBigGlow = new THREE.Sprite(material);
    uranusBigGlow.scale.set(200,200,200);

    //Big sphere
     var bigSphereGeometry = new THREE.SphereGeometry(15, 22, 22);
     material = new THREE.MeshBasicMaterial({
      color: 0x67d4e7
    });
  uranusBigSphere = new THREE.Mesh(bigSphereGeometry, material);
    uranus.add(uranusBigSphere);

}
