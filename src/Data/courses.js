export const COURSES_DATA = [
    {
        id: 1,
        title: "Udemy - Complete Next.js with React & Node",
        status: "ongoing",
        projects: [
            {
                id: 1,
                title: "Movie DB",
                description: "Movie DB description.",
            },
        ]
    },
    {
        id: 2,
        title: "CodeCademy - React course",
        status: "complete",
        projects: [
            {
                id: 1,
                title: "ravenous",
                description: "ravenous description.",
            },
            {
                id: 2,
                title: "jammming",
                description: "jammming description.",
            },
        ]
    },
    {
        id: 3,
        title: "CodeCademy - Web Development Path",
        status: "",
        projects: [
            {
                id: 1,
                title: "Colmar Academy",
                description: "A flexbox website featuring the non existent Colmar Academy.",
            },
            {
                id: 2,
                title: "Excursion",
                description: "A promotional page for a fictional app called Excursion.",
            },
        ]
    },
    {
        id: 4,
        title: "OpenClassroom - Create a modern and professional website with WordPress",
        status: "",
        projects: [
            {
                id: 1,
                title: "FitActive",
                description: `It features the FitActive Gym. Homepage & blog page. I made this WordPress page into a static page in order to integrate it to my webpage.`,
            },
        ]
    },
]

export const getCourses = () => {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve (COURSES_DATA)
      }, 20)
    })
}