let video;

function setup() {
  // 第一步驟：產生一個全螢幕的畫布
  createCanvas(windowWidth, windowHeight);
  
  // 取得攝影機影像
  video = createCapture(VIDEO);
  video.hide(); // 隱藏原生的 HTML 影片元素，以便只在畫布內自訂顯示
}

function draw() {
  // 設定畫布的背景顏色為 #e7c6ff
  background('#e7c6ff');
  
  // 顯示的影像寬高為整個畫布寬高的 60%
  let imgW = width * 0.6;
  let imgH = height * 0.6;
  
  // 計算讓影像置中的 X 與 Y 座標
  let x = (width - imgW) / 2;
  let y = (height - imgH) / 2;
  
  // 將擷取的攝影機影像繪製在畫布中間
  image(video, x, y, imgW, imgH);
}

// 當視窗大小改變時，自動重新調整畫布大小以維持全螢幕
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}