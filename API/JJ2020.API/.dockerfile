FROM mcr.microsoft.com/dotnet/aspnet:2.1 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:2.1 AS build
WORKDIR /src
COPY ["JJ2020.API/JJ2020.API.csproj", "JJ2020.API/"]
COPY ["JJ2020.BLL/JJ2020.BLL.csproj", "JJ2020.BLL/"]
COPY ["JJ2020.DOMAIN/JJ2020.DOMAIN.csproj", "JJ2020.DOMAIN/"]
COPY ["JJ2020.INFRA/JJ2020.INFRA.csproj", "JJ2020.INFRA/"]
RUN dotnet restore "JJ2020.API/JJ2020.API.csproj"
COPY . .
WORKDIR "/src/JJ2020.API"
RUN dotnet build "JJ2020.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "JJ2020.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .