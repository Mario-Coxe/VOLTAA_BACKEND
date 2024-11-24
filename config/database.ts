import Env from '@ioc:Adonis/Core/Env'
import { resolve } from 'path'
import type { DatabaseConfig } from '@ioc:Adonis/Lucid/Database'
import { loadDirectories } from 'App/loadMigrations'

function loadMigrationDirectories(baseDir: string): string[] {
  const allDirectories = loadDirectories(baseDir)
  return allDirectories.filter((dir) => dir.includes('migrations'))
}

function loadSeederDirectories(baseDir: string): string[] {
  const allDirectories = loadDirectories(baseDir)
  return allDirectories.filter((dir) => dir.includes('seeders'))
}

const baseDir = resolve(__dirname, '../app/core')

const migrationDirectories = [
  ...loadMigrationDirectories(baseDir),
  resolve(__dirname, './database/migrations'),
]

const seederDirectories = [
  ...loadSeederDirectories(baseDir),
  resolve(__dirname, './database/seeders'),
]

const databaseConfig: DatabaseConfig = {
  connection: Env.get('DB_CONNECTION'),
  connections: {
    mysql: {
      client: 'mysql',
      connection: {
        host: Env.get('DB_HOST', '127.0.0.1'),
        port: Env.get('DB_PORT', '3306'),
        user: Env.get('MYSQL_USER'),
        password: Env.get('DB_PASSWORD'),
        database: Env.get('DB_DATABASE'),
      },
      migrations: {
        naturalSort: true,
        paths: migrationDirectories,
      },
      seeders: {
        paths: seederDirectories,
      },
      healthCheck: false,
      debug: false,
    },
  },
}

export default databaseConfig
