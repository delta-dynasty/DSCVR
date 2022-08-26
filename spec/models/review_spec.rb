require 'rails_helper'

RSpec.describe Review, type: :model do
    it "is not valid without a title" do
        review = Review.create comment: ""
        expect(review.errors[:title]).to_not be_empty
    end

    it "is not valid without a comment" do
        review = Review.create title: ""
        expect(review.errors[:comment]).to_not be_empty
    end
end