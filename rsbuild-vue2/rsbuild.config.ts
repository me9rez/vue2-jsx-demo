import { defineConfig } from "@rsbuild/core";
import { pluginVue2 } from "@rsbuild/plugin-vue2";

export default defineConfig({
  plugins: [
    // pluginBabel({
    //   include: /\.(?:jsx|tsx)$/,
    //   babelLoaderOptions: {

    //   }
    // }),
    // pluginVue2Jsx({
    //   vueJsxOptions: {
    //     compositionAPI: false,
    //   },
    // }),
    pluginVue2(),
  ],
  tools: {
    swc: {
      jsc: {
        parser: {
          syntax: "typescript",
          tsx: true
        },
        transform: {
          react: {
            pragma: 'h',
            pragmaFrag: 'Fragment',
          }
        }
      },
    }
  }
});
