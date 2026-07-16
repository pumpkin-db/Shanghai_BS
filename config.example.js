// 配置文件模板
// 复制本文件为 config.js，填入你的 API Key

export const config = {
  // 高德地图 API Key（用于地理编码）
  // 申请地址：https://console.amap.com/
  AMAP_KEY: '你的高德APIKey',

  // iServer 服务地址（本地开发）
  ISERVER_URL: 'http://localhost:8090/iserver',

  // 服务名称（根据实际发布的服务修改）
  MAP_SERVICE: 'City',
  DATA_SERVICE: 'City',
  SCENE_SERVICE: 'City'
}
