/**
 * 
 */



 function init() {
      //地図を表示するdiv要素のidを設定
      var map = L.map('mapcontainer',{      //->地図を作成
		  
		  renderer: L.canvas()              //マップ内のすべてのパスにデフォルトでCanvasを使用
	  });
                           
      
      
      //地図の中心とズームレベルを指定
      map.setView([37.9473, 139.32825], 14);     
             //->「setView」メソッドで経緯度とズームレベルを指定(緯度、経度、ズームレベル)
      
      
      
      //表示するタイルレイヤのURLとAttributionコントロールの記述を設定して、地図に追加する
      L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
          attribution: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>タイルレイヤ：地理院タイル</a>"
      }).addTo(map); //
    }
