class ListingsController < ApplicationController
    def index
        listings = Listing.all;
        render json: listings
    end

    def create
        listing = Listing.create(listing_params)
        if listing.valid?
            render json: listing
        else
            render json: listing.errors, status: 422
        end
    end

    def update
        listing = Listing.find(params[:id])
        listing.update(listing_params)
        if listing.valid?
            render json: listing
        else
            render json: listing.errors, status: 422
        end
    end

    def destroy
        listing = Listing.find(params[:id])
        listing.destroy
        render json: listing
    end

    def search
        # input "outdoors,pets"
        values = params[:values].split(",")
        # how do we return search listings based on the values received
        # after split we haver an array. ["outdoors","pets"]
        # for each string in the array query listings that are true for that value
        render json: values.to_json
    end

end

private
def listing_params
    params.require(:listing).permit(:name, :street, :city, :state, :description, :phone, :hours, :outside, :inside, :water, :children, :pets, :food, :alcohol, :image, :user_id)
end