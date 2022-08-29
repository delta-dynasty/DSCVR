require 'rails_helper'

RSpec.describe "Listings", type: :request do

    describe "GET /index" do
        it "gets a list of listings" do
            Listing.create(
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
                image: 'https://images.unsplash.com/photo-1585938389612-a552a28d6914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
            )

            get "/listings"
            listing = JSON.parse(response.body)
            expect(response).to have_http_status(200)
            expect(listing.length).to eq 1
        end
    end

    describe "POST /create" do
        it "creates a listing" do
            listing_params = {
                listing: {
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
                    image: 'https://images.unsplash.com/photo-1585938389612-a552a28d6914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
                }
            }

            post "/listings", params: listing_params
            expect(response).to have_http_status(200)
            listing = Listing.first
            expect(listing.name).to eq "Highwood Park"
            expect(listing.street).to eq "4200 Parks Avenue"
            expect(listing.city).to eq "La Mesa"
            expect(listing.state).to eq "CA"
            expect(listing.description).to eq "Explore the nice quiet atmosphere of Highwood Park. It features barbecues, benches, rest rooms and a shaded picnic area. Great for children and pets"
            expect(listing.phone).to eq "858-207-7181"
            expect(listing.hours).to eq "6:00 AM - 10:00 PM"
            expect(listing.outside).to eq true
            expect(listing.inside).to eq false
            expect(listing.water).to eq false
            expect(listing.children).to eq true
            expect(listing.pets).to eq true
            expect(listing.food).to eq false
            expect(listing.alcohol).to eq false
            expect(listing.image).to eq "https://images.unsplash.com/photo-1585938389612-a552a28d6914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
        end
    end

    describe "PATCH /update" do
        it "updates a listing" do
            listing_params = {
                listing: {
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
                    image: 'text'
                }
            }

            post "/listings", params: listing_params
            listing = Listing.first
            updated_listing_params = {
                listing: {
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
                    image: 'https://images.unsplash.com/photo-1585938389612-a552a28d6914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
                }
            }

            patch "/listings/#{listing.id}", params: updated_listing_params
            updated_listing = Listing.find(listing.id)
            expect(response).to have_http_status(200)
            expect(updated_listing.image).to eq 'https://images.unsplash.com/photo-1585938389612-a552a28d6914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
        end
    end

    describe "DELETE /destroy" do
        it "deletes a listing" do
            listing_params = {
                listing: {
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
                    image: 'text'
                }
            }

            post "/listings", params: listing_params
            listing = Listing.first
            delete "/listings/#{listing.id}"
            expect(response).to have_http_status(200)
            listing = Listing.all 
            expect(listings).to be_empty
        end
    end
end