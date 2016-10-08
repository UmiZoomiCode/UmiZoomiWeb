(function(){
	var socket = io('http://localhost:5000');
	window.mySocket = socket;
	socket.on('changedProfile', function(data){
		console.log(data);
	});
	socket.on('connect', function(){
		socket.emit('changeProfile', {Hello: "World"});
	});
})();