# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


user1 = User.where(email: 'example@gmail.com').first_or_create(password: 'valid_password', password_confirmation: 'valid_password')

user2 = User.create(email: 'example2gmail.com', password: 'valid_password', password_confirmation: 'valid_password')

listings1 = [
    {
        name: 'Highwood Park'
        street: '4200 Parks Avenue'
        City: 'La Mesa'
        State: 'CA'
        description: 'Explore the nice quiet atmosphere of Highwood Park. It features barbecues, benches, rest rooms and a shaded picnic area. Great for children and pets.'
        phone: '858-207-7181'
        hours: '6:00 AM - 10:00 PM'
        outside: 'true'
        inside: 'false'
        water: 'false'
        children: 'true'
        pets: 'true'
        food: 'false'
        alcohol: 'false'
        image:text 
    }
]

listings2 = [
    {
        name: 'Coronado Beach'
        street: '100 Ocean Blvd'
        City: 'Coronado'
        State: 'CA'
        description: 'Explore the nice quiet atmosphere of Highwood Park. It features barbecues, benches, rest rooms and a shaded picnic area. Great for children and pets.'
        phone: 'N/A'
        hours: 'N/A'
        outside: 'true'
        inside: 'false'
        water: 'false'
        children: 'true'
        pets: 'true'
        food: 'false'
        alcohol: 'false'
        image:text 
    }
]

reviews1 = [
    {
        title: 'Lovely'
        text: 'My new favorite place!'
    }
]

reviews2 = [
    {
        title: 'Awesome!'
        text: 'Best weekend ever!'
    }
]

listings1.each do |attributes|
    user1.listings.create(attributes)
    p "Creating listing #{attributes}"
end

listings2.each do |attributes|
    user2.listings.create(attributes)
    p "Creating listing #{attributes}"
end

review1.each do |attributes|
    user1.listing.reviews.create(attributes)
    p "Creating review #{attributes}"
end

review2.each do |attributes|
    user2.listing.reviews.create(attributes)
    p "Creating review #{attributes}"
end