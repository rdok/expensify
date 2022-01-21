check:
	yarn prettier
	yarn lint
	yarn test
	yarn build:prod

start:
	yarn start

prettier-fix:
	yarn prettier:fix

test-watch:
	yarn test:watch

test:
	yarn test

lint:
	yarn lint


update-all:
	yarn upgrade-interactive --latest
