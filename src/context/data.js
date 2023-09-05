export const products =  [
    {
        id: 1,
        title: "Google Pixel - Black",
        img: "img/product-1.png",
        price: 10,
        company: "GOOGLE",
        info:
            "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo." +
            " Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf " +
            "authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware " +
            "sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac" +
            " stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 0,
        total: 0
    },
    {
        id: 2,
        title: "Samsung S7",
        img: "img/product-2.png",
        price: 16,
        company: "SAMSUNG",
        info:
            "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 0,
        total: 0
    },
    {
        id: 3,
        title: "HTC 10 - Black",
        img: "img/product-3.png",
        price: 8,
        company: "htc",
        info:
            "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 0,
        total: 0
    },
    {
        id: 4,
        title: "HTC 10 - White",
        img: "img/product-4.png",
        price: 18,
        company: "htc",
        info:
            "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 0,
        total: 0
    },
    {
        id: 5,
        title: "HTC Desire 626s",
        img: "img/product-5.png",
        price: 24,
        company: "htc",
        info:
            "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 0,
        total: 0
    },
    {
        id: 6,
        title: "Vintage Iphone",
        img: "img/product-6.png",
        price: 17,
        company: "apple",
        info:
            "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 0,
        total: 0
    },
    {
        id: 7,
        title: "Iphone 7",
        img: "img/product-7.png",
        price: 30,
        company: "apple",
        info:
            "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 0,
        total: 0
    },
    {
        id: 8,
        title: "Smashed Iphone",
        img: "img/product-8.png",
        price: 2,
        company: "apple",
        info:
            "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
        inCart: false,
        count: 0,
        total: 0
    }
];
export const orders = [
    {
        id: 1,
        date_order: '2023-08-21',
        client: {
            fullName: 'Hafid Ait oubouhou'
        },
        total: 1000,
        currency: '$',
        status: 'CREATED',
        mode_payment: 'By card',
        date_payment: null
    },
    {
        id: 2,
        date_order: '2023-08-21',
        client: {
            fullName: 'Ahmed HGTT'
        },
        total: 1000,
        currency: '$',
        status: 'CREATED',
        mode_payment: 'At the delivery',
        date_payment: null
    },
    {
        id: 3,
        date_order: '2023-08-21',
        client: {
            fullName: 'Karim Ardff'
        },
        total: 1000,
        currency: '$',
        status: 'VALIDATED',
        mode_payment: 'By card',
        date_payment: '2023-09-10'
    },
    {
        id: 4,
        date_order: '2023-08-21',
        client: {
            fullName: 'Karim Ardff'
        },
        total: 1000,
        currency: '$',
        status: 'VALIDATED',
        mode_payment: 'By card',
        date_payment: '2023-09-10'
    },
    {
        id: 5,
        date_order: '2023-08-21',
        client: {
            fullName: 'Karim Ardff'
        },
        total: 1000,
        currency: '$',
        status: 'VALIDATED',
        mode_payment: 'By card',
        date_payment: '2023-09-10'
    },
    {
        id: 6,
        date_order: '2023-08-21',
        client: {
            fullName: 'Karim Ardff'
        },
        total: 1000,
        currency: '$',
        status: 'VALIDATED',
        mode_payment: 'By card',
        date_payment: '2023-09-10'
    },
    {
        id: 7,
        date_order: '2023-08-21',
        client: {
            fullName: 'Karim Ardff'
        },
        total: 1000,
        currency: '$',
        status: 'VALIDATED',
        mode_payment: 'By card',
        date_payment: '2023-09-10'
    },
    {
        id: 8,
        date_order: '2023-08-21',
        client: {
            fullName: 'Karim Ardff'
        },
        total: 1000,
        currency: '$',
        status: 'VALIDATED',
        mode_payment: 'By card',
        date_payment: '2023-09-10'
    },
    {
        id: 9,
        date_order: '2023-08-21',
        client: {
            fullName: 'Karim Ardff'
        },
        total: 1000,
        currency: '$',
        status: 'VALIDATED',
        mode_payment: 'By card',
        date_payment: '2023-09-10'
    },
    {
        id: 10,
        date_order: '2023-08-21',
        client: {
            fullName: 'Karim Ardff'
        },
        total: 1000,
        currency: '$',
        status: 'VALIDATED',
        mode_payment: 'By card',
        date_payment: '2023-09-10'
    }
];
export const stock =   [
    {
        id: 1,
        product: {
            id: 1,
            title: "Smashed Iphone",
            img: "img/product-1.png",
            price: 102,
            currency: 'Dollar',
            company: "Apple",
            info:
                "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha " +
                "paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. " +
                "Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella " +
                "VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy " +
                "semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
            inCart: false,
            count: 0,
            total: 0
        },
        quantity: 20,
        emplacement: '-', //indique l'emplacement physique où le produit est stocké (par exemple, étagère 1, rangée A, etc.)
        date_mise_a_jour: '2023-07-21'
    },
    {
        id: 2,
        product: {
            id: 1,
            title: "Smashed Iphone",
            img: "img/product-1.png",
            price: 102,
            currency: 'Dollar',
            company: "Apple",
            info:
                "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha " +
                "paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. " +
                "Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella " +
                "VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy " +
                "semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
            inCart: false,
            count: 0,
            total: 0
        },
        quantity: 20,
        emplacement: '-', //indique l'emplacement physique où le produit est stocké (par exemple, étagère 1, rangée A, etc.)
        date_mise_a_jour: '2023-07-21'
    },
    {
        id: 3,
        product: {
            id: 1,
            title: "Smashed Iphone",
            img: "img/product-1.png",
            price: 102,
            currency: 'Dollar',
            company: "Apple",
            info:
                "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha " +
                "paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. " +
                "Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella " +
                "VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy " +
                "semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
            inCart: false,
            count: 0,
            total: 0
        },
        quantity: 20,
        emplacement: '-', //indique l'emplacement physique où le produit est stocké (par exemple, étagère 1, rangée A, etc.)
        date_mise_a_jour: '2023-07-21'
    },
    {
        id: 4,
        product: {
            id: 1,
            title: "Smashed Iphone",
            img: "img/product-1.png",
            price: 102,
            currency: 'Dollar',
            company: "Apple",
            info:
                "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha " +
                "paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. " +
                "Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella " +
                "VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy " +
                "semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
            inCart: false,
            count: 0,
            total: 0
        },
        quantity: 20,
        emplacement: '-', //indique l'emplacement physique où le produit est stocké (par exemple, étagère 1, rangée A, etc.)
        date_mise_a_jour: '2023-07-21'
    },
    {
        id: 5,
        product: {
            id: 1,
            title: "Smashed Iphone",
            img: "img/product-1.png",
            price: 102,
            currency: 'Dollar',
            company: "Apple",
            info:
                "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha " +
                "paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. " +
                "Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella " +
                "VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy " +
                "semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
            inCart: false,
            count: 0,
            total: 0
        },
        quantity: 20,
        emplacement: '-', //indique l'emplacement physique où le produit est stocké (par exemple, étagère 1, rangée A, etc.)
        date_mise_a_jour: '2023-07-21'
    },
    {
        id: 6,
        product: {
            id: 2,
            title: "Smashed Iphone",
            img: "img/product-2.png",
            price: 800,
            currency: 'Dollar',
            company: "apple",
            info:
                "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
            inCart: false,
            count: 0,
            total: 0
        },
        quantity: 20,
        emplacement: '', //indique l'emplacement physique où le produit est stocké (par exemple, étagère 1, rangée A, etc.)
        date_mise_a_jour: '2023-07-21'
    },
    {
        id: 7,
        product: {
            id: 2,
            title: "Smashed Iphone",
            img: "img/product-2.png",
            price: 800,
            currency: 'Dollar',
            company: "apple",
            info:
                "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
            inCart: false,
            count: 0,
            total: 0
        },
        quantity: 20,
        emplacement: '', //indique l'emplacement physique où le produit est stocké (par exemple, étagère 1, rangée A, etc.)
        date_mise_a_jour: '2023-07-21'
    },
];
export const clients =  [
    {
        id: 1,
        firstname: 'Hafid',
        lastname: 'Ait oubouhou',
        email: 'hafid.aitoubouhou@gmail.com',
        phone: '0798897665',
        username: 'hafid',
        password: 'hafid123',
        role: 'ADMIN',
        status: 'active'
    },
    {
        id: 2,
        firstname: 'Karim',
        lastname: 'Ait oubouhou',
        email: 'karim.aitoubouhou@gmail.com',
        phone: '0677885543',
        username: 'karim',
        password: 'karim123',
        role: 'ROLE_USER',
        status: 'active'
    },
    {
        id: 3,
        firstname: 'Ahmed',
        lastname: 'Hamzaoui',
        email: 'ahmed.hamzaoui@gmail.com',
        phone: '0700123311',
        username: 'ahmed',
        password: 'ahmed123',
        role: 'ROLE_CLIENT',
        status: 'inactive'
    }, {
        id: 3,
        firstname: 'Ahmed',
        lastname: 'Hamzaoui',
        email: 'ahmed.hamzaoui@gmail.com',
        phone: '0700123311',
        username: 'ahmed',
        password: 'ahmed123',
        role: 'ROLE_CLIENT',
        status: 'inactive'
    }, {
        id: 3,
        firstname: 'Ahmed',
        lastname: 'Hamzaoui',
        email: 'ahmed.hamzaoui@gmail.com',
        phone: '0700123311',
        username: 'ahmed',
        password: 'ahmed123',
        role: 'ROLE_CLIENT',
        status: 'inactive'
    }, {
        id: 3,
        firstname: 'Ahmed',
        lastname: 'Hamzaoui',
        email: 'ahmed.hamzaoui@gmail.com',
        phone: '0700123311',
        username: 'ahmed',
        password: 'ahmed123',
        role: 'ROLE_CLIENT',
        status: 'inactive'
    }, {
        id: 3,
        firstname: 'Ahmed',
        lastname: 'Hamzaoui',
        email: 'ahmed.hamzaoui@gmail.com',
        phone: '0700123311',
        username: 'ahmed',
        password: 'ahmed123',
        role: 'ADMIN',
        status: 'inactive'
    }, {
        id: 3,
        firstname: 'Ahmed',
        lastname: 'Hamzaoui',
        email: 'ahmed.hamzaoui@gmail.com',
        phone: '0700123311',
        username: 'ahmed',
        password: 'ahmed123',
        role: 'ROLE_CLIENT',
        status: 'inactive'
    },
];
export const detailProduct = {
    id: 1,
    title: "Google Pixel - Black",
    img: "img/product-1.png",
    price: 10,
    company: "google",
    info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo." +
        " Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf " +
        "authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware " +
        "sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac " +
        "stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0
};


