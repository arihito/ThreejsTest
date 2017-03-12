// THREEJSの機能を読み込み
var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer();

// 画面の表示サイズを指定
var canvasWidth = 600;
var canvasHeight = 400;
renderer.setSize( canvasWidth, canvasHeight );

// HTMLのCANVAS要素で画面表示
document.body.appendChild( renderer.domElement );

// パースで表示されるカメラオブジェクトを作成(角度,縦横比,手前,奥)
var camera = new THREE.PerspectiveCamera( 75, canvasWidth / canvasHeight, 1, 1000 );

// 後ろに100px下がる
camera.position.z = 100;

var loader = new THREE.TextureLoader();
loader.crossOrigin = '*';
var mesh;
loader.load(
  'http://panda-space.com/img/cors/icon.jpg',
  function( texture ) {
    // オブジェクト(Mesh)を20px四方で準備 3Dの場合BoxGeometryで値を3つ指定
    var geometry = new THREE.BoxGeometry( 100, 100, 10 );

    // オブジェクトの表面の質感を設定
    var material = new THREE.MeshBasicMaterial({
      map: texture,
      color: 0Xccaaabb,
    });
    mesh = new THREE.Mesh(geometry, material);

    // オブジェクトを画面に(都度毎回)表示
    scene.add(mesh);

    animate();
  }
);
function render() {
  renderer.render(scene, camera);
}

// マウスで3D風に操作できるようにOrbitControlsを追加
var controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.addEventListener( 'change', render );

function animate() {
  mesh.rotation.y += 0.05;
  mesh.rotation.x += 0.02;
  render();
  window.requestAnimationFrame(animate);
}
