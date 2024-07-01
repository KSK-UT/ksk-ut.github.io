// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Transmit",
      "url": "backend.php",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "点の運動の観察から生じるアニマシー知覚に関する実験",
          "content": "はじめます！"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Introduction"
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Sequence",
      "content": [
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "run": function anonymous(
) {
// p5.jsで使うため現在のコンポーネントへの
// ポインターを作ります。
const component = this;
const totalFrames = 120;
let currentFrame = 0;
let x = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
let y = [0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,160,150,140,130,100,60,20,-20,-40,-60,-80,-100,-120,-140,-160,-180,-240,-160,-80,0]
// p5.js 初期化関数　インスタンスモードで使います。
const s = ( p ) => {

// セットアップ（最初に1回だけ呼び出される）
// 三次元で描画するときはWEBGLを使います。
  p.setup = function() {
    p.createCanvas(
      component.options.el.clientWidth,
      component.options.el.clientHeight
      //640, 640
    )
    p.background(0);

  }

// 描画（常に呼び出される）
  p.draw = function() {
    p.background(0);
    p.ellipse(p.width/2+x[currentFrame], p.height/2+y[currentFrame], 20, 20);
  
  // 次のフレームに進む
  currentFrame++;
  if (currentFrame >= totalFrames) {
    currentFrame = 0;
    }

  }
}

// p5.js instantiation
// (ここに記載するだけでなくHTMLのヘッダーにも追加が必要です。)
const myp5 = new p5(s, this.options.el)

// このコンポーネントが終わったらインスタンスを取り除く
this.on('end', () => myp5.remove())
}
          },
          "title": "Screen",
          "timeout": "2000"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "白い点の動きに生き物らしさを感じる",
                  "coding": "Q1"
                },
                {
                  "label": "白い点の動きに明確な目標があると感じる",
                  "coding": "Q2"
                },
                {
                  "label": "白い点の動きが予測可能だと感じる",
                  "coding": "Q3"
                }
              ],
              "width": "7",
              "anchors": [
                "全くそう思わない",
                "そう思わない",
                "あまりそう思わない",
                "どちらともいえない",
                "ややそう思う",
                "そう思う",
                "非常にそう思う"
              ],
              "label": "今見た動画について回答してください",
              "name": "Question"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Questionnaire"
        }
      ]
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
//ここに座標データを流し込む
}
      },
      "title": "Loop",
      "shuffleGroups": []
    }
  ]
})

// Let's go!
study.run()