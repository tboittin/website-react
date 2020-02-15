const ISTOMEXP_DATA = [
    {
        id: 1,
        title: "Agronomy Engineer",
        company: "IIRR",
        country: "Philippines",
        period: "2016",
        description: `
            Short term impact study - family farming support project - Cavite province.
            Monitoring tool development - better reporting & improved project management.            
        `,
    },
]

export const getIstomExp = () => {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve (ISTOMEXP_DATA)
      }, 100)
    })
}