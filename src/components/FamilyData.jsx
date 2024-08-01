
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
        MaritalStatus: 'Married'
    },
    {
        id: 2,
        name: "Dipak Patel",
        fatherId: 1,
        spouseId: 5,
        photo: Pro,
        DOB: '18-06-1969',
        place: 'Mumbai',
        MaritalStatus: 'Married'
    },
    {
        id: 3,
        name: "Ranjan Patel",
        spouseId: 2,
        photo: female,
        DOB: '18-08-1970',
        place: 'Pune',
        MaritalStatus: 'Married'
    },
    {
        id: 4,
        name: "Kastur Patel",
        spouseId: 1,
        photo: female,
        DOB: '18-08-1950',
        place: 'Gadhsisa',
        MaritalStatus: 'Married'
    },
    {
        id: 6,
        name: "Jinal Patel",
        fatherId: 2,
        spouseId: 17,
        photo: female,
        DOB: '23-03-1991',
        place: 'Mumbai',
        MaritalStatus: 'Single'
    },
    {
        id: 17,
        name: "Hitesh Patel",
        husbandId: 6,
        spouseId: 6,
        photo: Profile,
        DOB: '23-03-1990',
        place: 'Mumbai',
        MaritalStatus: 'Single'
    },
    {
        id: 18,
        name: "Jiyanshi Patel",
        motherId: 6,
        fatherId: 6,
        photo: Profile,
        DOB: '23-03-2016',
        place: 'Mumbai',
        MaritalStatus: 'Single'
    },
    {
        id: 19,
        name: "Krishay Patel",
        fatherId: 6,
        motherId: 6,
        photo: Profile,
        DOB: '23-03-2018',
        place: 'Mumbai',
        MaritalStatus: 'Single'
    },
    {
        id: 14,
        name: "Jayesh Patel",
        fatherId: 2,
        spouseId: 16,
        photo: Profile,
        DOB: '23-03-1993',
        place: 'Mumbai',
        MaritalStatus: 'Single'

    },
    {
        id: 16,
        name: "Jigna Patel",
        spouseId: 14,
        photo: female,
        DOB: '23-03-1993',
        place: 'Mumbai',
        MaritalStatus: 'Single'
    },
    {
        id: 15,
        name: "Priyam Patel",
        fatherId: 14,
        photo: Profile,
        DOB: '23-03-2022',
        place: 'Mumbai',
        MaritalStatus: 'Single'
    },
    {
        id: 24,
        name: "Aayansh Patel",
        fatherId: 14,
        photo: Profile,
        DOB: '23-03-2024',
        place: 'Mumbai',
        MaritalStatus: 'Single'
    },
    {
        id: 7,
        name: "Dhwani Patel",
        fatherId: 8,
        spouseId: 23,
        photo: female,
        DOB: '18-08-1997',
        place: 'Gadhsisa',
        MaritalStatus: 'Single'
    },
    {
        id: 23,
        name: "Smit Patel",
        husbandId: 7,
        spouseId: 7,
        photo: Profile,
        DOB: '18-08-1998',
        place: 'Gadhsisa',
        MaritalStatus: 'Single'
    },
    {
        id: 18,
        name: "Dixa Patel",
        fatherId: 8,
        motherId: 12,
        photo: female,
        DOB: '18-08-1999',
        place: 'Gadhsisa',
        MaritalStatus: 'Single'
    },
    {
        id: 8,
        name: "Pravin Patel",
        fatherId: 1,
        spouseId: 12,
        photo: Pro,
        DOB: '18-08-1975',
        place: 'Gadhsisa',
        MaritalStatus: 'Married'
    },
    {
        id: 10,
        name: "Yash Patel",
        fatherId: 8,
        photo: Parent,
        DOB: '23-03-2003',
        place: 'Gadhsisa',
        MaritalStatus: 'Single'
    },
    {
        id: 12,
        name: "Bhagvati Patel",
        spouseId: 8,
        photo: female,
        DOB: '18-08-1974',
        place: 'Gadhsisa',
        MaritalStatus: 'Married'
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
    },
];

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
        if (person.husbandId) {
            person.husband = findPerson(person.husbandId);
        }
    }
    const rootPerson = findPerson(1); // Assuming Kanji Patel is the root person
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
