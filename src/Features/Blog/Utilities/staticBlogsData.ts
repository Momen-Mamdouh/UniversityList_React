import CairoUniversity from '@/src/assets/blog/cairo-University.jpg';
import ForeignUniversity from '@/src/assets/blog/foreign-University.jpg';
import LibraryBuilding from '@/src/assets/blog/library-University.jpg';
import { IBlogCard } from '@/src/Features/Blog/Interfaces/IGNewsResponse';
import { fallbackImg } from "@/src/Utilities/environment";

const currentDay = new Date().getDate();
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
const today = `${currentMonth}-${currentDay}-${currentYear}`;
let createdId = "79c83fda7e04450be30c55c02bce7e88";

export const blogCardsData:IBlogCard[] = [

        {
            id:createdId,
            title: 'Cairo University Blog',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat gravida justo at congue. Vestibulum id dolor et purus interdum blandit. Fusce et efficitur est, non luctus tellus. Pellentesque iaculis.',
            content: 'Blogs',
            url: 'https://study-more.com/criteria-selecting-university-study-abroad/',
            image: CairoUniversity ?? fallbackImg,
            publishedAt: today,
            source: {
                id:createdId,
                name:'Cairo University',
                url:'https://study-more.com/criteria-selecting-university-study-abroad/'
            }
        },

        {
            id:`${createdId}1`,
            title: 'Foreign University Blog',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat gravida justo at congue. Vestibulum id dolor et purus interdum blandit. Fusce et efficitur est, non luctus tellus. Pellentesque iaculis.',
            content: 'string',
            url: 'https://uwaterloo.ca/future-students/missing-manual/applying/nine-factors-consider-when-choosing-university',
            image: ForeignUniversity ?? fallbackImg, 
            publishedAt: today,
            source: {
                id:`${createdId}1`,
                name:'Foreign University',
                url:'https://uwaterloo.ca/future-students/missing-manual/applying/nine-factors-consider-when-choosing-university'
            }
        },

        {
            id:`${createdId}2`,
            title: 'Library Building',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat gravida justo at congue. Vestibulum id dolor et purus interdum blandit. Fusce et efficitur est, non luctus tellus. Pellentesque iaculis.',
            content: 'Library Building With tress on it',
            url: 'https://www.topuniversities.com/blog/how-choose-university-6-tips',
            image: LibraryBuilding ?? fallbackImg,
            publishedAt: today,
            source: {
                id:`${createdId}2`,
                name:'Library Building',
                url:'https://www.topuniversities.com/blog/how-choose-university-6-tips'
            }
        },
    
]
