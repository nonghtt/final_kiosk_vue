const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: [
    'vue',
    'element-ui' // Less를 사용하는 라이브러리의 이름을 여기에 추가해줍니다.
  ],
  css: {
    loaderOptions: {
      less: {
        // 필요한 Less 옵션을 추가할 수 있습니다.
      }
    }
  }
})
