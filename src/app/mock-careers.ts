import { Career } from './object-types/career';
import { Specialization } from './object-types/specialization';
import { Talent } from './object-types/talent';
import { Skill } from './object-types/skill';

export const SKILLS: Skill[] = [
    {id: 1, name: 'Ducking', type: 'Combat', characteristic: 'Brawn'},
    {id: 2, name: 'Dipping', type: 'General', characteristic: 'Agility'},
    {id: 3, name: 'Diving', type: 'Knowledge', characteristic: 'intellect'},
    {id: 4, name: 'Dodging', type: 'Combat', characteristic: 'Cunning'},
    {id: 5, name: 'Flying', type: 'General', characteristic: 'Willpower'},
    {id: 6, name: 'Jumping', type: 'Knowledge', characteristic: 'Presence'},
    {id: 7, name: 'Running', type: 'Combat', characteristic: 'Brawn'},
    {id: 8, name: 'Crying', type: 'General', characteristic: 'Agility'}
];

export const TALEONE: Talent[] = [
    {id: 1, name: 'Tale gnfds87', type: 'Action', ranked: false, description: 'Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium', right: true, down: true},
    {id: 2, name: 'Tale bdsv89p', type: 'Action', ranked: true, description: 'Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium', right: false, down: true},
    {id: 3, name: 'Tale v-0', type: 'Action', ranked: false, description: 'Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium', right: true, down: true},
    {id: 4, name: 'Tale vai0-', type: 'Action', ranked: true, description: 'Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium', right: true, down: false},
    {id: 5, name: 'Tale ;ovlbk', type: 'Action', ranked: false, description: 'Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium', right: false, down: true},
    {id: 6, name: 'Tale vcb0-i', type: 'Action', ranked: true, description: 'Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium', right: false, down: true},
    {id: 7, name: 'Tale vcx098b7', type: 'Action', ranked: false, description: 'Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium', right: true, down: true},
    {id: 8, name: 'Tale vzxc0-i', type: 'Action', ranked: true, description: 'Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium', right: true, down: false},
    {id: 9, name: 'Tale vxz=-90', type: 'Action', ranked: false, description: 'Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium', right: false, down: true},
    {id: 10, name: 'Tale sgdf0', type: 'Action', ranked: false, description: 'Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium', right: true, down: true},
    {id: 11, name: 'Tale sdgf-9-0', type: 'Action', ranked: false, description: 'Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium', right: true, down: false},
    {id: 12, name: 'Tale gsdf8g7', type: 'Action', ranked: true, description: 'Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium', right: true, down: true},
    {id: 13, name: 'Tale xbcv9klj', type: 'Action', ranked: false, description: 'Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium', right: true, down: true},
    {id: 14, name: 'Tale qw;e.,', type: 'Action', ranked: true, description: 'Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium', right: false, down: true},
    {id: 15, name: 'Tale vdsfpxcoi', type: 'Action', ranked: false, description: 'Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium', right: true, down: true},
    {id: 16, name: 'Tale xzbpoib', type: 'Action', ranked: false, description: 'Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium', right: false, down: true},
    {id: 17, name: 'Tale xzbp[ob]', type: 'Action', ranked: true, description: 'Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium', right: false, down: false},
    {id: 18, name: 'Tale gret89gd', type: 'Action', ranked: false, description: 'Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium', right: true, down: true},
    {id: 19, name: 'Tale vcxb098', type: 'Action', ranked: false, description: 'Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium', right: true, down: true},
    {id: 20, name: 'Tale bcxvb98', type: 'Action', ranked: false, description: 'Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium Lorem Ipsumm I am Delierium', right: true, down: false}
];

