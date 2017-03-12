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

// オブジェクト(Mesh)を20px四方で準備 3Dの場合BoxGeometryで値を3つ指定
var geometry = new THREE.PlaneGeometry( 20, 20 );
var material = new THREE.MeshBasicMaterial();
var mesh = new THREE.Mesh(geometry, material);

// オブジェクトを画面に(都度毎回)表示
scene.add(mesh);

function render() {
  renderer.render(scene, camera);
}
render();

// マウスで3D風に操作できるようにOrbitControlsを追加
var controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.addEventListener( 'change', render );
