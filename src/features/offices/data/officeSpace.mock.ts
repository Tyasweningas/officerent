import { OfficeSpace } from "../types/officeSpace.types";


export const officeSpaces: OfficeSpace[] = [
    {
        id: 1,
        title: "Angga Park Central Master Silicon Valley Star Class",
        slug: "angga-park-central-master-silicon-valley-star-class",
        price: 18560000,
        duration: "20 days",
        location: "Jakarta Pusat",
        rating: 4.5,
        address: "Jalan Sudirman No. 23, Jakarta Pusat",
        image: '/assets/images/thumbnails/thumbnail-1.png',
        images: [
            '/assets/images/thumbnails/thumbnail-2.png',
            '/assets/images/thumbnails/thumbnail-3.png',
        ],
        tags: ['Popular'],
        features: ['Global Event','Privacy', 'free Move', 'sustainability', 'extra snacks', 'Compact'],
        isFullyBooked: false,
        salesContact: [
            {name: 'Masayohi',
             role: 'Sales Manager',
             photo: '/assets/images/photos/photo-1.png'
            },
              {name: 'Fuji Olivia',
             role: 'Sales Manager',
             photo: '/assets/images/photos/photo-2.png'
            }        
        ]
    },

        {
        id: 2,
        title: "Pondok Pekerja Remote Surabaya",
        slug: "pondok-pekerja-remote-surabaya",
        price: 7650000,
        duration: "20 days",
        location: "Surabaya",
        rating: 4.8,
        address: "Jalan Pattimura No. 45, Surabaya",
        image: '/assets/images/thumbnails/thumbnail-1.png',
        images: [
            '/assets/images/thumbnails/thumbnail-2.png',
            '/assets/images/thumbnails/thumbnail-3.png',
        ],
        tags: ['Popular'],
        features: ['Global Event','Privacy', 'extra snacks', 'Compact'],
        isFullyBooked: false,
        salesContact: [
            {name: 'Andy',
             role: 'Sales Manager',
             photo: '/assets/images/photos/photo-1.png'
            },
              {name: 'Amara',
             role: 'Sales Manager',
             photo: '/assets/images/photos/photo-2.png'
            }        
        ]
    }
]