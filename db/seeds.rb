Team.destroy_all
Athlete.destroy_all
puts "🌱 Seeding spices..."

# Seed your database here
puts "seeding teams"
t1 = Team.create(name: "Globo Gym Purple Cobras", location: "Irvine, California", image: "https://www.pinclipart.com/picdir/middle/5-50215_dodgeball-clip-purple-cobras-globo-gym-purple-cobras.png", primary_color: "Purple", secondary_color: "Black")
t2 = Team.create(name: "Average Joe's Gymnasium", location: "Irvine, California", image: "https://ih1.redbubble.net/image.2097221683.6402/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg", primary_color: "Gold", secondary_color: "Red")

puts "seeding athletes"
Athlete.create(team_id: t1.id, name: "White Goodman", image: "https://i.pinimg.com/236x/ce/82/af/ce82af49ed5adba97a41b7f054527181--halloween-ideas-ben-stiller.jpg", height: 67, weight: 150, strength:50, speed:50)
Athlete.create(team_id: t1.id, name: "Fran Stalinovskovichdavidovitchsky", image: "https://i.dailymail.co.uk/i/pix/2017/06/14/20/416C02FE00000578-4604796-image-a-10_1497468083413.jpg", height: 71, weight: 140, strength:65, speed:65)
Athlete.create(team_id: t1.id, name: "Blade", image: "https://archive.org/download/tucows_367100_Dodgeball_A_True_Underdog_Story_-_Blade/pc_blade-800x600.jpg", height: 71, weight: 170, strength:70, speed:75)
Athlete.create(team_id: t1.id, name: "Lazer", image: "https://m.media-amazon.com/images/M/MV5BMTgwMDIzODU5M15BMl5BanBnXkFtZTcwMDA1NTgyMQ@@._V1_.jpg", height: 77, weight: 245, strength:80, speed:70)
Athlete.create(team_id: t1.id, name: "Blazer", image: "https://archive.org/download/tucows_367093_Dodgeball_A_True_Underdog_Story_-_Blazer/pc_blazer-800x600.jpg", height: 76, weight: 280, strength:85, speed:70)
Athlete.create(team_id: t1.id, name: "Me'Shell Jones", image: "https://cache.moviestillsdb.com/i/500x/51yoikq0/dodgeball-a-true-underdog-story-lg.jpg", height: 79, weight: 285, strength:90, speed:80)

Athlete.create(team_id: t2.id, name: "Peter LaFleur", image: "https://pbs.twimg.com/profile_images/378800000046084986/7a5bc39fd178500c057f36cfb4cb813d_400x400.png", height: 77, weight: 220, strength:75, speed:70)
Athlete.create(team_id: t2.id, name: "Kate Veatch", image: "https://64.media.tumblr.com/6fa15a70f7d1329f0d5107de88f5d17d/tumblr_o0hqfem7HS1v3sqczo1_640.jpg", height: 66, weight: 125, strength:90, speed:60)
Athlete.create(team_id: t2.id, name: "Justin Redman", image: "http://images.fanpop.com/images/image_uploads/dodgeball-dodgeball-3A-a-true-underdog-story-200346_1024_768.jpg", height: 68, weight: 150, strength:85, speed:80)
Athlete.create(team_id: t2.id, name: "Owen Dittman", image: "https://archive.org/download/tucows_367069_Dodgeball_A_True_Underdog_Story_-_Owen/aj_owen-800x600.jpg", height: 74, weight: 165, strength:40, speed:40)
Athlete.create(team_id: t2.id, name: "Gordan Pibb", image: "https://archive.org/download/tucows_367075_Dodgeball_A_True_Underdog_Story_-_Gordon/aj_gordon-800x600.jpg", height: 68, weight: 185, strength:90, speed:90)
Athlete.create(team_id: t2.id, name: "Dwight Baumgarten", image: "https://archive.org/download/tucows_367066_Dodgeball_A_True_Underdog_Story_-_Dwight/aj_dwight-800x600.jpg", height: 70, weight: 180, strength:60, speed:65)
Athlete.create(team_id: t2.id, name: "Steve the Pirate", image: "https://filmreviewlondon.files.wordpress.com/2011/07/stevethepirate-1.jpg?w=584", height: 72, weight: 175, strength:60, speed:80)

puts "✅ Done seeding!"
