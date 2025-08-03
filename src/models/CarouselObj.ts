export class CarouselObj {
  // id用来唯一标识每个轮播图对象
  // 可以使用id进行路由跳转
  id: number
  // 轮播图片
  image: string

  // 构造函数
  constructor(id: number, image: string) {
    this.id = id
    this.image = image
  }

  // 跳转函数
  goTo(): void {
    console.log(`${this.id}`)
  }
}
