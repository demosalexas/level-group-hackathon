import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from 'src/entities/item.entity';

@Injectable()
export class AppService {
  items: Array<Item> = [];
  async getItems(): Promise<{ items: Item[] }> {
    return {
      items: this.items,
    };
  }

  async createItem(createItemDto: CreateItemDto): Promise<{ item: Item }> {
    const item = {
      id: this.items.length + 1,
      name: createItemDto.name,
      quantity: createItemDto.quantity,
    };

    this.items.push(item);

    return {
      item: item,
    };
  }

  async deleteItem(itemId: number): Promise<any> {
    if (this.items.find((item: Item) => item.id === Number(itemId))) {
      const itemWithIdIndex = this.items.findIndex(
        (item) => item.id === itemId,
      );
      console.log(itemWithIdIndex)
      this.items.splice(itemWithIdIndex, 1);
      console.log(this.items)
      return true;
    }

    console.log(this.items, 2)

    return false;
  }
}
