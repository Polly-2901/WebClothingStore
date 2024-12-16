import maskList from './mask_list';

const mask = (selector) => {
	function setMask(event) {
		let matrix = '+###############';
		const input = event.target;

		if (Array.isArray(maskList)) {
			maskList.forEach(item => {
				let code = item.code.replace(/[\s#]/g, ''),
					phone = input.value.replace(/[\s#-)(]/g, '');

				if (phone.startsWith(code)) {
					matrix = item.code;
				}
			});
		} else {
			console.error('maskList is not an array');
		}

		let i = 0,
			val = input.value.replace(/\D/g, '');

		input.value = matrix.replace(/(?!\+)./g, function (a) {
			return /[#\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
		});
	}

	let inputs = document.querySelectorAll(selector);

	inputs.forEach(input => {
		input.addEventListener('input', setMask);
		input.addEventListener('focus', setMask);
		input.addEventListener('blur', setMask);
	});
};

export default mask;
