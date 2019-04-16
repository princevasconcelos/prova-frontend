module.exports = {
	env: {
		browser: true,
		es6: true
	},
	extends: "airbnb",
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly"
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: "module"
	},
	plugins: ["react"],
	rules: {
		"react/jsx-filename-extension": [
			"error",
			{
				extensions: [".js", ".jsx"]
			}
		],
		"import/prefer-default-export": "off",
		"import/no-named-as-default": "off",
		"import/no-named-as-default-member": "off",
		"no-tabs": "off",
		"no-underscore-dangle": "off"
	}
};