import bcrypt from 'bcryptjs';

const users = [
    {
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        role: 'admin'
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane@example.com',
        password: bcrypt.hashSync('123456', 10),
        role: 'user'
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        password: bcrypt.hashSync('123456', 10),
        role: 'user'
    }
]

export default users;