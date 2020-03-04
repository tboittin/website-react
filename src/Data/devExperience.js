export const DEVEXP_DATA = [
    {
        id: 1,
        title: "Freelance Web Developer",
        company: "",
        country: "France",
        period: "2019 - ongoing",
        description: `
            Web Freelancer - React - WordPress - Static Website - SEO
        `,
    },
    {
        id: 2,
        title: "COBOL Analyst Developer",
        company: "Adaming Conseil",
        country: "France",
        period: "2018 - 2019",
        description: `
            Product evolution as part of planned actions.
            Development and unit tests.
            Reporting.
            Technical correction related to user Demands.
            Go live patches.
        `,
    }
]

export const getDevExp = () => {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve (DEVEXP_DATA)
      }, 20)
    })
}

