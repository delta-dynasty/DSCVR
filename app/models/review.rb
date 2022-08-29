class Review < ApplicationRecord
    belongs_to :user
    belongs_to :listing

    validates :title, :comment, presence: true
end