export const TALETWO: Talent[] = [
    {id: 21, name: 'Tale ilu34h2', type: 'Incidental', ranked: false, description: 'Wonky sdaflkadsjf Lorem Ipsumm I am Delierium jlkfdasja;sjkl dfjkl ;fdsj;lkfk;jlsd;kljfjk;sda ;jklfldsakjfasdlkf sfkjsl;djflkd;fdl;kfj', right: true, down: false},
    {id: 22, name: 'Tale 25kj4hn', type: 'Incidental', ranked: false, description: 'Wonky sdaflkadsjf Lorem Ipsumm I am Delierium jlkfdasja;sjkl dfjkl ;fdsj;lkfk;jlsd;kljfjk;sda ;jklfldsakjfasdlkf sfkjsl;djflkd;fdl;kfj', right: true, down: false},
    {id: 23, name: 'Tale 1k3j425.nh', type: 'Incidental', ranked: false, description: 'Wonky sdaflkadsjf Lorem Ipsumm I am Delierium jlkfdasja;sjkl dfjkl ;fdsj;lkfk;jlsd;kljfjk;sda ;jklfldsakjfasdlkf sfkjsl;djflkd;fdl;kfj', right: true, down: false},
    {id: 24, name: 'Tale l1kn5423', type: 'Incidental', ranked: false, description: 'Wonky sdaflkadsjf Lorem Ipsumm I am Delierium jlkfdasja;sjkl dfjkl ;fdsj;lkfk;jlsd;kljfjk;sda ;jklfldsakjfasdlkf sfkjsl;djflkd;fdl;kfj', right: true, down: false},
    {id: 25, name: 'Tale 1n4kl;2', type: 'Incidental', ranked: true, description: 'Wonky sdaflkadsjf Lorem Ipsumm I am Delierium jlkfdasja;sjkl dfjkl ;fdsj;lkfk;jlsd;kljfjk;sda ;jklfldsakjfasdlkf sfkjsl;djflkd;fdl;kfj', right: true, down: false},
    {id: 26, name: 'Tale 4lkn123', type: 'Incidental', ranked: true, description: 'Wonky sdaflkadsjf Lorem Ipsumm I am Delierium jlkfdasja;sjkl dfjkl ;fdsj;lkfk;jlsd;kljfjk;sda ;jklfldsakjfasdlkf sfkjsl;djflkd;fdl;kfj', right: true, down: false},
    {id: 27, name: 'Tale 62l;m', type: 'Incidental', ranked: false, description: 'Wonky sdaflkadsjf Lorem Ipsumm I am Delierium jlkfdasja;sjkl dfjkl ;fdsj;lkfk;jlsd;kljfjk;sda ;jklfldsakjfasdlkf sfkjsl;djflkd;fdl;kfj', right: true, down: false},
    {id: 28, name: 'Tale 15nkl34', type: 'Incidental', ranked: false, description: 'Wonky sdaflkadsjf Lorem Ipsumm I am Delierium jlkfdasja;sjkl dfjkl ;fdsj;lkfk;jlsd;kljfjk;sda ;jklfldsakjfasdlkf sfkjsl;djflkd;fdl;kfj', right: true, down: false},
    {id: 29, name: 'Tale 5jnkl1;3', type: 'Incidental', ranked: false, description: 'Wonky sdaflkadsjf Lorem Ipsumm I am Delierium jlkfdasja;sjkl dfjkl ;fdsj;lkfk;jlsd;kljfjk;sda ;jklfldsakjfasdlkf sfkjsl;djflkd;fdl;kfj', right: true, down: false},
    {id: 30, name: 'Tale 5k1l34', type: 'Incidental', ranked: true, description: 'Wonky sdaflkadsjf Lorem Ipsumm I am Delierium jlkfdasja;sjkl dfjkl ;fdsj;lkfk;jlsd;kljfjk;sda ;jklfldsakjfasdlkf sfkjsl;djflkd;fdl;kfj', right: true, down: false},
    {id: 31, name: 'Tale 51iklo3', type: 'Incidental', ranked: false, description: 'Wonky sdaflkadsjf Lorem Ipsumm I am Delierium jlkfdasja;sjkl dfjkl ;fdsj;lkfk;jlsd;kljfjk;sda ;jklfldsakjfasdlkf sfkjsl;djflkd;fdl;kfj', right: true, down: false},
    {id: 32, name: 'Tale 75ml4k', type: 'Incidental', ranked: false, description: 'Wonky sdaflkadsjf Lorem Ipsumm I am Delierium jlkfdasja;sjkl dfjkl ;fdsj;lkfk;jlsd;kljfjk;sda ;jklfldsakjfasdlkf sfkjsl;djflkd;fdl;kfj', right: true, down: false},
    {id: 33, name: 'Tale klnghd', type: 'Incidental', ranked: false, description: 'Wonky sdaflkadsjf Lorem Ipsumm I am Delierium jlkfdasja;sjkl dfjkl ;fdsj;lkfk;jlsd;kljfjk;sda ;jklfldsakjfasdlkf sfkjsl;djflkd;fdl;kfj', right: true, down: false},
    {id: 34, name: 'Tale aopijagbfd', type: 'Incidental', ranked: false, description: 'Wonky sdaflkadsjf Lorem Ipsumm I am Delierium jlkfdasja;sjkl dfjkl ;fdsj;lkfk;jlsd;kljfjk;sda ;jklfldsakjfasdlkf sfkjsl;djflkd;fdl;kfj', right: true, down: false},
    {id: 35, name: 'Tale n4oi;3', type: 'Incidental', ranked: false, description: 'Wonky sdaflkadsjf Lorem Ipsumm I am Delierium jlkfdasja;sjkl dfjkl ;fdsj;lkfk;jlsd;kljfjk;sda ;jklfldsakjfasdlkf sfkjsl;djflkd;fdl;kfj', right: true, down: false},
    {id: 36, name: 'Tale q3m4l;t', type: 'Incidental', ranked: true, description: 'Wonky sdaflkadsjf Lorem Ipsumm I am Delierium jlkfdasja;sjkl dfjkl ;fdsj;lkfk;jlsd;kljfjk;sda ;jklfldsakjfasdlkf sfkjsl;djflkd;fdl;kfj', right: true, down: false},
    {id: 37, name: 'Tale q3ntk;jo4', type: 'Incidental', ranked: false, description: 'Wonky sdaflkadsjf Lorem Ipsumm I am Delierium jlkfdasja;sjkl dfjkl ;fdsj;lkfk;jlsd;kljfjk;sda ;jklfldsakjfasdlkf sfkjsl;djflkd;fdl;kfj', right: true, down: false},
    {id: 38, name: 'Tale tlk34qmn', type: 'Incidental', ranked: false, description: 'Wonky sdaflkadsjf Lorem Ipsumm I am Delierium jlkfdasja;sjkl dfjkl ;fdsj;lkfk;jlsd;kljfjk;sda ;jklfldsakjfasdlkf sfkjsl;djflkd;fdl;kfj', right: true, down: false},
    {id: 39, name: 'Tale qtml;34', type: 'Incidental', ranked: true, description: 'Wonky sdaflkadsjf Lorem Ipsumm I am Delierium jlkfdasja;sjkl dfjkl ;fdsj;lkfk;jlsd;kljfjk;sda ;jklfldsakjfasdlkf sfkjsl;djflkd;fdl;kfj', right: true, down: false},
    {id: 40, name: 'Tale nqt3jk4;', type: 'Incidental', ranked: false, description: 'Wonky sdaflkadsjf Lorem Ipsumm I am Delierium jlkfdasja;sjkl dfjkl ;fdsj;lkfk;jlsd;kljfjk;sda ;jklfldsakjfasdlkf sfkjsl;djflkd;fdl;kfj', right: true, down: false}
];

