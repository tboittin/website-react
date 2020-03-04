export const SKILLS_DATA = [
    {
        id: '1',
        name: 'Autodidact'
    },
    // {
    //     id: '2',
    //     name: 'Teamwork'
    // },
    {
        id: '3',
        name: 'French & English'
    },
]

export const getSkills = () => {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve (SKILLS_DATA)
      }, 20)
    })
}