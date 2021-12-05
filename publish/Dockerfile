FROM mcr.microsoft.com/dotnet/aspnet:5.0-buster-slim AS base

WORKDIR /app
COPY . .
# ENTRYPOINT ["dotnet", "API.dll"]
# Use the following instead for Heroku
CMD ASPNETCORE_URLS=http://*:$PORT dotnet API.dll