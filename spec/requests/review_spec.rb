require 'rails_helper'

RSpec.describe "Reviews", type: :request do

    describe "GET /index" do
        it "gets a list of reviews" do
            Review.create(
                title: 'Lovely',
                comment: 'My new favorite place!'
            )

            get "/reviews"
            review = JSON.parse(response.body)
            expect(response).to have_http_status(200)
            expect(review.length).to eq 1
        end
    end

    describe "POST /create" do
        it "creates a review" do
            review_params = {
                review: {
                    title: 'Lovely',
                    comment: 'My new favorite place!'
                }
            }

            post "/reviews", params: review_params
            expect(response).to have_http_status(200)
            review = Review.first
            expect(review.title).to eq "Lovely"
            expect(review.comment).to eq "My new favorite place!"
        end
    end

    describe "PATCH /update" do
        it "updates a review" do
            review_params = {
                review: {
                    title: 'Lovely',
                    comment: 'My new favorite place!',
                }
            }

            post "/reviews", params: review_params
            review = Review.first
            updated_review_params = {
                review: {
                    title: 'So Lovely!',
                    comment: 'My new favorite place!',
                }
            }

            patch "/reviews/#{review.id}", params: updated_review_params
            updated_review = Review.find(review.id)
            expect(response).to have_http_status(200)
            expect(updated_reviw.title).to eq 'So Lovely!'
        end
    end

    describe "DELETE /destroy" do
        it "deletes a listing" do
            review_params = {
                review: {
                    title: 'Lovely',
                    comment: 'My new favorite place!',
                }
            }

            post "/reviews", params: review_params
            review = Review.first
            delete "/reviews/#{review.id}"
            expect(response).to have_http_status(200)
            review = Review.all 
            expect(reviews).to be_empty
        end
    end
end