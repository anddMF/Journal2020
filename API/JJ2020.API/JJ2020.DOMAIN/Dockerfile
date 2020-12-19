FROM mcr.microsoft.com/dotnet/aspnet:2.1 AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:2.1 AS build
WORKDIR /src
COPY ["JJ2020.DOMAIN/JJ2020.DOMAIN.csproj", "JJ2020.DOMAIN/"]
RUN dotnet restore "JJ2020.DOMAIN/JJ2020.DOMAIN.csproj"
COPY . .
WORKDIR "/src/JJ2020.DOMAIN"
RUN dotnet build "JJ2020.DOMAIN.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "JJ2020.DOMAIN.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "JJ2020.DOMAIN.dll"]
