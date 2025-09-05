const sellsInfo = [
    {
        month: "Jan",
        sale: 0
    },
    {
        month: "Feb",
        sale: 1000
    },
    {
        month: "Mar",
        sale: 0
    },
    {
        month: "Apr",
        sale: 1000
    },
    {
        month: "May",
        sale: 5000
    },
    {
        month: "Jun",
        sale: 1000
    },
    {
        month: "Jul",
        sale: 5000
    },
    {
        month: "Agu",
        sale: 1000
    },
    {
        month: "Sep",
        sale: 5000
    },
    {
        month: "Oct",
        sale: 8000
    },
    {
        month: "Nov",
        sale: 5000
    },
    {
        month: "Dec",
        sale: 8000
    }
]

const newMembers = [
    {
        id: 1,
        userName: 'Alireza Hosseini',
        isActive: true,
        userSkill: 'Web Developer'
    },
    {
        id: 2,
        userName: "Amin Farhadi",
        isActive: false,
        userSkill: "Back-end Developer"
    },
    {
        id: 3,
        userName: "Ali Abdollahi",
        isActive: false,
        userSkill: "AI Engineer"
    },
    {
        id: 4,
        userName: "Peyman Asadi",
        isActive: false,
        userSkill: "Networl Technesian"
    },
]

let transActions = [
    {
        id: 1,
        customer: 'Alireza Hosseini',
        date: "13 Agu",
        status: "approved",
        amount: 158
    },
    {
        id: 2,
        customer: "Amin Farhadi",
        date: "25 Jul",
        status: "declined",
        amount: 122
    },
    {
        id: 3,
        customer: "Ali Abdollahi",
        date: "18 Oct",
        status: "declined",
        amount: 39
    },
    {
        id: 4,
        customer: "Peyman Asadi",
        date: "1 Nov",
        status: "pending",
        amount: 75
    },
]

let usersInfo = [
    {
        id: 1,
        userName: "Alireza Hosseini",
        status: "active",
        transaction: "550$",
        email: "alirezahosseini52@gmail.com"
    },
    {
        id: 2,
        userName: "Reza Nasery",
        status: "active",
        transaction: "1400$",
        email: "rezaNasery2000@gmail.com"
    },
    {
        id: 3,
        userName: "Navid Vahidi",
        status: "deactive",
        transaction: "450$",
        email: "navid69844@gmail.com"
    },
    {
        id: 4,
        userName: "Taher mohammadi",
        status: "deactive",
        transaction: "900$",
        email: "taher74Mohammady@gmail.com"
    },
    {
        id: 5,
        userName: "Alireza Hosseini",
        status: "deactive",
        transaction: "550$",
        email: "alirezahosseini52@gmail.com"
    },
    {
        id: 6,
        userName: "Reza Nasery",
        status: "deactive",
        transaction: "1400$",
        email: "rezaNasery2000@gmail.com"
    },
    {
        id: 7,
        userName: "Navid Vahidi",
        status: "deactive",
        transaction: "450$",
        email: "navid69844@gmail.com"
    },
    {
        id: 8,
        userName: "Taher mohammadi",
        status: "deactive",
        transaction: "900$",
        email: "taher74Mohammady@gmail.com"
    },
]

let productsInfo = [
    {
        id: 1,
        name: "product-1",
        price: 152,
        imgSrc: "/coats/coat1.jpg",
        count: 20,
        saleInfo: [
            { month: "May", sale: 2000 },
            { month: "Jun", sale: 5000 },
            { month: "Oct", sale: 1000 }
        ]
    },
    {
        id: 2,
        name: "product-2",
        price: 555,
        imgSrc: "/coats/coat2.jpg",
        count: 20,
        saleInfo: [
            { month: "May", sale: 2000 },
            { month: "Jun", sale: 5000 },
            { month: "Oct", sale: 1000 }
        ]
    },
    {
        id: 3,
        name: "product-3",
        price: 140,
        imgSrc: "/coats/coat3.jpg",
        count: 20,
        saleInfo: [
            { month: "May", sale: 2000 },
            { month: "Jun", sale: 5000 },
            { month: "Oct", sale: 1000 }
        ]
    },
    {
        id: 4,
        name: "product-4",
        price: 495,
        imgSrc: "/coats/coat4.webp",
        count: 20,
        saleInfo: [
            { month: "May", sale: 2000 },
            { month: "Jun", sale: 5000 },
            { month: "Oct", sale: 1000 }
        ]
    },
    {
        id: 5,
        name: "product-5",
        price: 120,
        imgSrc: "/coats/coat5.jpg",
        count: 20,
        saleInfo: [
            { month: "May", sale: 2000 },
            { month: "Jun", sale: 5000 },
            { month: "Oct", sale: 1000 }
        ]
    },
    {
        id: 6,
        name: "product-6",
        price: 184,
        imgSrc: "/coats/coat6.webp",
        count: 20,
        saleInfo: [
            { month: "May", sale: 2000 },
            { month: "Jun", sale: 5000 },
            { month: "Oct", sale: 1000 }
        ]
    },
    {
        id: 7,
        name: "product-7",
        price: 271,
        imgSrc: "/coats/coat1.jpg",
        count: 20,
        saleInfo: [
            { month: "May", sale: 2000 },
            { month: "Jun", sale: 5000 },
            { month: "Oct", sale: 1000 }
        ]
    },
    {
        id: 8,
        name: "product-8",
        price: 350,
        imgSrc: "/coats/coat2.jpg",
        count: 20,
        saleInfo: [
            { month: "May", sale: 2000 },
            { month: "Jun", sale: 5000 },
            { month: "Oct", sale: 1000 }
        ]
    },
]

export { sellsInfo, newMembers, transActions, usersInfo, productsInfo }