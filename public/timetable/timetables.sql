--
-- Table structure for table `timetables`
--

CREATE TABLE IF NOT EXISTS "timetables" (
  "id" int,
  "name" varchar(100) NOT NULL,
  "image" varchar(100) NOT NULL,
  "date" varchar(10) NOT NULL,
  "day" varchar(10) NOT NULL,
  "start_time" varchar(10) NOT NULL,
  "end_time" varchar(10) NOT NULL,
  "color" int NOT NULL,
  "description" text NOT NULL
);
ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5;

--
-- Dumping data for table `timetables`
--

INSERT INTO "timetables" ("id", "name", "image", "date", "day", "start_time", "end_time", "color", "description") VALUES
(1, 'Restorative Yoga', 'seatedlotus.jpg', '13-07-2017', 'thursday', '016:00', '017:30', 1, 'Unwind from the day with a meditative practice.'),
(2, 'Prenatal Yoga', 'prenatal.jpg', '10-07-2016', 'monday', '09:00', '11:00', 2, 'Making space for baby.'),
(3, 'Ayurveda 101', 'ayurveda101.jpg', '15-07-2017', 'saturday', '13:00', '14:30', 4, 'Ayurveda 101\r\nDiscover the art of self-healing through Ayurveda\r\n\r\nTickets:\r\n$15.00\r\nAyurveda roughly translates to the “science of life”. It is the worlds oldest form of medicine, dating beyond five thousand years, focusing on preventative healthcare, rejuvenation and longevity using natural law. Each of us is made up of a combination of the elements: ether (space), air, fire, water and earth. Our individual bodily make-up, or constitution, when honored allows us to live in harmony and serenity. The five elements then pair-up into three combinations (known as doshas) to form the primary forces of nature.'),
(4, 'Power Vinyasa', 'power.jpg', '07-11-2016', 'tuesday', '10:00', '12:00', 3, 'Building stregth through meditation in movement.');
