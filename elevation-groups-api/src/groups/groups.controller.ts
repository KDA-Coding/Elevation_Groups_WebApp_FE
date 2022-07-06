import { Controller, Get, Param, Query, NotFoundException } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { get } from 'http';

@Controller('groups')
export class GroupsController {

    constructor(private readonly groupService: GroupsService) {}

    @Get()
    getGroups() {
        return this.groupService.findAllGroups();
    }

    @Get()
    getFilteredGroups(@Query() query: any): string {
    return this.groupService.findFilteredGroups(query.id);
  }


    @Get(':groupId')
    getGroupById(@Param('groupId') id:number) {
        let group = this.groupService.findGroupById(id);

        if(!group) {
            throw new NotFoundException(`Task with Id ${id} not found`)
        }

        return group
    }

}
