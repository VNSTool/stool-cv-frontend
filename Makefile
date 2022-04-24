PROJECT_NAME=stool_cv

up:
	docker compose -p ${PROJECT_NAME} -f environments/development.yaml up -d

down:
	docker compose -p ${PROJECT_NAME} -f environments/development.yaml down
