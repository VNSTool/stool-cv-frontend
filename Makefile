PROJECT_NAME=stool_cv

install-dependencies:
	docker compose -p ${PROJECT_NAME} -f environments/ci.yml run install-dependencies
yarn-add:
	PACKAGE=${PACKAGE} docker compose -p ${PROJECT_NAME} -f environments/ci.yml run yarn-add --remove-orphans
yarn-add-dev:
	PACKAGE=${PACKAGE} docker compose -p ${PROJECT_NAME} -f environments/ci.yml run yarn-add-dev --remove-orphans
yarn-remove:
	PACKAGE=${PACKAGE} docker compose -p ${PROJECT_NAME} -f environments/ci.yml run yarn-remove --remove-orphans
cp-env:
	cp ./src/.env.dev ./src/.env
build: cp-env
	docker compose -p ${PROJECT_NAME} -f environments/ci.yml run build
up: cp-env
	docker compose -p ${PROJECT_NAME} -f environments/development.yml up --force-recreate -d
down:
	docker compose -p ${PROJECT_NAME} -f environments/development.yml down
