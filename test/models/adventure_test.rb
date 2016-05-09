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

require 'test_helper'

class AdventureTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
