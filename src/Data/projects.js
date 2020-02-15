const PROJECTS_DATA = [

]

export const getProjects = () => {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve (PROJECTS_DATA)
      }, 100)
    })
}