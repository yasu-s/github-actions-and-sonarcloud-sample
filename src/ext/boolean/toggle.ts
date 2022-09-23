export {};

declare global {
  interface Boolean {
    /**
     * [拡張メソッド]
     * booleanのtrue/falseを切り替えます
     * @return 切り替え後のboolean
     */
    toggle(): boolean;
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

Boolean.prototype.toggle = function(): boolean {
  return !(<boolean>this);
};
