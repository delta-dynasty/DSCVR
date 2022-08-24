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
        options = params[:values]
        options_query = options.split(',').join(' and ')<<(' = true') 
        search_results = Listing.where(options_query)
        render json: search_results.to_json
    end

end

private
def listing_params
    params.require(:listing).permit(:name, :street, :city, :state, :description, :phone, :hours, :outside, :inside, :water, :children, :pets, :food, :alcohol, :image, :user_id)
end