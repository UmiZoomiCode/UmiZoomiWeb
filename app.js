var buttonHandler = (function(){
	var socket = io(location.host + ':5000');
	window.mySocket = socket;
	socket.on('changedProfile', function(data){
		console.log(data);
	});

	socket.on('savedProfile', function(data){
		console.log(data);
	});

	socket.on('settings', function(data){
		console.log(data);
	});

	socket.on('controlling', function(data){
		console.log(data);
	});

	return function(type){
		switch (type) {
			case 'get':
				socket.emit('getProfile');
				break;
			case 'change':
				socket.emit('changeProfile');
				break;
			case 'save':
				socket.emit('saveProfile');
				break;
			case 'control':
				socket.emit('control');
				break;
			case 'ChangeSpeed':
				socket.emit('ChangeSpeed', {
					msg: "ChangeSpeed",
					speed: getSliderValue()
				});
				break;
			case 'Stop':
				document.getElementById('slider1').value=0;
				socket.emit('Stop', {
					msg: "ChangeSpeed",
					speed: 0
				});
				break;
			default:
				break;
		}
	}
})();

function getSliderValue(){
	var value = document.getElementById('slider1').value;
	if(value==0) return 0;
	value = value/10;
	value = 1+value;
	console.log(value);
	return value+"0";
}
