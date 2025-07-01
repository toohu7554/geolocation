/**
 * https://qiita.com/orangecarol/items/c84efeca519e2d97bb34
 * 
 「*メゾット」
 * getCurrentPosition() -->デバイスの現在位置を取得する
 * watchPosition()      -->デバイスの位置情報を監視する
 * clearWatch()         -->watchPosition()メソッドで取得中のデバイスの監視状況をクリアする
 * 
 * 「コールバック関数」
 * PositionCallback　　 -->位置情報の取得が成功したときに呼び出される(引数:Positionオブジェクト)
 * PositionErrorCallback-->位置情報の取得が失敗したときに呼び出される(引数:PositionErrorオブジェクト)
 * 
 * 
 */

		navigator.geolocation.getCurrentPosition(successCallback, errorCallback); //現在位置を取得
		
			function successCallback(position){   //成功した場合
			
				var latitude = position.coords.latitude;  //現在位置情報(緯度)を持つCoordinatesオブジェクトを取得する
				var longitude = position.coords.longitude;//現在位置情報(経度)を持つCoordinatesオブジェクトを取得する				
				var longitude = position.coords.altitude; //現在位置情報(高度)を持つCoordinatesオブジェクトを取得する
				
				document.getElementById("latitude").innerHTML = latitude;
				document.getElementById("longitude").innerHTML = longitude;
				document.getElementById("altitude").innerHTML = altitude;
	};
	
	
	
	//--------------------------------------------------------------------------
	
	        function errorCallback(error){
				alert("位置情報が取得できませんでした");
    };