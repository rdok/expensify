# Expensify
![Deployment](https://github.com/rdok/expensify/workflows/prod-deploy/badge.svg) ![test](https://github.com/rdok/expensify/workflows/test/badge.svg) ![lint](https://github.com/rdok/expensify/workflows/lint/badge.svg)

### Dev Flow
- Use `make lint-watch` to auto style.
- Use `make test-watch` to auto test on a separate window/tab.
- Enable git hooks to ensure compliance with tests & linter `git config core.hooksPath .meta/githooks`. CI does as well on any push.
- Interact through docker for additional needs. `make docker.shell`

See `Makefile` for more.