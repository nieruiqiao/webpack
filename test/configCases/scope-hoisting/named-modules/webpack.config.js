var webpack = require("../../../../");
module.exports = {
	optimization: {
		moduleIds: "named",
		usedExports: true,
		providedExports: true,
		concatenateModules: true
	}
};
