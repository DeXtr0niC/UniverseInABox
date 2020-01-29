var saturn, saturnCenter, saturnBigSphere, saturnRing,saturnBigGlow;

function initSaturn() {

    var size = planet_parameters.saturn.size;
    var distance = planet_parameters.saturn.distance;

    //Center for rotation
    var geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    var material = new THREE.MeshBasicMaterial();
    saturnCenter = new THREE.Mesh(geometry, material);
    mainScene.add(saturnCenter);

    //Saturn
    geometry = new THREE.SphereGeometry(size, 60, 60);
    var loader = new THREE.TextureLoader();

    var saturnMap = loader.load('textures/saturn/saturnmap.jpg');

    material = new THREE.MeshPhongMaterial({
        map: saturnMap,
        bumpMap: saturnMap,
        bumpScale: size/100,
        specular: new THREE.Color('#190909')
    });
    saturn = new THREE.Mesh(geometry, material);
    saturn.position.set(distance, 0, 0);
    saturnCenter.add(saturn);

    //Saturn Ring
    var ringGeometry = new THREE.RingGeometry(1.8 * size, 2 * size, 60, 60, 0, 2 * Math.PI);
    material = new THREE.MeshBasicMaterial({
        color: 0x6f6e58,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.9
    });
    saturnRing = new THREE.Mesh(ringGeometry, material);

    saturnRing.rotation.x = Math.PI/2 ;
    saturnRing.rotation.y = Math.PI/8 ;
    saturnRing.position.set(distance,0.001,0);
    saturnCenter.add(saturnRing);

    //Saturn Ring2
    var ringGeometry2 = new THREE.RingGeometry(1.4* size, 1.75 * size, 60,60, 0, 2 * Math.PI);
    material = new THREE.MeshBasicMaterial({
        color: 0x9c9280,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.8
    });
    saturnRing2 = new THREE.Mesh(ringGeometry2, material);

    saturnRing2.rotation.x = Math.PI/2 ;
    saturnRing2.rotation.y = Math.PI/8 ;
    saturnRing2.position.set(distance,0.002,0);
    saturnCenter.add(saturnRing2);

    //Saturn Ring 3
    var ringGeometry3 = new THREE.RingGeometry(1.2 * size, 1.4 * size, 60, 60, 0, 2 * Math.PI);

    material = new THREE.MeshBasicMaterial({
        color: 0x6f6e58,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.4
    });
    saturnRing3 = new THREE.Mesh(ringGeometry3, material);

    saturnRing3.rotation.x = Math.PI/2 ;
    saturnRing3.rotation.y = Math.PI/8 ;
    saturnRing3.position.set(distance,0.0021,0);
    saturnCenter.add(saturnRing3);

    //Glow
       material = new THREE.SpriteMaterial({
        map: loader.load("textures/lava/glow.png"),
        color: 0xd2c7a8,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });
  saturnBigGlow = new THREE.Sprite(material);
    saturnBigGlow.scale.set(200,200,200);

    //Big sphere
    var bigSphereGeometry = new THREE.SphereGeometry(15, 22, 22);
    material = new THREE.MeshBasicMaterial({
        color: 0xd2c7a8
    });
    saturnBigSphere = new THREE.Mesh(bigSphereGeometry, material);
    saturn.add(saturnBigSphere);
}
