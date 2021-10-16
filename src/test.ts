class City {
  //成员变量
  cName: string;
  clevel: number;

  //构造函数
  constructor(name: string, level: number) {
    this.cName = name;
    this.clevel = level;
  }
  //成员方法

  about() {
    console.log(`here is ${this.cName},level is ${this.clevel}`);
  }
}

let c1 = new City("pcity", 2);

c1.about();
