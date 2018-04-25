class AddAttachmentImageUrlToUsers < ActiveRecord::Migration
  def self.up
    change_table :users do |t|
      t.attachment :image_url
    end
  end

  def self.down
    remove_attachment :users, :image_url
  end
end
