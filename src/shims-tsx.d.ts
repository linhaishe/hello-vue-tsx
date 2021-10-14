import Vue, { VNode } from "vue";

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}

//错误说明是检测不到有msg这个参数类型因为这个参数是我们后创建的vue在默认的组件中是检测不到的所以为了让框架能不管我们自己创建的参数我们需要在shims-tsx.d.ts文件中加入如下代码
declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    [propName: string]: any;
  }
}
