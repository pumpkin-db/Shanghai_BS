/**
 * map.js - 地图初始化（上海地图 + 天地图同时叠加）
 *
 * 前提：上海市地图服务坐标系已改为 EPSG:4326（与天地图一致才能叠加）
 *       需在 iDesktopX 中设置地图坐标系为 EPSG:4326 后重新发布服务
 */

// ===== 配置 =====
var MAP_URL = 'http://localhost:8090/iserver/services/map-ShanghaiMap-3/rest/maps/上海市';
// 天地图密钥：c43168211498c64b2efe6fd50fb567eb
var TIANDITU_KEY = '';

// ===== 初始化地图（EPSG:4326）=====
var map = L.map('map', {
    crs: L.CRS.EPSG4326,
    center: [31.23, 121.47],  // 上海中心
    zoom: 11,
    maxZoom: 18
});

// ===== 加载天地图（底图）=====
new L.supermap.TiandituTileLayer({
    key: TIANDITU_KEY,
    layerType: 'vec'
}).addTo(map);

// 天地图注记图层（显示地名标注）
new L.supermap.TiandituTileLayer({
    key: TIANDITU_KEY,
    layerType: 'cva'
}).addTo(map);

// ===== 加载上海市地图（叠加在天地图之上，半透明）=====
new L.supermap.TiledMapLayer(MAP_URL, {
    transparent: true,
    opacity: 0.8
}).addTo(map);

console.log('地图加载完成：天地图 + 上海市地图');
