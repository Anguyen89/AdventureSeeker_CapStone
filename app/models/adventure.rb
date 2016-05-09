# == Schema Information
#
# Table name: adventures
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  title       :string           not null
#  location    :string           not null
#  description :text             not null
#  lng         :float            not null
#  lat         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Adventure < ActiveRecord::Base
  validates :user_id, :title, :location, :description, presence: true

  belongs_to :user

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
            .where("lat > ?", bounds[:southWest][:lat])
            .where("lng > ?", bounds[:southWest][:lng])
            .where("lng < ?", bounds[:northEast][:lng])
  end

end
