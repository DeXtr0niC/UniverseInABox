var mars, marsCenter, marsBigSphere, marsBigGlow;

function initMars() {

    var size = planet_parameters.mars.size;
    var distance = planet_parameters.mars.distance;

    //Center for rotation
    var geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    var material = new THREE.MeshBasicMaterial();
    marsCenter = new THREE.Mesh(geometry, material);
    mainScene.add(marsCenter);

    //Mars
    geometry = new THREE.SphereGeometry(size , 60, 60);
    var loader = new THREE.TextureLoader();

    var diffuse = loader.load('textures/mars/diff.jpg');
    var normal = loader.load('textures/mars/marsbump1k.jpg');

    material = new THREE.MeshPhongMaterial({
        map: diffuse,
        bumpMap: normal,
        bumpScale: size/100
    });
    mars = new THREE.Mesh(geometry, material);
    mars.position.set(distance , 0, 0);
    marsCenter.add(mars);

    //Glow
       material = new THREE.SpriteMaterial({
        map: loader.load("textures/lava/glow.png"),
        color: 0xaf241f,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        shininess: 1
    });
    marsBigGlow = new THREE.Sprite(material);
    marsBigGlow.scale.set(200,200,200);

    //Big sphere
    var bigSphereGeometry = new THREE.SphereGeometry(15, 22, 22);
    material = new THREE.MeshBasicMaterial({
        color: 0xaf241f
    });
    marsBigSphere = new THREE.Mesh(bigSphereGeometry, material);
    mars.add(marsBigSphere);

}
