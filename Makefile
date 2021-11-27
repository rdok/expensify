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
