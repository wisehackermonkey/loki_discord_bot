# loki_discord_bot
 my first disord bot

![loki_bot_v1](/assets/loki_bot_v1.gif)
# how to run locally
create .env file
```bash
touch .env 
```

add to .env file
```bash
API_TOKEN=<discord api token>
ENVIRONMENT=dev or production
```
```
npm install 
npm start
```

# Docker run (Local)
```
docker build -t loki_discord_bot .
docker run -p 80 -it --rm --env-file=.env --name=loki loki_discord_bot  
```
# Docker-compose run 
```
docker-compose build

docker-compose up -d
```

# Docker publish
```
docker tag
```
![Screenshot_4](/assets/Screenshot_4.png)
# TODO
- ~~deploy to server~~
- heroku deploy
- auto publish docker container github actions