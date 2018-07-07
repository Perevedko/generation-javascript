let random_color = () => {
	let color = [];
	for (let i = 0; i < 6; ++i) {
		color.push(Math.floor(Math.random()*15).toString(16));
	}
	return `#${color.join('')}`
}

$(function() {
	$('#js').text(("dynamic shit "));
	setInterval(() => {
		$('#js').css('color', random_color()).css('background-color', random_color());
	}, 50)
});