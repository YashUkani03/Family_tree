
import Profile from '../images/profile.jpg';
import Pro from '../images/Profile2.png';
import Parent from '../images/P1.jpg';
import female from '../images/female.jpg';

const initialData = [
    {
        id: 1,
        name: "Kanji Patel",
        spouseId: 4,
        photo: Profile,
        DOB: '18-08-1947',
        place: 'Gadhsisa',
        MaritalStatus: 'Married',
        Gender: 'M'
    },
    {
        id: 25,
        name: "Baku Patel",
        fatherId: 1,
        spouseId: 27,
        age: '',
        photo: female,
        DOB: '08-02-2003',
        DOD: '' || '-',
        place: 'Pune',
        MaritalStatus: 'Married',
        Gender: 'F'
    },
    {
        id: 26,
        name: "Jigar Patel",
        fatherId: 25,
        spouseId: 28,
        age: '',
        photo: Profile,
        DOB: '08-02-2003',
        DOD: '' || '-',
        place: 'Pune',
        MaritalStatus: 'Married',
        Gender: 'M'
    },
    {
        id: 27,
        name: "Amrat Patel",
        spouseId: 25,
        age: '',
        photo: Profile,
        DOB: '08-02-2003',
        DOD: '' || '-',
        place: 'Pune',
        MaritalStatus: 'Married',
        Gender: 'M'
    },
    {
        id: 28,
        name: "Vaisali Patel",
        spouseId: 26,
        age: '',
        photo: female,
        DOB: '08-02-2003',
        DOD: '' || '-',
        place: 'Pune',
        MaritalStatus: 'Married',
        Gender: 'F'
    },
    {
        id: 31,
        name: "Lavy Patel",
        fatherId: 26,
        age: '',
        photo: Parent,
        DOB: '08-02-2003',
        DOD: '' || '-',
        place: 'Pune',
        MaritalStatus: 'Married',
        Gender: 'M'
    },
    {
        id: 32,
        name: "Devansh Patel",
        fatherId: 26,
        age: '',
        photo: Parent,
        DOB: '08-02-2003',
        DOD: '' || '-',
        place: 'Pune',
        MaritalStatus: 'Married',
        Gender: 'M'
    },
    {
        id: 29,
        name: "Ashish Patel",
        fatherId: 25,
        spouseId: 30,
        age: '',
        photo: Profile,
        DOB: '08-02-2003',
        DOD: '' || '-',
        place: 'Pune',
        MaritalStatus: 'Married',
        Gender: 'M'
    },
    {
        id: 30,
        name: "Mohini Patel",
        spouseId: 29,
        age: '',
        photo: female,
        DOB: '08-02-2003',
        DOD: '' || '-',
        place: 'Pune',
        MaritalStatus: 'Married',
        Gender: 'F'
    },
    {
        id: 31,
        name: "Dhwanit Patel",
        fatherId: 29,
        age: '',
        photo: Parent,
        DOB: '08-02-2003',
        DOD: '' || '-',
        place: 'Pune',
        MaritalStatus: 'Married',
        Gender: 'M'
    },
    {
        id: 2,
        name: "Dipak Patel",
        fatherId: 1,
        spouseId: 3,
        photo: Pro,
        DOB: '18-06-1969',
        place: 'Mumbai',
        MaritalStatus: 'Married',
        Gender: 'M'
    },
    {
        id: 3,
        name: "Ranjan Patel",
        spouseId: 2,
        photo: female,
        DOB: '18-08-1970',
        place: 'Pune',
        MaritalStatus: 'Married',
        Gender: 'F'
    },
    {
        id: 4,
        name: "Kastur Patel",
        spouseId: 1,
        photo: female,
        DOB: '18-08-1950',
        place: 'Gadhsisa',
        MaritalStatus: 'Married',
        Gender: 'F'
    },
    {
        id: 6,
        name: "Jinal Patel",
        fatherId: 2,
        spouseId: 17,
        photo: female,
        DOB: '23-03-1991',
        place: 'Mumbai',
        MaritalStatus: 'Married',
        Gender: 'F',
        husband: 17,
    },
    {
        husbandId: 6,
        id: 17,
        name: "Hitesh Patel",
        photo: Profile,
        DOB: '23-03-1990',
        place: 'Mumbai',
        MaritalStatus: 'Married',
        Gender: 'M'
    },
    {
        id: 18,
        name: "Jiyanshi Patel",
        motherId: 6,
        fatherId: 6,
        photo: female,
        DOB: '23-03-2016',
        place: 'Mumbai',
        MaritalStatus: 'Single',
        Gender: 'F',

    },
    {
        id: 19,
        name: "Krishay Patel",
        fatherId: 6,
        motherId: 6,
        photo: Parent,
        DOB: '23-03-2018',
        place: 'Mumbai',
        MaritalStatus: 'Single',
        Gender: 'M',
    },
    {
        id: 14,
        name: "Jayesh Patel",
        fatherId: 2,
        spouseId: 16,
        photo: Profile,
        DOB: '23-03-1993',
        place: 'Mumbai',
        MaritalStatus: 'Married',
        Gender: 'M'
    },
    {
        id: 16,
        name: "Jigna Patel",
        spouseId: 14,
        photo: female,
        DOB: '23-03-1993',
        place: 'Mumbai',
        MaritalStatus: 'Married',
        Gender: 'F',
    },
    {
        id: 15,
        name: "Priyam Patel",
        fatherId: 14,
        photo: Parent,
        DOB: '23-03-2022',
        place: 'Mumbai',
        MaritalStatus: 'Single',
        Gender: 'M',
    },
    {
        id: 24,
        name: "Aayansh Patel",
        fatherId: 14,
        photo: Parent,
        DOB: '23-03-2024',
        place: 'Mumbai',
        MaritalStatus: 'Single',
        Gender: 'M',
    },
    {
        id: 7,
        name: "Dhwani Patel",
        fatherId: 8,
        spouseId: 23,
        photo: female,
        DOB: '18-08-1997',
        place: 'Gadhsisa',
        MaritalStatus: 'Married',
        Gender: 'F',
    },
    {
        id: 23,
        name: "Smit Patel",
        husbandId: 7,
        spouseId: 7,
        photo: Profile,
        DOB: '18-08-1998',
        place: 'Gadhsisa',
        MaritalStatus: 'Married',
        Gender: 'M',
    },
    {
        id: 18,
        name: "Dixa Patel",
        fatherId: 8,
        motherId: 12,
        photo: female,
        DOB: '18-08-1999',
        place: 'Gadhsisa',
        MaritalStatus: 'Single',
        Gender: 'F',
    },
    {
        id: 8,
        name: "Pravin Patel",
        fatherId: 1,
        spouseId: 12,
        photo: Pro,
        DOB: '18-08-1975',
        place: 'Gadhsisa',
        MaritalStatus: 'Married',
        Gender: 'M'
    },
    {
        id: 10,
        name: "Yash Patel",
        fatherId: 8,
        photo: Parent,
        DOB: '23-03-2003',
        place: 'Gadhsisa',
        MaritalStatus: 'Single',
        Gender: 'M',
    },
    {
        id: 12,
        name: "Bhagvati Patel",
        spouseId: 8,
        photo: female,
        DOB: '18-08-1974',
        place: 'Gadhsisa',
        MaritalStatus: 'Married',
        Gender: 'F'
    },
    {
        id: 13,
        name: "Jenti Patel",
        photo: Pro,
        fatherId: 1,
        spouseId: 22,
        age: '',
        DOB: '18-08-1976',
        DOD: '' || '-',
        place: 'Pune',
        MaritalStatus: 'Married',
        Gender: 'M'
    },
    {
        id: 22,
        name: "Hansa Patel",
        spouseId: 13,
        age: '',
        photo: female,
        DOB: '18-08-1976',
        DOD: '' || '-',
        place: 'Pune',
        MaritalStatus: 'Married',
        Gender: 'F'
    },
    {
        id: 19,
        name: "Kinjal Patel",
        fatherId: 13,
        spouseId: 20,
        age: '',
        photo: female,
        DOB: '8-03-1998',
        DOD: '' || '-',
        place: 'Pune',
        MaritalStatus: 'Married',
        Gender: 'F'
    },
    {
        id: 15,
        name: "Nimesh Patel",
        fatherId: 13,
        age: '',
        photo: Parent,
        DOB: '25-03-2000',
        DOD: '' || '-',
        place: 'Pune',
        MaritalStatus: 'Married',
        Gender: 'M'
    },
    {
        id: 20,
        name: "Jaydeep Patel",
        age: '',
        spouseId: 19,
        photo: Parent,
        DOB: '18-08-1999',
        DOD: '' || '-',
        place: 'Pune',
        MaritalStatus: 'Married',
        Gender: 'M'
    },
    {
        id: 21,
        name: "Ayushi Patel",
        fatherId: 13,
        age: '',
        photo: female,
        DOB: '08-02-2003',
        DOD: '' || '-',
        place: 'Pune',
        MaritalStatus: 'Married',
        Gender: 'F'
    },
]
const createFamilyTree = (data) => {
    const findPerson = (id) => data.find(person => person.id === id);

    const addSpouse = (person) => {
        if (person.spouseId) {
            person.spouse = findPerson(person.spouseId);
        }
    };

    const addChildren = (person) => {
        person.children = data.filter(child => child.fatherId === person.id || person.motherId === person.id);
    };

    const addHusband = (person) => {
        console.log(person.husbandId);
        if (person.husbandId) {
            person.husband = findPerson(person.husbandId);
            addChildren(person.husband);
        }
    };


    const rootPerson = findPerson(1);
    const stack = [rootPerson];

    while (stack.length > 0) {
        const person = stack.pop();
        addSpouse(person);
        addHusband(person);
        addChildren(person);
        if (person.children) {
            stack.push(...person.children);
        }
    }

    return rootPerson;
};

const FamilyData = createFamilyTree(initialData);

export default FamilyData;
