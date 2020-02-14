const TOOLS_DATA = [
    {
        id: '1',
        icon: '',
        name: 'React.js',
    },
    {
        id: '2',
        icon: '',
        name: 'Next.js',
    },
    {
        id: '3',
        name: 'React-BootStrap',
    },
    {
        id: '4',
        name: 'Git',
    },
    {
        id: '5',
        name: 'WordPress',
    },
    {
        id: '6',
        name: 'HTML & CSS',
    },
]

export const getTools = () => {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve (TOOLS_DATA)
      }, 2000)
    })
}