start: node_modules
	make docker command='yarn dev-server'
test: node_modules
	make docker command='yarn test'
test.watch: node_modules
	make docker command='yarn test-watch'
lint: node_modules
	make docker command='yarn lint'

upgrade: node_modules
	make docker command='yarn upgrade'

.PHONY: node_modules
node_modules:
	make docker command=yarn

docker:
	docker run --tty --interactive --rm --user "$$(id -u)" --workdir "/app" \
		--volume "${PWD}:/app" --publish 8080:8080 node:15.3 \
		$(command)
