import { Controller, NotImplementedException } from '@nestjs/common';
import { get } from 'http';
import { Get } from '@nestjs/common';

@Controller('groups')
export class GroupsController {

    @Get()
    getGroups() {
        throw new NotImplementedException();
    }

}
