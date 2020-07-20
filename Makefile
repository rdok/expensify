### Dev Flow
dev.lint: # Recommended to delay your autosave by 3s+
	docker-compose exec node yarn run lint-watch
dev.shell:
	docker-compose exec node sh
dev.test: 
	docker-compose exec node yarn test-watch
dev.start: 
	docker-compose exec node yarn dev-server
### End Dev Flow

### CI
build:
	docker-compose run -T -e BASENAME=/expensify node yarn run build:prod

deploy:
	aws s3 sync ./public s3://training-apps-rdok/expensify --delete

cdn:
	aws cloudfront create-invalidation  --distribution-id "${AWS_CLOUDFRONT_DISTRIBUTION_ID}" --paths "/expensify/*"

test:
	docker-compose exec -T node yarn test

install:
	docker-compose exec -T node yarn

up:
	docker-compose up -d


upgrade: 
	docker-compose exec node yarn upgrade

lint:
	docker-compose exec -T node yarn run lint
