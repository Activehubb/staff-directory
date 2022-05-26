exports.wordCounter = (word) => {
		if (word.length === 0) {
			return 0;
		} else {
			word = word.replace(/(^\s*)|(\s*$)/gi, '');
			word = word.replace(/[ ]{2,}/gi, ' ');
			word = word.replace(/\n /, '\n');
			return word.split(' ').length;
		}
};
