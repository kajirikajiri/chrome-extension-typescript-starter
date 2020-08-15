all: popup other
popup: clean__popup build__popup copy__popup
other: clean__other build__other copy__other

clean__popup:
	rm -rf dist/static dist/popup.html
build__popup:
	cd popup && yarn build
copy__popup:
	cd popup/build && cp index.html ../../dist/popup.html && cp -r static ../../dist/

clean__other:
	rm -rf dist/js dist/manifest.json dist/options.html dist/icon.png
build__other:
	cd other && yarn build
copy__other:
	cd other/dist && cp -r js ../../dist/ && cp icon.png ../../dist/icon.png && cp manifest.json ../../dist/manifest.json && cp options.html ../../dist/options.html