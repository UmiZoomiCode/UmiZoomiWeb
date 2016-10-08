var buttonHandler = (function(){
	var socket = io('http://localhost:5000');
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
			default:
				break;
		}
	}
})();