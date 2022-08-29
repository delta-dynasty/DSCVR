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
    inside: 'false',
    water: 'false',
    children: 'true',
    pets: 'true',
    food: 'false',
    alcohol: 'false',
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
    outside: 'true',
    inside: 'false',
    water: 'false',
    children: 'true',
    pets: 'true',
    food: 'false',
    alcohol: 'false',
    image: 'text', 
)

reviews1 = user1.reviews.create!(
    title: 'Lovely',
    comment: 'My new favorite place!',
    listing_id: listings.id
)

reviews2 = user2.reviews.create!(
    title: 'Awesome!',
    comment: 'Best weekend ever!',
    listing_id: listings2.id
)

