let Database = {
    cindy: {
        email:"cindy@bcit.ca",
        password:"cindy",
        id: 6666,
        reminders: [{id: 1, title: "Cindy First Reminder", description: "Hello", completed: false,subtask: ["test"]},
                    {id: 2, title: "Cindy Second Reminder", description: "World", completed: false,subtask: ["test"]},   
                    ],
    },
    alex: {
        email:"alex@bcit.ca",
        password:"alex",
        id: 7777,
        reminders: [[{id: 1, title: "Alex First Reminder", description: "Hi", completed: false,subtask: ["test"]},
        {id: 2, title: "Alex Second Reminder", description: "BCIT", completed: false,subtask: ["test"]},   
        ],]
    } 
}

module.exports = Database