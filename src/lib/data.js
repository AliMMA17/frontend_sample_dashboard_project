export const boardColumns = [
    {
        id: 'todo',
        title: 'To Do',
        count: 14,
        tasks: [
            {
                id: 't1',
                title: 'Hosting Mobile Apps',
                desc: 'Task management has never looked more streamlined—and beautiful.',
                tags: [{ label: 'High', tone: 'slate' }, { label: 'Mobile', tone: 'sky' }],
                people: ['Alex J', 'Tori P', 'Mei Z'], comments: 1, views: 10,
                // Either ensure public/placeholder.png exists, or delete this line
                image: '/placeholder.png'
            },
            {
                id: 't2', title: 'Carnesia Mobile App', desc: 'One‑stop shop for Beauty, Makeup, Skin Care & Accessories',
                tags: [{ label: 'Design System', tone: 'amber' }], people: ['Alex J'], comments: 2, views: 19
            }
        ]
    },
    {
        id: 'inprogress', title: 'In Progress', count: 8,
        tasks: [
            { id: 't3', title: 'Implement Userflow and Navigation', desc: 'Design system audit and flows', tags: [{ label: 'Design System', tone: 'amber' }], people: ['Sasha K', 'Nora M', 'Ali R'], comments: 7, views: 12 },
            { id: 't4', title: 'Admin Dashboard', desc: 'Convenient shortcut to manage tasks & server information', tags: [{ label: 'Moodboard', tone: 'rose' }], people: ['Lina R', 'Daniel C', 'Max T'], comments: 5, views: 32 }
        ]
    },
    {
        id: 'done', title: 'Completed', count: 5,
        tasks: [
            { id: 't5', title: 'Test Checkout Process', desc: 'New checkout automation for recruiters', tags: [{ label: 'Wireframe', tone: 'violet' }], people: ['Nora M', 'Ben S'], comments: 1, views: 10 },
            { id: 't6', title: 'Website Design', desc: 'Typography with prominent catchy tagline; instantly informing', tags: [{ label: 'Low', tone: 'slate' }, { label: 'UI Design', tone: 'sky' }], people: ['Liam Q', 'Sara H'], comments: 4, views: 26 }
        ]
    }
];