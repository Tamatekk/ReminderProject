let Database = {
    cindy: {
<<<<<<< HEAD
        email:"cindy@bcit.ca",
        password:"cindy",
        id: 6666,
        reminders: [{id: 1, title: "Cindy First Reminder", description: "Hello", completed: false},
                    {id: 2, title: "Cindy Second Reminder", description: "World", completed: false},   
                    ],
=======
        reminders: [{id: 1, title: "abc", description: "abcabc", completed: false, subtask: ["test"]}]
>>>>>>> f9fcf4ec64e698ceb1f31c4f27658394e49de986
    },
    alex: {
        email:"alex@bcit.ca",
        password:"alex",
        id: 7777,
        reminders: [[{id: 1, title: "Alex First Reminder", description: "Hi", completed: false},
        {id: 2, title: "Alex Second Reminder", description: "BCIT", completed: false},   
        ],]
    } 
}

module.exports = Database