let Database = {
    cindy: {
        reminders: [{id: 1, title: "abc", description: "abcabc", completed: false}],
        email: "cindy@gmail.com",
        password: "cindy"
    },
    alex: {
        reminders: [{id: 2, title: "Waluigi", description: "Wah", completed: true}],
        email: "alex@gmail.com",
        password: "alex"
    },
    jones: {
        reminders: [{id: 3, title: "Read book", description: "not hard to do", completed: false}],
        email: "jones@gmail.com",
        password: "jones"
    }
}

module.exports = Database;