export const TALETHREE: Talent[] = [
    {id: 41, name: 'Tale safdd', type: 'Maneuver', ranked: false, description: 'MONKEY ARE asdf:SDAJNLFGJDASl WIller sadf;lk asf;dl k fsa;dlk s;fadlk;ldsk f;lsdajkl;kjsa sd lakf;j  s;k dlafjl;fdkasj   k;ldajsf sdkj fl;ajklk asjk j k;lasd;lkfjas dl;kfj a;lkdjf asdkl.fjjdf kf sdfakljhsdfl kjhsad', right: true, down: true},
    {id: 42, name: 'Tale jgfhkj', type: 'Maneuver', ranked: true, description: 'MONKEY ARE asdf:SDAJNLFGJDASl WIller sadf;lk asf;dl k fsa;dlk s;fadlk;ldsk f;lsdajkl;kjsa sd lakf;j  s;k dlafjl;fdkasj   k;ldajsf sdkj fl;ajklk asjk j k;lasd;lkfjas dl;kfj a;lkdjf asdkl.fjjdf kf sdfakljhsdfl kjhsad', right: false, down: true},
    {id: 43, name: 'Tale fgjhh', type: 'Maneuver', ranked: false, description: 'MONKEY ARE asdf:SDAJNLFGJDASl WIller sadf;lk asf;dl k fsa;dlk s;fadlk;ldsk f;lsdajkl;kjsa sd lakf;j  s;k dlafjl;fdkasj   k;ldajsf sdkj fl;ajklk asjk j k;lasd;lkfjas dl;kfj a;lkdjf asdkl.fjjdf kf sdfakljhsdfl kjhsad', right: true, down: true},
    {id: 44, name: 'Tale 34', type: 'Maneuver', ranked: false, description: 'MONKEY ARE asdf:SDAJNLFGJDASl WIller sadf;lk asf;dl k fsa;dlk s;fadlk;ldsk f;lsdajkl;kjsa sd lakf;j  s;k dlafjl;fdkasj   k;ldajsf sdkj fl;ajklk asjk j k;lasd;lkfjas dl;kfj a;lkdjf asdkl.fjjdf kf sdfakljhsdfl kjhsad', right: true, down: true},
    {id: 45, name: 'Tale dfsiuhv', type: 'Maneuver', ranked: false, description: 'MONKEY ARE asdf:SDAJNLFGJDASl WIller sadf;lk asf;dl k fsa;dlk s;fadlk;ldsk f;lsdajkl;kjsa sd lakf;j  s;k dlafjl;fdkasj   k;ldajsf sdkj fl;ajklk asjk j k;lasd;lkfjas dl;kfj a;lkdjf asdkl.fjjdf kf sdfakljhsdfl kjhsad', right: true, down: true},
    {id: 46, name: 'Tale adsklj;ghj', type: 'Maneuver', ranked: false, description: 'MONKEY ARE asdf:SDAJNLFGJDASl WIller sadf;lk asf;dl k fsa;dlk s;fadlk;ldsk f;lsdajkl;kjsa sd lakf;j  s;k dlafjl;fdkasj   k;ldajsf sdkj fl;ajklk asjk j k;lasd;lkfjas dl;kfj a;lkdjf asdkl.fjjdf kf sdfakljhsdfl kjhsad', right: true, down: true},
    {id: 47, name: 'Tale klmaklgdsf', type: 'Maneuver', ranked: true, description: 'MONKEY ARE asdf:SDAJNLFGJDASl WIller sadf;lk asf;dl k fsa;dlk s;fadlk;ldsk f;lsdajkl;kjsa sd lakf;j  s;k dlafjl;fdkasj   k;ldajsf sdkj fl;ajklk asjk j k;lasd;lkfjas dl;kfj a;lkdjf asdkl.fjjdf kf sdfakljhsdfl kjhsad', right: false, down: true},
    {id: 48, name: 'Tale afs lk;d', type: 'Maneuver', ranked: false, description: 'MONKEY ARE asdf:SDAJNLFGJDASl WIller sadf;lk asf;dl k fsa;dlk s;fadlk;ldsk f;lsdajkl;kjsa sd lakf;j  s;k dlafjl;fdkasj   k;ldajsf sdkj fl;ajklk asjk j k;lasd;lkfjas dl;kfj a;lkdjf asdkl.fjjdf kf sdfakljhsdfl kjhsad', right: true, down: true},
    {id: 49, name: 'Tale fsad lk;m', type: 'Maneuver', ranked: false, description: 'MONKEY ARE asdf:SDAJNLFGJDASl WIller sadf;lk asf;dl k fsa;dlk s;fadlk;ldsk f;lsdajkl;kjsa sd lakf;j  s;k dlafjl;fdkasj   k;ldajsf sdkj fl;ajklk asjk j k;lasd;lkfjas dl;kfj a;lkdjf asdkl.fjjdf kf sdfakljhsdfl kjhsad', right: true, down: true},
    {id: 50, name: 'Tale afsd lk', type: 'Maneuver', ranked: true, description: 'MONKEY ARE asdf:SDAJNLFGJDASl WIller sadf;lk asf;dl k fsa;dlk s;fadlk;ldsk f;lsdajkl;kjsa sd lakf;j  s;k dlafjl;fdkasj   k;ldajsf sdkj fl;ajklk asjk j k;lasd;lkfjas dl;kfj a;lkdjf asdkl.fjjdf kf sdfakljhsdfl kjhsad', right: false, down: false},
    {id: 51, name: 'Tale af dl;kms', type: 'Maneuver', ranked: true, description: 'MONKEY ARE asdf:SDAJNLFGJDASl WIller sadf;lk asf;dl k fsa;dlk s;fadlk;ldsk f;lsdajkl;kjsa sd lakf;j  s;k dlafjl;fdkasj   k;ldajsf sdkj fl;ajklk asjk j k;lasd;lkfjas dl;kfj a;lkdjf asdkl.fjjdf kf sdfakljhsdfl kjhsad', right: true, down: true},
    {id: 52, name: 'Tale fliksakjdfkljn', type: 'Maneuver', ranked: false, description: 'MONKEY ARE asdf:SDAJNLFGJDASl WIller sadf;lk asf;dl k fsa;dlk s;fadlk;ldsk f;lsdajkl;kjsa sd lakf;j  s;k dlafjl;fdkasj   k;ldajsf sdkj fl;ajklk asjk j k;lasd;lkfjas dl;kfj a;lkdjf asdkl.fjjdf kf sdfakljhsdfl kjhsad', right: true, down: true},
    {id: 53, name: 'Tale afksldj', type: 'Maneuver', ranked: false, description: 'MONKEY ARE asdf:SDAJNLFGJDASl WIller sadf;lk asf;dl k fsa;dlk s;fadlk;ldsk f;lsdajkl;kjsa sd lakf;j  s;k dlafjl;fdkasj   k;ldajsf sdkj fl;ajklk asjk j k;lasd;lkfjas dl;kfj a;lkdjf asdkl.fjjdf kf sdfakljhsdfl kjhsad', right: true, down: true},
    {id: 54, name: 'Tale as dl;fkjlk;hjdf', type: 'Maneuver', ranked: false, description: 'MONKEY ARE asdf:SDAJNLFGJDASl WIller sadf;lk asf;dl k fsa;dlk s;fadlk;ldsk f;lsdajkl;kjsa sd lakf;j  s;k dlafjl;fdkasj   k;ldajsf sdkj fl;ajklk asjk j k;lasd;lkfjas dl;kfj a;lkdjf asdkl.fjjdf kf sdfakljhsdfl kjhsad', right: false, down: true},
    {id: 55, name: 'Tale as d;lfk', type: 'Maneuver', ranked: false, description: 'MONKEY ARE asdf:SDAJNLFGJDASl WIller sadf;lk asf;dl k fsa;dlk s;fadlk;ldsk f;lsdajkl;kjsa sd lakf;j  s;k dlafjl;fdkasj   k;ldajsf sdkj fl;ajklk asjk j k;lasd;lkfjas dl;kfj a;lkdjf asdkl.fjjdf kf sdfakljhsdfl kjhsad', right: true, down: true},
    {id: 56, name: 'Tale reiopwuty', type: 'Maneuver', ranked: true, description: 'MONKEY ARE asdf:SDAJNLFGJDASl WIller sadf;lk asf;dl k fsa;dlk s;fadlk;ldsk f;lsdajkl;kjsa sd lakf;j  s;k dlafjl;fdkasj   k;ldajsf sdkj fl;ajklk asjk j k;lasd;lkfjas dl;kfj a;lkdjf asdkl.fjjdf kf sdfakljhsdfl kjhsad', right: false, down: true},
    {id: 57, name: 'Tale 3457fgryt h', type: 'Maneuver', ranked: false, description: 'MONKEY ARE asdf:SDAJNLFGJDASl WIller sadf;lk asf;dl k fsa;dlk s;fadlk;ldsk f;lsdajkl;kjsa sd lakf;j  s;k dlafjl;fdkasj   k;ldajsf sdkj fl;ajklk asjk j k;lasd;lkfjas dl;kfj a;lkdjf asdkl.fjjdf kf sdfakljhsdfl kjhsad', right: true, down: true},
    {id: 58, name: 'Tale 094 jgdf', type: 'Maneuver', ranked: false, description: 'MONKEY ARE asdf:SDAJNLFGJDASl WIller sadf;lk asf;dl k fsa;dlk s;fadlk;ldsk f;lsdajkl;kjsa sd lakf;j  s;k dlafjl;fdkasj   k;ldajsf sdkj fl;ajklk asjk j k;lasd;lkfjas dl;kfj a;lkdjf asdkl.fjjdf kf sdfakljhsdfl kjhsad', right: true, down: true},
    {id: 59, name: 'Tale asldikg8', type: 'Maneuver', ranked: true, description: 'MONKEY ARE asdf:SDAJNLFGJDASl WIller sadf;lk asf;dl k fsa;dlk s;fadlk;ldsk f;lsdajkl;kjsa sd lakf;j  s;k dlafjl;fdkasj   k;ldajsf sdkj fl;ajklk asjk j k;lasd;lkfjas dl;kfj a;lkdjf asdkl.fjjdf kf sdfakljhsdfl kjhsad', right: true, down: false},
    {id: 60, name: 'Tale p9sudv', type: 'Maneuver', ranked: false, description: 'MONKEY ARE asdf:SDAJNLFGJDASl WIller sadf;lk asf;dl k fsa;dlk s;fadlk;ldsk f;lsdajkl;kjsa sd lakf;j  s;k dlafjl;fdkasj   k;ldajsf sdkj fl;ajklk asjk j k;lasd;lkfjas dl;kfj a;lkdjf asdkl.fjjdf kf sdfakljhsdfl kjhsad', right: true, down: true}
];

