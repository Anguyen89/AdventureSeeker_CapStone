# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


# 10.times do
#   User.create(username: Faker::Internet.user_name, password: Faker::Internet.password)
# end

10.times do
  Adventure.create!(user_id: Faker::Number.number(5), title: Faker::Name.title, location: Faker::StarWars.planet, description: Faker::Lorem.word, lng: Faker::Address.longitude, lat: Faker::Address.latitude)
end

#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  title       :string           not null
#  location    :string           not null
#  description :text             not null
#  lng         :float            not null
#  lat         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
