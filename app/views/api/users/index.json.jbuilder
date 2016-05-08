json.array! @users do |user|
  json.extract! user, :username, :password_digest
end
