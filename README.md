# Allo Protocol Indexer Proof of Concept (PoC)
This repository contains the Allo Protocol Indexer Proof of Concept (PoC). Follow the instructions below to set up and run the project.

## Prerequisites
- pnpm
- Docker

## Installation

### 1. Install Project Dependencies
Run the following command to install the required dependencies using pnpm:
```bash
pnpm install
```

### 2. Start GraphQL Engine and Postgres
Launch the GraphQL engine and PostgreSQL database using Docker Compose:
```bash
docker compose -f ./generated/docker-compose.yaml up -d
```
This will bring up the required containers in detached mode.

## Handlers Setup
- Providers: Set up the shared providers in the `./src/providers directory`. These contain utility functions that assist handlers in interacting with different services.
- Handlers: Implement the business logic in the handler functions located in the `./src/handlers` directory. You'll find an example of how to use the providers in `./src/handlers/Allo.ts`.

## Running the Indexer Process
To start the indexer process in development mode, use the following command:
```bash
npx envio dev
```
For more options and detailed commands, refer to the Envio CLI by running:
```bash
npx envio --help
```
