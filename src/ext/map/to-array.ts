export {};

declare global {
  interface Map<K, V> {
    /**
     * [拡張メソッド]
     * Mapを配列に変換します
     * @return Map
     */
    toArray(): Array<{ key: K, value: V }>;
  }
}

//aaa
//bbb
//aaa
//bbb
//aaa
//bbb
//aaa
//bbb
//aaa
//bbb
//aaa
//bbb
//aaa
//bbb
//aaa
//bbb

Map.prototype.toArray = function<K, V>(): Array<{ key: K, value: V }> {
  const map = this as Map<K, V>;


  const items = new Array<{ key: K, value: V }>();
  map.forEach((value, key) => {
    items.push({ key: key, value: value });
  });

  return items;
};
