
server:
	python3 manage.py runserver

migrations:
	python3 manage.py makemigrations

migrate:
	python3 manage.py migrate

add:
	git add .

push:
	git push origin master