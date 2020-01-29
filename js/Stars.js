var stars, stars2, stars3;
 function initStars() {
     var loader = new THREE.TextureLoader();
     var starTexture = loader.load('textures/starmap.png');
     starTexture.wrapS = THREE.RepeatWrapping;
     starTexture.wrapT = THREE.RepeatWrapping;
     starTexture.repeat.set(6, 6);

     var material = new THREE.MeshBasicMaterial({
         map: starTexture,
         transparent: true,
         side: THREE.DoubleSide,
         opacity: 1
     });

     var geometry = new THREE.SphereGeometry(20000, 22, 22);
     stars = new THREE.Mesh(geometry, material);
     stars.rotation.x = Math.PI * 2;
     mainScene.add(stars);

     geometry = new THREE.SphereGeometry(18000, 22,22);
     stars2 = new THREE.Mesh(geometry, material);
     stars2.rotation.x = Math.PI * 1;
     mainScene.add(stars2);

     geometry = new THREE.SphereGeometry(16000, 22,22);
     stars3 = new THREE.Mesh(geometry, material);
     stars3.rotation.x = Math.PI * 0.5;
     mainScene.add(stars3);
 }
