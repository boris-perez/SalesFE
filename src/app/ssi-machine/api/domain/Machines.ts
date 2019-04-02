import {MachineCapacity} from '../enum/MachineCapacity';

export class Machines {
  id : string;
  name : string;
  price : 0;
  description : string;
  mark : string;
  model : string;
  capacity : MachineCapacity;
}

export class MachinesDTO {

  constructor(id: string,
              name: string,
              price: 0,
              description: string,
              mark: string,
              model: string,
              capacity: MachineCapacity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.mark = mark;
    this.model = model;
    this.capacity = capacity;
  }

  id : string;
  name : string;
  price : 0;
  description : string;
  mark : string;
  model : string;
  capacity : MachineCapacity;
}
