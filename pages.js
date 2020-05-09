var fs = require('fs');
var templatesjs = require('templatesjs');
templatesjs.dir = "./resources/includes/";

var filepath = {};
filepath.source = './pages/';
filepath.dest = './';

var dir = fs.readdir(filepath.source,function(err,files){
	if (err) throw err;
	if (files.length) {
		var x;
		for (x=0;x<files.length;x++) {
			var file = fs.readFileSync(filepath.source+files[x]);
			var nextLink = (x == (files.length - 1)) ? '' : '<li class="next"><a href="' + files[x+1] + '">Next Day</a></li>';
			var prevLink = (x === 0 ) ? '' : '<li class="prev"><a href="' + files[x-1] + '">Previous Day</a></li>';
			templatesjs.setSync(file);
			file = templatesjs.renderSync("prev", prevLink);
			file = templatesjs.renderSync("next", nextLink);
			fs.writeFileSync(filepath.dest+files[x],file);
		}
	}
});