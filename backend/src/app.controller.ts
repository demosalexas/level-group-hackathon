import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from 'src/entities/item.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getItems() {
    return this.appService.getItems();
  }

  @Post()
  async createItem(@Body() createItemDto: CreateItemDto) {
    return this.appService.createItem(createItemDto);
  }

  @Delete(':itemId')
  async deleteItem(@Param('itemId') itemId: number) {
    return this.appService.deleteItem(itemId);
  }
}
