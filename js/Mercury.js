var mercury, mercuryCenter, mercuryBigSphere, mercuryBigGlow;

function initMercury() {

    var size = planet_parameters.mercury.size;
    var distance = planet_parameters.mercury.distance;

    //Center for rotation
    var geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    var material = new THREE.MeshBasicMaterial();
    mercuryCenter = new THREE.Mesh(geometry, material);
    mainScene.add(mercuryCenter);

    //Mercury
     geometry = new THREE.SphereGeometry(size, 60, 60);
    var loader = new THREE.TextureLoader();

    var diffuse = loader.load('textures/mercury/diff.jpg');
    var bump = loader.load('textures/mercury/bump.jpg');

     material = new THREE.MeshPhongMaterial({
        map: diffuse,
        bumpMap: bump,
        bumpScale: size/100
    });
    mercury = new THREE.Mesh(geometry, material);
    mercury.position.set(distance, 0, 0);
    mercuryCenter.add(mercury);

    //Glow
       material = new THREE.SpriteMaterial({
        map: loader.load("textures/lava/glow.png"),
        color: 0x88716f,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });
    mercuryBigGlow = new THREE.Sprite(material);
    mercuryBigGlow.scale.set(200,200,200);



    //Big sphere
     var bigSphereGeometry = new THREE.SphereGeometry(15, 22, 22);
     material = new THREE.MeshBasicMaterial({
      color: 0x88716f
    });
  mercuryBigSphere = new THREE.Mesh(bigSphereGeometry, material);
    mercury.add(mercuryBigSphere);
}
