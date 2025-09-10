build:
	hugo build --baseURL https://trayce.dev

server:
	hugo server --logLevel debug --disableFastRender -p 1313
