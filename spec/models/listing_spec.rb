require 'rails_helper'

RSpec.describe Listing, type: :model do
    it "is not valid without a name" do 
        listing = Listing.create street: "", city: "", state: "", description: "", ouside: "", inside: "", water: "", children: "", pets: "", food: "", alcohol: "", image: ""
        expect(listing.errors[:name]).to_not be_empty
    end

    it "is not valid without a street" do 
        listing = Listing.create name: "", city: "", state: "", description: "", ouside: "", inside: "", water: "", children: "", pets: "", food: "", alcohol: "", image: ""
        expect(listing.errors[:street]).to_not be_empty
    end

    it "is not valid without a city" do 
        listing = Listing.create street: "", state: "", description: "", ouside: "", inside: "", water: "", children: "", pets: "", food: "", alcohol: "", image: ""
        expect(listing.errors[:city]).to_not be_empty
    end

    it "is not valid without a state" do 
        listing = Listing.create street: "", city: "", description: "", ouside: "", inside: "", water: "", children: "", pets: "", food: "", alcohol: "", image: ""
        expect(listing.errors[:state]).to_not be_empty
    end

    it "is not valid without a description" do 
        listing = Listing.create street: "", city: "", state: "", ouside: "", inside: "", water: "", children: "", pets: "", food: "", alcohol: "", image: ""
        expect(listing.errors[:description]).to_not be_empty
    end

    it "is not valid without a outside" do 
        listing = Listing.create street: "", city: "", state: "", description: "", inside: "", water: "", children: "", pets: "", food: "", alcohol: "", image: ""
        expect(listing.errors[:outside]).to_not be_empty
    end

    it "is not valid without a inside" do 
        listing = Listing.create street: "", city: "", state: "", description: "", ouside: "", water: "", children: "", pets: "", food: "", alcohol: "", image: ""
        expect(listing.errors[:inside]).to_not be_empty
    end

    it "is not valid without a water" do 
        listing = Listing.create street: "", city: "", state: "", description: "", ouside: "", inside: "", children: "", pets: "", food: "", alcohol: "", image: ""
        expect(listing.errors[:water]).to_not be_empty
    end

    it "is not valid without a children" do 
        listing = Listing.create street: "", city: "", state: "", description: "", ouside: "", inside: "", water: "", pets: "", food: "", alcohol: "", image: ""
        expect(listing.errors[:children]).to_not be_empty
    end

    it "is not valid without a pet" do 
        listing = Listing.create street: "", city: "", state: "", description: "", ouside: "", inside: "", water: "", children: "", food: "", alcohol: "", image: ""
        expect(listing.errors[:pets]).to_not be_empty
    end

    it "is not valid without a food" do 
        listing = Listing.create street: "", city: "", state: "", description: "", ouside: "", inside: "", water: "", children: "", pets: "", alcohol: "", image: ""
        expect(listing.errors[:food]).to_not be_empty
    end

    it "is not valid without a alcohol" do 
        listing = Listing.create street: "", city: "", state: "", description: "", ouside: "", inside: "", water: "", children: "", pets: "", food: "", image: ""
        expect(listing.errors[:alcohol]).to_not be_empty
    end

    it "is not valid without a image" do 
        listing = Listing.create street: "", city: "", state: "", description: "", ouside: "", inside: "", water: "", children: "", pets: "", food: "", alcohol: ""
        expect(listing.errors[:image]).to_not be_empty
    end
end