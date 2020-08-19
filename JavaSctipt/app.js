// MIT License

// Copyright (c) 2019 Rafael Botazini

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

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

