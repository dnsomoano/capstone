dotnet publish -c Release

cp dockerfile ./bin/release/netcoreapp2.1/publish

docker build -t daily-map-image ./bin/release/netcoreapp2.1/publish

docker tag daily-map-image registry.heroku.com/daily-map/web

docker push registry.heroku.com/daily-map/web

heroku container:release web -a daily-map

# sudo chmod 755 deploy.sh
# ./deploy.sh