exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('timetables').del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('timetables').insert([
          {
            id: 1,
            name : "Ayurveda 101",
            image : "/images/ayurveda101.jpg",
            date : '08-07-2017',
            day : "Saturday",
            start_time : "08:00",
            end_time : "10:00",
            color : 1,
            description : "Discover the art of self-healing through Ayuveda.",
            state : 1
          },
          {
            id: 2,
            name : "Prenatal Yoga",
            image : "/images/prenatal.jpg",
            date : "03-07-2017",
            day : "Monday",
            start_time : "12:00",
            end_time : "13:00",
            color : 2,
            description : "Making space for baby.",
            state : 1
          },
          {
            id: 3,
            name : "Prenatal Yoga",
            image : "/images/prenatal.jpg",
            date : "06-07-2017",
            day : "Thursday",
            start_time : "12:00",
            end_time : "13:00",
            color : 2,
            description : "Making space for baby.",
            state : 1
          },
          {
            id: 4,
            name : "Power Vinyasa",
            image : "/images/powervinyasa.jpg",
            date : "05-07-2017",
            day : "Wednesday",
            start_time : "18:00",
            end_time : "19:15",
            color : 3,
            description : "Building strength through meditation in motion.",
            state : 1
          }
      ])
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('timetables_id_seq', (SELECT MAX(id) FROM timetables));")
    });
};
