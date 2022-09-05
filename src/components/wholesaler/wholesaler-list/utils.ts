const images:string[] = [
    '/wholesaler1.png',
    '/wholesaler2.png',
    '/wholesaler3.png',
    '/wholesaler4.png',
    '/wholesaler5.png',
    '/wholesaler2.png',
    '/wholesaler3.png',
    '/wholesaler4.png',
    '/wholesaler1.png',
    '/wholesaler2.png',
    '/wholesaler3.png',
]

export const randomImage = ():string => { 
    return images[Math.floor(Math.random()* images.length)];
 }
