class Listing < ApplicationRecord
    belongs_to :user

    validates :name, :description, :image, presence: true
    
    has_many :reviews
end

