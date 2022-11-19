import {defineConfig} from 'vite'
import Components from 'unplugin-vue-components/vite'
import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        vue(),
        Components({
            dirs: ['src/pages','src/components'], // 配置需要默认导入的自定义组件文件夹，该文件夹下的所有组件都会自动 import
            resolvers: [AntDesignVueResolver({importStyle: true, resolveIcons: true})],
            // 加上下面这一行作为配置项即可
            directoryAsNamespace: true,
        })
    ]
})