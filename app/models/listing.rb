class Listing < ApplicationRecord
    belongs_to :user

    validates :name, :street, :city, :state, :description, :phone, :hours, :outside, :inside, :water, :children, :pets, :food, :alcohol, :image, presence: true
    
    has_many :reviews
end
