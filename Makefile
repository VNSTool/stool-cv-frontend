PROJECT_NAME=stool_cv

install-dependencies:
	docker compose -p ${PROJECT_NAME} -f environments/ci.yml run install-dependencies
yarn-add:
	PACKAGE=${PACKAGE} docker compose -p ${PROJECT_NAME} -f environments/ci.yml run yarn-add
yarn-remove:
	PACKAGE=${PACKAGE} docker compose -p ${PROJECT_NAME} -f environments/ci.yml run yarn-remove
build:
	docker compose -p ${PROJECT_NAME} -f environments/ci.yml run build
up:
	docker compose -p ${PROJECT_NAME} -f environments/development.yml up --force-recreate -d
down:
	docker compose -p ${PROJECT_NAME} -f environments/development.yml down
