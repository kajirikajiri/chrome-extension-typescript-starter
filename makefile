all: popup other
popup: clean__popup build__popup copy__popup
other: clean__other build__other copy__other
test: test__popup test__other e2e__popup

clean__popup:
	rm -rf dist/static dist/popup.html
build__popup:
	cd popup && yarn build
copy__popup:
	cd popup/build && cp index.html ../../dist/popup.html && cp -r static ../../dist/
test__popup:
	cd popup && yarn test
e2e__popup:
	cd popup && yarn e2e:headfull

clean__other:
	rm -rf dist/js dist/manifest.json dist/options.html dist/icon.png
build__other:
	cd other && yarn build
copy__other:
	cd other/dist && cp -r js ../../dist/ && cp icon.png ../../dist/icon.png && cp manifest.json ../../dist/manifest.json && cp options.html ../../dist/options.html
test__other:
	cd other && yarn test