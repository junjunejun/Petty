class ListingsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_listing, only: [:show, :update, :basics, :description, :address, :price, :photos, :calender, :bankaccount, :publish]

  def index
    @listings = current_user.listings
  end

  def show
    @photos = @listing.photos
  end

  def new
    # ここでは作成だけ
    @listing = current_user.listings.build
  end

  def create
    @listing = current_user.listings.build(listing_params)

    if @listing.save
        redirect_to manage_listing_basics_path(@listing), notice: "リスティングの作成・保存をしました"
    else
      redirect_to new_listing_path, notice: "リスティングの作成・保存出来ませんでした"
    end
  end

  def edit
  end

  def update
      if @listing.update(listing_params)
        redirect_to :back, notice: "更新できました"
      end
  end

  def basics
  end

  def description
  end

  def address
  end

  def price
  end

  def photos
    @photo = Photo.new
  end

  def calender
  end

  def bankaccount
  end

  def publish
  end

private
  def listing_params
    params.require(:listing).permit(:home_type, :pet_type, :pet_size, :breeding_years, :price_pernight)
  end
def set_listing
  @listing = Listing.find(params[:id])
end

end
