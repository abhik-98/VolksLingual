$(function () {
	$('#myButton').floatingWhatsApp({
		phone: '+917058684314',
		popupMessage: 'Hello, how can I help you?',
		message: "I'd like to join ",
		showPopup: true,
		showOnIE: false,
		headerTitle: 'Welcome!',
		headerColor: '#128C7E',
		backgroundColor: '#25d366',
		buttonImage: '<img src="../images/whatsapp.svg"/>'
	});

	$('#myButton1').floatingWhatsApp({
		phone: '+917058684314',
		popupMessage: 'Hello, how can I help you?',
		message: "I'd like to join ",
		showPopup: true,
		showOnIE: false,
		headerTitle: 'Welcome!',
		headerColor: '#128C7E',
		backgroundColor: '#25d366',
		buttonImage: '<img src="./images/whatsapp.svg"/>'
	});
});

