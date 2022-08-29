# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


user1 = User.where(email: 'example@gmail.com').first_or_create(password: 'valid_password', password_confirmation: 'valid_password')

user2 = User.where(email: 'example2@gmail.com').first_or_create(password: 'valid_password', password_confirmation: 'valid_password')

listings1 = user1.listings.create!(
    name: 'Highwood Park',
    street: '4200 Parks Avenue',
    city: 'La Mesa',
    state: 'CA',        
    description: 'Explore the nice quiet atmosphere of Highwood Park. It features barbecues, benches, rest rooms and a shaded picnic area. Great for children and pets.',
    phone: '858-207-7181',
    hours: '6:00 AM - 10:00 PM',
    outside: 'true',
    children: 'true',
    pets: 'true',
    image: 'https://images.unsplash.com/photo-1585938389612-a552a28d6914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
)

listings2 = user2.listings.create!(
    name: 'Coronado Beach',
    street: '100 Ocean Blvd',
    city: 'Coronado',
    state: 'CA',
    description: 'Explore the nice quiet atmosphere of Highwood Park. It features barbecues, benches, rest rooms and a shaded picnic area. Great for children and pets.',
    phone: 'N/A',
    hours: 'N/A',
    inside: 'false',
    water: 'false',
    children: 'true',
    pets: 'true',
    food: 'false',
    alcohol: 'false',
    image: 'https://images.squarespace-cdn.com/content/v1/526f5bfce4b0c67dab63847d/91a2c457-8b4a-42e6-84c6-843c8dca6360/Scott-Davenport-US-California-Coronado-2022-07-02-0011-Hotel+Del+Coronado+Reflected.jpg?format=1000w', 
)
listings3 = user1.listings.create!(
    name: 'Lego Land',      
    description: "Beautiful public park featuring spray fountains, grassy areas and lots of play equipment for children.",
    phone: '858-207-7181',
    hours: '6:00 AM - 10:00 PM',
    outside: 'true',
    children: 'true',
    food: 'true',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/48/67/8a/legoland-california.jpg?w=1200&h=1200&s=1',
)
listings4 = user1.listings.create!(
    name: 'Childrens Discovery Museum',      
    description: "Lively indoor and outdoor museum, with interactive and educational exhibits for children.",
    phone: '858-207-7181',
    hours: '6:00 AM - 10:00 PM',
    inside: 'true',
    children: 'true',
    food: 'true',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/f5/ce/46/san-diego-children-s.jpg?w=1200&h=-1&s=1',
)
listings5 = user1.listings.create!(
    name: 'The Regal Beagle',      
    description: "Get a drink and catch up with your best pal at this quaint tavern in Mission Valley.",
    inside: 'true',
    children: 'true',
    pets: 'true',
    food: 'true',
    alcohol: 'true',
    image: 'https://media.sandiegoreader.com/img/blogs/entry_img/2011/Aug/09/IMG_3052_t670.JPG?b3f6a5d7692ccc373d56e40cf708e3fa67d9af9d',
)
listings6 = user1.listings.create!(
    name: 'Howlistic',      
    description: "Wellness, nutrition and community for our favorite, furry little buddies.",
    inside: 'true',
    children: 'true',
    pets: 'true',
    image: 'https://cdn.etailpet.com/media/howlistic/store_images/Screen_Shot_2020-02-18_at_5.09.24_PM.png',
)
listings7 = user1.listings.create!(
    name: 'Campfire',      
    description: "Celebrate the spirit of campfires through gathering around a fire, creating honest food and sharing the experience with friends.",
    outside: 'true',
    children: 'true',
    pets: 'true',
    food: 'true',
    image: 'https://media.cntraveler.com/photos/5a8f2c030e2cf839e9dbfa16/16:9/w_2560%2Cc_limit/Campfire_2018_Campfire-5516.jpg',
)
listings8 = user1.listings.create!(
    name: 'Puesto',      
    description: "Enjoy authentic, innovative Mexican cuisine that has been handed down from generation to generation.",
    inside: 'true',
    children: 'true',
    food: 'true',
    alcohol: 'true',
    image: 'https://images.getbento.com/accounts/b3eb43356d326c9cbb1f0ef418f77ccb/media/images/17157puesto-hq-group-dining.jpg?w=1800&fit=max&auto=compress,format&h=1800',
)
listings9 = user1.listings.create!(
    name: 'False Idol',      
    description: "Experience a fun, cool atmosphere and be served by experienced bartenders who know their craft.",
    inside: 'true',
    children: 'true',
    food: 'true',
    alcohol: 'true',
    image: 'https://assets3.thrillist.com/v1/image/1787848/828x610/flatten;crop;webp=auto;jpeg_quality=60.jpg',
)
listings10 = user1.listings.create!(
    name: 'Brewskis Bar & Arcade',      
    description: "Pinball, air hockey, billiards and much more. Grab a drink and play all the classics you grew up with.",
    inside: 'true',
    children: 'true',
    food: 'true',
    alcohol: 'true',
    image: 'https://static.spotapps.co/spots/b7/a124cb2d2048b6aff816acba224d03/full',
)
listings11 = user1.listings.create!(
    name: 'The Wave Waterpark',      
    description: "Whether its a float in the lazy river, a ride on the wave machine or a plunge down the Riptide Slide, all bases are covered when it comes to this splash adventure.",
    outside: 'true',
    water: 'true',
    children: 'true',
    pets: 'true',
    food: 'false',
    image: 'https://surfstylevacationhomes.com/wp-content/uploads/2019/06/Sea-Word-Aquatica-San-Diego.jpg',
)
listings12 = user1.listings.create!(
    name: 'Sesame Place',      
    description: "Sesame Street-themed rides, water slides and interactive Sesame Street Neighborhood all await you, alongside everyones favorite furry friends.",
    outside: 'true',
    children: 'true',
    food: 'true',
    image: 'https://ewscripps.brightspotcdn.com/dims4/default/2e32548/2147483647/strip/true/crop/2592x1458+0+135/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2Fea%2F04%2F99f286ed4582b0c23d7e3e77363d%2Fspsd-aerial.jpg',
)
listings13 = user1.listings.create!(
    name: 'Museum of Art',      
    description: "View a collection the covers a broad spectrum of work from around the world, including pieces that date back 7,000 years!",
    inside: 'false',
    children: 'true',
    image: 'https://www.sdmart.org/wp-content/uploads/2020/01/Dec-2019-Current-for-Mailchimp.png',
)
listings14 = user1.listings.create!(
    name: 'USS Midway Museum',      
    description: "Explore the inside of this amazing, retired aircraft carrier and learn about the history of her 50-year service.",
    outside: 'true',
    inside: 'true',
    water: 'true',
    children: 'true',
    image: 'https://exploringrworld.com/wp-content/uploads/2020/02/IMG_50121-2.jpg',
)
reviews1 = user1.reviews.create!(
    title: 'Lovely',
    comment: 'My new favorite place!',
    listing_id: listings1.id
)

reviews2 = user2.reviews.create!(
    title: 'Awesome!',
    comment: 'Best weekend ever!',
    listing_id: listings2.id
)

