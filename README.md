# Get started with the project

1. Get the clone of the project using HTTPs. We can also use SSH process will be same except the link provided
`git clone https://github.com/satyabackendeveloper/learning-backend.git`

I will be using `yarn` to work. If you do not have `yarn` you can use `npm` or install `yarn`.

2. Run `yarn install` to get all the node modules required for the project

3. Copy .env.example to .env

4. Copy ormconfig.json.example to ormconfig.json and update  you database details

5. Run `npx typorm migration:run` to migrate schema to database

6. Run `yarn seed:run` to run seeds

7. Run `yarn start` to start the server on PORT 3001.