export const SPECONE: Specialization[] = [
    {id: 1, name: 'Pock', subtitle: 'Penis', skill_slots: 2, skills: [1, 2, 3, 4], talents: TALEONE},
    {id: 2, name: 'Tock', subtitle: 'Tenis', skill_slots: 2, skills: [5, 7, 2, 1], talents: TALETWO},
    {id: 3, name: 'Mock', subtitle: 'Menis', skill_slots: 2, skills: [7, 0, 3, 4], talents: TALETHREE}
];

export const SPECTWO: Specialization[] = [
    {id: 4, name: 'Hala', subtitle: 'Halo', skill_slots: 2, skills: [4, 3, 2, 1], talents: TALETHREE},
    {id: 5, name: 'Mala', subtitle: 'Malo', skill_slots: 2, skills: [3, 6, 0, 7], talents: TALETWO},
    {id: 6, name: 'Fala', subtitle: 'Falo', skill_slots: 2, skills: [5, 2, 3, 0], talents: TALEONE}
];

export const SPECTHREE: Specialization[] = [
    {id: 7, name: 'Boing', subtitle: 'Butt', skill_slots: 2, skills: [0, 6, 2, 4], talents: TALETWO},
    {id: 8, name: 'Doing', subtitle: 'Dutt', skill_slots: 2, skills: [1, 7, 5, 3], talents: TALEONE},
    {id: 9, name: 'Joing', subtitle: '', skill_slots: 2, skills: [1, 2, 7, 0], talents: TALETHREE}
];

export const CAREERS: Career[] = [
    {id: 1, name: 'Killer', skill_slots: 4, skills: [1, 2, 3, 4], specializations: SPECONE},
    {id: 2, name: 'Lover', skill_slots: 3, skills: [4, 3, 2, 1], specializations: SPECTWO},
    {id: 3, name: 'Liar', skill_slots: 4, skills: [5, 6, 7, 0], specializations: SPECTHREE},
    {id: 4, name: 'Maker', skill_slots: 3, skills: [0, 7, 6, 5], specializations: SPECTHREE},
    {id: 5, name: 'Fixer', skill_slots: 4, skills: [1, 3, 5, 7], specializations: SPECTWO},
    {id: 6, name: 'Hunter', skill_slots: 3, skills: [2, 4, 6, 0], specializations: SPECONE}
];
