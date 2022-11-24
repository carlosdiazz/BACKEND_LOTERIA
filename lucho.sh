rm -rf mysql_data postgres_data mongo_data node_modules

docker compose up -d
sleep 10
pnpm i

sleep 10
if [ ! -f ./src/database/SQL/migrations/*.ts ];
then
  echo "Generarnado Migrations..."
  npm run typeorm:generate-migration --name=first_migrations
fi

#npm run typeorm:generate-migration --name=first_migrations
npm run typeorm:run-migrations
npm run seed:run

pnpm run dev
