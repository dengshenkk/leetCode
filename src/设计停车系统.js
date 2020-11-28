/**
 请你实现ParkingSystem类：

 ParkingSystem(int big, int medium, int small)初始化ParkingSystem类，三个参数分别对应每种停车位的数目。
 bool addCar(int carType)检查是否有carType对应的停车位。carType有三种类型：大，中，小，分别用数字1，2和3表示。一辆车只能停在carType对应尺寸的停车位中。如果没有空车位，请返回false，否则将该车停入车位并返回true。

 * @param big 1
 * @param medium 2
 * @param small 3
 * @constructor
 */
function ParkingSystem(big, medium, small) {
  this.big = big
  this.medium = medium
  this.small = small
}

ParkingSystem.prototype.addCar = function (carType) {
  switch (carType) {
    case 1:
      if (this.big < 1) {
        return false
      }
      this.big--
      break
    case 2:
      if (this.medium < 1) {
        return false
      }
      this.medium--
      break
    case 3:
      if (this.small < 1) {
        return false
      }
      this.small--
      break
  }
  return true
}

const parkingSystem = new ParkingSystem(1, 1, 0)
console.log(`parkingSystem.addCar(1) :`, parkingSystem.addCar(1))
console.log(`parkingSystem.addCar(2) :`, parkingSystem.addCar(2))
console.log(`parkingSystem.addCar(3) :`, parkingSystem.addCar(3))
console.log(`parkingSystem.addCar(1) :`, parkingSystem.addCar(1))

