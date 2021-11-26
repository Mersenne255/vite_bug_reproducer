import {ConfigEnv, defineConfig, UserConfigExport} from "vite";
import {resolve} from 'path';

export default async ({mode}: ConfigEnv) => {
  const config: UserConfigExport = {
    server: {
      host: "0.0.0.0",
      port: 3002,
    },
    root: "./src",
    build: {
      outDir: "../dist",
      target: "esnext",
      minify: false,
    }
  }
  return defineConfig(config);
};