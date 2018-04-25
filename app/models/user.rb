class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
  :recoverable, :rememberable, :trackable, :validatable, :omniauthable

  has_many :listings
  has_many :reservations

  has_attached_file :image_url, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "avatar-default.png"
  validates_attachment_content_type :image_url, content_type: /\Aimage\/.*\z/


  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.name = auth.info.name
      user.email = auth.info.email
      user.password = Devise.friendly_token[0,20]
    end
  end

  def connected?
    !stripe_user_id.nil?
  end


end
