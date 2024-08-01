
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
        DOB: '18-08-1975',
        place: 'Gadhsisa',
        MaritalStatus: 'Married'
    },
    {
        id: 2,
        name: "Dipak Patel",
        fatherId: 1,
        spouseId: 5,
        photo: Pro,
        DOB: '18-06-1998',
        place: 'Mumbai',
        MaritalStatus: 'Married'
    },
    {
        id: 3,
        name: "Minal Patel",
        spouseId: 2,
        photo: female,
        DOB: '18-08-1999',
        place: 'Pune',
        MaritalStatus: 'Married'
    },
    {
        id: 4,
        name: "Mina Patel",
        spouseId: 1,
        photo: female,
        DOB: '18-08-1975',
        place: 'Gadhsisa',
        MaritalStatus: 'Married'
    },
    {
        id: 5,
        name: "Kastur Patel",
        spouseId: 2,
        photo: female,
        DOB: '18-08-1998',
        place: 'Mumbai',
        MaritalStatus: 'Married'
    },
    {
        id: 6,
        name: "Yash Patel",
        fatherId: 2,
        photo: Parent,
        DOB: '23-03-2024',
        place: 'Mumbai',
        MaritalStatus: 'Single'
    },
    {
        id: 7,
        name: "Shreya Patel",
        fatherId: 8,
        photo: Parent,
        DOB: '18-08-2023',
        place: 'Gadhsisa',
        MaritalStatus: 'Single'
    },
    {
        id: 8,
        name: "Ramji Patel",
        fatherId: 1,
        spouseId: 12,
        photo: Pro,
        DOB: '18-08-1975',
        place: 'Gadhsisa',
        MaritalStatus: 'Married'
    },
    {
        id: 10,
        name: "Manavi Patel",
        fatherId: 8,
        photo: Parent,
        DOB: '18-08-2023',
        place: 'Gadhsisa',
        MaritalStatus: 'Single'
    },
    {
        id: 12,
        name: "Ranjan Patel",
        spouseId: 8,
        photo: female,
        DOB: '18-08-1998',
        place: 'Gadhsisa',
        MaritalStatus: 'Married'
    },
    {
        id: 13,
        name: "Manan Patel",
        photo: Pro,
        fatherId: 1,
        spouseId: 14,
        age: '',
        DOB: '18-08-1976',
        DOD: '' || '-',
        place: 'Pune',
        MaritalStatus: 'Married',
    }, {
        id: 14,
        name: "Minal Patel",
        spouseId: 13,
        age: '',
        photo: female,
        DOB: '18-08-1999',
        DOD: '' || '-',
        place: 'Pune',
        MaritalStatus: 'Married',
    }, {
        id: 15,
        name: "Ram Patel",
        fatherId: 13,
        age: '',
        photo: Parent,
        DOB: '18-08-2022',
        DOD: '' || '-',
        place: 'Pune',
        MaritalStatus: 'Married',
    }
];

const createFamilyTree = (data) => {
    const findPerson = (id) => data.find(person => person.id === id);

    const addSpouse = (person) => {
        if (person.spouseId) {
            person.spouse = findPerson(person.spouseId);
        }
    };

    const addChildren = (person) => {
        person.children = data.filter(child => child.fatherId === person.id);
    };

    const rootPerson = findPerson(1); // Assuming Kanji Patel is the root person
    const stack = [rootPerson];

    while (stack.length > 0) {
        const person = stack.pop();
        addSpouse(person);
        addChildren(person);
        if (person.children) {
            stack.push(...person.children);
        }
    }

    return rootPerson;
};

const FamilyData = createFamilyTree(initialData);

export default FamilyData;
