const INFOS_DATA = {
    profession: 'Enthusiastic Web Developer',
    age: 25,
    website: 'https://tboittin.github.io/',
    mail: 'tboittin@gmail.com',
    mailto: 'mailto:tboittin@gmail.com',
    phone: '+33623397978',
    phoneCall: 'tel:+33623397978',
    linkedIn: 'https://www.linkedin.com/in/thomasboittin/'
}

export const getInfos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve (INFOS_DATA)
      }, 100)
    })
}