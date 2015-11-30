var music = document.getElementById("u-music");

function showTool(){
	var mPlayers = document.getElementsByClassName("m-players")[0];
	var uPlayer = mPlayers.getElementsByClassName("u-player");
	var toolList = mPlayers.getElementsByClassName("u-player--tools");
	for (var i = 0; i < uPlayer.length - 1; i++) {
		uPlayer[i].index = i;
		uPlayer[i].onmouseover = function(){
			toolList[this.index].style.display = "block";
		}
		uPlayer[i].onmouseout = function(){
			for (var i = 0; i < toolList.length; i++) {
				toolList[i].style.display = "none";
			};
		}
	}
}

window.onload = function(){
	showTool();
}
