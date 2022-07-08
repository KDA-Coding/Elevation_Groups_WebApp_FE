import { Injectable } from '@nestjs/common';
import { GroupModel } from './groups.model';

@Injectable()
export class GroupsService {
  _groups: GroupModel[] = [
    {
      id: 1,
      campus: 'Asheville',
      demographic: 'Men',
      group_type: 'Marriage',
      meeting_date: '2020-11-02T19:16:57.985Z',
      zip_code: 28105,
      description:
        "A Men's group to help guide " +
        'married men through marriage hardships.',
    },
    {
      id: 2,
      campus: 'Ballantyne',
      demographic: 'Singles',
      group_type: 'Spiritual Growth',
      meeting_date: '2020-12-02T19:16:57.985Z',
      zip_code: 28277,
      description:
        'A singles group for growing ' + 'in the word and building community.',
    },
    {
      id: 3,
      campus: 'Blakeny',
      demographic: 'Women',
      group_type: 'Book Study',
      meeting_date: '2020-09-02T19:16:57.985Z',
      zip_code: 28276,
      description: 'Women studying books from Christian authors.',
    },
    {
      id: 4,
      campus: 'Columbia',
      demographic: 'Women',
      group_type: 'Book Study',
      meeting_date: '2020-09-02T19:16:57.985Z',
      zip_code: 28277,
      description:
        "A Women's group for studying " +
        'Christian novels and growing in faith.',
    },
    {
      id: 5,
      campus: 'Concord',
      demographic: 'Everyone Welcome',
      group_type: 'Parenting',
      meeting_date: '2020-11-02T19:16:57.985Z',
      zip_code: 28276,
      description: 'A group for all parents; new and experienced.',
    },
    {
      id: 6,
      campus: 'Elevation Online',
      demographic: 'Everyone Welcome',
      group_type: 'Sermon Discussion',
      meeting_date: '2020-09-02T19:16:57.985Z',
      zip_code: 28105,
      description: 'A group for discussing the weekly sermons',
    },
    {
      id: 7,
      campus: 'Gaston',
      demographic: 'Singles',
      group_type: 'Christian Basics',
      meeting_date: '2020-10-02T19:16:57.985Z',
      zip_code: 28275,
      description:
        'A group for new and continuing Christian ' +
        'singles to gain fellowship and grow in faith.',
    },
  ];

  findAllGroups(): GroupModel[] {
    return this._groups;
  }

  findGroupById(id: number) {
    return this._groups.find((g) => g.id == id);
  }

  findFilteredGroups(id: number): string {
    return `Group ID: ${id}`;
  }
}
