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

watch: 
	docker-compose exec node yarn test-watch

upgrade: 
	docker-compose exec node yarn upgrade

sh:
	docker-compose exec node sh