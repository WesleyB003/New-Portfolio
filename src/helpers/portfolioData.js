import dream from '../images/projectsIcon/DreamJournal.png'
import netflix from '../images/projectsIcon/NetflixNChili.png'
import renaissance from '../images/projectsIcon/renaissanceRags.png'


const portfolioData = [
    {
        image: dream,
        link: 'https://frozen-atoll-87689.herokuapp.com/',
        desc: 'Dream Journal',
        summary: 'This application assists a user in recording their dreams.',
        tech: 'HTML | CSS | JavaScript | Express | Sequelize'
    },
    {
        image: netflix,
        link: 'https://reinholz36.github.io/NetflixnChili/',
        desc: 'Netflix and Chili',
        summary: 'This application assists a user to find a recipe to accompany a movie they intend to watch.',
        tech: 'HTML | CSS | JavaScript | Materialize'
    },
    {
        image: renaissance,
        link: 'https://whispering-fjord-16472.herokuapp.com/',
        desc: 'Renaissance Rags',
        summary: 'This application is a online store where a user can purchace costumes for the Renaissance fair.',
        tech: 'Mongoose | Express | React | Node.js | Redux | GraphQL'
    }
]

export default portfolioData